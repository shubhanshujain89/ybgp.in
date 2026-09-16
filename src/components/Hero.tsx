import React from 'react';
import { motion } from 'motion/react';
import { SITE_DATA } from '../data/siteData';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative pt-24 pb-16 md:pt-28 md:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 id="hero-heading" className="text-[3.2rem] sm:text-[4.2rem] xl:text-[5.3rem] font-extrabold text-[#0E2B22] font-heading tracking-tight leading-[1.02]">
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
              className="text-[1.75rem] sm:text-[2.15rem] font-bold text-[#0E2B22] font-heading"
            >
              {SITE_DATA.hero.subheading}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[1.05rem] sm:text-[1.2rem] text-[#1E1E1E]/75 max-w-xl leading-relaxed"
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
                href="/services/"
                className="bg-white hover:bg-gray-50 border border-[#E0E0E0] text-[#0E2B22] px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow"
              >
                {SITE_DATA.hero.secondaryCta}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Offer Card + Floating Brand Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="w-full max-w-[620px] rounded-[32px] border border-[#E7E7E7] bg-[#F3F3F3] p-5 sm:p-6 lg:p-8 shadow-[0_22px_48px_rgba(14,43,34,0.08)]"
            >
              <div className="mb-5">
                <p className="text-[0.72rem] sm:text-[0.8rem] font-semibold uppercase tracking-[0.28em] text-[#C89B2B]">
                  LIMITED-TIME OFFER
                </p>
              </div>

              <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
                <h3 className="text-[1.7rem] sm:text-[2.6rem] xl:text-[3.8rem] font-bold leading-[0.82] text-[#0E2B22] font-heading tracking-[-0.08em]">
                  Get Your<br />Business<br />Website<br />Today
                </h3>

                <div className="w-full max-w-[250px] rounded-[26px] bg-[#0E2B22] px-4 py-4 text-white shadow-lg">
                  <p className="text-[0.48rem] sm:text-[0.6rem] uppercase tracking-[0.22em] text-[#D8CBA4] text-center xl:text-left">
                    NOW AT JUST
                  </p>
                  <div className="mt-2 flex items-center justify-center xl:justify-start gap-3">
                    <span className="text-[0.72rem] sm:text-[0.9rem] font-semibold text-white/35 line-through decoration-[3px] decoration-red-500">
                      ₹14,999
                    </span>
                    <span className="text-[1.45rem] sm:text-[2rem] font-semibold text-[#C89B2B] leading-none">
                      ₹4,999
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <a
                  href="https://wa.me/919953270270?text=Hi%2C%20I%20visited%20ybgp.in%20and%20I%27m%20interested%20in%20getting%20a%20website%20designed%20for%20my%20business.%20I%27d%20like%20to%20know%20more%20about%20the%20%E2%82%B94%2C999%20offer."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center bg-[#C89B2B] hover:bg-[#D5AA3E] text-[#0E2B22] px-8 py-4 rounded-full font-bold text-lg sm:text-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Get Your Website Now →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer soft shadow container */}
              <div className="relative bg-gradient-to-b from-[#F9F9F9] to-[#F2F2F2] p-6 sm:p-8 rounded-[32px] border border-[#E9E9E9] shadow-xl flex flex-col items-center justify-center text-center space-y-5 min-h-[360px]">
                <div className="w-full rounded-[24px] border border-[#E7E7E7] bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C89B2B]">
                      Business Growth Systems
                    </p>
                    <span className="rounded-full border border-[#EBD9A2] bg-[#FFF8E8] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#0E2B22]">
                      Live
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-left">
                    <div className="rounded-2xl bg-[#F7F7F7] p-3 border border-[#EFEFEF]">
                      <div className="text-[9px] uppercase tracking-[0.15em] text-[#888888]">Focus</div>
                      <div className="mt-1 text-lg font-extrabold text-[#0E2B22]">01</div>
                    </div>
                    <div className="rounded-2xl bg-[#F7F7F7] p-3 border border-[#EFEFEF]">
                      <div className="text-[9px] uppercase tracking-[0.15em] text-[#888888]">Planning</div>
                      <div className="mt-1 text-lg font-extrabold text-[#0E2B22]">02</div>
                    </div>
                    <div className="rounded-2xl bg-[#F7F7F7] p-3 border border-[#EFEFEF] col-span-2">
                      <div className="text-[9px] uppercase tracking-[0.15em] text-[#888888]">Execution</div>
                      <div className="mt-1 text-base font-semibold text-[#0E2B22]">From idea to scalable momentum</div>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-[24px] border border-[#E9E9E9] bg-[#0E2B22] p-5 text-left shadow-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C89B2B]">
                    Why founders choose us
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-white/90">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#C89B2B]" />
                      <span>Clear strategy with practical action</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#C89B2B]" />
                      <span>Brand and operations built for growth</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#C89B2B]" />
                      <span>Momentum without guesswork</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
