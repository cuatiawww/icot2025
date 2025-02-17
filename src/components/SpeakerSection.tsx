'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

interface Speaker {
  id: string
  name: string
  title: string
  position: string
  affiliation: string
  biography: string
  presentation_title: string
  presentation_abstract: string
  image_url: string
}

export default function SpeakerSection() {
  const [speakers, setSpeakers] = useState<Speaker[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchSpeakers() {
      try {
        const { data, error } = await supabase
          .from('speakers')
          .select('*')
          .order('created_at', { ascending: true })

        if (error) throw error
        setSpeakers(data || [])
      } catch (error) {
        console.error('Error fetching speakers:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSpeakers()
  }, [])

  if (isLoading) {
    return (
      <section id="speakers" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
              <p className="text-gray-600 animate-pulse">Loading speakers...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // If no speakers data, show TBA section
  if (speakers.length === 0) {
    return (
      <section id="speakers" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Keynote Speakers
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-12">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">To Be Announced</h3>
              <p className="text-xl text-gray-600">Our keynote speakers will be announced soon.</p>
              <div className="w-16 h-16 mx-auto">
                <svg 
                  className="text-orange-500 w-full h-full" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // If there are speakers, show them as before
  return (
    <section id="speakers" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Keynote Speakers
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-8 p-8">
                <div className="md:col-span-1 flex flex-col items-center">
                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={speaker.image_url}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">{speaker.name}</h3>
                    <p className="text-lg text-orange-600 font-medium">{speaker.title}</p>
                    <p className="text-gray-600">{speaker.position}</p>
                    <p className="text-gray-600 italic">{speaker.affiliation}</p>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-1 bg-orange-500 rounded-full mr-3"></span>
                      Biography
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{speaker.biography}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-1 bg-orange-500 rounded-full mr-3"></span>
                      Presentation
                    </h4>
                    <h5 className="text-lg font-medium text-orange-600 mb-4">
                      {speaker.presentation_title}
                    </h5>
                    <div className="prose max-w-none">
                      <p className="text-gray-600 leading-relaxed">
                        {speaker.presentation_abstract}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}