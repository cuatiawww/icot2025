'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/src/app/supabase'

interface ProgramSchedule {
  id: string
  title: string
  pdf_url: string
  updated_at: string
}

export default function ProgramScheduleSection() {
  const [schedule, setSchedule] = useState<ProgramSchedule | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const { data, error } = await supabase
          .from('program_schedules')
          .select('*')
          .order('updated_at', { ascending: false })
          .limit(1)
          .single()

        if (error && error.code !== 'PGRST116') throw error // PGRST116 is the error code for no rows returned

        setSchedule(data)
      } catch (error) {
        console.error('Error fetching schedule:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSchedule()
  }, [])

  if (isLoading) {
    return (
      <section id="program" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
              <p className="text-gray-600 animate-pulse">Loading program schedule...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // If no schedule data, show TBA section
  if (!schedule) {
    return (
      <section id="program" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Schedule
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-12">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">To Be Announced</h3>
              <p className="text-xl text-gray-600">The program schedule will be announced soon.</p>
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

  // If there's a schedule, show PDF viewer
  return (
    <section id="program" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Program Schedule
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{schedule.title}</h3>
              <a
                href={schedule.pdf_url}
                download
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download PDF
              </a>
            </div>
          </div>

          <div className="p-6">
            <div className="w-full aspect-[1/1.4] relative">
              <iframe
                src={`${schedule.pdf_url}#toolbar=0`}
                className="w-full h-full absolute inset-0 border-0 rounded-lg"
                title="Program Schedule PDF"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}