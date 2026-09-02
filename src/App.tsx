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
import { SectionPage } from './components/SectionPage';

export default function App() {
  const routeSlug = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const servicePage = getServicePage(routeSlug);
  const isHome = routeSlug === '' || routeSlug === 'index.html';
  const sectionRoutes = {
    about: {
      title: 'About YBGP | Your Business Growth Partner',
      description: 'Learn how YBGP helps entrepreneurs and growing businesses turn ideas into practical strategy, execution and sustainable growth.'
    },
    services: {
      title: 'Business Consulting Services | YBGP',
      description: 'Explore YBGP services for business strategy, planning, compliance, website development, branding, marketing and growth.'
    },
    process: {
      title: 'Our Business Growth Process | YBGP',
      description: 'See how YBGP guides businesses from idea and planning through execution, growth and scale.'
    },
    contact: {
      title: 'Contact YBGP | Business Growth Consultant',
      description: 'Contact Shubhanshu Jain at YBGP to discuss business strategy, planning, execution and growth support.'
    },
    'why-choose-us': {
      title: 'Why Choose YBGP | Business Growth Partner',
      description: 'See why founders choose YBGP for execution-focused business strategy, practical support and long-term growth partnership.'
    }
  } as const;
  const sectionPage = sectionRoutes[routeSlug as keyof typeof sectionRoutes];

  useEffect(() => {
    if (servicePage || sectionPage || isHome) {
      if (isHome) setPageMetadata();
      return;
    }

    document.title = 'Page Not Found | YBGP';
    document.head.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex');
  }, [isHome, sectionPage, servicePage]);

  if (servicePage) {
    return <ServicePage page={servicePage} />;
  }

  if (sectionPage) {
    const handleOpenConsultation = () => {
      const whatsappUrl = `https://wa.me/${SITE_DATA.phoneRaw}?text=${encodeURIComponent(SITE_DATA.whatsappPrefilledMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
      <SectionPage slug={routeSlug as keyof typeof sectionRoutes} title={sectionPage.title} description={sectionPage.description} onOpenConsultationModal={handleOpenConsultation}>
        {routeSlug === 'about' && <About />}
        {routeSlug === 'services' && <Services />}
        {routeSlug === 'process' && <Process />}
        {routeSlug === 'why-choose-us' && <WhyChooseUs />}
        {routeSlug === 'contact' && <Contact onOpenConsultationModal={handleOpenConsultation} />}
      </SectionPage>
    );
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
    const formUrl = SITE_DATA.googleFormUrl || `https://wa.me/${SITE_DATA.phoneRaw}?text=${encodeURIComponent(
      SITE_DATA.whatsappPrefilledMessage
    )}`;
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-[#1E1E1E] flex flex-col font-sans selection:bg-[#C89B2B] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultationModal={handleOpenConsultation} />

      {/* Main One-Page Section Architecture */}
      <main className="flex-grow">
        <Hero onOpenConsultationModal={handleOpenConsultation} />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Fixed WhatsApp CTA Button */}
      <WhatsAppButton />
    </div>
  );
}
