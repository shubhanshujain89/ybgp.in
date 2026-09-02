export interface ServicePageData {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  relatedServiceIds: string[];
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'business-consultant-noida',
    name: 'Business Consulting in Noida and Delhi NCR',
    shortName: 'Business Consulting',
    title: 'Business Consultant in Noida & Delhi NCR | YBGP',
    description: 'YBGP helps founders and growing businesses in Noida and Delhi NCR turn ideas into practical plans, stronger operations and sustainable growth.',
    intro: 'A practical business consultant for founders who need clear decisions and hands-on support. YBGP brings strategy, planning, technology and growth work together around the realities of your business.',
    sections: [
      { heading: 'A clearer route from idea to growth', paragraphs: ['We help you understand the opportunity, choose a focused direction and turn priorities into an executable plan. The work is grounded in your market, customers and capacity rather than generic advice.'] },
      { heading: 'Support that stays close to execution', paragraphs: ['From business planning and compliance coordination to digital delivery and growth systems, we help move important work forward and measure what changes.'] }
    ],
    relatedServiceIds: ['business-strategy', 'business-planning', 'business-growth-scaling']
  },
  {
    slug: 'business-strategy-consulting',
    name: 'Business Strategy Consulting',
    shortName: 'Business Strategy',
    title: 'Business Strategy Consulting | YBGP',
    description: 'Build a focused business strategy with YBGP: positioning, market entry priorities and decision frameworks for founders and growing businesses.',
    intro: 'Good strategy makes the next decision easier. YBGP helps you define where to compete, whom to serve and what to do next with a practical strategy built for action.',
    sections: [
      { heading: 'Positioning that gives the business direction', paragraphs: ['Clarify your offer, audience and differentiators so your team can make consistent choices and customers can understand your value.'] },
      { heading: 'Decisions translated into priorities', paragraphs: ['We turn strategic choices into a sequence of initiatives, measures and ownership so the plan can be tested and improved in the real world.'] }
    ],
    relatedServiceIds: ['business-planning', 'branding-digital-marketing', 'business-growth-scaling']
  },
  {
    slug: 'business-planning',
    name: 'Business Planning Consultant',
    shortName: 'Business Planning',
    title: 'Business Planning Consultant | YBGP',
    description: 'Create a practical business plan, financial model and operating roadmap with YBGP, your execution-focused planning partner.',
    intro: 'A useful business plan is a working tool, not a document that sits on a shelf. We structure the model, milestones and operating assumptions that help you act with confidence.',
    sections: [
      { heading: 'A plan built around how the business works', paragraphs: ['We map your customers, offer, channels, costs and priorities into a coherent plan that can guide conversations and day-to-day decisions.'] },
      { heading: 'Roadmaps with measurable milestones', paragraphs: ['Clear phases and practical measures make it easier to see what is working, where the risks are and what deserves attention next.'] }
    ],
    relatedServiceIds: ['business-strategy', 'registration-compliance', 'business-growth-scaling']
  },
  {
    slug: 'business-registration-compliance',
    name: 'Business Registration and Compliance',
    shortName: 'Registration & Compliance',
    title: 'Business Registration & Compliance | YBGP',
    description: 'Get practical support for business registration, licensing and compliance coordination from YBGP in Noida and Delhi NCR.',
    intro: 'Starting correctly creates room to grow. YBGP helps entrepreneurs navigate business setup, registration and ongoing compliance requirements with an organized, end-to-end process.',
    sections: [
      { heading: 'Set up the right foundation', paragraphs: ['We help you understand the setup decisions, information and documentation needed for your business context, then keep the process structured.'] },
      { heading: 'Stay organized as you grow', paragraphs: ['Compliance work is easier to manage when responsibilities, renewals and records are clear. We help build that discipline into the business.'] }
    ],
    relatedServiceIds: ['business-planning', 'business-strategy', 'business-growth-scaling']
  },
  {
    slug: 'website-app-development',
    name: 'Website and App Development',
    shortName: 'Website & App Development',
    title: 'Website & App Development for Businesses | YBGP',
    description: 'Launch a fast, purposeful website or app with YBGP, combining business context, thoughtful design and scalable development.',
    intro: 'Your digital product should make the business easier to understand and easier to choose. YBGP connects product decisions to your goals, customers and growth plans.',
    sections: [
      { heading: 'Digital experiences built for a reason', paragraphs: ['We shape the structure, content and experience around the action your customers need to take, whether that is understanding an offer, enquiring or buying.'] },
      { heading: 'A foundation that can evolve', paragraphs: ['Clean implementation and focused scope help your website or app launch efficiently while leaving room for the next useful improvement.'] }
    ],
    relatedServiceIds: ['branding-digital-marketing', 'business-strategy', 'business-growth-scaling']
  },
  {
    slug: 'branding-digital-marketing',
    name: 'Branding and Digital Marketing',
    shortName: 'Branding & Digital Marketing',
    title: 'Branding & Digital Marketing Services | YBGP',
    description: 'Build a distinctive brand and practical digital marketing foundation with YBGP, from positioning and content to demand generation.',
    intro: 'A strong brand earns attention before it asks for trust. YBGP helps businesses express a clear point of view and build marketing activity that supports real commercial goals.',
    sections: [
      { heading: 'Make the value easy to recognize', paragraphs: ['We align positioning, messaging and visual direction so your business presents a consistent and credible experience across the places customers find you.'] },
      { heading: 'Marketing connected to momentum', paragraphs: ['Campaigns and content work better when they have a clear audience, useful message and measurable next step.'] }
    ],
    relatedServiceIds: ['website-app-development', 'business-strategy', 'business-growth-scaling']
  },
  {
    slug: 'business-growth-scaling',
    name: 'Business Growth and Scaling',
    shortName: 'Business Growth & Scaling',
    title: 'Business Growth & Scaling Consultant | YBGP',
    description: 'Create the systems, hiring priorities and growth playbooks needed to move from traction to a more scalable business with YBGP.',
    intro: 'Growth becomes durable when it is supported by repeatable systems. YBGP helps founders improve the operating model behind revenue, delivery and team performance.',
    sections: [
      { heading: 'Find the constraints holding growth back', paragraphs: ['We look at the customer journey, channels, operations and team needs to identify the practical constraint that deserves focus first.'] },
      { heading: 'Turn progress into repeatable practice', paragraphs: ['Playbooks, measures and clearer ownership help a growing business deliver consistently without losing the agility that created its early momentum.'] }
    ],
    relatedServiceIds: ['business-strategy', 'business-planning', 'website-app-development']
  }
];

export const getServicePage = (slug: string) => SERVICE_PAGES.find((page) => page.slug === slug);
