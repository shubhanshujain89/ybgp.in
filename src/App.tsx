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
import { getServicePage } from './data/servicePages';
import { ServicePage } from './components/ServicePage';
import { setPageMetadata } from './seo';
import { useEffect } from 'react';

export default function App() {
  const routeSlug = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const servicePage = getServicePage(routeSlug);
  const isHome = routeSlug === '' || routeSlug === 'index.html';

  useEffect(() => {
    if (servicePage || isHome) {
      if (isHome) setPageMetadata();
      return;
    }

    document.title = 'Page Not Found | YBGP';
    document.head.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex');
  }, [isHome, servicePage]);

  if (servicePage) {
    return <ServicePage page={servicePage} />;
  }

  if (!isHome) {
    return (
      <main className="min-h-screen bg-white text-[#0E2B22] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C89B2B]">404</p>
        <h1 className="mt-4 text-4xl font-extrabold font-heading">Page not found</h1>
        <a href="/" className="mt-8 bg-[#0E2B22] text-white px-6 py-3 rounded-full font-semibold">Return to YBGP</a>
      </main>
    );
  }

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
