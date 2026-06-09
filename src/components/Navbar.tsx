/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenPlanner: () => void;
  currentPage: string;
}

export default function Navbar({ onOpenPlanner, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-border-custom h-[68px] shadow-sm'
          : 'bg-transparent border-b border-transparent h-[80px]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between relative">
        
        {/* Luxury Brand Monogram Logo */}
        <a href="#top" className="flex items-center gap-3.5 group select-none" id="logo-link">
          {/* Brand Emblem (Highly animated infrastructure logo) */}
          <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
            {/* Interactive outer pulse ring */}
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-40 scale-110 group-hover:bg-cream/30 transition-all duration-300" />
            
            {/* Complex layered telemetry SVG */}
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-accent animate-[spin_16s_linear_infinite] relative z-10 transition-colors group-hover:text-cream">
              {/* Outer digital sync ring */}
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="7" 
                strokeDasharray="40 25" 
                className="opacity-70"
              />
              {/* Inner algorithmic counter-rotator */}
              <circle 
                cx="50" 
                cy="50" 
                r="25" 
                fill="none" 
                stroke="var(--color-cream)" 
                strokeWidth="7" 
                strokeDasharray="20 15" 
                className="animate-[spin_8s_linear_infinite_reverse]" 
              />
              {/* Central high-throughput core */}
              <circle cx="50" cy="50" r="11" fill="currentColor" />
            </svg>
          </div>
          
          <span className="font-serif font-black text-2xl tracking-[-0.02em] text-text-primary group-hover:text-accent transition-colors leading-none">
            Reveza
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono text-text-dim border border-border-custom px-1.5 py-0.5 rounded uppercase tracking-widest font-black bg-s1">
            v2.1
          </span>
        </a>

        {/* Desktop Links (Beautiful visual sliders) */}
        <div className="hidden md:flex items-center gap-1.5 bg-s2/40 p-1 border border-border-custom/50 rounded-full">
          {[
            { id: 'home', label: 'Thesis', href: '#thesis' },
            { id: 'capabilities', label: 'Capabilities', href: '#capabilities' },
            { id: 'cases', label: 'Impact Cases', href: '#cases' },
            { id: 'services', label: 'Services', href: '#services' },
            { id: 'industries', label: 'Sectors', href: '#industries' },
            { id: 'contact', label: 'RFP scoping', href: '#contact' }
          ].map((lnk) => {
            const isActive = currentPage === lnk.id;
            return (
              <a
                key={lnk.id}
                href={lnk.href}
                className={`relative text-[11px] uppercase font-bold tracking-widest px-4.5 py-2.5 rounded-full transition-colors duration-300 z-10 ${
                  isActive 
                    ? 'text-bg' 
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-accent rounded-full z-[-1] shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                {lnk.label}
              </a>
            );
          })}
        </div>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenPlanner}
            className="flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-lg bg-accent text-bg hover:opacity-95 shadow hover:shadow-lg transition-all cursor-pointer"
            id="planner-trigger-desktop"
          >
            Start Scoping <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 md:hidden text-text-muted hover:text-text-primary bg-s2/50 border border-border-custom rounded-full transition-colors"
          id="mobile-menu-trigger"
        >
          {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-s1/98 backdrop-blur-xl border-b border-border-custom overflow-hidden absolute top-[68px] left-0 right-0 z-40 shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {[
                { id: 'home', label: 'Thesis Summary', href: '#thesis' },
                { id: 'capabilities', label: 'Enterprise Capabilities', href: '#capabilities' },
                { id: 'cases', label: 'Impact Case Studies', href: '#cases' },
                { id: 'services', label: 'Direct Service Lines', href: '#services' },
                { id: 'industries', label: 'Sectors & Beliefs', href: '#industries' },
                { id: 'contact', label: 'RFP Estimator Portal', href: '#contact' }
              ].map((lnk) => {
                const isActive = currentPage === lnk.id;
                return (
                  <a
                    key={lnk.id}
                    href={lnk.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-semibold tracking-wide py-1 transition-colors ${
                      isActive ? 'text-accent border-l-2 border-accent pl-2.5' : 'text-text-muted hover:text-text-primary pl-2.5'
                    }`}
                  >
                    {lnk.label}
                  </a>
                );
              })}
              
              <div className="h-[1px] bg-border-custom my-2" />
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="flex items-center justify-center gap-2 w-full py-4 text-xs font-bold uppercase tracking-wider rounded-lg bg-accent text-bg hover:opacity-95 shadow cursor-pointer"
                id="planner-trigger-mobile"
              >
                Compute Scoping RFP <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
