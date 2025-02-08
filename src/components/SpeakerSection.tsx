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
      <section id="speakers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Keynote Speakers</h2>
        
        <div className="space-y-20">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Speaker Image */}
                <div className="md:col-span-1">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={speaker.image_url}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold">{speaker.name}</h3>
                    <p className="text-gray-600 mt-1">{speaker.title}</p>
                    <p className="text-gray-600 mt-1">{speaker.position}</p>
                    <p className="text-gray-600 mt-1">{speaker.affiliation}</p>
                  </div>
                </div>

                {/* Speaker Details */}
                <div className="md:col-span-2">
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Biography</h4>
                    <p className="text-gray-600">{speaker.biography}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">{speaker.presentation_title}</h4>
                    <div className="prose max-w-none">
                      <h5 className="text-md font-medium mb-2">Abstract:</h5>
                      <p className="text-gray-600">{speaker.presentation_abstract}</p>
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