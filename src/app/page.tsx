/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import Navbar from '@/src/components/Navbar'
import AboutSection from '@/src/components/AboutSection'
import SpeakerSection from '@/src/components/SpeakerSection'
import CommitteeSection from '@/src/components/CommiteeSection'
import ImportantDatesSection from '@/src/components/ImportantDatesSection'
import CallForPapersSection from '@/src/components/CallForPapersSection'
import PaperSubmissionSection from '@/src/components/PaperSubmissionSection'
import ProgramScheduleSection from '../components/ProgramScheduleSection'


export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-800">
          {/* <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover mix-blend-overlay"
          /> */}
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          2025 IEEE-13th International Conference on Orange Technology 
          </h1>
          <p className="text-xl md:text-4xl mb-4">
          (IEEE ICOT-2025)
          </p>
          <p className="text-xl md:text-2xl mb-4">
            October 28 ~ 30, 2025
          </p>
          <p className="text-xl md:text-2xl">
          Maranatha Christian University Bandung, Indonesia
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Speakers Section */}
      <SpeakerSection />

      {/* Committee Section */}
      <CommitteeSection />

      {/* Program Schedule Section */}
      <ProgramScheduleSection />

      {/* Important Dates Section */}
      <ImportantDatesSection />

      {/* Important Dates Section */}
      <CallForPapersSection />

      {/* Important Dates Section */}
      <PaperSubmissionSection />

     
    </>
  )
}