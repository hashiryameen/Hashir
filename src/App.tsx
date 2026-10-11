/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RealImagesProvider } from './context/RealImagesContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { SkillsServices } from './components/SkillsServices';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CareerEducation } from './components/CareerEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    title: string;
    content: React.ReactNode | null;
  }>({
    isOpen: false,
    title: '',
    content: null,
  });

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (title: string, content: React.ReactNode) => {
    setLightboxState({
      isOpen: true,
      title,
      content,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      title: '',
      content: null,
    });
  };

  return (
    <RealImagesProvider>
      <div className="min-h-screen bg-[#0A0E13] text-slate-100 font-sans selection:bg-[#B8F228] selection:text-black">
        {/* Top Navbar */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Main Content */}
        <main>
          {/* Hero Section with Lime Organic Shape & Real Photo */}
          <Hero onOpenContact={handleOpenContact} />

          {/* Lime Running Marquee Ticker */}
          <MarqueeTicker />

          {/* The Story Behind Hashir Yameen */}
          <About onOpenContact={handleOpenContact} />

          {/* Merged Skills & Services Section with Clean White Background */}
          <SkillsServices onOpenContact={handleOpenContact} />

          {/* Real Campaign Evidence & Case Studies */}
          <Projects onOpenLightbox={handleOpenLightbox} />

          {/* Career & Education */}
          <CareerEducation />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxState.isOpen}
          title={lightboxState.title}
          content={lightboxState.content}
          onClose={handleCloseLightbox}
        />
      </div>
    </RealImagesProvider>
  );
}
