import React from 'react';
import { motion } from 'motion/react';
import { SITE_DATA } from '../data/siteData';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="h-[2px] w-8 bg-[#C89B2B]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#C89B2B]">
                {SITE_DATA.hero.eyebrow}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#0E2B22] font-heading tracking-tight leading-[1.05]">
                {SITE_DATA.hero.titleLine1}<br />
                {SITE_DATA.hero.titleLine2}
                <span className="text-[#C89B2B]">
                  {SITE_DATA.hero.titleHighlight}
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-[#0E2B22] font-heading"
            >
              {SITE_DATA.hero.subheading}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#1E1E1E]/75 max-w-xl leading-relaxed"
            >
              {SITE_DATA.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={onOpenConsultationModal}
                className="bg-[#0E2B22] hover:bg-[#164537] text-white px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                {SITE_DATA.hero.primaryCta}
              </button>

              <a
                href="#services"
                className="bg-white hover:bg-gray-50 border border-[#E0E0E0] text-[#0E2B22] px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow"
              >
                {SITE_DATA.hero.secondaryCta}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Floating Brand Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer soft shadow container */}
              <div className="relative bg-gradient-to-b from-[#F9F9F9] to-[#F2F2F2] p-8 sm:p-12 rounded-[32px] border border-[#E9E9E9] shadow-xl flex flex-col items-center justify-center text-center space-y-6 min-h-[420px]">
                
                {/* Logo Icon Box */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#0E2B22] rounded-[28px] border-2 border-[#C89B2B]/40 flex items-center justify-center shadow-md">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  >
                    <path
                      d="M25 25L50 50L75 25"
                      stroke="#FFFFFF"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M50 50V75"
                      stroke="#C89B2B"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* YBGP Name */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E2B22] font-heading tracking-tight">
                    YBGP
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#C89B2B] tracking-[0.2em] uppercase mt-1">
                    YOUR BUSINESS GROWTH PARTNER
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
