/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { BELIEFS, INDUSTRIES } from '../data';
import { 
  ShoppingBag, 
  Smartphone, 
  Factory, 
  Truck, 
  TrendingUp, 
  HeartPulse, 
  Utensils, 
  Building, 
  Sparkles,
  Quote,
  ShieldAlert
} from 'lucide-react';
import { motion } from 'motion/react';

export default function BeliefsAndIndustries() {

  // Dynamic Icon Selector for industries
  const getIndustryIcon = (num: string) => {
    switch (num) {
      case '01': return <ShoppingBag className="w-5 h-5 text-accent" />;
      case '02': return <Smartphone className="w-5 h-5 text-cream" />;
      case '03': return <Factory className="w-5 h-5 text-accent" />;
      case '04': return <Truck className="w-5 h-5 text-accent" />;
      case '05': return <TrendingUp className="w-5 h-5 text-cream" />;
      case '06': return <HeartPulse className="w-5 h-5 text-accent" />;
      case '07': return <Utensils className="w-5 h-5 text-accent" />;
      default: return <Building className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <div className="bg-bg relative">
      
      {/* Industries grid segment */}
      <section id="industries" className="py-24 px-6 md:px-12 border-t border-border-custom bg-bg">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-text-dim mb-4 flex items-center gap-2 font-mono">
                <span className="w-10 h-[1.5px] bg-accent" /> DOMAIN DOMINANCE
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-[-0.03em] text-text-primary">
                Sectors we know <span className="italic text-accent font-medium">intimately.</span>
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-text-muted max-w-md font-light leading-relaxed">
              We do not larp. Our delivery teams are composed of industry specialists who have solved actual operational challenges in discrete lines:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="group bg-s1 border border-border-custom hover:border-accent/40 rounded-lg p-7 hover:bg-s2/30 transition-all duration-300 hover:shadow-lg relative"
              >
                {/* Accent top gradient indicator */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent/10 group-hover:bg-accent transition-colors duration-300 rounded-t-lg" />

                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-text-dim font-mono tracking-widest font-black bg-bg px-2 py-0.5 rounded border border-border-custom/50">
                    {ind.num}
                  </span>
                  <div className="p-2 bg-bg border border-border-custom group-hover:border-accent/20 rounded-lg transition-colors">
                    {getIndustryIcon(ind.num)}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-normal text-text-primary mb-2.5 group-hover:text-accent transition-colors">
                  {ind.name}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-light">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs display segment (Richer Visuals constraint) */}
      <section id="beliefs" className="py-24 px-6 md:px-12 border-t border-border-custom bg-s1 relative overflow-hidden">
        
        {/* Subtle decorative quote background emblem */}
        <div className="absolute left-[8%] top-[10%] opacity-[0.03] text-accent pointer-events-none">
          <Quote className="w-48 h-48 rotate-180" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="text-[11px] uppercase tracking-[0.2em] text-cream mb-4 flex items-center justify-center gap-2 font-mono font-bold">
              <span className="w-10 h-[1.5px] bg-cream" /> THE SYSTEM AXIOMS
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-text-primary">
              Our Core Beliefs
            </h2>
          </div>

          <div className="divide-y divide-border-custom/85">
            {BELIEFS.map((belief) => (
              <div
                key={belief.id}
                className="py-12 text-xl sm:text-2xl md:text-3xl font-serif font-normal leading-relaxed text-text-muted hover:text-text-primary transition-all duration-300 flex items-start gap-4 hover:translate-x-1"
              >
                <span className="text-cream text-2xl font-serif italic mt-1 font-semibold">“</span>
                <p className="flex-1">
                  {belief.text}
                  <span className="text-accent underline decoration-cream/40 decoration-wavy underline-offset-4 font-medium px-1">
                    {belief.emText}
                  </span>
                  {belief.afterText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
