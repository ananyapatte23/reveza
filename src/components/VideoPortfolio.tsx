/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { CASE_STUDIES, CLIENT_CHIPS } from '../data';
import { ExternalLink, Database, Layers, CheckCircle2 } from 'lucide-react';

export default function VideoPortfolio() {
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  // Mappings to filter case studies based on clicked enterprise chip (or highlight them)
  const getSelectedCaseId = () => {
    if (!selectedChip) return null;
    if (['Globus Stores', 'GUESS', 'Samsonite'].includes(selectedChip)) {
      return 'case-1'; // Specialty Retail
    }
    if (['Bridgestone', 'ArcelorMittal Nippon Steel'].includes(selectedChip)) {
      return 'case-2'; // Industrial Manufacturing
    }
    return 'case-3'; // Cross Border or general
  };

  const activeCaseId = getSelectedCaseId();

  return (
    <section id="cases" className="py-24 px-6 md:px-10 bg-bg relative border-t border-border-custom">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-14">
          <div className="text-[11px] uppercase tracking-[0.16em] text-text-dim mb-4 flex items-center gap-2">
            <span className="w-10 h-[1px] bg-border-mid" /> Where we've delivered
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.03em] text-text-primary mb-5">
            Enterprises our team has <span className="italic text-cream font-normal">moved.</span>
          </h2>
          <p className="font-sans text-xs text-text-muted max-w-xl font-light leading-relaxed">
            Senior practitioners with named delivery histories across global enterprises. Click a partner to view the corresponding program:
          </p>
        </div>

        {/* Interactive Client Chips */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {CLIENT_CHIPS.map((chip) => {
            const isSelected = selectedChip === chip;
            return (
              <button
                key={chip}
                onClick={() => setSelectedChip(selectedChip === chip ? null : chip)}
                className={`px-4 py-2 text-xs rounded-[4px] border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-accent text-bg border-accent font-semibold'
                    : 'bg-s1 text-text-muted border-border-custom hover:border-border-mid hover:text-text-primary'
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>

        {/* Case Cards rendering */}
        <div className="space-y-6">
          {CASE_STUDIES.map((c) => {
            const isHighlighted = activeCaseId === null || activeCaseId === c.id;
            
            return (
              <div
                key={c.id}
                className={`bg-s1 border rounded-[4px] p-6.5 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-300 ${
                  isHighlighted 
                    ? 'opacity-100 border-border-mid bg-s1' 
                    : 'opacity-40 border-border-custom scale-[0.99] grayscale'
                }`}
              >
                {/* Left Meta details */}
                <div className="lg:col-span-4 space-y-3">
                  <span className="text-[9px] uppercase tracking-widest text-accent font-mono block">
                    {c.sector}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal text-text-primary leading-tight">
                    {c.client}
                  </h4>
                  <span className="text-xs text-text-muted block font-sans font-light">
                    {c.type}
                  </span>
                </div>

                {/* Right narrative copy */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="font-serif text-lg md:text-xl font-normal text-text-primary leading-snug">
                    {c.title}<span className="italic text-cream">{c.emTitle}</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm font-light text-text-muted leading-relaxed">
                    {c.description}
                  </p>
                  
                  {/* Performance feedback indicator tag */}
                  <div className="pt-4 border-t border-border-custom flex items-center gap-2 text-xs text-accent">
                    <Layers className="w-4 h-4 shrink-0" />
                    <span className="font-sans font-normal tracking-wide">{c.outcome}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
