import {
  SkillItem,
  AiToolItem,
  WorkExperienceItem,
  CaseStudyItem,
  AffiliateNetworkItem,
  EducationItem,
  LanguageItem,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Hashir Yameen',
  title: 'PPC Specialist | Google Ads Expert | Affiliate Marketing',
  tagline: 'Driving Performance Through PPC, Affiliate Marketing & Data-Driven Growth',
  supportingLine:
    'Specializing in Google Search campaigns, affiliate PPC, keyword research, campaign optimization and data-driven performance marketing.',
  location: 'Karachi, Pakistan',
  email: 'yameenhashir9@gmail.com',
  phone: '+92 312 0238560',
  linkedIn: 'https://www.linkedin.com/in/hashir-yameen',
  instagram: 'https://www.instagram.com/hashir__018',
  primaryCta: 'Contact Me',
  about: `I am a PPC Specialist and Affiliate Marketing professional with hands-on experience managing Google Search campaigns for affiliate businesses. I work with leading affiliate networks such as Awin and other performance marketing platforms, focusing on keyword research, brand research, campaign optimization, bidding, tracking, and performance analysis.

At PerksLogics, I have managed 70+ search campaigns across affiliate brands and have generated up to $15K in monthly affiliate commissions. Alongside PPC and affiliate marketing, I have strong experience in Excel and data management.

I am continuously expanding my knowledge of AI tools and modern marketing technologies while looking for new opportunities to grow, learn and create measurable results.`,
  careerGoal:
    'To grow as a performance marketing professional by combining PPC, affiliate marketing, data-driven strategies, and AI-powered technologies to build scalable and profitable digital campaigns.',
  learningCommitment:
    'Actively learning AI and modern marketing technologies and interested in opportunities where I can continue learning while delivering measurable results.',
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    level: 'Advanced',
    percentage: 92,
    category: 'ppc',
    note: 'Search campaigns, bidding strategies & account management',
  },
  {
    id: 'ppc-management',
    name: 'PPC Campaign Management',
    level: 'Advanced',
    percentage: 94,
    category: 'ppc',
    note: 'End-to-end campaign architecture & optimization',
  },
  {
    id: 'keyword-research',
    name: 'Keyword Research',
    level: 'Advanced',
    percentage: 90,
    category: 'ppc',
    note: 'High-intent search terms, negative keywords & brand bidding',
  },
  {
    id: 'affiliate-marketing',
    name: 'Affiliate Marketing',
    level: 'Advanced',
    percentage: 92,
    category: 'affiliate',
    note: 'Publisher operations, coupon portals & performance monetization',
  },
  {
    id: 'awin',
    name: 'Awin',
    level: 'Advanced',
    percentage: 90,
    category: 'affiliate',
    note: 'Publisher account management, link generation & tracking',
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    level: 'Advanced',
    percentage: 92,
    category: 'analytics',
    note: 'Formulas, VLOOKUP, pivot tables & campaign reporting',
  },
  {
    id: 'data-entry',
    name: 'Data Entry',
    level: 'Advanced',
    percentage: 95,
    category: 'analytics',
    note: 'Accurate record maintenance & affiliate ledger verification',
  },
  {
    id: 'conversion-tracking',
    name: 'Google Ads Conversion Tracking',
    level: 'Intermediate',
    percentage: 70,
    category: 'analytics',
    note: 'Tag implementation & conversion action configuration',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    level: 'Intermediate',
    percentage: 72,
    category: 'tools',
    note: 'Ad copy generation, search query grouping & query analysis',
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    level: 'Intermediate',
    percentage: 68,
    category: 'tools',
    note: 'Productivity acceleration & workflow automation',
  },
  {
    id: 'canva',
    name: 'Canva',
    level: 'Intermediate',
    percentage: 70,
    category: 'tools',
    note: 'Display ad formats, promotional banners & social assets',
  },
  {
    id: 'gtm',
    name: 'Google Tag Manager',
    level: 'Beginner',
    percentage: 45,
    category: 'analytics',
    note: 'Container setup & basic event trigger testing',
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    level: 'Beginner',
    percentage: 40,
    category: 'ppc',
    note: 'Campaign creation & audience targeting fundamentals',
  },
];

export const AI_TOOLS_DATA: AiToolItem[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description:
      'Utilized for responsive search ad copy ideation, negative keyword grouping, and query intent clustering.',
    usageContext: 'Ad Copywriting & Search Intent Analysis',
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description:
      'Leveraged for market intelligence, competitor brand landscape research, and rapid campaign research briefs.',
    usageContext: 'Competitor Research & Marketing Intel',
  },
  {
    id: 'claude',
    name: 'Claude',
    description:
      'Applied for long-form data synthesis, Excel formula generation, and structured performance summarization.',
    usageContext: 'Data Modeling & Analytical Reporting',
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description:
      'Used for rapid promotional banner ideation and visual asset formatting for multi-platform marketing.',
    usageContext: 'Creative Sizing & Graphic Prototyping',
  },
  {
    id: 'other-ai',
    name: 'Other AI Tools',
    description:
      'Continuously exploring modern generative and productivity tools to streamline PPC operations and workflows.',
    usageContext: 'Workflow Automation & Continuous Learning',
  },
];

export const WORK_EXPERIENCE_DATA: WorkExperienceItem[] = [
  {
    id: 'perkslogics',
    company: 'PerksLogics',
    role: 'Google Ads Specialist | PPC & Affiliate Marketing',
    duration: '2023 – Present',
    isCurrent: true,
    isPrimary: true,
    location: 'Karachi, Pakistan',
    summary:
      'Lead search campaign execution and publisher monetization across multi-brand affiliate operations.',
    responsibilities: [
      'Manage Google Search campaigns for affiliate marketing and coupon-based websites.',
      'Conduct keyword research and brand research to identify profitable PPC opportunities.',
      'Manage bidding, budgets, keywords, campaign structure and ad performance.',
      'Work as a publisher across affiliate networks, including Awin.',
      'Managed 70+ Google Search campaigns across multiple affiliate brands.',
      'Monitor important performance metrics including Clicks, Impressions, CTR, Conversions, CPC, Cost and ROI.',
      'Optimize campaigns to improve efficiency, conversion performance and profitability.',
      'Generated up to $15K in monthly affiliate commissions through PPC-driven affiliate campaigns.',
      'Handle Excel-based data management and data entry when required.',
      'Maintain accurate records and support affiliate marketing operations.',
    ],
    metricsHighlight: 'Up to $15K in monthly affiliate commissions across 70+ search campaigns',
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'google-ads-search',
    title: 'Google Ads Search Campaigns — PerksLogics Multi-Brand Scale',
    platform: 'Google Ads',
    campaignType: 'Google Search',
    network: 'Publisher Search Network',
    role: 'PPC & Google Ads Specialist',
    duration: 'Feb 17 – Oct 8, 2026',
    description:
      'Managed and scaled Google Search campaigns for coupon and affiliate brands. Focused on disciplined keyword research, brand auction dynamics, bid adjustments, and quality score improvements.',
    responsibilities: [
      'Keyword research & high-intent search query discovery',
      'Brand research & auction competitor analysis',
      'Search campaign structure, match type segmentation & negative keyword filtering',
      'Bid strategy management (tCPA, Maximize Clicks & manual CPC)',
      'Budget monitoring & daily expenditure pacing',
      'Performance optimization across CTR, average CPC, and conversion rates',
      'Conversion tracking audits and search term report analysis',
    ],
    metrics: [
      { label: 'Clicks', value: '10.7K', context: 'High-intent search traffic' },
      { label: 'Impressions', value: '115K', context: 'Targeted search impression reach' },
      { label: 'Avg. CPC', value: 'Rs 429', context: 'Maintained disciplined cost efficiency' },
      { label: 'Total Cost', value: 'Rs 4.6M', context: 'Paced across 10 active core campaigns' },
      { label: 'Campaign Growth', value: '10 / 10', context: '100% of analyzed campaigns grew clicks' },
    ],
    imageSrc: '/src/assets/images/google_ads_case_study_1791463155327.jpg',
    imageAlt: 'Google Ads Search Campaign Overview Performance Dashboard',
    caption: 'Official Google Ads dashboard overview displaying 10.7K clicks, 115K impressions, and cost pacing across active search campaigns.',
    realEvidenceNotes:
      'Verified screenshot metrics: 10.7K Clicks, 115K Impressions, Rs 429 Avg. CPC, Rs 4.6M Cost over Feb 17 – Oct 8, 2026. Account: hashirperkslogic@gmail.com.',
  },
  {
    id: 'awin-affiliate-growth',
    title: 'Affiliate Performance & Commission Growth — Awin Network',
    platform: 'Awin Publisher Portal',
    campaignType: 'Affiliate Publisher & Coupon Search',
    network: 'Awin Network',
    role: 'PPC & Affiliate Publisher',
    duration: 'Monthly Performance Period',
    description:
      'Engineered publisher monetization strategies connecting high-intent Google Search traffic with top-converting affiliate merchants on Awin and leading performance networks.',
    responsibilities: [
      'Merchant selection & commission rate evaluation on Awin',
      'Deep link integration and UTM parameter tracking structure',
      'Aligning PPC search intent directly with merchant coupon landing pages',
      'Monitoring transaction approval cycles and publisher status',
      'Mitigating commission declines through traffic quality control',
      'Daily reconciliation of approved vs pending affiliate payouts',
    ],
    metrics: [
      { label: 'Monthly Commission Volume', value: 'Up to $15K', context: 'Peak monthly publisher earnings' },
      { label: 'Approved Commissions', value: '$6,009.77', context: 'USD waiting for advertiser disbursement' },
      { label: 'Pending Commissions', value: '$4,182.47', context: 'USD in advertiser approval pipeline' },
      { label: 'Paid Commissions', value: '$5,480.41', context: 'USD successfully processed' },
      { label: 'Total Sales Volume', value: '$304.6K', context: 'Merchandise value driven to partners' },
    ],
    imageSrc: '/src/assets/images/affiliate_performance_case_study_1791463170471.jpg',
    imageAlt: 'Affiliate Network Commission and Earnings Dashboard',
    caption: 'Publisher earnings overview displaying $6,009.77 approved, $4,182.47 pending, $5,480.41 paid, and monthly performance tracking.',
    realEvidenceNotes:
      'Dashboard screenshot evidence: $4,182.47 Pending, $6,009.77 Approved, $5,480.41 Paid, $1,953.34 Declined, 1.1K Total Transactions, $304.6K Total Sales.',
  },
];

export const AFFILIATE_NETWORKS_DATA: AffiliateNetworkItem[] = [
  {
    id: 'awin',
    name: 'Awin',
    model: 'Global Performance Marketing Network',
    description:
      'Primary affiliate network used for publisher monetization, merchant partnership management, and coupon-based PPC campaigns.',
    capabilities: [
      'Publisher account management & compliance',
      'Merchant application & commercial commission alignment',
      'Deep-linking, tracking link generation & sub-ID attribution',
      'Transaction lifecycle auditing (Pending, Approved, Paid)',
    ],
  },
  {
    id: 'impact',
    name: 'Impact',
    model: 'Partnership Automation Cloud',
    description:
      'Experience working with partnership automation, high-converting direct brand affiliate relationships, and tracking parameter integration.',
    capabilities: [
      'Multi-device attribution tracking & reporting',
      'Direct brand partnership management',
      'Promo code tracking & affiliate link structuring',
      'Publisher performance analytics & conversion audits',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'aptech',
    institution: 'Aptech',
    degree: 'Digital Marketing Certification Program',
    duration: 'Completed in 2023',
    details: 'Comprehensive foundational training covering search marketing, campaign dynamics, and digital strategy.',
  },
  {
    id: 'ziauddin',
    institution: 'Ziauddin',
    degree: 'Intermediate',
    duration: 'Completed in 2025',
    details: 'Higher secondary education successfully completed in Karachi, Pakistan.',
  },
  {
    id: 'city-grammar',
    institution: 'City Grammar School',
    degree: 'Secondary School Certificate',
    duration: '2022 – 2023',
    details: 'Secondary matriculation curriculum completed with strong academic discipline.',
  },
];

export const LANGUAGES_DATA: LanguageItem[] = [
  { name: 'Urdu', proficiency: 'Native' },
  { name: 'English', proficiency: 'Fluent' },
];
