/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  PracticeDetail, 
  CaseStudyItem, 
  ServiceItem, 
  EngagementModelItem, 
  IndustryItem, 
  TechBadgeItem 
} from './types';

export const TICKER_ITEMS = [
  'ERP Modernization',
  'Integration Architecture',
  'Cloud & Data',
  'Applied AI',
  'Customer Engagement',
  'Managed Services',
  'Quality Engineering'
];

export const PRACTICES: PracticeDetail[] = [
  {
    id: 'practice-01',
    label: 'Practice 01',
    title: 'Digital Transformation',
    emTitle: '& ERP',
    description: 'We modernize the operational core — finance, supply chain, manufacturing, retail, distribution. Vendor-agnostic, outcome-led, delivered by senior practitioners who have sat in the buyer\'s chair.',
    capabilities: [
      {
        num: '01',
        title: 'Core platform ',
        emWord: 'implementation',
        description: 'End-to-end ERP, CRM, commerce, and supply-chain platform delivery. Process design, data migration, change management — to a measurable go-live.',
        tags: ['ERP Rollouts', 'Multi-Country', 'Process Re-Engineering']
      },
      {
        num: '02',
        title: 'Legacy ',
        emWord: 'modernization',
        description: 'Cloud migrations, S/4 conversions, monolith-to-microservices uplifts, and brownfield re-platforming with zero business disruption.',
        tags: ['S/4 Conversions', 'Cloud Migration', 'Re-Platforming']
      },
      {
        num: '03',
        title: 'Integration ',
        emWord: '& APIs',
        description: 'Composable, API-first integration fabrics that let core systems talk to channels, partners, and emerging AI agents. Built to be swapped, not locked.',
        tags: ['API Management', 'Integration Suite', 'Event-Driven']
      },
      {
        num: '04',
        title: 'Application ',
        emWord: 'managed services',
        description: '24×7 AMS beyond ticket SLAs — continuous improvement targets, quarterly innovation cycles, and KPI-linked commercial models.',
        tags: ['L1–L4 AMS', 'SRE & Observability', 'Continuous Improvement']
      }
    ]
  },
  {
    id: 'practice-02',
    label: 'Practice 02',
    title: 'AI ',
    emTitle: '& Intelligence',
    description: 'AI is its own practice — not a feature we sprinkle on. We build the data foundations, decisioning systems, and agentic workflows that make enterprises learn, adapt, and act in real time.',
    capabilities: [
      {
        num: '05',
        title: 'Data ',
        emWord: 'foundations',
        description: 'Modern data platforms — lakehouses, streaming pipelines, data products, and governance layers — engineered to be the substrate AI actually runs on.',
        tags: ['Lakehouse', 'Data Products', 'Real-Time Streaming']
      },
      {
        num: '06',
        title: 'Agentic ',
        emWord: 'AI systems',
        description: 'Production-grade AI agents that reason over enterprise context — order, service, finance, supply, customer ops. Built for workflows that move business KPIs.',
        tags: ['Multi-Agent', 'RAG & Reasoning', 'Process Automation']
      },
      {
        num: '07',
        title: 'Decision ',
        emWord: 'intelligence',
        description: 'ML and optimization models embedded in the workflows where decisions get made — pricing, planning, fulfillment, risk, and customer experience.',
        tags: ['ML in Production', 'Optimization', 'MLOps']
      },
      {
        num: '08',
        title: 'AI-powered ',
        emWord: 'engagement',
        description: 'Real-time customer and employee experiences orchestrated by AI — across digital, physical, and conversational surfaces.',
        tags: ['CX Intelligence', 'Real-Time Personalization', 'Conversational AI']
      }
    ]
  }
];

export const CLIENT_CHIPS = [
  'Reliance',
  'Bridgestone',
  'ArcelorMittal Nippon Steel',
  'Monsanto',
  'BookMyShow',
  'Burger King India',
  'Globus Stores',
  'GUESS',
  'Samsonite',
  'Abros'
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-1',
    sector: 'Specialty Retail · CTO Engagement',
    client: 'Fashion & Lifestyle Retail',
    type: '36-store chain · India',
    title: 'A 36-store chain ',
    emTitle: 're-architected for omnichannel.',
    description: 'Replaced a fragmented stack with an integrated commerce, ERP, and customer-engagement layer. Operations Intelligence and Customer Journey Intelligence built as separate but composable pillars, with AI-assisted decisioning embedded into store and supply workflows.',
    outcome: 'Outcome: Single view of inventory and customer · Real-time store decisioning · IPO-grade infrastructure baseline'
  },
  {
    id: 'case-2',
    sector: 'Industrial Manufacturing · Integration Architecture',
    client: 'Global Industrial Groups',
    type: 'Bridgestone · ArcelorMittal',
    title: 'Global tyre & steel operations ',
    emTitle: 'connected, end-to-end.',
    description: 'Designed and delivered enterprise integration fabrics across plants, partners, and core ERP for two of the world\'s largest industrial groups. API-first, event-driven, hardened for high-volume manufacturing throughput.',
    outcome: 'Outcome: Plant-to-finance latency cut · Partner onboarding standardized · Composable integration spine'
  },
  {
    id: 'case-3',
    sector: 'Consumer & Hospitality · Multi-Country Rollout',
    client: 'Cross-Border Portfolio',
    type: '17 countries · Retail & QSR',
    title: 'Cross-border ERP and commerce ',
    emTitle: 'across 17 countries.',
    description: 'Multi-country implementations spanning retail, QSR, ticketing, and lifestyle. Localization, fiscal compliance, and rollout governance handled by a single team — across geographies, languages, and tax regimes.',
    outcome: 'Outcome: Standardized core · Country-level autonomy · Predictable global go-lives'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'svc-1',
    num: '01',
    title: 'ERP Modernisation ',
    emTitle: '& SAP',
    description: 'S/4HANA migrations, Grow with SAP cloud deployments, and ERP consolidation programs. Practitioner depth across Retail, CPG, Manufacturing, and Logistics.',
    tags: ['S/4HANA', 'SAP BTP', 'Grow with SAP', 'AMS']
  },
  {
    id: 'svc-2',
    num: '02',
    title: 'AI ',
    emTitle: '& Intelligent Automation',
    description: 'From process automation and document intelligence to AI-native commerce infrastructure — designed, built, and operationalised to integrate with your existing landscape.',
    tags: ['GenAI', 'Process Automation', 'Agent Commerce']
  },
  {
    id: 'svc-3',
    num: '03',
    title: 'Digital Commerce ',
    emTitle: '& Retail Tech',
    description: 'Omnichannel retail platforms, D2C commerce architecture, and shopper engagement systems. Two decades of global retail delivery — across 17 countries.',
    tags: ['Omnichannel', 'D2C', 'SAP Retail', 'POS']
  },
  {
    id: 'svc-4',
    num: '04',
    title: 'Cloud ',
    emTitle: '& Infrastructure Strategy',
    description: 'Cloud-first architecture design, SAP BTP integration, and hybrid infrastructure roadmaps balancing performance, cost, and compliance — built for scale.',
    tags: ['AWS', 'Azure', 'SAP BTP', 'SuccessFactors']
  },
  {
    id: 'svc-5',
    num: '05',
    title: 'Data ',
    emTitle: '& Analytics Enablement',
    description: 'Data strategy, governance, real-time analytics platforms, and reporting modernisation — turning your data estate into a competitive advantage.',
    tags: ['SAP Analytics', 'Data Lakes', 'BI', 'Governance']
  },
  {
    id: 'svc-6',
    num: '06',
    title: 'Transformation ',
    emTitle: 'Program Management',
    description: 'Complex programme delivery, change management, and post-go-live adoption. We embed alongside your team — from scoping through to sustained operation.',
    tags: ['PMO', 'Change Mgmt', 'Staffing', 'Advisory']
  }
];

export const ENGAGEMENT_MODELS: EngagementModelItem[] = [
  {
    id: 'engage-1',
    slashNum: '/01 Diagnose',
    title: 'Transformation ',
    emTitle: 'sprint',
    description: '4–6 week scoped engagement to map your operating posture, pressure-test the technology direction, and produce a costed, AI-aware roadmap.',
    deliverables: [
      'Capability & data audit',
      'AI infusion plan',
      'Build-vs-buy decisions',
      'Costed roadmap'
    ]
  },
  {
    id: 'engage-2',
    slashNum: '/02 Build',
    title: 'Outcome-based ',
    emTitle: 'delivery',
    description: 'Multi-quarter programs delivered by senior squads. Co-located leadership, transparent rituals, fixed-outcome economics. We measure on the business KPI, not the burndown.',
    deliverables: [
      'Architecture & engineering',
      'Data + applied AI',
      'Change & enablement',
      'Outcome SLAs'
    ]
  },
  {
    id: 'engage-3',
    slashNum: '/03 Operate',
    title: 'Run ',
    emTitle: '& evolve',
    description: '24×7 managed services beyond ticket SLAs — continuous improvement targets, quarterly innovation cycles, and product-grade observability.',
    deliverables: [
      'L1–L4 operations',
      'SRE & cloud cost',
      'Quarterly innovation',
      'Continuous KPI uplift'
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'ind-1',
    num: '01',
    name: 'Retail & Lifestyle',
    description: 'Omnichannel, supply chain visibility, in-store intelligence.'
  },
  {
    id: 'ind-2',
    num: '02',
    name: 'Consumer & D2C',
    description: 'Composable commerce, customer data, lifecycle automation.'
  },
  {
    id: 'ind-3',
    num: '03',
    name: 'Manufacturing',
    description: 'Connected operations, planning, finance modernization.'
  },
  {
    id: 'ind-4',
    num: '04',
    name: 'Distribution & Logistics',
    description: 'Order orchestration, network visibility, intelligent dispatch.'
  },
  {
    id: 'ind-5',
    num: '05',
    name: 'BFSI',
    description: 'Customer onboarding, decisioning, regulated AI deployments.'
  },
  {
    id: 'ind-6',
    num: '06',
    name: 'Healthcare & Life Sciences',
    description: 'Patient experience, supply integrity, clinical operations.'
  },
  {
    id: 'ind-7',
    num: '07',
    name: 'Hospitality',
    description: 'Guest intelligence, loyalty, real-time service orchestration.'
  },
  {
    id: 'ind-8',
    num: '08',
    name: 'Public & Infrastructure',
    description: 'Citizen platforms, data spaces, mission-critical modernization.'
  }
];

export const TECH_BADGES: TechBadgeItem[] = [
  { name: 'SAP S/4HANA', category: 'erp', highlight: true },
  { name: 'SAP BTP', category: 'erp', highlight: true },
  { name: 'SAP Retail / CAR', category: 'erp' },
  { name: 'SuccessFactors', category: 'erp' },
  { name: 'SAP Analytics Cloud', category: 'erp' },
  { name: 'Grow with SAP', category: 'erp' },
  { name: 'SAP OMS / WMS', category: 'erp' },
  { name: 'SAP Fiori / UI5', category: 'erp' },
  { name: 'Microsoft Azure', category: 'cloud', highlight: true },
  { name: 'AWS', category: 'cloud' },
  { name: 'Power BI', category: 'cloud' },
  { name: 'Snowflake', category: 'cloud' },
  { name: 'PostgreSQL / Supabase', category: 'cloud' },
  { name: 'Redis / Upstash', category: 'cloud' },
  { name: 'OpenAI / GPT-4', category: 'ai', highlight: true },
  { name: 'Anthropic Claude', category: 'ai' },
  { name: 'Google Gemini', category: 'ai' },
  { name: 'Python / FastAPI', category: 'ai' },
  { name: 'Salesforce', category: 'other' },
  { name: 'MuleSoft', category: 'other' },
  { name: 'Stripe', category: 'other' },
  { name: 'ONDC / UPI', category: 'other' },
  { name: 'Shopify', category: 'other' }
];

export const BELIEFS = [
  {
    id: 'b-1',
    text: 'Transformation is ',
    emText: 'continuous,',
    afterText: ' not punctual. Every system we build assumes the world will change underneath it.'
  },
  {
    id: 'b-2',
    text: 'AI is ',
    emText: 'inclusive,',
    afterText: ' not extractive. The best deployments make humans more capable — not redundant.'
  },
  {
    id: 'b-3',
    text: 'The future of enterprise software is ',
    emText: 'composable,',
    afterText: ' not monolithic. We design for the swap, not the lock-in.'
  },
  {
    id: 'b-4',
    text: 'And the best technology partner is the one whose work keeps ',
    emText: 'compounding',
    afterText: ' long after they\'ve left the room.'
  }
];
