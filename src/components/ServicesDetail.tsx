/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { SERVICES, TECH_BADGES } from '../data';
import { Settings, Shield, Workflow, Database, Cloud, Activity, Sparkles, Filter, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ServicesDetail() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'erp' | 'cloud' | 'ai' | 'other'>('all');

  // Map service item indexes to helper icons for visual rhythm and aesthetic excellence
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Settings className="w-5 h-5 text-accent" />;
      case 1:
        return <Workflow className="w-5 h-5 text-cream" />;
      case 2:
        return <Activity className="w-5 h-5 text-accent" />;
      case 3:
        return <Cloud className="w-5 h-5 text-accent" />;
      case 4:
        return <Database className="w-5 h-5 text-accent" />;
      default:
        return <Shield className="w-5 h-5 text-cream" />;
    }
  };

  const filteredBadges = activeCategory === 'all'
    ? TECH_BADGES
    : TECH_BADGES.filter(badge => badge.category === activeCategory);

  return (
    <div id="services-detail" className="py-24 px-6 md:px-12 bg-bg border-t border-border-custom relative">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* Services Segment */}
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-text-dim mb-4 flex items-center gap-2 font-mono">
            <span className="w-10 h-[1.5px] bg-accent" /> CORE PRACTITIONER DEPTH
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-tight tracking-[-0.03em] text-text-primary mb-16">
            Six lines of delivery. <span className="italic text-accent font-medium">One accountability model.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.id}
                className="bg-s1 border border-border-custom hover:border-accent/40 p-8 rounded-lg flex flex-col justify-between h-[360px] hover:bg-s2/35 transition-all duration-300 hover:shadow-lg relative group"
              >
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-accent/15 group-hover:bg-accent transition-colors duration-300 rounded-t-lg" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-dim text-xs font-mono tracking-widest font-bold bg-bg px-2.5 py-1 rounded border border-border-custom/60">
                      {svc.num}
                    </span>
                    <div className="p-2 bg-bg border border-border-custom group-hover:border-accent/30 rounded-lg transition-colors">
                      {getServiceIcon(i)}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-normal text-text-primary leading-tight group-hover:text-accent transition-colors">
                    {svc.title} <span className="italic text-cream font-semibold">{svc.emTitle}</span>
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-light">
                    {svc.description}
                  </p>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border-custom/75 mt-auto">
                  {svc.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[10px] text-text-muted bg-bg border border-border-custom tracking-wider rounded px-3 py-1 font-mono uppercase font-semibold group-hover:border-border-mid transition-colors"
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
        <div id="technology" className="pt-20 border-t border-border-custom bg-s1 p-8 sm:p-10 rounded-lg shadow-md relative overflow-hidden">
          {/* Decorative faint pattern */}
          <div className="absolute -right-20 -bottom-20 pointer-events-none opacity-[0.02]">
            <Code className="w-96 h-96 text-accent" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 relative z-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-2 font-mono">
                <span className="w-10 h-[1.5px] bg-cream" /> THE SYSTEM MATRIX
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight tracking-[-0.03em] text-text-primary">
                Platforms and tech we <span className="italic text-accent font-medium">master cold.</span>
              </h2>
            </div>

            {/* Filter controls with nice white theme outlines */}
            <div className="flex flex-wrap gap-1 bg-s2/50 p-1.5 rounded-lg border border-border-custom self-start lg:self-end">
              {(['all', 'erp', 'cloud', 'ai', 'other'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-accent text-bg font-semibold shadow-sm'
                      : 'text-text-muted hover:text-text-primary hover:bg-bg/40'
                  }`}
                >
                  {cat === 'all' ? 'All Platforms' : cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Badges Grid with beautiful visual indicators */}
          <div className="flex flex-wrap gap-2.5 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredBadges.map((badge, idx) => (
                <motion.span
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`text-xs px-4.5 py-3 border rounded-lg transition-all duration-200 cursor-default flex items-center gap-2 ${
                    badge.highlight
                      ? 'bg-accent/8 border-accent text-accent font-semibold shadow-sm animate-pulse'
                      : 'bg-bg border-border-custom text-text-muted hover:border-cream hover:text-cream hover:shadow-md'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${badge.highlight ? 'text-cream animate-spin-slow' : 'text-text-dim'}`} />
                  {badge.name}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
