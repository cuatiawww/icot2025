/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Speech Speakers', 'speakers'],
    ['Program', 'program'],
    ['Committee', 'committee'],
    ['Dates', 'dates'],
    ['Papers', 'papers'],
    ['Submission', 'submission'],
    ['Registration', 'registration']
  ]

  return (
    <>
      {/* Top Banner - Always visible */}
      <div className="bg-orange-500 text-black py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="font-medium text-center sm:text-left text-sm">
            IEEE-13th ICOT 2025 !!! Conference Date (October 28 ~ 30, 2025) !!!
          </span>
          <button className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-md text-sm">
            Keynote Speech
          </button>
        </div>
      </div>

      {/* Navbar */}
      <header className={`sticky top-[84px] sm:top-[52px] left-0 right-0 z-40 bg-[#1e2837]`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 relative">
                <Image
                  src="/ICOT-logo.png"
                  alt="ICOT Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-medium text-sm md:text-base">
                ICOT 2025 IEEE-13th International Con...
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-white hover:text-orange-500 text-sm transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 -mr-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1e2837] border-t border-gray-700">
            <div className="px-4 py-2 space-y-1">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-white hover:text-orange-500 block w-full text-left py-3 text-base font-medium
                    ${id === 'submission' ? 'text-orange-500' : ''}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar