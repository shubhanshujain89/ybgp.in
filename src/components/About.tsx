import React from 'react';
import { motion } from 'motion/react';
import { SITE_DATA } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28 bg-white border-t border-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E2B22] font-heading tracking-tight"
        >
          {SITE_DATA.about.title}
        </motion.h2>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-[#1E1E1E]/80 text-base sm:text-lg leading-relaxed max-w-5xl">
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
