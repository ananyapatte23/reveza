/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { PRACTICES } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Workflow, 
  RefreshCcw, 
  Layers, 
  Activity, 
  Database, 
  Cpu, 
  LineChart, 
  Terminal, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Capabilities() {
  const [activePracticeId, setActivePracticeId] = useState<string>('practice-01');

  const selectedPractice = PRACTICES.find((p) => p.id === activePracticeId) || PRACTICES[0];

  // Dynamic Icon selector for Capabilities
  const getCapIcon = (num: string) => {
    switch (num) {
      case '01': return <Workflow className="w-5 h-5 text-accent" />;
      case '02': return <RefreshCcw className="w-5 h-5 text-accent" />;
      case '03': return <Layers className="w-5 h-5 text-accent" />;
      case '04': return <Activity className="w-5 h-5 text-accent" />;
      case '05': return <Database className="w-5 h-5 text-accent" />;
      case '06': return <Cpu className="w-5 h-5 text-accent" />;
      case '07': return <LineChart className="w-5 h-5 text-accent" />;
      case '08': return <Sparkles className="w-5 h-5 text-accent" />;
      default: return <Workflow className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 px-6 md:px-12 bg-bg relative border-t border-border-custom">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title with premium spacing and alignment */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-text-dim mb-4 flex items-center gap-2 font-mono">
              <span className="w-10 h-[1.5px] bg-accent" /> SPECIALIZED SERVICES
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-[-0.03em] text-text-primary mb-4">
              Two practices. <span className="italic text-accent font-medium">One direct delivery pipeline.</span>
            </h2>
            <p className="font-sans text-sm text-text-muted max-w-2xl leading-relaxed font-light">
              We operate without split accountability. Our specialized consultants, developers, and architects share a single methodology and SLA protocol across both systems modernization and AI execution.
            </p>
          </div>

          {/* Premium Toggle tabs */}
          <div className="relative flex bg-s2/60 p-1 rounded-lg border border-border-custom self-start lg:self-end" id="capabilities-tabs-row">
            {PRACTICES.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePracticeId(p.id)}
                className={`relative py-2.5 px-5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer z-10 ${
                  activePracticeId === p.id
                    ? 'text-bg'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {activePracticeId === p.id && (
                  <motion.div
                    layoutId="active-practice"
                    className="absolute inset-0 bg-accent rounded-md z-[-1] shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {p.label === 'Practice 01' ? 'Digital Core & ERP' : 'Advanced AI & Data'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic content rendering with grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Practice Overview Panel + Active Interactive Blueprint Schematic */}
          <div className="lg:col-span-4 bg-s1 border border-border-custom p-8 rounded-lg shadow-lg space-y-8 relative">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-cream font-mono block mb-3">
                {selectedPractice.label} · Practice Highlight
              </span>
              <h3 className="font-serif text-3xl font-normal tracking-tight text-text-primary mb-4">
                {selectedPractice.title} <span className="italic text-accent font-medium">{selectedPractice.emTitle}</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-light">
                {selectedPractice.description}
              </p>
            </div>

            <div className="h-[2px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-border-mid to-transparent my-6" />

            {/* Interactive Blueprint Schematic (High-Fidelity Visual) */}
            <div className="space-y-4">
              <span className="text-[9px] text-cream tracking-widest font-mono uppercase font-bold block">
                INTEGRATED FLOW ARCHITECTURE
              </span>
              
              <AnimatePresence mode="wait">
                {activePracticeId === 'practice-01' ? (
                  <motion.div
                    key="p1-flow"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="p-4 bg-bg border border-border-custom rounded-lg font-mono text-[10px] space-y-3.5 text-text-muted"
                  >
                    <div className="flex items-center justify-between border-b border-border-custom pb-2">
                      <span className="text-accent font-bold">STATE TARGET</span>
                      <span className="text-cream">S/4 GOLD CONVERSION</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream" />
                        <span>Legacy Monolith Core</span>
                        <ArrowRight className="w-3 h-3 text-text-dim ml-auto" />
                        <span className="text-text-primary font-bold">Extraction</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>SAP BTP Extension</span>
                        <ArrowRight className="w-3 h-3 text-text-dim ml-auto" />
                        <span className="text-text-primary font-bold">Unified API</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span>Omnichannel Edge</span>
                        <ArrowRight className="w-3 h-3 text-cream ml-auto animate-pulse" />
                        <span className="text-text-primary font-bold">Sync Ledger</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-border-custom flex items-center justify-between text-[9px] text-text-dim">
                      <span>ERP COHERENCE RANGE:</span>
                      <span className="text-accent font-bold">OPTIMAL</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="p2-flow"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="p-4 bg-bg border border-border-custom rounded-lg font-mono text-[10px] space-y-3.5 text-text-muted animate-fade-in"
                  >
                    <div className="flex items-center justify-between border-b border-border-custom pb-2">
                      <span className="text-accent font-bold">SYSTEM CORE</span>
                      <span className="text-cream">MULTI-AGENT DECISIONING</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream" />
                        <span>Data Lakehouse Intake</span>
                        <ArrowRight className="w-3 h-3 text-text-dim ml-auto" />
                        <span className="text-text-primary font-bold">Vector / Embed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream" />
                        <span>RAG Context Window</span>
                        <ArrowRight className="w-3 h-3 text-text-dim ml-auto" />
                        <span className="text-text-primary font-bold">LLM Orchestration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        <span>Decision Action Agents</span>
                        <ArrowRight className="w-3 h-3 text-text-dim ml-auto" />
                        <span className="text-text-primary font-bold">JSON Dispatch</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-border-custom flex items-center justify-between text-[9px] text-text-dim">
                      <span>INTELLIGENCE CONFIDENCE:</span>
                      <span className="text-accent font-bold">99.4% RAW</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Capabilities List Column */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <AnimatePresence mode="popLayout">
              {selectedPractice.capabilities.map((cap, i) => (
                <motion.div
                  key={cap.num}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-s1 hover:bg-s2 border border-border-custom hover:border-accent/30 p-6 sm:p-7 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-5 items-start transition-all duration-300 relative group cursor-default"
                >
                  {/* Decorative glowing hover bar on left */}
                  <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg" />

                  {/* Left Number + Dynamic Icon */}
                  <div className="md:col-span-2 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-3">
                    <span className="text-[11px] text-text-dim font-mono tracking-widest font-bold">
                      {cap.num} /
                    </span>
                    <div className="p-2.5 rounded-lg bg-bg border border-border-custom group-hover:bg-s1 transition-colors">
                      {getCapIcon(cap.num)}
                    </div>
                  </div>

                  {/* Sub-Contents */}
                  <div className="md:col-span-10 flex flex-col gap-4">
                    <h4 className="font-serif text-xl sm:text-2xl font-normal text-text-primary leading-tight group-hover:text-accent transition-colors">
                      {cap.title} <span className="italic text-cream font-medium">{cap.emWord}</span>
                    </h4>
                    
                    <p className="font-sans text-xs sm:text-sm font-light text-text-muted leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Styled Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cap.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] uppercase font-bold tracking-wider text-text-muted border border-border-custom bg-bg px-3 py-1 rounded-[3px] group-hover:border-border-mid transition-colors font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
