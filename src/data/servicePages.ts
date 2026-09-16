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
    slug: 'business-consultant-in-noida',
    name: 'Business Consultant in Noida',
    shortName: 'Business Consultant in Noida',
    title: 'Business Consultant in Noida | YBGP',
    description: 'Hire a business consultant in Noida to improve strategy, operations, growth planning and execution with YBGP.',
    intro: 'A business consultant in Noida should do more than offer advice. YBGP works with founders and growing businesses to translate market opportunity into a practical roadmap and an execution plan that fits the real pace of the business.',
    sections: [
      { heading: 'Clear strategy for local business growth', paragraphs: ['We help you identify the business opportunities that matter most, decide where to focus and turn uncertainty into a workable growth plan.'] },
      { heading: 'Operational support that is easier to execute', paragraphs: ['From business planning and positioning to growth systems and digital execution, we help make sure good strategy becomes consistent action in the business.'] }
    ],
    relatedServiceIds: ['business-planning', 'business-strategy', 'business-growth-scaling']
  },
  {
    slug: 'startup-consultant-delhi-ncr',
    name: 'Startup Consultant in Delhi NCR',
    shortName: 'Startup Consultant in Delhi NCR',
    title: 'Startup Consultant in Delhi NCR | YBGP',
    description: 'YBGP is a startup consultant in Delhi NCR helping founders improve strategy, brand, digital execution and growth planning.',
    intro: 'Startup teams need practical support, not generic theory. YBGP helps founders in Delhi NCR create stronger business models, clearer messaging, more disciplined planning and a growth engine they can actually execute.',
    sections: [
      { heading: 'Build a startup foundation that can scale', paragraphs: ['We shape strategy and execution around customer needs, product clarity and business viability so the startup can grow with less friction.'] },
      { heading: 'Better decisions before growth gets expensive', paragraphs: ['Whether the issue is business planning, positioning, brand clarity or digital setup, YBGP works on the bottlenecks that most directly affect traction and scale.'] }
    ],
    relatedServiceIds: ['business-strategy', 'website-app-development', 'business-growth-scaling']
  },
  {
    slug: 'website-development-company-gurugram',
    name: 'Website Development Company in Gurugram',
    shortName: 'Website Development Company in Gurugram',
    title: 'Website Development Company in Gurugram | YBGP',
    description: 'YBGP builds fast, credible websites for businesses in Gurugram that need better visibility, stronger conversion and a sharper digital presence.',
    intro: 'A website is not just a digital brochure. For businesses in Gurugram, it should communicate the offer clearly, guide inquiries and support growth. YBGP creates business-first websites designed to convert attention into opportunity.',
    sections: [
      { heading: 'Websites designed around business outcomes', paragraphs: ['We structure the digital experience to match how customers research, compare and decide so the site becomes a practical conversion tool, not just a placeholder.'] },
      { heading: 'A digital presence built for speed and trust', paragraphs: ['From messaging to layout and execution, we build websites that reflect the professionalism of your business and leave room for future growth.'] }
    ],
    relatedServiceIds: ['branding-digital-marketing', 'business-strategy', 'website-app-development']
  },
  {
    slug: 'digital-marketing-agency-ghaziabad',
    name: 'Digital Marketing Agency in Ghaziabad',
    shortName: 'Digital Marketing Agency in Ghaziabad',
    title: 'Digital Marketing Agency in Ghaziabad | YBGP',
    description: 'YBGP helps businesses in Ghaziabad build a stronger digital marketing foundation with brand clarity, better positioning and practical growth activities.',
    intro: 'Digital marketing works best when the strategy behind it is clear. YBGP helps businesses in Ghaziabad make sense of brand positioning, audience priorities and demand generation so marketing supports real commercial objectives.',
    sections: [
      { heading: 'Marketing with stronger commercial focus', paragraphs: ['We connect brand and content decisions to customer needs and growth goals so the business makes better use of attention, traffic and conversion opportunities.'] },
      { heading: 'A clearer roadmap for digital growth', paragraphs: ['Whether the need is positioning, content strategy, digital visibility or demand generation, we help create a more disciplined and more effective next step.'] }
    ],
    relatedServiceIds: ['branding-digital-marketing', 'business-growth-scaling', 'website-app-development']
  },
  {
    slug: 'business-consultant-delhi',
    name: 'Business Consultant in Delhi',
    shortName: 'Business Consultant in Delhi',
    title: 'Business Consultant in Delhi | YBGP',
    description: 'YBGP helps Delhi-based founders and growing businesses build better plans, improve execution and create stronger revenue systems with practical consulting support.',
    intro: 'If your business is based in Delhi and you want sharper direction, stronger operations, better digital presence, or more predictable growth, YBGP brings hands-on business consulting support tailored to real commercial pressure.',
    sections: [
      { heading: 'Strategy with practical business context', paragraphs: ['We look at your offer, market position and growth blockers to shape a clearer strategic direction and a sensible sequence of priorities.'] },
      { heading: 'Execution support for faster business momentum', paragraphs: ['From business planning and website development to branding and growth systems, we help move the important work forward without the noise of generic advice.'] }
    ],
    relatedServiceIds: ['business-strategy', 'branding-digital-marketing', 'business-growth-scaling']
  },
  {
    slug: 'business-consultant-gurugram',
    name: 'Business Consultant in Gurugram',
    shortName: 'Business Consultant in Gurugram',
    title: 'Business Consultant in Gurugram | YBGP',
    description: 'YBGP supports growing businesses in Gurugram with strategy, planning, digital presence, growth systems and practical execution support.',
    intro: 'Gurugram businesses often need faster decisions, stronger positioning and clearer systems to keep momentum. YBGP helps founders turn market opportunity into a practical growth plan and execution rhythm.',
    sections: [
      { heading: 'A plan built around your actual growth stage', paragraphs: ['We focus on where your business is right now, what needs to improve next and which actions will unlock more traction without unnecessary complexity.'] },
      { heading: 'Support for positioning, systems and conversion', paragraphs: ['Whether the need is business strategy, website development, branding or scale planning, we work across the practical levers that influence business performance.'] }
    ],
    relatedServiceIds: ['business-planning', 'website-app-development', 'business-growth-scaling']
  },
  {
    slug: 'business-consultant-ghaziabad',
    name: 'Business Consultant in Ghaziabad',
    shortName: 'Business Consultant in Ghaziabad',
    title: 'Business Consultant in Ghaziabad | YBGP',
    description: 'YBGP helps business owners in Ghaziabad improve planning, digital visibility, brand clarity and overall business execution with practical support.',
    intro: 'For businesses in Ghaziabad, the real challenge is often converting plans into consistent execution. YBGP helps founders and teams build a clearer business foundation, stronger digital presence and smarter growth decisions.',
    sections: [
      { heading: 'Clear direction for business growth', paragraphs: ['We help simplify the business model, sharpen the value proposition and identify what should be prioritized to create more growth without wasted effort.'] },
      { heading: 'Practical business support from strategy to launch', paragraphs: ['We cover planning, compliance coordination, marketing positioning and digital execution so business owners can move forward with more confidence.'] }
    ],
    relatedServiceIds: ['business-strategy', 'registration-compliance', 'branding-digital-marketing']
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
