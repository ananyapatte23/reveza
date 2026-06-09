/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Network, CheckSquare, Layers, Gauge, Database, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenPlanner: () => void;
}

export default function Hero({ onOpenPlanner }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [promptIdx, setPromptIdx] = useState(0);
  const [activeKpi, setActiveKpi] = useState<'latency' | 'throughput' | 'integration'>('latency');
  const [systemLoad, setSystemLoad] = useState(42);

  const prompts = [
    'Deploy agentic workflows for real-time inventory forecasting...',
    'Migrate legacy on-prem core to S/4HANA with zero downtime...',
    'Orchestrate unified AI and lakehouse data streaming layers...',
    'Implement multi-country fiscal compliance APIs across 17 nations...'
  ];

  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let charIdx = 0;
    let timer: NodeJS.Timeout;

    function tick() {
      const fullPrompt = prompts[promptIdx];

      if (!isDeleting) {
        currentText = fullPrompt.substring(0, charIdx + 1);
        charIdx++;
        setTypedText(currentText);

        if (charIdx === fullPrompt.length) {
          isDeleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
      } else {
        currentText = fullPrompt.substring(0, charIdx - 1);
        charIdx--;
        setTypedText(currentText);

        if (charIdx === 0) {
          isDeleting = false;
          setPromptIdx((prev) => (prev + 1) % prompts.length);
          timer = setTimeout(tick, 500);
          return;
        }
      }

      timer = setTimeout(tick, isDeleting ? 25 : 55);
    }

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [promptIdx]);

  // Simulate subtle updates to the load gauge
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemLoad((prev) => {
        const offset = Math.floor(Math.random() * 5) - 2;
        const next = prev + offset;
        return next < 30 ? 32 : next > 60 ? 58 : next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative min-h-[95vh] flex flex-col justify-end px-6 md:px-12 pt-36 pb-20 bg-bg overflow-hidden border-b border-border-custom">
      {/* Visual luxury framework: Subtle lines, dots, floating animated blobs & scan line scanners */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.28] bg-[radial-gradient(var(--color-border-mid)_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Premium High-Tech Floating Blobs (High animated features) */}
      <div className="absolute top-12 right-12 w-[480px] h-[480px] bg-accent/8 rounded-full filter blur-[120px] pointer-events-none z-0 animate-blob-slow-1" />
      <div className="absolute bottom-1/5 left-1/10 w-[350px] h-[350px] bg-cream/8 rounded-full filter blur-[90px] pointer-events-none z-0 animate-blob-slow-2" />
      
      {/* Dynamic scan line effect to simulate server scanning */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-[linear-gradient(to_bottom,rgba(14,165,233,0.08),transparent)] pointer-events-none z-0 animate-scan" style={{ width: '100vw' }} />

      {/* Sophisticated fine architectural line dividers */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-border-custom/80 pointer-events-none hidden sm:block" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-border-custom/80 pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-12 sm:pl-6 sm:pr-6">
        
        {/* Editorial Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Typography Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Elegant Tag/Metadata Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-s1 border border-border-custom text-[10px] sm:text-xs font-semibold tracking-wide text-accent shadow-sm relative overflow-hidden group">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping absolute left-3.5" />
              <span className="w-2 h-2 rounded-full bg-accent relative z-10" />
              <span className="ml-1 text-text-primary">Reveza Technologies</span>
              <span className="text-border-mid">|</span>
              <span className="text-accent">Enterprise transformation</span>
            </div>

            {/* Premium Wide / Serif Pairing Title */}
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.4rem] font-normal leading-[1.05] tracking-[-0.04em] text-text-primary select-none">
              Enterprise core.<br />
              Accelerated with <span className="italic font-medium shimmer-text">intelligence.</span>
            </h1>

            {/* Descriptive Body Copy with exquisite spacing */}
            <p className="font-sans text-sm sm:text-base md:text-lg font-light text-text-muted max-w-2xl leading-relaxed">
              We engineer beautiful, resilient, digital cores and high-throughput streaming pipelines—then overlay multi-agent reasoning models to let operations negotiate, synchronize, and auto-correct supply events in real-time.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <a
                href="#contact"
                className="group relative flex items-center gap-2.5 px-7 py-4 rounded-lg bg-accent text-bg text-xs font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(168,130,96,0.3)] hover:-translate-y-0.5 cursor-pointer"
              >
                Start Scoping <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#capabilities"
                className="flex items-center gap-2 px-6 py-4 border border-border-mid rounded-lg text-text-muted hover:text-text-primary hover:bg-s2 text-xs font-bold tracking-wider transition-all duration-200"
              >
                View practices
              </a>
            </div>
          </div>

          {/* Interactive Core Architecture Dashboard (Richer Visuals constraint) */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-s1 border border-border-custom rounded-xl p-6 shadow-xl relative overflow-hidden flex flex-col gap-4">
              
              {/* Decorative background grid pattern inside widget */}
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--color-accent)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-accent)_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none" />

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-border-custom pb-3">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-text-dim">
                  <Cpu className="w-3.5 h-3.5 text-accent animate-spin" />
                  <span>Interactive Systems Monitor</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-mono text-[9px] font-semibold">
                  LIVE FEED
                </span>
              </div>

              {/* Simulated Enterprise Streaming Console */}
              <div className="bg-bg border border-border-custom rounded-lg p-3.5 min-h-[64px] relative flex flex-col justify-center overflow-hidden">
                <div className="absolute right-2 top-2 w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                <div className="flex items-center gap-2 text-[8px] font-mono tracking-widest text-text-dim uppercase mb-1">
                  <Network className="w-3 h-3 text-cream" /> Streaming Context
                </div>
                <span className="font-mono text-[10.5px] text-text-primary leading-tight break-all font-semibold">
                  {typedText}
                  <span className="animate-pulse text-accent font-bold">_</span>
                </span>
              </div>

              {/* Interactive Multi-State Visual KPI Widgets */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <button 
                  onClick={() => setActiveKpi('latency')}
                  className={`p-2.5 rounded-lg border transition-all text-left flex flex-col justify-between cursor-pointer ${
                    activeKpi === 'latency' 
                      ? 'bg-accent/8 border-accent text-accent shadow-sm' 
                      : 'bg-bg/50 border-border-custom hover:border-border-mid text-text-muted hover:bg-s2/30'
                  }`}
                >
                  <Gauge className="w-4 h-4 mb-1.5" />
                  <span className="text-[10px] font-semibold tracking-tight">Latency</span>
                  <span className="text-[11px] font-mono font-bold mt-1">14ms</span>
                </button>

                <button 
                  onClick={() => setActiveKpi('throughput')}
                  className={`p-2.5 rounded-lg border transition-all text-left flex flex-col justify-between cursor-pointer ${
                    activeKpi === 'throughput' 
                      ? 'bg-cream/8 border-cream text-cream shadow-sm' 
                      : 'bg-bg/50 border-border-custom hover:border-border-mid text-text-muted hover:bg-s2/30'
                  }`}
                >
                  <Database className="w-4 h-4 mb-1.5" />
                  <span className="text-[10px] font-semibold tracking-tight">Sync Rate</span>
                  <span className="text-[11px] font-mono font-bold mt-1">99.8%</span>
                </button>

                <button 
                  onClick={() => setActiveKpi('integration')}
                  className={`p-2.5 rounded-lg border transition-all text-left flex flex-col justify-between cursor-pointer ${
                    activeKpi === 'integration' 
                      ? 'bg-accent/8 border-accent text-accent shadow-sm' 
                      : 'bg-bg/50 border-border-custom hover:border-border-mid text-text-muted hover:bg-s2/30'
                  }`}
                >
                  <Layers className="w-4 h-4 mb-1.5" />
                  <span className="text-[10px] font-semibold tracking-tight">Data Pool</span>
                  <span className="text-[11px] font-mono font-bold mt-1">TB/sec</span>
                </button>
              </div>

              {/* Graphical mini metric panel depends on the activated KPIs */}
              <div className="bg-s2 border border-border-custom p-4 rounded-lg text-[11px] font-sans space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-text-muted">
                  <span className="font-semibold uppercase tracking-wider text-accent">Active Metric Target</span>
                  <span>SYS_HEALTH</span>
                </div>
                
                <AnimatePresence mode="wait">
                  {activeKpi === 'latency' && (
                    <motion.div 
                      key="lat" 
                      initial={{ opacity: 0, scale: 0.98 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      className="space-y-2.5"
                    >
                      <div className="text-[10px] font-bold text-text-primary">Agent workflow latency cut by 4.2x</div>
                      <div className="w-full bg-bg h-2 rounded-full overflow-hidden border border-border-custom">
                        <div className="bg-accent h-full rounded-full transition-all duration-550" style={{ width: '82%' }} />
                      </div>
                      
                      {/* Interactive Topology Graph (High Animated Feature) */}
                      <div className="h-16 bg-bg/70 rounded border border-border-custom relative flex items-center justify-around overflow-hidden p-1.5">
                        <span className="absolute inset-0 bg-[radial-gradient(var(--color-accent)_0.8px,transparent_0.8px)] [background-size:6.5px_6.5px] opacity-[0.25]" />
                        <div className="flex flex-col items-center z-10">
                          <span className="text-[8px] font-mono font-bold text-text-dim">DB</span>
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        </div>
                        <svg className="w-12 h-2 text-accent/80 z-10 self-center">
                          <line x1="0" y1="4" x2="48" y2="4" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 2" className="animate-[marquee_2s_linear_infinite]" />
                        </svg>
                        <div className="flex flex-col items-center z-10">
                          <span className="text-[8px] font-mono font-bold text-text-dim">FABRIC</span>
                          <span className="w-2.5 h-2.5 rounded-full bg-cream animate-ping" />
                        </div>
                        <svg className="w-12 h-2 text-cream/80 z-10 self-center">
                          <line x1="0" y1="4" x2="48" y2="4" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 2" className="animate-[marquee_1s_linear_infinite]" />
                        </svg>
                        <div className="flex flex-col items-center z-10">
                          <span className="text-[8px] font-mono font-bold text-text-dim">AI AGENT</span>
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeKpi === 'throughput' && (
                    <motion.div 
                      key="thr" 
                      initial={{ opacity: 0, scale: 0.98 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      className="space-y-2.5"
                    >
                      <div className="text-[10px] font-bold text-text-primary">S/4 Real-Time Core synchronization</div>
                      <div className="w-full bg-bg h-2 rounded-full overflow-hidden border border-border-custom">
                        <div className="bg-cream h-full rounded-full transition-all duration-550" style={{ width: '99.8%' }} />
                      </div>

                      {/* Interactive Telemetry wave (High Animated Feature) */}
                      <div className="h-16 bg-bg/70 rounded border border-border-custom relative overflow-hidden flex items-center justify-center">
                        <svg viewBox="0 0 100 40" className="w-full h-full text-cream">
                          <path 
                            d="M 0,20 Q 15,5 30,20 T 60,20 T 90,20 L 100,20" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2.5"
                            className="animate-[shimmer_5s_infinite_linear]"
                            strokeDasharray="40 10" 
                          />
                        </svg>
                        <div className="absolute top-2 left-3 font-mono text-[8px] font-bold text-cream">FLOW SYNCHRONIZED</div>
                      </div>
                    </motion.div>
                  )}
                  {activeKpi === 'integration' && (
                    <motion.div 
                      key="int" 
                      initial={{ opacity: 0, scale: 0.98 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      className="space-y-2.5"
                    >
                      <div className="text-[10px] font-bold text-text-primary">Continuous streaming telemetry flow</div>
                      <div className="w-full bg-bg h-2 rounded-full overflow-hidden border border-border-custom">
                        <div className="bg-accent h-full rounded-full transition-all duration-550" style={{ width: '68%' }} />
                      </div>

                      {/* Diagnostic logs feed */}
                      <div className="h-16 bg-bg border border-border-custom rounded p-2 font-mono text-[8.5px] leading-snug overflow-hidden text-[#5C6462]">
                        <div className="text-accent">✓ COMPOSABLE ROUTE 82 ACTIVED</div>
                        <div className="text-text-muted">→ INCOMING SRE EVENT RATE: 42.1k/sec</div>
                        <div className="animate-pulse text-cream">● SAP LEDGER INTEGRATED SYNC STATUS: OK</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="flex items-center justify-between text-[9px] font-mono text-text-dim pt-2 border-t border-border-custom/60">
                  <span>SRE Load Gage: {systemLoad}%</span>
                  <span>Operational Status: Perfect</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* High Credibility Metrics Grid with Custom Animated Sparklines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-border-custom">
          
          <div className="flex flex-col relative group">
            <div className="absolute top-0 right-0 py-1 text-[9px] font-mono text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              CRITICAL CORE
            </div>
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-accent leading-none tracking-tight flex items-baseline gap-2">
              40<span className="text-xl text-cream ml-0.5">+</span>
              {/* Dynamic Sparkline (High animated visual feature) */}
              <svg className="w-16 h-8 text-accent/40 stroke-[2] ml-auto overflow-visible group-hover:text-accent transition-colors">
                <path d="M0,25 Q15,10 30,22 T60,5 T90,20" fill="none" stroke="currentColor" className="animate-[dash_1.5s_ease-out_infinite]" strokeDasharray="100" strokeDashoffset="0" />
              </svg>
            </div>
            <div className="text-[11px] text-text-dim mt-2 tracking-widest font-mono uppercase font-bold">
              Combined enterprise pedigree
            </div>
            <p className="text-xs text-text-muted mt-1 font-light leading-relaxed">
              Decades of experience implementing complex ERP layers for high-throughput heavy brands.
            </p>
          </div>

          <div className="flex flex-col relative group">
            <div className="absolute top-0 right-0 py-1 text-[9px] font-mono text-cream font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              MULTI-LATERAL
            </div>
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-none tracking-tight flex items-baseline gap-2">
              17<span className="text-xl text-accent ml-0.5">+</span>
              <svg className="w-16 h-8 text-cream/40 stroke-[2] ml-auto overflow-visible group-hover:text-cream transition-colors">
                <path d="M0,15 T30,5 T60,25 T90,10" fill="none" stroke="currentColor" className="animate-[dash_2s_ease-out_infinite]" strokeDasharray="100" strokeDashoffset="0" />
              </svg>
            </div>
            <div className="text-[11px] text-text-dim mt-2 tracking-widest font-mono uppercase font-bold">
              Countries delivered
            </div>
            <p className="text-xs text-text-muted mt-1 font-light leading-relaxed">
              Proven multinational rollout compliance, including localized tax, payroll, and customs.
            </p>
          </div>

          <div className="flex flex-col relative group">
            <div className="absolute top-0 right-0 py-1 text-[9px] font-mono text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              COLLOCATED
            </div>
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-accent leading-none tracking-tight flex items-baseline gap-2">
              2
              <svg className="w-16 h-8 text-accent/40 stroke-[2] ml-auto overflow-visible group-hover:text-accent transition-colors">
                <path d="M0,10 Q25,25 50,5 T90,28" fill="none" stroke="currentColor" className="animate-[dash_1.2s_ease-out_infinite]" strokeDasharray="100" strokeDashoffset="0" />
              </svg>
            </div>
            <div className="text-[11px] text-text-dim mt-2 tracking-widest font-mono uppercase font-bold">
              Integrated Practices
            </div>
            <p className="text-xs text-text-muted mt-1 font-light leading-relaxed">
              No split vendor overhead. Your digital core and AI layers live on a single delivery pipeline.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
