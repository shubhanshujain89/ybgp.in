import React from 'react';
import { motion } from 'motion/react';
import { SITE_DATA } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28 bg-white border-t border-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[2px] w-8 bg-[#C89B2B]" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#C89B2B]">
            {SITE_DATA.about.eyebrow}
          </span>
        </motion.div>

        {/* Top Grid: Title Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-5">
            <motion.h2 id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E2B22] font-heading tracking-tight"
            >
              {SITE_DATA.about.title}
            </motion.h2>
          </div>

          {/* Right Content Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-[#1E1E1E]/80 text-base sm:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {SITE_DATA.about.paragraph1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {SITE_DATA.about.paragraph2}
            </motion.p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-12 sm:my-16 border-t border-[#E9E9E9]" />

        {/* Stats / Pillars Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {SITE_DATA.about.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="space-y-1"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2B22] font-heading tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#888888] tracking-[0.15em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
