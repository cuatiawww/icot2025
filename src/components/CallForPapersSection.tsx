'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/src/app/supabase'

interface Topic {
  id: string
  topic_name: string
  order_number: number
}

interface Category {
  id: string
  title: string
  order_number: number
  topics: Topic[]
}

export default function CallForPapersSection() {
  const [intro, setIntro] = useState<string>('')
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: introData } = await supabase
          .from('call_for_papers_intro')
          .select('content')
          .single()

        if (introData) {
          setIntro(introData.content)
        }

        const { data: categoriesData } = await supabase
          .from('paper_categories')
          .select('*')
          .order('order_number')

        if (categoriesData) {
          const categoriesWithTopics = await Promise.all(
            categoriesData.map(async (category) => {
              const { data: topicsData } = await supabase
                .from('paper_topics')
                .select('*')
                .eq('category_id', category.id)
                .order('order_number')

              return {
                ...category,
                topics: topicsData || []
              }
            })
          )

          setCategories(categoriesWithTopics)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section id="papers" className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
              <p className="text-gray-600 animate-pulse">Loading paper topics...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="papers" className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Call for Papers
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 leading-relaxed text-lg">
              {intro}
            </p>
          </div>
        </div>

        {/* Categories and Topics */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-orange-500 px-8 py-4">
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {category.topics.map((topic) => (
                    <li 
                      key={topic.id} 
                      className="flex items-start gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{topic.topic_name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-3xl mx-auto text-center bg-orange-50 rounded-2xl p-8">
          <p className="text-gray-600 mb-4 text-lg">
            For detailed paper format and submission instructions, please visit the conference website:
          </p>
          <a 
            href="https://www.ieee.org/conferences/publishing/templates.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Visit Conference Website
          </a>
        </div>
      </div>
    </section>
  )
}