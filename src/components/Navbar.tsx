/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenPlanner: () => void;
}

export default function Navbar({ onOpenPlanner }: NavbarProps) {
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
          ? 'bg-bg/90 backdrop-blur-md border-b border-border-custom h-[60px]'
          : 'bg-transparent border-b border-transparent h-[70px]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group select-none" id="logo-link">
          <span className="font-sans font-medium text-lg leading-tight tracking-tight text-text-primary">
            Reveza
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#thesis" className="text-xs text-text-muted hover:text-text-primary transition-colors">
            Thesis
          </a>
          <a href="#capabilities" className="text-xs text-text-muted hover:text-text-primary transition-colors">
            Capabilities
          </a>
          <a href="#cases" className="text-xs text-text-muted hover:text-text-primary transition-colors">
            Cases
          </a>
          <a href="#services-detail" className="text-xs text-text-muted hover:text-text-primary transition-colors">
            Services
          </a>
          <a href="#industries" className="text-xs text-text-muted hover:text-text-primary transition-colors">
            Industries
          </a>
          <a href="#contact" className="text-xs text-text-muted hover:text-text-primary transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenPlanner}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-[3px] bg-accent text-bg hover:opacity-90 transition-opacity cursor-pointer"
            id="planner-trigger-desktop"
          >
            Start a project <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 md:hidden text-text-muted hover:text-text-primary transition-colors"
          id="mobile-menu-trigger"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FFFFFF]/95 backdrop-blur-lg border-b border-border-custom overflow-hidden absolute top-[60px] left-0 right-0 z-40"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <a
                href="#thesis"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                Thesis
              </a>
              <a
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                Capabilities
              </a>
              <a
                href="#cases"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                Cases
              </a>
              <a
                href="#services-detail"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                Industries
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                Contact
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold rounded-[3px] bg-accent text-bg hover:opacity-90 transition-opacity cursor-pointer"
                id="planner-trigger-mobile"
              >
                Start a project <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
