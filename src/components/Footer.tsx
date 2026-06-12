/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { Sparkles, Terminal, ShieldAlert, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border-custom py-14 px-6 md:px-12 relative z-10">
      
      {/* Decorative vertical lines on outer bounds */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-border-custom/40 pointer-events-none hidden sm:block" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-border-custom/40 pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start sm:px-6">
        
        {/* Monogram brand note on left */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute w-3.5 h-3.5 border border-accent rotate-45" />
              <div className="absolute w-2 h-2 bg-cream rotate-45" />
            </div>
            <span className="font-serif font-semibold text-lg tracking-tight text-text-primary">
              Reveza
            </span>
          </div>
          <p className="text-[11px] text-text-dim leading-relaxed font-sans max-w-xs font-light">
            Architecting modern S/4HANA digital cores and high-throughput multi-agent decision systems. Built to be composable, made to continue compounding value.
          </p>
        </div>

        {/* Middle quick reference list */}
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <span className="text-[9px] uppercase tracking-widest text-accent font-bold font-mono block">
              PRACTICES
            </span>
            <ul className="space-y-1.5 text-[11px] font-sans text-text-muted font-light">
              <li><a href="#capabilities" className="hover:text-accent transition-colors">ERP modernisations</a></li>
              <li><a href="#capabilities" className="hover:text-accent transition-colors">Integration fabrics</a></li>
              <li><a href="#capabilities" className="hover:text-accent transition-colors">Applied AI agents</a></li>
              <li><a href="#capabilities" className="hover:text-accent transition-colors">Managed SRE AMS</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[9px] uppercase tracking-widest text-accent font-bold font-mono block">
              RESOURCES
            </span>
            <ul className="space-y-1.5 text-[11px] font-sans text-text-muted font-light">
              <li><a href="#cases" className="hover:text-accent transition-colors">Impact Cases</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contacts</a></li>
              <li><a href="#thesis" className="hover:text-accent transition-colors">System Thesis</a></li>
              <li><a href="#industries" className="hover:text-accent transition-colors">Sectors</a></li>
            </ul>
          </div>
        </div>

        {/* Sovereign details and certifications */}
        <div className="md:col-span-4 space-y-4 md:text-right flex flex-col md:items-end">
          <div className="flex items-center gap-2 text-[10px] uppercase font-mono font-bold text-cream">
            <Globe className="w-3.5 h-3.5" />
            <span>Sovereign Delivery</span>
          </div>
          <div className="text-[11px] text-text-dim text-left md:text-right font-sans font-light leading-relaxed">
            Reveza Technologies Private Ltd.<br />
            MG Road, Bengaluru, India · Global offices
          </div>
        </div>
      </div>

      {/* Under boundary copyright and security terms */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border-custom/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-text-dim sm:px-6">
        <span>© 2026 REVEZA TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-accent" /> COMPOSABLE DELIVERY PROTOCOL</span>
          <span>·</span>
          <span>ISO 27001 PROVISIONAL</span>
        </div>
      </div>

    </footer>
  );
}
