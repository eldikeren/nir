'use client'

import { useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import StudioSection from '@/components/StudioSection'
import VideoSection from '@/components/VideoSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Navigation from '@/components/Navigation'


export default function Home() {
  useEffect(() => {
    // Initialize GSAP and other animations
    const initAnimations = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)
      
      // Smooth scroll animations
      gsap.fromTo('.fade-in', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.fade-in',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
    
    initAnimations()
  }, [])

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