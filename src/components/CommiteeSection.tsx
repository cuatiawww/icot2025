'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface CommitteeMember {
  id: string
  name: string
  affiliation: string
  order_number: number
}

interface CommitteeCategory {
  id: string
  title: string
  order_number: number
  members: CommitteeMember[]
}

export default function CommitteeSection() {
  const [categories, setCategories] = useState<CommitteeCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchCommitteeData() {
      try {
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('committee_categories')
          .select('*')
          .order('order_number')

        if (categoriesError) throw categoriesError

        const categoriesWithMembers = await Promise.all(
          categoriesData.map(async (category) => {
            const { data: membersData, error: membersError } = await supabase
              .from('committee_members')
              .select('*')
              .eq('category_id', category.id)
              .order('order_number')

            if (membersError) throw membersError

            return {
              ...category,
              members: membersData
            }
          })
        )

        setCategories(categoriesWithMembers)
      } catch (error) {
        console.error('Error fetching committee data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCommitteeData()
  }, [])

  if (isLoading) {
    return (
      <section id="committee" className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
              <p className="text-gray-600 animate-pulse">Loading committee data...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="committee" className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Organizing Committee
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-8 md:gap-12">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-orange-500 py-4 px-6">
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="grid gap-6">
                  {category.members.map((member) => (
                    <div 
                      key={member.id}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-xl hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-gray-900">
                          {member.name}
                        </h4>
                        <p className="text-gray-600 mt-1">
                          {member.affiliation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}