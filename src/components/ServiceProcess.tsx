/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { ENGAGEMENT_MODELS } from '../data';
import { Check, ArrowRight, Sparkles, Compass, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServiceProcess() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Selector for connecting state visuals
  const getProcessIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Compass className="w-5 h-5 text-cream animate-spin-slow" />;
      case 1: return <Activity className="w-5 h-5 text-accent animate-pulse" />;
      default: return <ShieldCheck className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="engage" className="py-24 px-6 md:px-12 bg-bg relative border-t border-border-custom">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-text-dim mb-4 flex items-center gap-2 font-mono">
              <span className="w-10 h-[1.5px] bg-accent" /> THE ENGAGEMENT VECTOR
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-[-0.03em] text-text-primary">
              Three steps to <span className="italic text-accent font-medium">sovereign readiness.</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-text-muted max-w-md font-light leading-relaxed">
            Every modernization cycle follows three progressive stages to remove technology debt, introduce neural workflows, and assure perfect operations.
          </p>
        </div>

        {/* Engagement Grid with connecting line overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle connecting architectural line for progress (desktop only) */}
          <div className="absolute top-[52px] left-[15%] right-[15%] h-[1px] bg-border-custom pointer-events-none hidden md:block z-0" />

          {ENGAGEMENT_MODELS.map((model, idx) => {
            const isHovered = hoverIndex === idx;
            return (
              <div
                key={model.id}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`group flex flex-col bg-s1 border rounded-lg p-8 h-[460px] justify-between relative transition-all duration-300 z-10 hover:shadow-xl ${
                  isHovered 
                    ? 'border-accent bg-s2/30 scale-[1.01]' 
                    : 'border-border-custom'
                }`}
              >
                {/* Visual Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-border-custom group-hover:bg-accent transition-colors rounded-t-lg" />

                {/* Upper block */}
                <div className="space-y-6">
                  
                  {/* Step status block */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-cream bg-bg border border-border-custom/80 px-2.5 py-1 rounded">
                      {model.slashNum}
                    </span>
                    <div className="p-2.5 rounded-full bg-bg border border-border-custom group-hover:border-accent/30 transition-all shadow-sm">
                      {getProcessIcon(idx)}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-text-primary leading-tight">
                      {model.title} <span className="italic text-cream font-medium">{model.emTitle}</span>
                    </h3>
                    <p className="font-sans text-xs sm:text-sm font-light text-text-muted leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables Checklist Block */}
                <div className="pt-6 border-t border-border-custom/85 flex flex-col gap-3.5 mt-auto">
                  <span className="text-[9px] tracking-widest uppercase font-bold text-text-dim font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-accent" /> Key Focus Deliverables
                  </span>
                  
                  <ul className="space-y-2.5 text-xs">
                    {model.deliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-text-muted group">
                        <div className="w-4.5 h-4.5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="font-light text-text-primary font-sans text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
