'use client'
import { useState, useEffect } from 'react'

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-lg font-bold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              ICOT 2025
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`${
                  isScrolled ? 'text-gray-600' : 'text-white'
                } hover:text-orange-500 px-2 py-1 text-sm font-medium transition-colors duration-200`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 rounded-md inline-flex items-center justify-center ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
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
        <div className="md:hidden bg-white border-t">
          <div className="px-2 py-1">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 block px-3 py-1.5 rounded-md text-sm font-medium w-full text-left"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar