import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

const websiteOfferUrl = 'https://wa.me/919953270270?text=Hi%2C%20I%20want%20to%20get%20the%20%E2%82%B94%2C999%20business%20website%20offer.';

const offerFeatures = [
  'Professional design',
  'Mobile responsive',
  'WhatsApp integration',
  'SEO-ready structure',
  'Fast loading',
  'Business-focused design'
];

export const BusinessWebsitePage: React.FC = () => (
  <div className="bg-[#F7F7F7]">
    <section className="bg-[#0E2B22] px-4 pb-16 pt-16 text-white sm:px-6 sm:pb-20 sm:pt-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8CBA4]">Limited-time website offer</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] font-heading sm:text-6xl lg:text-7xl">
          Get Your Business Website
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
          Launch a professional online presence that helps your business look credible, get discovered and receive more enquiries.
        </p>
      </div>
    </section>

    <section className="px-4 py-12 sm:px-6 sm:py-16" aria-labelledby="website-offer-heading">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
        <div>
          <h2 id="website-offer-heading" className="text-3xl font-extrabold leading-tight text-[#0E2B22] font-heading sm:text-4xl">
            Everything your business needs to get online with confidence.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {offerFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-base text-[#1E1E1E]/80">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EBD9A2] text-[#0E2B22]">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-[28px] border border-[#E4E4E4] bg-white p-6 shadow-[0_18px_40px_rgba(14,43,34,0.09)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C89B2B]">Special campaign price</p>
          <div className="mt-5 flex items-end gap-4">
            <span className="text-lg font-semibold text-[#1E1E1E]/35 line-through decoration-2 decoration-red-500">₹14,999</span>
            <span className="text-5xl font-semibold leading-none text-[#0E2B22] sm:text-6xl">₹4,999</span>
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#1E1E1E]/70">
            A business-focused website built for speed, trust and action.
          </p>
          <a
            href={websiteOfferUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C89B2B] px-6 py-4 text-lg font-bold text-[#0E2B22] shadow-md transition-colors hover:bg-[#D5AA3E] hover:shadow-lg"
          >
            Get My Website <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a href={`tel:+${SITE_DATA.phoneRaw}`} className="mt-5 flex items-center justify-center text-base font-semibold text-[#0E2B22] hover:text-[#C89B2B]">
            Call {SITE_DATA.phoneDisplay}
          </a>
        </aside>
      </div>
    </section>
  </div>
);
