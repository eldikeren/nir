import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import StudioSection from '@/components/StudioSection'
import VideoSection from '@/components/VideoSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Navigation from '@/components/Navigation'


export default function Home() {

  return (
    <main className="min-h-screen bg-stage-black">
      <Navigation />
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StudioSection />
        <VideoSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </main>
  )
} 