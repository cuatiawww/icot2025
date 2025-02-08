'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

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
        // Fetch intro
        const { data: introData } = await supabase
          .from('call_for_papers_intro')
          .select('content')
          .single()

        if (introData) {
          setIntro(introData.content)
        }

        // Fetch categories with topics
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
      <section id="papers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="papers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Call for Papers</h2>
        
        {/* Introduction */}
        <div className="prose max-w-none mb-12">
          <p className="text-gray-600 leading-relaxed">{intro}</p>
        </div>

        {/* Categories and Topics */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                {category.title}
              </h3>
              <ul className="list-disc list-inside space-y-3">
                {category.topics.map((topic) => (
                  <li key={topic.id} className="text-gray-600">
                    {topic.topic_name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            For detailed paper format and submission instructions, please visit the conference website:
          </p>
          <a 
            href="https://sites.google.com/view/icot-2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 font-medium mt-2 inline-block"
          >
            https://sites.google.com/view/icot-2024/
          </a>
        </div>
      </div>
    </section>
  )
}