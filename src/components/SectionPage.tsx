import React, { useEffect } from 'react';
import { SITE_DATA } from '../data/siteData';
import { setPageMetadata } from '../seo';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

interface SectionPageProps {
  slug: 'about' | 'services' | 'process' | 'why-choose-us' | 'contact';
  title: string;
  description: string;
  children: React.ReactNode;
  onOpenConsultationModal?: () => void;
}

export const SectionPage: React.FC<SectionPageProps> = ({ slug, title, description, children, onOpenConsultationModal }) => {
  useEffect(() => {
    setPageMetadata({ title, description, slug });
    window.scrollTo(0, 0);
  }, [description, slug, title]);

  const handleOpenConsultation = onOpenConsultationModal ?? (() => {
    const formUrl = SITE_DATA.googleFormUrl || `https://wa.me/${SITE_DATA.phoneRaw}?text=${encodeURIComponent(SITE_DATA.whatsappPrefilledMessage)}`;
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  });

  return (
    <div className="min-h-screen bg-white text-[#1E1E1E] flex flex-col font-sans">
      <Navbar onOpenConsultationModal={handleOpenConsultation} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
