/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, FormEvent } from 'react';
import { X, Sparkles, AlertCircle, IndianRupee, Clock, Server, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractivePlannerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractivePlanner({ isOpen, onClose }: InteractivePlannerProps) {
  // Enterprise planner states
  const [erpScope, setErpScope] = useState<'none' | 's4hana' | 'multicountry' | 'greenfield'>('s4hana');
  const [aiScope, setAiScope] = useState<'none' | 'agentic' | 'decisioning' | 'engagement'>('agentic');
  const [managedServices, setManagedServices] = useState<boolean>(true);
  const [speed, setSpeed] = useState<'standard' | 'rush'>('standard');
  const [userEmail, setUserEmail] = useState('');
  const [userBrief, setUserBrief] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculators (Estimates in INR)
  const getBudgetEstimation = () => {
    let cost = 0;

    // ERP Core parameters
    switch (erpScope) {
      case 's4hana':
        cost += 8500000; // 85 Lakhs
        break;
      case 'multicountry':
        cost += 15000000; // 1.5 Crores
        break;
      case 'greenfield':
        cost += 12000000; // 1.2 Crores
        break;
      default:
        cost += 0;
    }

    // AI Intelligence parameters
    switch (aiScope) {
      case 'agentic':
        cost += 3500000; // 35 Lakhs
        break;
      case 'decisioning':
        cost += 4500000; // 45 Lakhs
        break;
      case 'engagement':
        cost += 2500000; // 25 Lakhs
        break;
      default:
        cost += 0;
    }

    // Managed support
    if (managedServices) {
      cost += 3000000; // 30 Lakhs / annum baseline
    }

    // Timeline speed markup
    if (speed === 'rush') {
      cost *= 1.25; // 25% markup for expedited deployment squads
    }

    return Math.round(cost);
  };

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#151513]/50 backdrop-blur-sm"
      />

      {/* Main Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 15 }}
        className="relative w-full max-w-4xl bg-s1 border border-border-custom rounded-[4px] overflow-hidden shadow-2xl z-20 flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-custom bg-s1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <h3 className="font-serif text-lg font-normal text-text-primary">
              Enterprise RFP &amp; Solution Scopes Planner
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-[3px] text-text-muted hover:text-text-primary hover:bg-s2 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 flex-1 bg-bg text-text-primary">
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
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#444440] mb-3 font-mono">
                      1. ERP &amp; Core Platform Scope
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setErpScope('s4hana')}
                        className={`p-3.5 text-left rounded-[3px] border text-xs font-semibold transition-all cursor-pointer ${
                          erpScope === 's4hana'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        S/4HANA Modernization
                      </button>
                      <button
                        type="button"
                        onClick={() => setErpScope('multicountry')}
                        className={`p-3.5 text-left rounded-[3px] border text-xs font-semibold transition-all cursor-pointer ${
                          erpScope === 'multicountry'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        Multi-Country Rollout
                      </button>
                      <button
                        type="button"
                        onClick={() => setErpScope('greenfield')}
                        className={`p-3.5 text-left rounded-[3px] border text-xs font-semibold transition-all cursor-pointer ${
                          erpScope === 'greenfield'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        Greenfield SAP Core
                      </button>
                      <button
                        type="button"
                        onClick={() => setErpScope('none')}
                        className={`p-3.5 text-left rounded-[3px] border text-xs font-semibold transition-all cursor-pointer ${
                          erpScope === 'none'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        No Core Change
                      </button>
                    </div>
                  </div>

                  {/* AI & Intelligence Selection */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#444440] mb-3 font-mono">
                      2. Applied AI &amp; Intelligence Layer
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setAiScope('agentic')}
                        className={`p-3.5 text-left rounded-[3px] border text-xs font-semibold transition-all cursor-pointer ${
                          aiScope === 'agentic'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        Agentic Workflows
                      </button>
                      <button
                        type="button"
                        onClick={() => setAiScope('decisioning')}
                        className={`p-3.5 text-left rounded-[3px] border text-xs font-semibold transition-all cursor-pointer ${
                          aiScope === 'decisioning'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        Decision Intelligence
                      </button>
                      <button
                        type="button"
                        onClick={() => setAiScope('engagement')}
                        className={`p-3.5 text-left rounded-[3px] border text-xs font-semibold transition-all cursor-pointer ${
                          aiScope === 'engagement'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        AI Engagement Engine
                      </button>
                      <button
                        type="button"
                        onClick={() => setAiScope('none')}
                        className={`p-3.5 text-left rounded-[3px] border text-xs font-semibold transition-all cursor-pointer ${
                          aiScope === 'none'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        No AI Layer
                      </button>
                    </div>
                  </div>

                  {/* Support AMS selection */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#444440] mb-2.5 font-mono">
                      3. Dedicated Managed services (24/7 SRE + continuous improvement)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setManagedServices(true)}
                        className={`p-3.5 text-left rounded-[3px] border flex items-center gap-3 transition-all cursor-pointer ${
                          managedServices
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        <Server className="w-4 h-4 shrink-0" />
                        <div>
                          <div className="text-xs font-bold">Continuous Support</div>
                          <div className="text-[9px] opacity-80 font-sans">Annual Service SLAs linked to KPIs</div>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setManagedServices(false)}
                        className={`p-3.5 text-left rounded-[3px] border flex items-center gap-3 transition-all cursor-pointer ${
                          !managedServices
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        <X className="w-4 h-4 shrink-0" />
                        <div>
                          <div className="text-xs font-bold">Post-go-live transfer</div>
                          <div className="text-[9px] opacity-80 font-sans">Self-operated internal handover</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Turnaround speed factor */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#444440] mb-2.5 font-mono">
                      4. Engagement Pace &amp; Timeline
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSpeed('standard')}
                        className={`p-3.5 text-left rounded-[3px] border flex items-center gap-3 transition-all cursor-pointer ${
                          speed === 'standard'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        <Clock className="w-4 h-4 shrink-0" />
                        <div>
                          <div className="text-xs font-bold">Standard Strategic Core</div>
                          <div className="text-[9px] opacity-80 font-sans">Thorough blueprinting [12 Weeks]</div>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSpeed('rush')}
                        className={`p-3.5 text-left rounded-[3px] border flex items-center gap-3 transition-all cursor-pointer ${
                          speed === 'rush'
                            ? 'bg-accent border-accent text-bg'
                            : 'bg-s1 border-border-custom text-text-muted hover:border-border-mid'
                        }`}
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <div>
                          <div className="text-xs font-bold">Expedited Sprint</div>
                          <div className="text-[9px] opacity-80 font-sans">Co-located rapid rollout [6 Weeks]</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Estimate Right Panel */}
                <div className="lg:col-span-5 bg-s1 border border-border-custom rounded-[4px] p-6 lg:p-7 flex flex-col justify-between shadow-lg">
                  <div>
                    <h4 className="text-[10px] font-bold text-text-dim font-mono uppercase tracking-widest mb-4 border-b border-border-custom pb-2">
                      RFP Scoping Breakdown
                    </h4>

                    <div className="space-y-4 text-xs font-light">
                      <div className="flex justify-between border-b border-border-custom pb-2 gap-4">
                        <span className="text-text-muted">SAP Core:</span>
                        <span className="text-text-primary text-right font-normal">{getErpLabel()}</span>
                      </div>
                      <div className="flex justify-between border-b border-border-custom pb-2 gap-4">
                        <span className="text-text-muted">AI Layer:</span>
                        <span className="text-text-primary text-right font-normal">{getAiLabel()}</span>
                      </div>
                      <div className="flex justify-between border-b border-border-custom pb-2">
                        <span className="text-text-muted">AMS Managed Support:</span>
                        <span className="text-text-primary font-normal">{managedServices ? 'KPI-linked support (30L)' : 'None'}</span>
                      </div>
                      <div className="flex justify-between border-b border-border-custom pb-2">
                        <span className="text-text-muted">Timeline:</span>
                        <span className="text-text-primary font-normal">{speed === 'rush' ? 'Expedited (Sprint)' : 'Standard (Strategic)'}</span>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-dashed border-border-custom text-center">
                      <div className="text-[10px] text-text-dim font-bold uppercase tracking-wider mb-2 font-mono">
                        PROPORTIONAL INVESTMENT ESTIMATE (INR)
                      </div>
                      <div className="flex items-center justify-center text-accent">
                        <IndianRupee className="w-6 h-6 mr-1" />
                        <span className="text-4xl font-extrabold tracking-tighter font-mono">
                          {getBudgetEstimation().toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-[9px] text-[#444440] mt-3 leading-relaxed">
                        Provisional estimate includes full solution architecture blueprint, SRE parameters, change management metrics, and localized MCA legal guarantees.
                      </p>
                    </div>
                  </div>

                  {/* Submission form block */}
                  <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="Your Corporate Email Address"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-[3px] bg-bg border border-border-custom text-xs text-text-primary placeholder-text-dim focus:outline-none focus:border-border-mid"
                    />
                    <textarea
                      placeholder="Brief description of legacy stack or AI targets (optional)"
                      value={userBrief}
                      onChange={(e) => setUserBrief(e.target.value)}
                      rows={2}
                      className="w-full px-4 py-3 rounded-[3px] bg-bg border border-border-custom text-xs text-text-primary placeholder-text-dim focus:outline-none focus:border-border-mid resize-none"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 bg-accent text-bg hover:opacity-90 font-semibold text-xs tracking-wider rounded-[3px] flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
                    >
                      {submitting ? 'Calculating RFP...' : 'Request Formal Transformation Proposal'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center max-w-md mx-auto flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-s1 border border-border-mid flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-text-primary italic">Scoping Brief Logged</h3>
                <p className="font-sans text-xs text-text-muted leading-relaxed font-light mb-6">
                  Our Managing Director will review your S/4HANA &amp; Agentic AI parameters for an aggregate estimated budget of <strong className="text-accent font-semibold">₹{getBudgetEstimation().toLocaleString('en-IN')}</strong> and submit a detailed formal proposal draft to <strong className="text-text-primary">{userEmail}</strong> within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-[3px] bg-accent text-bg font-semibold text-xs tracking-wider cursor-pointer"
                >
                  Return to Site
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
