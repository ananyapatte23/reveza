/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { ENGAGEMENT_MODELS } from '../data';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ServiceProcess() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section id="engage" className="py-24 px-6 md:px-10 bg-bg relative border-t border-border-custom">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-[11px] uppercase tracking-[0.16em] text-text-dim mb-4 flex items-center gap-2">
            <span className="w-10 h-[1px] bg-border-mid" /> How we engage
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.03em] text-text-primary">
            Three ways to <span className="italic text-cream font-normal">work with us.</span>
          </h2>
        </div>

        {/* Engagement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model, idx) => {
            const isHovered = hoverIndex === idx;
            return (
              <div
                key={model.id}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`flex flex-col bg-s1 border border-border-custom hover:border-border-mid p-8 rounded-[4px] min-h-[420px] justify-between transition-all duration-300 ${
                  isHovered ? 'bg-s2 shadow-lg scale-[1.01]' : 'shadow-none'
                }`}
              >
                {/* Upper block */}
                <div>
                  <span className="text-[10px] uppercase font-bold text-accent font-sans block mb-6 tracking-wider">
                    {model.slashNum}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-text-primary leading-tight mb-4">
                    {model.title} <span className="italic text-cream">{model.emTitle}</span>
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed font-light mb-6">
                    {model.description}
                  </p>
                </div>

                {/* Deliverables / Checklist block */}
                <div className="pt-6 border-t border-border-custom flex flex-col gap-3">
                  <span className="text-[9px] tracking-wider uppercase font-bold text-text-dim font-mono">
                    Focus deliverables:
                  </span>
                  <ul className="space-y-2.5 text-xs">
                    {model.deliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-text-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="font-light">{item}</span>
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
