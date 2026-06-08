/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { BELIEFS, INDUSTRIES } from '../data';
import { ShieldCheck, Crosshair, HelpCircle, Star } from 'lucide-react';

export default function BeliefsAndIndustries() {
  return (
    <div className="bg-bg relative">
      
      {/* Industries grid segment */}
      <section id="industries" className="py-24 px-6 md:px-10 border-t border-border-custom bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-14">
            <div className="text-[11px] uppercase tracking-[0.16em] text-text-dim mb-4 flex items-center gap-2">
              <span className="w-10 h-[1px] bg-border-mid" /> Where we work
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.03em] text-text-primary">
              Industries we know <span className="italic text-cream font-normal">cold.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-s1 border border-border-custom hover:border-border-mid rounded-[4px] p-6.5 hover:bg-s2 transition-all duration-200"
              >
                <span className="text-[9px] text-text-dim font-mono tracking-widest block mb-4">{ind.num}</span>
                <h3 className="font-serif text-lg font-normal text-text-primary mb-2">
                  {ind.name}
                </h3>
                <p className="font-sans text-xs text-text-muted leading-relaxed font-light">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs display segment */}
      <section id="beliefs" className="py-24 px-6 md:px-10 border-t border-border-custom bg-s1">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[11px] uppercase tracking-[0.16em] text-text-dim mb-4 flex items-center justify-center gap-2">
              <span className="w-10 h-[1px] bg-border-mid" /> What we believe
            </div>
          </div>

          <div className="divide-y divide-border-custom">
            {BELIEFS.map((belief) => (
              <div
                key={belief.id}
                className="py-10 text-xl sm:text-2xl md:text-3xl font-serif font-normal leading-relaxed text-text-muted hover:text-text-primary transition-colors duration-250"
              >
                {belief.text}
                <span className="italic text-cream font-normal">{belief.emText}</span>
                {belief.afterText}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
