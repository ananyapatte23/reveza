/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import ServiceProcess from './components/ServiceProcess'; // Deals with Engagement Models
import VideoPortfolio from './components/VideoPortfolio'; // Deals with Enterprise Cases
import ServicesDetail from './components/ServicesDetail'; // Deals with Services & Tech Stack
import BeliefsAndIndustries from './components/BeliefsAndIndustries'; // Deals with Beliefs & Sectors
import InteractivePlanner from './components/InteractivePlanner'; // Deals with RFP estimations
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'motion/react';
import { TICKER_ITEMS } from './data';
import { Sparkles, ArrowRight } from 'lucide-react';

type PageType = 'home' | 'capabilities' | 'cases' | 'services' | 'industries' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [hoveredStackRow, setHoveredStackRow] = useState<number | null>(null);

  // Synchronize hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash === 'thesis' || hash === 'top' || !hash) {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'capabilities') {
        setCurrentPage('capabilities');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'cases') {
        setCurrentPage('cases');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'services' || hash === 'services-detail') {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'industries') {
        setCurrentPage('industries');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    handleHashChange(); // initial execution
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Stack diagram descriptors for premium micro-interactions
  const stackDescriptions = [
    'Web, Mobile, Store & Voice channels where customer action happens.',
    'Production-grade Multi-Agent, RAG, and reasoning models optimizing operational decisions in real-time.',
    'Composable, API-first streaming fabrics connecting real-time telemetry to the data lakes.',
    'S/4HANA Finance, Supply chain, and Commerce platform of record.',
    'Multi-cloud Kubernetes, continuous identity security, and distributed telemetry observability.'
  ];

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
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
            <section id="thesis-block" className="py-24 px-6 md:px-10 border-b border-border-custom max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
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
                
                <div className="pt-4">
                  <a
                    href="#capabilities"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-text-primary transition-colors font-mono"
                  >
                    View our practices <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* 5. Stack Diagram Block (The practices intersection) */}
            <section id="stack" className="py-24 px-6 md:px-10 bg-bg">
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
                <div className="lg:col-span-7 flex flex-col gap-3 max-w-2xl w-full">
                  
                  {/* Row 0: Channels */}
                  <motion.div 
                    onMouseEnter={() => setHoveredStackRow(0)}
                    onMouseLeave={() => setHoveredStackRow(null)}
                    whileHover={{ x: 8, scale: 1.012 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`bg-s1 border py-5 px-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 cursor-crosshair shadow-sm transition-all duration-300 ${
                      hoveredStackRow === 0 ? 'border-accent shadow-md bg-s2/20' : 'border-border-custom'
                    }`}
                  >
                    <div className="font-serif text-lg font-normal text-text-primary">Channels &amp; Experience</div>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-text-muted">
                      <span>Web</span><span>·</span><span>Mobile</span><span>·</span><span>Store</span><span>·</span><span>Voice</span>
                    </div>
                  </motion.div>

                  {/* Row 1: AI */}
                  <motion.div 
                    onMouseEnter={() => setHoveredStackRow(1)}
                    onMouseLeave={() => setHoveredStackRow(null)}
                    whileHover={{ x: 8, scale: 1.012 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`bg-s1 border-2 py-6 px-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 cursor-crosshair bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 to-transparent transition-all duration-300 ${
                      hoveredStackRow === 1 ? 'border-accent shadow-lg bg-s2/40' : 'border-accent/40'
                    }`}
                  >
                    <div className="font-serif text-lg font-semibold text-accent flex items-center gap-1.5">
                      AI &amp; Intelligence Layer
                    </div>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-accent">
                      <span>Agents</span><span>·</span><span>Decisioning</span><span>·</span><span>Real-Time Personalization</span>
                    </div>
                  </motion.div>

                  {/* Row 2: Integration Tag */}
                  <motion.div 
                    onMouseEnter={() => setHoveredStackRow(2)}
                    onMouseLeave={() => setHoveredStackRow(null)}
                    whileHover={{ x: 8, scale: 1.012 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`bg-s1 border py-5 px-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 cursor-crosshair transition-all duration-300 ${
                      hoveredStackRow === 2 ? 'border-cream shadow-md bg-s2/20' : 'border-border-custom'
                    }`}
                  >
                    <div className="font-serif text-lg font-normal text-text-primary italic">Integration &amp; Data Fabric</div>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-text-muted">
                      <span>APIs</span><span>·</span><span>Events</span><span>·</span><span>Streams</span><span>·</span><span>Lakehouse</span>
                    </div>
                  </motion.div>

                  {/* Row 3: ERP Core */}
                  <motion.div 
                    onMouseEnter={() => setHoveredStackRow(3)}
                    onMouseLeave={() => setHoveredStackRow(null)}
                    whileHover={{ x: 8, scale: 1.012 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`bg-s1 border py-6 px-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 cursor-crosshair transition-all duration-300 ${
                      hoveredStackRow === 3 ? 'border-accent shadow-md bg-s2/20' : 'border-border-custom'
                    }`}
                  >
                    <div className="font-serif text-lg font-normal text-text-primary">ERP &amp; Core Systems</div>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-text-muted">
                      <span>Finance</span><span>·</span><span>Supply</span><span>·</span><span>Operations</span><span>·</span><span>Commerce</span>
                    </div>
                  </motion.div>

                  {/* Row 4: Foundations */}
                  <motion.div 
                    onMouseEnter={() => setHoveredStackRow(4)}
                    onMouseLeave={() => setHoveredStackRow(null)}
                    whileHover={{ x: 8, scale: 1.012 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`bg-s1 border py-5 px-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 cursor-crosshair transition-all duration-300 ${
                      hoveredStackRow === 4 ? 'border-border-mid shadow-md bg-s2/20' : 'border-border-custom'
                    }`}
                  >
                    <div className="font-serif text-lg font-normal text-text-primary leading-tight">Foundations</div>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-text-dim">
                      <span>Cloud</span><span>·</span><span>Security</span><span>·</span><span>Identity</span><span>·</span><span>Observability</span>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          </>
        );

      case 'capabilities':
        return (
          <div className="bg-bg pb-24">
            <div className="pt-32 pb-12 px-6 md:px-10 max-w-7xl mx-auto border-b border-border-custom mb-12">
              <span className="text-[10px] uppercase font-bold font-mono tracking-widest text-accent mb-2 block animate-fade-in">
                Practices &amp; Specializations
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-normal text-text-primary tracking-tight">
                Enterprise <span className="italic text-cream font-normal">Capabilities</span>
              </h1>
              <p className="text-sm text-text-muted mt-3 font-light max-w-2xl bg-transparent">
                Modular transformation blueprints designed to modernize legacy digital frameworks and operate continuous growth intelligence.
              </p>
            </div>
            <Capabilities />
          </div>
        );

      case 'cases':
        return (
          <div className="bg-bg pb-24">
            <div className="pt-32 pb-12 px-6 md:px-10 max-w-7xl mx-auto border-b border-border-custom mb-12">
              <span className="text-[10px] uppercase font-bold font-mono tracking-widest text-accent mb-2 block animate-fade-in">
                Enterprise Engagements
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-normal text-text-primary tracking-tight">
                Delivered <span className="italic text-cream font-normal">Impact Studies</span>
              </h1>
              <p className="text-sm text-text-muted mt-3 font-light max-w-2xl bg-transparent">
                Explore our portfolio of comprehensive SAP platform conversions and multi-agent neural automation programs.
              </p>
            </div>
            <VideoPortfolio />
          </div>
        );

      case 'services':
        return (
          <div className="bg-bg pb-24">
            <div className="pt-32 pb-12 px-6 md:px-10 max-w-7xl mx-auto border-b border-border-custom mb-12">
              <span className="text-[10px] uppercase font-bold font-mono tracking-widest text-accent mb-2 block animate-fade-in">
                Consulting &amp; Deliverables
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-normal text-text-primary tracking-tight">
                Services &amp; <span className="italic text-cream font-normal">Engagement Models</span>
              </h1>
              <p className="text-sm text-text-muted mt-3 font-light max-w-2xl bg-transparent">
                Six discrete lines of specialized architectural modernization, accompanied by strategic SLAs and KPI-linked continuous support structures.
              </p>
            </div>
            <ServicesDetail />
            <div className="mt-16">
              <ServiceProcess />
            </div>
          </div>
        );

      case 'industries':
        return (
          <div className="bg-bg pb-24">
            <div className="pt-32 pb-12 px-6 md:px-10 max-w-7xl mx-auto border-b border-border-custom mb-12">
              <span className="text-[10px] uppercase font-bold font-mono tracking-widest text-accent mb-2 block">
                Sectors &amp; Axioms
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-normal text-text-primary tracking-tight">
                Industries &amp; <span className="italic text-cream font-normal">Core Beliefs</span>
              </h1>
              <p className="text-sm text-text-muted mt-3 font-light max-w-2xl bg-transparent">
                Operating at the razor's edge of critical business lines: discrete manufacturing, supply chains, commerce, and financial systems of record.
              </p>
            </div>
            <BeliefsAndIndustries />
          </div>
        );

      case 'contact':
        return (
          <div className="bg-bg pb-24">
            <div className="pt-32 pb-12 px-6 md:px-10 max-w-7xl mx-auto border-b border-border-custom mb-12">
              <span className="text-[10px] uppercase font-bold font-mono tracking-widest text-accent mb-2 block">
                Enterprise RFP Portal
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-normal text-text-primary tracking-tight">
                Start a <span className="italic text-cream font-normal">Transformation</span>
              </h1>
              <p className="text-sm text-text-muted mt-3 font-light max-w-2xl bg-transparent">
                Establish your modernization parameters below to compute an aggregated provisional estimate, and log a formal inquiry.
              </p>
            </div>

            <div className="py-12 px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 space-y-8 bg-s1 p-6 border border-border-custom rounded-[4px]">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-normal italic text-cream">Direct Inquiries</h3>
                  <p className="text-xs text-text-muted leading-relaxed font-light">
                    Submit your RFPs, enterprise architecture blueprints, or partner alliances directly to our leadership teams.
                  </p>
                </div>
                
                <div className="space-y-6 divide-y divide-border-custom">
                  <div className="pt-4 pb-2">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-accent mb-1.5 block font-mono">
                      General &amp; Sales
                    </span>
                    <a href="mailto:sales@reveza.in" className="text-sm font-semibold text-text-primary hover:text-accent transition-colors font-mono">
                      sales@reveza.in
                    </a>
                  </div>
                  
                  <div className="pt-4 pb-2">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-accent mb-1.5 block font-mono">
                      Partnerships &amp; Alliances
                    </span>
                    <a href="mailto:sales@reveza.in" className="text-sm font-semibold text-text-primary hover:text-accent transition-colors font-mono">
                      sales@reveza.in
                    </a>
                  </div>

                  <div className="pt-4 pb-2">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-accent mb-1.5 block font-mono">
                      Headquarters
                    </span>
                    <div className="text-xs text-text-muted font-light leading-relaxed font-sans">
                      Reveza Technologies Private Ltd.<br />
                      MG Road, Bengaluru, India
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-8">
                <InteractivePlanner isInline={true} />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-bg min-h-screen relative text-text-primary selection:bg-accent selection:text-bg font-sans flex flex-col justify-between overflow-hidden" id="app-root">
      
      {/* Exquisite full-screen floating ambient active background blobs (White / Blue theme look) */}
      <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-accent/4 rounded-full filter blur-[100px] pointer-events-none z-0 animate-blob-slow-1" />
      <div className="absolute top-[40%] right-10 w-[400px] h-[400px] bg-cream/4 rounded-full filter blur-[100px] pointer-events-none z-0 animate-blob-slow-2" />
      <div className="absolute bottom-20 left-[20%] w-[500px] h-[500px] bg-accent/3 rounded-full filter blur-[120px] pointer-events-none z-0 animate-blob-slow-1" />
      
      <div className="flex-1 flex flex-col relative z-10">
        {/* 1. Navbar */}
        <Navbar onOpenPlanner={() => setPlannerOpen(true)} currentPage={currentPage} />

        {/* Dynamic Page Rendering with Motion Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex-1 w-full"
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 12. Branded Legal Footer */}
      <Footer />

      {/* 13. Dynamic Interactive Scoping Planner (Standard Modal Trigger) */}
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
