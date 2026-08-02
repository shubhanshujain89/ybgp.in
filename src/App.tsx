import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SITE_DATA } from './data/siteData';

export default function App() {
  const handleOpenConsultation = () => {
    const whatsappUrl = `https://wa.me/${SITE_DATA.phoneRaw}?text=${encodeURIComponent(
      SITE_DATA.whatsappPrefilledMessage
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-[#1E1E1E] flex flex-col font-sans selection:bg-[#C89B2B] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultationModal={handleOpenConsultation} />

      {/* Main One-Page Section Architecture */}
      <main className="flex-grow">
        <Hero onOpenConsultationModal={handleOpenConsultation} />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Contact onOpenConsultationModal={handleOpenConsultation} />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Fixed WhatsApp CTA Button */}
      <WhatsAppButton />
    </div>
  );
}
