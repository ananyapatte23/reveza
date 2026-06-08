/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import ServiceProcess from './components/ServiceProcess'; // Deals with Engagement Models
import VideoPortfolio from './components/VideoPortfolio'; // Deals with Enterprise Cases
import ServicesDetail from './components/ServicesDetail'; // Deals with Services & Tech Stack
import BeliefsAndIndustries from './components/BeliefsAndIndustries'; // Deals with Beliefs & Sectors
import InteractivePlanner from './components/InteractivePlanner'; // Deals with RFP estimations
import Footer from './components/Footer';
import { AnimatePresence } from 'motion/react';
import { TICKER_ITEMS } from './data';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [hoveredStackRow, setHoveredStackRow] = useState<number | null>(null);

  // Stack diagram descriptors for premium micro-interactions
  const stackDescriptions = [
    'Web, Mobile, Store & Voice channels where customer action happens.',
    'Production-grade Multi-Agent, RAG, and reasoning models optimizing operational decisions in real-time.',
    'Composable, API-first streaming fabrics connecting real-time telemetry to the data lakes.',
    'S/4HANA Finance, Supply chain, and Commerce platform of record.',
    'Multi-cloud Kubernetes, continuous identity security, and distributed telemetry observability.'
  ];

  return (
    <div className="bg-bg min-h-screen relative text-text-primary selection:bg-accent selection:text-bg font-sans" id="app-root">
      
      {/* 1. Navbar */}
      <Navbar onOpenPlanner={() => setPlannerOpen(true)} />

      {/* 2. Hero Segment */}
      <Hero onOpenPlanner={() => setPlannerOpen(true)} />

      {/* 3. Ticker Track Marquee */}
      <div className="w-full py-3 bg-s1 border-y border-border-custom overflow-hidden flex items-center" id="techniques-ticker-bar">
        <div className="flex whitespace-nowrap gap-12 shrink-0 animate-marquee">
          {[...Array(4)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex gap-12 shrink-0 items-center justify-around pl-12 min-w-full">
              {TICKER_ITEMS.map((item, idx) => (
                <span 
                  key={idx} 
                  className={`text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] cursor-default select-none flex items-center gap-2 ${
                    idx % 3 === 0 ? 'text-accent' : 'text-text-dim'
                  }`}
                >
                  <Sparkles className="w-2.5 h-2.5 shrink-0" /> {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Thesis Segment */}
      <section id="thesis" className="py-24 px-6 md:px-10 border-b border-border-custom max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.16em] text-text-dim mb-4 flex items-center gap-2">
            <span className="w-10 h-[1px] bg-border-mid" /> Our thesis
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-[-0.03em] text-text-primary">
            Transformation isn't a project — it's an <span className="italic text-cream font-normal">operating posture.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 font-sans text-sm sm:text-base font-light text-text-muted leading-relaxed space-y-6">
          <p>
            Most transformation programs stall because they're treated as one-time migrations. The architecture lands; the operating model never catches up. Six quarters later, the platform is live and the business still moves at its old speed.
          </p>
          <p>
            <strong className="text-text-primary font-medium">We work differently.</strong> Every engagement starts with the operating posture — how decisions get made, where data flows, what the human-AI handoff looks like — and the technology choices follow. <span className="italic text-cream">AI isn't a layer we bolt on;</span> it's a design principle from the first conversation.
          </p>
          <p>
            That's what lets a transformation continue compounding long after we've handed it over.
          </p>
        </div>
      </section>

      {/* 5. Capabilities Segment */}
      <Capabilities />

      {/* 6. Stack Diagram Block (The practices intersection) */}
      <section id="stack" className="py-24 px-6 md:px-10 border-t border-border-custom bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Explanation panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[11px] uppercase tracking-[0.16em] text-text-dim flex items-center gap-2">
              <span className="w-10 h-[1px] bg-border-mid" /> How the two practices meet
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.03em] text-text-primary">
              ERP runs the <span className="italic text-cream">business.</span> AI makes it <span className="italic text-cream">learn.</span>
            </h2>
            <p className="font-sans text-sm text-text-muted font-light leading-relaxed">
              The integration &amp; data fabric is where the two practices meet. ERP modernization gives you a clean, queryable system of record. AI &amp; Intelligence makes it act on what it sees. Together, transformation outcomes compound — month over month, not just at go-live.
            </p>
            
            {/* Interactive explanation ticker on hover */}
            <div className="bg-s1 border border-border-custom p-4 rounded-[4px] min-h-[96px] flex flex-col justify-center transition-all duration-200">
              <span className="text-[9px] uppercase tracking-wider text-accent font-mono block mb-1">
                {hoveredStackRow === null ? 'System Interaction Insight' : 'Layer Focus'}
              </span>
              <p className="text-xs text-text-primary font-sans leading-relaxed">
                {hoveredStackRow === null 
                  ? 'Hover on any block of the architectural blueprint on the right to see operational flow integration.' 
                  : stackDescriptions[hoveredStackRow]
                }
              </p>
            </div>
          </div>

          {/* Graphical diagram layer */}
          <div className="lg:col-span-7 flex flex-col gap-2.5 max-w-2xl w-full">
            
            {/* Row 0: Channels */}
            <div 
              onMouseEnter={() => setHoveredStackRow(0)}
              onMouseLeave={() => setHoveredStackRow(null)}
              className="bg-s1 hover:bg-s2 border border-border-custom py-5 px-6 rounded-[4px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition-colors cursor-crosshair"
            >
              <div className="font-serif text-lg font-normal text-text-primary">Channels &amp; Experience</div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-text-muted">
                <span>Web</span><span>·</span><span>Mobile</span><span>·</span><span>Store</span><span>·</span><span>Voice</span>
              </div>
            </div>

            {/* Row 1: AI */}
            <div 
              onMouseEnter={() => setHoveredStackRow(1)}
              onMouseLeave={() => setHoveredStackRow(null)}
              className="bg-s1 hover:bg-s2 border-2 border-accent/25 py-6 px-6 rounded-[4px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition-colors cursor-crosshair bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 to-transparent"
            >
              <div className="font-serif text-lg font-semibold text-accent flex items-center gap-1.5">
                AI &amp; Intelligence Layer
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-accent">
                <span>Agents</span><span>·</span><span>Decisioning</span><span>·</span><span>Real-Time Personalization</span>
              </div>
            </div>

            {/* Row 2: Integration Tag */}
            <div 
              onMouseEnter={() => setHoveredStackRow(2)}
              onMouseLeave={() => setHoveredStackRow(null)}
              className="bg-s1 hover:bg-s2 border border-accent/15 py-5 px-6 rounded-[4px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition-colors cursor-crosshair"
            >
              <div className="font-serif text-lg font-normal text-text-primary italic">Integration &amp; Data Fabric</div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-text-muted">
                <span>APIs</span><span>·</span><span>Events</span><span>·</span><span>Streams</span><span>·</span><span>Lakehouse</span>
              </div>
            </div>

            {/* Row 3: ERP Core */}
            <div 
              onMouseEnter={() => setHoveredStackRow(3)}
              onMouseLeave={() => setHoveredStackRow(null)}
              className="bg-s1 hover:bg-s2 border border-border-custom py-6 px-6 rounded-[4px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition-colors cursor-crosshair"
            >
              <div className="font-serif text-lg font-normal text-text-primary">ERP &amp; Core Systems</div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-text-muted">
                <span>Finance</span><span>·</span><span>Supply</span><span>·</span><span>Operations</span><span>·</span><span>Commerce</span>
              </div>
            </div>

            {/* Row 4: Foundations */}
            <div 
              onMouseEnter={() => setHoveredStackRow(4)}
              onMouseLeave={() => setHoveredStackRow(null)}
              className="bg-s1 hover:bg-s2 border border-border-custom py-5 px-6 rounded-[4px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition-colors cursor-crosshair"
            >
              <div className="font-serif text-lg font-normal text-text-primary leading-tight">Foundations</div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-text-dim">
                <span>Cloud</span><span>·</span><span>Security</span><span>·</span><span>Identity</span><span>·</span><span>Observability</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Cases Showcase Segment */}
      <VideoPortfolio />

      {/* 8. Six Lines & categorization tech Stack */}
      <ServicesDetail />

      {/* 9. Engagement Models Segment */}
      <ServiceProcess />

      {/* 10. Beliefs & industries cold box */}
      <BeliefsAndIndustries />

      {/* 11. Custom Contact Form/Inquiry CTA Section */}
      <section id="contact" className="py-24 px-6 md:px-10 border-t border-border-custom bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-none tracking-tight text-text-primary select-none">
              Have a transformation in mind? <span className="italic text-cream block mt-2">Tell us.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="divide-y divide-border-custom">
              <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#444440] font-mono block mb-1">
                    Services &amp; engagements
                  </span>
                  <a href="mailto:sales@reveza.in" className="text-sm text-text-muted hover:text-accent transition-colors font-mono">
                    sales@reveza.in
                  </a>
                </div>
                <button 
                  onClick={() => setPlannerOpen(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-accent text-bg hover:opacity-90 transition-opacity font-semibold text-xs rounded-[3px] w-fit cursor-pointer"
                >
                  Start Scoping Planner <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="py-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#444440] font-mono block mb-1">
                  Partnerships &amp; alliances
                </span>
                <a href="mailto:sales@reveza.in" className="text-sm text-text-muted hover:text-accent transition-colors font-mono">
                  sales@reveza.in
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="mailto:sales@reveza.in" className="px-5 py-3 rounded-[3px] bg-s1 border border-border-custom text-text-muted hover:text-text-primary hover:border-border-mid text-xs transition-colors">
                Request a demo →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 12. Branded Legal Footer */}
      <Footer />

      {/* 13. Dynamic Interactive Scoping Planner */}
      <AnimatePresence>
        {plannerOpen && (
          <InteractivePlanner 
            isOpen={plannerOpen} 
            onClose={() => setPlannerOpen(false)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
