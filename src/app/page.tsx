/* eslint-disable @typescript-eslint/no-unused-vars */
// app/page.tsx
import Image from 'next/image'
import Navbar from '@/src/components/Navbar'
import AboutSection from '@/src/components/AboutSection'
import SpeakerSection from '@/src/components/SpeakerSection'
import CommitteeSection from '@/src/components/CommiteeSection'
import ImportantDatesSection from '@/src/components/ImportantDatesSection'
import CallForPapersSection from '@/src/components/CallForPapersSection'
import PaperSubmissionSection from '@/src/components/PaperSubmissionSection'

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-800">
          {/* Optional: Add background image */}
          {/* <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover mix-blend-overlay"
          /> */}
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            2024 IEEE-12th International Conference on Orange Technology
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            December 15 ~ 18, 2024
          </p>
          <p className="text-xl md:text-2xl">
            Tainan, Taiwan
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Speakers Section */}
      <SpeakerSection />

      {/* Committee Section */}
      <CommitteeSection />

      {/* Important Dates Section */}
      <ImportantDatesSection />

      {/* Important Dates Section */}
      <CallForPapersSection />

      {/* Important Dates Section */}
      <PaperSubmissionSection />

     
    </>
  )
}