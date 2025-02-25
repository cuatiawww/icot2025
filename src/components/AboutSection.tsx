'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/src/app/supabase'

interface AboutContent {
  id: string
  title: string
  content: string
}

export default function AboutSection() {
  const [aboutContent, setAboutContent] = useState<AboutContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchAboutContent() {
      try {
        const { data, error } = await supabase
          .from('about_content')
          .select('*')
          .single()

        if (error) throw error
        setAboutContent(data)
      } catch (error) {
        console.error('Error fetching about content:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAboutContent()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
          <p className="text-gray-600 animate-pulse">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!aboutContent) {
    return null
  }

  const paragraphs = aboutContent.content.split('\n\n')

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {aboutContent.title}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={`mb-6 text-gray-600 leading-relaxed ${
                index === 0 ? 'first-letter:text-4xl first-letter:font-bold first-letter:text-orange-500 first-letter:float-left first-letter:mr-2 first-letter:mt-2' : ''
              }`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <button className="inline-block bg-orange-500 text-white rounded-lg px-8 py-4 font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Discover More
          </button>
        </div> */}
      </div>
    </section>
  )
}