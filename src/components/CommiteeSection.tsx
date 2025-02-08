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
        // Fetch categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('committee_categories')
          .select('*')
          .order('order_number')

        if (categoriesError) throw categoriesError

        // Fetch members for each category
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
      <section id="committee" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="committee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Organizing Committee</h2>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                {category.title}
              </h3>
              <div className="grid gap-4">
                {category.members.map((member) => (
                  <div 
                    key={member.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-2"
                  >
                    <span className="font-medium text-gray-900">{member.name}</span>
                    <span className="hidden sm:block text-gray-400 mx-2">•</span>
                    <span className="text-gray-600">{member.affiliation}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}