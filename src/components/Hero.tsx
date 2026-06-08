/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Network } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenPlanner: () => void;
}

export default function Hero({ onOpenPlanner }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [promptIdx, setPromptIdx] = useState(0);

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

    const tick = () => {
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
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [promptIdx]);

  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-end px-6 md:px-10 pt-36 pb-16 bg-bg overflow-hidden border-b border-border-custom">
      {/* Background texture from HTML */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40 bg-[radial-gradient(#CACAC0_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Glow elements */}
      <div className="absolute -top-1/4 right-0 w-1/3 h-2/3 bg-s1/30 -z-10 pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* Label block */}
        <div className="text-xs uppercase tracking-widest text-[#444440] mb-12 select-none flex flex-wrap gap-2 items-center">
          <span className="text-text-muted font-medium">Reveza Technologies</span>
          <span className="text-text-dim">/</span>
          <span className="text-text-muted">Enterprise Transformation Partner</span>
          <span className="text-text-dim">/</span>
          <span className="text-text-muted">Global Engagements</span>
        </div>

        {/* Brand Display Header (Instrument Serif elegance) */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-normal leading-[1.02] tracking-[-0.03em] text-text-primary max-w-5xl mb-10 select-none">
          Enterprise systems.<br />
          Reimagined with <span className="italic text-cream font-normal">intelligence.</span>
        </h1>

        {/* Narrative Intro Description */}
        <p className="font-sans text-base sm:text-lg md:text-xl font-light text-text-muted max-w-2xl leading-relaxed mb-10">
          We modernize the <strong className="text-text-primary font-normal">core ERP and business systems</strong> that run your enterprise — and weave in the <strong className="text-text-primary font-normal">AI, data, and engagement layers</strong> that make them learn, adapt, and respond in real time. Two practices, one delivery model.
        </p>

        {/* Interactive Query console mimicking business optimization */}
        <div className="w-full max-w-xl bg-s1 border border-border-custom rounded-[4px] p-4.5 mb-10 shadow-lg relative group">
          <div className="flex items-center justify-between mb-3 text-[10px] text-text-dim font-mono tracking-widest uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Active transformation stream
            </span>
            <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-accent" /> REVEZA V2.0</span>
          </div>
 
          <div className="flex items-center gap-3 bg-bg border border-border-custom rounded-[3px] px-3.5 py-2.5 min-h-[48px]">
            <Network className="w-3.5 h-3.5 text-text-muted" />
            <span className="font-mono text-xs text-text-primary">
              {typedText}
              <span className="animate-ping font-extrabold text-accent">_</span>
            </span>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap gap-6 items-center mb-16" id="hero-cta-group">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-[4px] bg-accent hover:opacity-90 text-bg text-xs font-semibold tracking-wider transition-all duration-200 transform active:scale-98 cursor-pointer shadow-lg"
          >
            Start a project <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#capabilities"
            className="flex items-center gap-1.5 px-6 py-3.5 border border-border-mid rounded-[4px] text-text-muted hover:text-text-primary hover:border-text-muted text-xs transition-colors duration-200"
          >
            See capabilities
          </a>
        </div>

        {/* High Credibility Metrics Grid (from the HTML template metrics) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-border-custom">
          <div className="flex flex-col">
            <div className="font-serif text-4xl sm:text-5xl font-normal text-text-primary leading-none tracking-tight">
              40<sup className="text-xl text-accent relative -top-3 ml-0.5">+</sup>
            </div>
            <div className="text-xs text-text-dim mt-2 tracking-wide font-sans">
              Years of combined enterprise pedigree
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-serif text-4xl sm:text-5xl font-normal text-text-primary leading-none tracking-tight">
              17<sup className="text-xl text-accent relative -top-3 ml-0.5">+</sup>
            </div>
            <div className="text-xs text-text-dim mt-2 tracking-wide font-sans">
              Countries of cross-border delivery
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-serif text-4xl sm:text-5xl font-normal text-text-primary leading-none tracking-tight">
              2
            </div>
            <div className="text-xs text-text-dim mt-2 tracking-wide font-sans">
              Practices · Digital Transformation &amp; AI
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
