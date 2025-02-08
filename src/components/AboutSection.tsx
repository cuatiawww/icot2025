'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (!aboutContent) {
    return null
  }

  // Split content into paragraphs
  const paragraphs = aboutContent.content.split('\n\n')

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {aboutContent.title}
        </h2>
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}