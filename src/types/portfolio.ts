export type SkillLevel = 'Advanced' | 'Intermediate' | 'Beginner';

export type SkillCategory = 'ppc' | 'affiliate' | 'analytics' | 'tools';

export interface SkillItem {
  id: string;
  name: string;
  level: SkillLevel;
  percentage: number;
  category: SkillCategory;
  note?: string;
}

export interface AiToolItem {
  id: string;
  name: string;
  description: string;
  usageContext: string;
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  isCurrent?: boolean;
  isPrimary?: boolean;
  isPlaceholder?: boolean;
  location?: string;
  summary?: string;
  responsibilities: string[];
  metricsHighlight?: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  context?: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  platform: string;
  campaignType: string;
  network: string;
  role: string;
  duration?: string;
  description: string;
  responsibilities: string[];
  metrics: CaseStudyMetric[];
  imageSrc: string;
  imageAlt: string;
  caption: string;
  realEvidenceNotes: string;
}

export interface AffiliateNetworkItem {
  id: string;
  name: string;
  model: string;
  description: string;
  capabilities: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  details?: string;
}

export interface LanguageItem {
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Conversational';
}
