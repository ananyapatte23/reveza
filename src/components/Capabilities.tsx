/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { PRACTICES } from '../data';
import { motion } from 'motion/react';

export default function Capabilities() {
  const [activePracticeId, setActivePracticeId] = useState<string>('practice-01');

  const selectedPractice = PRACTICES.find((p) => p.id === activePracticeId) || PRACTICES[0];

  return (
    <section id="capabilities" className="py-24 px-6 md:px-10 bg-bg relative border-t border-border-custom">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-text-dim mb-4 flex items-center gap-2">
              <span className="w-10 h-[1px] bg-border-mid" /> What we do
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.03em] text-text-primary mb-4">
              Two practices. <span className="italic text-cream font-normal">One delivery model.</span>
            </h2>
            <p className="font-sans text-sm text-text-muted max-w-xl leading-relaxed font-light">
              Every engagement is run by a single accountable team — whether it's a multi-country ERP rollout, an AI agent program, or both at once.
            </p>
          </div>

          {/* Interactive Toggle tabs */}
          <div className="flex bg-s1 p-1 rounded-[4px] border border-border-custom" id="capabilities-tabs-row">
            {PRACTICES.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePracticeId(p.id)}
                className={`py-2 px-4 rounded-[3px] text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activePracticeId === p.id
                    ? 'bg-accent text-bg'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic content rendering with grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Practice Overview Column */}
          <div className="lg:col-span-4 bg-s1 border border-border-custom p-8 rounded-[4px]">
            <span className="text-[10px] tracking-widest uppercase font-bold text-accent font-sans block mb-3">
              {selectedPractice.label}
            </span>
            <h3 className="font-serif text-3xl font-normal text-text-primary mb-4">
              {selectedPractice.title} <span className="italic text-cream">{selectedPractice.emTitle}</span>
            </h3>
            <p className="font-sans text-xs text-text-muted leading-relaxed font-light mb-6">
              {selectedPractice.description}
            </p>
            <div className="h-[1px] bg-border-custom my-4" />
            <div className="text-[9px] text-text-dim tracking-wide font-mono">
              REVEZA MULTI-GEOGRAPHY DELIVERY STRATEGY
            </div>
          </div>

          {/* Capabilities List Column */}
          <div className="lg:col-span-8 space-y-4">
            {selectedPractice.capabilities.map((cap, i) => (
              <motion.div
                key={cap.num}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="bg-s1 hover:bg-s2 border border-border-custom hover:border-border-mid p-6 rounded-[4px] grid grid-cols-1 md:grid-cols-12 gap-4 items-start transition-all"
              >
                {/* Number Flag */}
                <span className="md:col-span-2 text-[10px] text-text-dim font-mono tracking-widest font-bold pt-0.5">
                  {cap.num} /
                </span>

                {/* Sub-Contents */}
                <div className="md:col-span-10 flex flex-col gap-3">
                  <h4 className="font-serif text-lg font-normal text-text-primary leading-tight">
                    {cap.title} <span className="italic text-cream font-normal">{cap.emWord}</span>
                  </h4>
                  <p className="font-sans text-xs font-light text-text-muted leading-relaxed">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {cap.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] tracking-wider text-text-dim border border-border-custom bg-bg px-2 py-0.5 rounded-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
