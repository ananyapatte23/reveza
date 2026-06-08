/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { SERVICES, TECH_BADGES } from '../data';
import { Settings, Shield, Workflow, Database, Cloud, Activity } from 'lucide-react';

export default function ServicesDetail() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'erp' | 'cloud' | 'ai' | 'other'>('all');

  // Map service item indexes to a corresponding helper icon for visual rhythm
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Settings className="w-5 h-5 text-accent" />;
      case 1:
        return <Workflow className="w-5 h-5 text-accent" />;
      case 2:
        return <Activity className="w-5 h-5 text-accent" />;
      case 3:
        return <Cloud className="w-5 h-5 text-accent" />;
      case 4:
        return <Database className="w-5 h-5 text-accent" />;
      default:
        return <Shield className="w-5 h-5 text-accent" />;
    }
  };

  const filteredBadges = activeCategory === 'all'
    ? TECH_BADGES
    : TECH_BADGES.filter(badge => badge.category === activeCategory);

  return (
    <div id="services-detail" className="py-24 px-6 md:px-10 bg-bg border-t border-border-custom relative">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Services Segment */}
        <div>
          <div className="text-[11px] uppercase tracking-[0.16em] text-text-dim mb-4 flex items-center gap-2">
            <span className="w-10 h-[1px] bg-border-mid" /> Our services
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.03em] text-text-primary mb-12">
            Six lines. <span className="italic text-cream font-normal">One team.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.id}
                className="bg-s1 border border-border-custom hover:border-border-mid p-8 rounded-[4px] flex flex-col justify-between h-full hover:bg-s2 transition-all duration-255"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-dim text-[11px] font-mono tracking-widest">{svc.num}</span>
                    {getServiceIcon(i)}
                  </div>
                  <h3 className="font-serif text-xl font-normal text-text-primary leading-tight">
                    {svc.title} <span className="italic text-cream font-normal">{svc.emTitle}</span>
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed font-light">
                    {svc.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-border-custom">
                  {svc.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[9px] text-text-muted bg-bg border border-border-custom tracking-wider rounded-[2px] px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Map Segment */}
        <div id="technology" className="pt-16 border-t border-border-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-text-dim mb-4 flex items-center gap-2">
                <span className="w-10 h-[1px] bg-border-mid" /> Technology landscape
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-[-0.03em] text-text-primary">
                Platforms we <span className="italic text-cream font-normal">master.</span>
              </h2>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap gap-1 bg-s1 p-1 rounded-[4px] border border-border-custom">
              {(['all', 'erp', 'cloud', 'ai', 'other'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-[3px] text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-accent text-bg font-semibold'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {cat === 'all' ? 'All Mastered' : cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Badges Grid */}
          <div className="flex flex-wrap gap-2">
            {filteredBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`text-xs px-4 py-2 border rounded-[4px] transition-all duration-150 ${
                  badge.highlight
                    ? 'bg-s2 border-accent text-accent font-medium'
                    : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid hover:text-text-primary'
                }`}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
