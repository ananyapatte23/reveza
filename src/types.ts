/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

export interface CapabilityItem {
  num: string;
  title: string;
  emWord?: string;
  description: string;
  tags: string[];
}

export interface PracticeDetail {
  id: string;
  label: string;
  title: string;
  emTitle: string;
  description: string;
  capabilities: CapabilityItem[];
}

export interface CaseStudyItem {
  id: string;
  sector: string;
  client: string;
  type: string;
  title: string;
  emTitle: string;
  description: string;
  outcome: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  emTitle: string;
  description: string;
  tags: string[];
}

export interface EngagementModelItem {
  id: string;
  slashNum: string;
  title: string;
  emTitle: string;
  description: string;
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  num: string;
  name: string;
  description: string;
}

export interface TechBadgeItem {
  name: string;
  category: 'all' | 'erp' | 'cloud' | 'ai' | 'other';
  highlight?: boolean;
}
