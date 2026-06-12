/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, FormEvent } from 'react';
import { X, Sparkles, AlertCircle, Clock, Server, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getSupabase, isSupabaseConfigured } from '../lib/supabase';

interface InteractivePlannerProps {
  isOpen?: boolean;
  onClose?: () => void;
  isInline?: boolean;
}

export default function InteractivePlanner({ isOpen = false, onClose, isInline = false }: InteractivePlannerProps) {
  // Enterprise planner states
  const [erpScope, setErpScope] = useState<'none' | 's4hana' | 'multicountry' | 'greenfield'>('s4hana');
  const [aiScope, setAiScope] = useState<'none' | 'agentic' | 'decisioning' | 'engagement'>('agentic');
  const [managedServices, setManagedServices] = useState<boolean>(true);
  const [speed, setSpeed] = useState<'standard' | 'rush'>('standard');
  const [userEmail, setUserEmail] = useState('');
  const [userBrief, setUserBrief] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [supabaseError, setSupabaseError] = useState<string | null>(null);
  const [isSupabaseSubmitted, setIsSupabaseSubmitted] = useState<boolean | null>(null);

  if (!isInline && !isOpen) return null;

  const getErpLabel = () => {
    switch (erpScope) {
      case 's4hana': return 'S/4HANA Modernization Core';
      case 'multicountry': return 'Multi-country Global Rollout';
      case 'greenfield': return 'Greenfield SAP & Core Implementation';
      default: return 'No core ERP scope change';
    }
  };

  const getAiLabel = () => {
    switch (aiScope) {
      case 'agentic': return 'Agentic AI Workflows';
      case 'decisioning': return 'Decision Intelligence Framework';
      case 'engagement': return 'AI-Powered Engagement Engine';
      default: return 'No artificial intelligence scope';
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;

    setSubmitting(true);
    setSupabaseError(null);

    const submissionData = {
      email: userEmail,
      erp_scope: erpScope,
      ai_scope: aiScope,
      managed_services: managedServices,
      speed: speed,
      total_cost: 0,
      brief: userBrief,
    };

    const supabase = getSupabase();
    if (supabase) {
      try {
        const { error } = await (supabase as any)
          .from('scoping_submissions')
          .insert([submissionData]);

        if (error) {
          console.error("Supabase error during insertion:", error);
          setSupabaseError(error.message);
          setIsSupabaseSubmitted(false);
          setSubmitting(false);
          return;
        } else {
          setIsSupabaseSubmitted(true);
        }
      } catch (err: any) {
        console.error("Failed to connect to Supabase database:", err);
        setSupabaseError(err.message || 'Network error connecting to Supabase');
        setIsSupabaseSubmitted(false);
        setSubmitting(false);
        return;
      }
    } else {
      // Graceful offline fallback
      setIsSupabaseSubmitted(false);
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className={isInline ? "relative w-full" : "fixed inset-0 z-50 flex items-center justify-center p-4"}>
      {/* Backdrop */}
      {!isInline && (
        <motion.div 
          onClick={onClose} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-10 cursor-pointer bg-slate-900/30 backdrop-blur-md" 
        />
      )}

      {/* Main Panel */}
      <motion.div
        initial={isInline ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={isInline ? undefined : { opacity: 0, scale: 0.96, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className={isInline 
          ? "relative w-full bg-s1 border border-border-custom rounded-lg overflow-hidden flex flex-col shadow-lg"
          : "relative w-full max-w-5xl bg-s1 border border-border-custom rounded-lg overflow-hidden shadow-2xl z-20 flex flex-col max-h-[92vh]"
        }
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-custom bg-bg">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <h3 className="font-serif text-lg sm:text-xl font-normal tracking-tight text-text-primary">
              Enterprise RFP &amp; Solution Scopes Inquiry
            </h3>
          </div>
          {!isInline && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-text-muted hover:text-text-primary hover:bg-s2 transition-all cursor-pointer border border-border-custom bg-bg"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className={`p-6 sm:p-8 flex-1 bg-bg text-text-primary ${isInline ? "overflow-visible" : "overflow-y-auto"}`}>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Inputs Columns */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* ERP Selection */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-muted font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 1. ERP &amp; Core Platform Scope
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { key: 's4hana', title: 'S/4HANA Modernize', desc: 'Transform legacy ERP' },
                        { key: 'multicountry', title: 'Multi-Country Rollout', desc: '17+ nation compliance' },
                        { key: 'greenfield', title: 'Greenfield SAP Core', desc: 'Clean state build-out' },
                        { key: 'none', title: 'No Core Change', desc: 'Deploy on current ERP' }
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setErpScope(item.key as any)}
                          className={`p-3.5 text-left rounded-lg border text-xs transition-all cursor-pointer flex flex-col gap-1 relative overflow-hidden group ${
                            erpScope === item.key
                              ? 'bg-accent/5 border-accent text-accent'
                              : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid hover:bg-s2/20'
                          }`}
                        >
                          <span className="font-semibold">{item.title}</span>
                          <span className="text-[10px] opacity-85 font-light">{item.desc}</span>
                          {erpScope === item.key && (
                            <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-accent" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* AI & Intelligence Selection */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-muted font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cream" /> 2. Applied AI &amp; Intelligence Layer
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { key: 'agentic', title: 'Agentic Workflows', desc: 'Reasoning process solvers' },
                        { key: 'decisioning', title: 'Decision Intelligence', desc: 'Demand & stock optimization' },
                        { key: 'engagement', title: 'AI Engagement Engine', desc: 'Natural voice & web channels' },
                        { key: 'none', title: 'No AI Layer', desc: 'Pure ERP core focus' }
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setAiScope(item.key as any)}
                          className={`p-3.5 text-left rounded-lg border text-xs transition-all cursor-pointer flex flex-col gap-1 relative overflow-hidden group ${
                            aiScope === item.key
                              ? 'bg-cream/5 border-cream text-cream'
                              : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid hover:bg-s2/20'
                          }`}
                        >
                          <span className="font-semibold">{item.title}</span>
                          <span className="text-[10px] opacity-85 font-light">{item.desc}</span>
                          {aiScope === item.key && (
                            <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-cream" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Support AMS selection */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-muted font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 3. Support SLA Protocol
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setManagedServices(true)}
                        className={`p-4 text-left rounded-lg border flex items-center gap-3 transition-all cursor-pointer relative overflow-hidden ${
                          managedServices
                            ? 'bg-accent/8 border-accent text-accent'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid hover:bg-s2/20'
                        }`}
                      >
                        <Server className="w-5 h-5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold">24/7 SRE Support</div>
                          <div className="text-[9px] opacity-85 font-sans leading-tight mt-0.5">SLA-guaranteed custom support cycles</div>
                        </div>
                        {managedServices && (
                          <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-accent" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setManagedServices(false)}
                        className={`p-4 text-left rounded-lg border flex items-center gap-3 transition-all cursor-pointer relative overflow-hidden ${
                          !managedServices
                            ? 'bg-accent/5 border-border-mid text-text-muted'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid hover:bg-s2/20'
                        }`}
                      >
                        <X className="w-5 h-5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold">Internal Handover</div>
                          <div className="text-[9px] opacity-85 font-sans leading-tight mt-0.5">Operate in-house post-delivery</div>
                        </div>
                        {!managedServices && (
                          <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-text-dim" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Turnaround speed factor */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-text-muted font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 4. Engagement Velocity
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSpeed('standard')}
                        className={`p-4 text-left rounded-lg border flex items-center gap-3 transition-all cursor-pointer relative overflow-hidden ${
                          speed === 'standard'
                            ? 'bg-accent/5 border-accent text-accent'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid hover:bg-s2/20'
                        }`}
                      >
                        <Clock className="w-5 h-5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold">Standard Roadmap [12 Wks]</div>
                          <div className="text-[9px] opacity-85 font-sans mt-0.5">Continuous deep-dive alignment</div>
                        </div>
                        {speed === 'standard' && (
                          <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-accent" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSpeed('rush')}
                        className={`p-4 text-left rounded-lg border flex items-center gap-3 transition-all cursor-pointer relative overflow-hidden ${
                          speed === 'rush'
                            ? 'bg-cream/5 border-cream text-cream'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid hover:bg-s2/20'
                        }`}
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 animate-bounce" />
                        <div>
                          <div className="text-xs font-bold">Expedited Sprint [6 Wks]</div>
                          <div className="text-[9px] opacity-85 font-sans mt-0.5">Expedited deployment (25% rush)</div>
                        </div>
                        {speed === 'rush' && (
                          <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-cream" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Clean, High-Fidelity Solutions Summary and Inquiry Submission Panel */}
                <div className="lg:col-span-5 bg-s1 border border-border-custom rounded-lg p-6 lg:p-7 flex flex-col justify-between shadow-xl relative">
                  
                  {/* Decorative faint background element */}
                  <div className="absolute bottom-4 right-4 pointer-events-none opacity-[0.03]">
                    <Sparkles className="w-32 h-32 text-accent" />
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-text-dim font-mono uppercase tracking-widest border-b border-border-custom pb-2 flex items-center justify-between">
                      <span>RFP Selection Summary</span>
                      <span className="text-[9px] px-2 py-0.5 bg-s2 rounded text-text-muted font-normal">AUDITED SCOPE</span>
                    </h4>

                    {/* Selected Scopes List */}
                    <div className="space-y-3.5 text-xs font-light">
                      <div className="flex justify-between border-b border-border-custom/60 pb-2.5 gap-4">
                        <span className="text-text-dim font-mono text-[10px]">ERP Core Support:</span>
                        <span className="text-text-primary text-right font-normal text-[11px] font-sans">{getErpLabel()}</span>
                      </div>
                      <div className="flex justify-between border-b border-border-custom/60 pb-2.5 gap-4">
                        <span className="text-text-dim font-mono text-[10px]">AI Layer Target:</span>
                        <span className="text-text-primary text-right font-normal text-[11px] font-sans">{getAiLabel()}</span>
                      </div>
                      <div className="flex justify-between border-b border-border-custom/60 pb-2.5">
                        <span className="text-text-dim font-mono text-[10px]">Managed Support:</span>
                        <span className="text-text-primary font-normal text-[11px]">{managedServices ? 'KPI-linked AMS protocol' : 'Handover to Internal Staff'}</span>
                      </div>
                      <div className="flex justify-between border-b border-border-custom/60 pb-2.5">
                        <span className="text-text-dim font-mono text-[10px]">Delivery Velocity:</span>
                        <span className="text-text-primary font-normal text-[11px]">{speed === 'rush' ? 'Expedited 6-Wk Sprint' : 'Standard 12-Wk Strategic'}</span>
                      </div>
                    </div>

                    <div className="bg-bg border border-border-custom p-5 rounded-lg text-center shadow-sm">
                      <div className="text-[10px] text-text-dim font-bold uppercase tracking-widest mb-1.5 font-mono">
                        RFP Submission Process
                      </div>
                      <p className="text-[10px] text-text-muted leading-relaxed font-sans max-w-sm mx-auto">
                        Your architectural objectives and modernization targets are analyzed to build a bespoke system design blueprint. Submit your email to connect with our delivery engineers.
                      </p>
                    </div>
                  </div>

                  {/* Submission form block */}
                  <form onSubmit={handleSubmit} className="mt-8 space-y-3.5 relative z-10">
                    {/* Database status and alert context */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-s2 border border-border-custom/50 text-[10px] font-mono leading-none">
                        {isSupabaseConfigured() ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                            <span className="text-text-primary">Database Sync Active</span>
                          </>
                        ) : (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span className="text-text-dim">Simulated Submission Mode (Configure Keys to Persist)</span>
                          </>
                        )}
                      </div>
                      
                      {supabaseError && (
                        <div className="text-[10px] text-red-500 bg-red-500/5 border border-red-500/20 px-3 py-2 rounded font-mono leading-relaxed">
                          Database Error: {supabaseError}
                        </div>
                      )}
                    </div>

                    <input
                      type="email"
                      required
                      placeholder="Corporate Email Address"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-lg bg-bg border border-border-custom text-xs text-text-primary placeholder-text-dim focus:outline-none focus:border-accent font-sans transition-colors"
                    />
                    <textarea
                      placeholder="Brief details of current tech estate (optional)"
                      value={userBrief}
                      onChange={(e) => setUserBrief(e.target.value)}
                      rows={2}
                      className="w-full px-4 py-3.5 rounded-lg bg-bg border border-border-custom text-xs text-text-primary placeholder-text-dim focus:outline-none focus:border-accent font-sans resize-none transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-accent text-bg hover:opacity-95 font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
                    >
                      {submitting ? 'Connecting with Data Fabric...' : 'Submit Scoping Proposal Draft'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center max-w-lg mx-auto flex flex-col items-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-s1 border-2 border-accent flex items-center justify-center mb-4 shadow-sm animate-pulse">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-3xl font-normal text-text-primary italic">Scoping Parameters Locked</h3>
                <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-light mb-6">
                  Thank you! Our chief delivery manager will process your selected S/4HANA &amp; Agentic AI parameters and submit a detailed formal proposal draft to <strong className="text-text-primary font-semibold">{userEmail}</strong> within 12 hours.
                </p>
                <div className="p-4 bg-s1 rounded border border-border-custom text-left text-[11px] font-mono space-y-1 w-full mb-4">
                  <div className="text-accent font-bold uppercase tracking-wider mb-1">PROVISIONAL RECORD LOG:</div>
                  <div>EMAIL: {userEmail}</div>
                  <div>MANAGED SLA: {managedServices ? 'KPI-linked AMS protocol' : 'Internal Handover'}</div>
                  <div>SPEED ROADMAP: {speed === 'rush' ? '6-Wk Sprint' : '12-Wk Strategic'}</div>
                  <div>PERSISTENCE STATUS: {isSupabaseSubmitted ? "SUCCESSFULLY WRITTEN TO SUPABASE" : "CONFIRMED (OFFLINE SIMULATED)"}</div>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    if (onClose) onClose();
                  }}
                  className="px-8 py-3.5 rounded-lg bg-accent text-bg font-bold text-xs uppercase tracking-widest cursor-pointer shadow hover:opacity-95 transition-opacity"
                >
                  {isInline ? 'Configure Parameters' : 'Close Planner'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
