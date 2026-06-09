/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { CASE_STUDIES, CLIENT_CHIPS } from '../data';
import { Layers, CheckCircle2, Sparkles, TrendingUp, BarChart2, Globe, ArrowDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function VideoPortfolio() {
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  // Mappings to filter case studies based on clicked enterprise chip (or highlight them)
  const getSelectedCaseId = () => {
    if (!selectedChip) return null;
    if (['Globus Stores', 'GUESS', 'Samsonite', 'Burger King India'].includes(selectedChip)) {
      return 'case-1'; // Specialty Retail
    }
    if (['Bridgestone', 'ArcelorMittal Nippon Steel', 'Reliance'].includes(selectedChip)) {
      return 'case-2'; // Industrial Manufacturing
    }
    return 'case-3'; // Cross Border or general
  };

  const activeCaseId = getSelectedCaseId();

  // Custom statistical outcomes to render visual dials in the light theme
  const getCaseMetrics = (caseId: string) => {
    switch (caseId) {
      case 'case-1':
        return [
          { val: '36+', tag: 'Omnichannel Stores Synchronized' },
          { val: '₹140Cr', tag: 'Real-time inventory ledger flow' },
          { val: '430%', tag: 'ROI in omnichannel throughput' }
        ];
      case 'case-2':
        return [
          { val: '19M+', tag: 'Daily streaming telemetry events' },
          { val: '< 20ms', tag: 'Plant-to-core pipeline lag' },
          { val: '99.98%', tag: 'Guaranteed message SRE uptime' }
        ];
      default:
        return [
          { val: '17', tag: 'Sovereign cross-border rollouts' },
          { val: '100%', tag: 'Local financial compliance' },
          { val: '₹220Cr+', tag: 'Accumulated corporate transaction value' }
        ];
    }
  };

  return (
    <section id="cases" className="py-24 px-6 md:px-12 bg-bg relative border-t border-border-custom">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block with high-end editorial rhythm */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-text-dim mb-4 flex items-center gap-2 font-mono">
              <span className="w-10 h-[1.5px] bg-accent" /> Case histories
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-[-0.03em] text-text-primary">
              Where our team has <span className="italic text-accent font-medium">delivered.</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-text-muted max-w-md font-light leading-relaxed">
            Senior practitioners with formal, named delivery histories across global enterprises. Toggle an alliance to focus on its modernization outcomes:
          </p>
        </div>

        {/* Interactive Client Chips with refined states */}
        <div className="flex flex-wrap gap-2.5 mb-14 bg-s2/30 p-2.5 border border-border-custom rounded-lg max-w-4xl">
          {CLIENT_CHIPS.map((chip) => {
            const isSelected = selectedChip === chip;
            return (
              <button
                key={chip}
                onClick={() => setSelectedChip(selectedChip === chip ? null : chip)}
                className={`px-4.5 py-2.5 text-xs font-semibold tracking-wide rounded-[4px] border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-accent text-bg border-accent shadow-md'
                    : 'bg-s1 text-text-muted border-border-custom hover:border-border-mid hover:text-text-primary hover:shadow-sm'
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>

        {/* Case Cards rendering */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {CASE_STUDIES.map((c, idx) => {
              const isHighlighted = activeCaseId === null || activeCaseId === c.id;
              const metrics = getCaseMetrics(c.id);
              
              if (!isHighlighted) return null; // Let the list act like an beautiful interactive filter

              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="bg-s1 border border-border-custom hover:border-accent/40 rounded-lg p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  {/* Left Metadata & Segment */}
                  <div className="lg:col-span-4 space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-cream font-bold">
                        {c.sector}
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                    </div>
                    
                    <h4 className="font-serif text-2xl sm:text-3xl font-normal text-text-primary leading-tight">
                      {c.client}
                    </h4>

                    <span className="inline-block text-xs font-mono uppercase bg-bg text-accent font-bold px-3 py-1 border border-border-custom rounded-lg">
                      {c.type}
                    </span>

                    {/* Highly Visual Real Outcomes Meters */}
                    <div className="space-y-4 pt-4 border-t border-border-custom">
                      <span className="text-[9px] font-mono tracking-widest font-bold text-text-dim uppercase flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-accent" /> KEY OUTCOME KPIs
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                        {metrics.map((m, mIdx) => (
                          <div key={mIdx} className="bg-bg/60 p-3 rounded-lg border border-border-custom/55 hover:border-accent/40 transition-colors">
                            <span className="text-2xl font-serif font-bold text-accent block tracking-tight">
                              {m.val}
                            </span>
                            <span className="text-[10px] text-text-muted font-sans font-light leading-snug">
                              {m.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Narrative block */}
                  <div className="lg:col-span-8 space-y-6 lg:pl-6 lg:border-l border-border-custom/80 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="font-serif text-2xl md:text-3xl font-normal text-text-primary leading-tight">
                          {c.title}<span className="italic text-cream font-medium">{c.emTitle}</span>
                        </h3>
                        <ArrowDownRight className="w-6 h-6 text-text-dim group-hover:text-accent transition-colors" />
                      </div>
                      
                      <p className="font-sans text-xs sm:text-sm md:text-base font-light text-text-muted leading-relaxed font-light">
                        {c.description}
                      </p>
                    </div>

                    {/* Operational Summary badge */}
                    <div className="pt-6 border-t border-border-custom flex items-center gap-3 text-xs sm:text-sm text-cream font-mono bg-s2/25 p-4 rounded-xl mt-6">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 animate-pulse" />
                      <div className="font-sans font-normal leading-relaxed text-text-primary text-[11px] sm:text-xs">
                        <span className="uppercase font-bold tracking-widest text-cream block text-[9px] font-mono">
                          Hardened Baseline Statement:
                        </span>
                        {c.outcome}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
