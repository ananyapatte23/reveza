/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import RevezaLogo from './ui/reveza-logo';

interface NavbarProps {
  onOpenPlanner: () => void;
  onOpenSignIn: () => void;
  onSignOut?: () => void;
  isAuthenticated?: boolean;
  currentPage: string;
}

export default function Navbar({ onOpenPlanner, onOpenSignIn, onSignOut, isAuthenticated, currentPage }: NavbarProps) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-border-custom h-[68px] shadow-sm'
          : 'bg-transparent border-b border-transparent h-[68px] md:h-[80px]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between relative">
        
        {/* Luxury Brand Monogram Logo */}
        <a 
          href="#top" 
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2 group select-none" 
          id="logo-link"
        >
          {/* Brand Emblem (The high fidelity Reveza Logo) */}
          <div className="relative flex items-center justify-center shrink-0">
            {/* Interactive outer pulse ring */}
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse opacity-40 scale-110 group-hover:bg-accent/30 transition-all duration-300" />
            <RevezaLogo size={36} />
          </div>
          
          <span className="font-serif font-black text-2xl tracking-[-0.02em] text-text-primary group-hover:text-accent transition-colors leading-none ml-1">
            Reveza
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono text-text-dim border border-border-custom px-1.5 py-0.5 rounded uppercase tracking-widest font-black bg-s1">
            v2.1
          </span>
        </a>

        {/* Desktop Links (Beautiful visual sliders) */}
        <div className="hidden md:flex items-center gap-1.5 bg-s2/40 p-1 border border-border-custom/50 rounded-full">
          {[
            { id: 'thesis', label: 'Thesis', href: '#thesis' },
            { id: 'capabilities', label: 'Capabilities', href: '#capabilities' },
            { id: 'cases', label: 'Impact Cases', href: '#cases' },
            { id: 'services', label: 'Services', href: '#services' },
            { id: 'industries', label: 'Sectors', href: '#industries' },
            { id: 'contact', label: 'Contacts', href: '#contact' }
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
        <div className="hidden md:flex items-center gap-3">
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
                { id: 'thesis', label: 'Thesis Summary', href: '#thesis' },
                { id: 'capabilities', label: 'Enterprise Capabilities', href: '#capabilities' },
                { id: 'cases', label: 'Impact Case Studies', href: '#cases' },
                { id: 'services', label: 'Direct Service Lines', href: '#services' },
                { id: 'industries', label: 'Sectors & Beliefs', href: '#industries' },
                { id: 'contact', label: 'Contacts Portal', href: '#contact' }
              ].map((lnk) => {
                const isActive = currentPage === lnk.id;
                return (
                  <a
                    key={lnk.id}
                    href={lnk.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-semibold tracking-wide py-3 transition-colors ${
                      isActive ? 'text-accent border-l-2 border-accent pl-2.5' : 'text-text-muted hover:text-text-primary pl-2.5'
                    }`}
                  >
                    {lnk.label}
                  </a>
                );
              })}
              
              {/* Mobile menu items footer spacer */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
