import React from 'react';
import { Navbar } from '@/src/components/Navbar';
import { HeroSection } from '@/src/components/HeroSection';
import { FeaturesSection } from '@/src/components/FeaturesSection';
import { SubjectsSection } from '@/src/components/SubjectsSection';
import { HowItWorksSection } from '@/src/components/HowItWorksSection';
import { TestimonialsSection } from '@/src/components/TestimonialsSection';
import { CTASection } from '@/src/components/CTASection';
import { Footer } from '@/src/components/Footer';
export default function Landing() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SubjectsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
    );

}