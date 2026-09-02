import React from 'react';
import { Logo } from './Logo';
import { SITE_DATA } from '../data/siteData';
import { Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const homePath = window.location.pathname === '/' || window.location.pathname === '/index.html' ? '' : '/';

  return (
    <footer className="bg-[#0E2B22] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" size="md" />
            <div className="pt-2">
              <h4 className="text-lg font-bold font-heading text-white">
                {SITE_DATA.fullName}
              </h4>
              <p className="text-sm text-white/70 mt-1">
                {SITE_DATA.tagline}
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C89B2B]">
              QUICK LINKS
            </h5>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href={`${homePath}#home`} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href={`${homePath}#about`} className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href={`${homePath}#services`} className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href={`${homePath}#process`} className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href={`${homePath}#why-choose-us`} className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href={`${homePath}#contact`} className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C89B2B]">
              SOCIAL
            </h5>
            <div className="flex items-center space-x-3 pt-1">
              <a
                href={SITE_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C89B2B] hover:text-[#C89B2B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C89B2B] hover:text-[#C89B2B] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-2">
              <a
                href={`mailto:${SITE_DATA.email}`}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {SITE_DATA.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} YBGP. All Rights Reserved.
          </div>
          <div className="font-mono">
            {SITE_DATA.website}
          </div>
        </div>

      </div>
    </footer>
  );
};
