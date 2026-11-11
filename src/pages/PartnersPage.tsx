import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Zap, 
  Globe 
} from 'lucide-react';
import { PARTNERS } from '../data/partners';
import { MEDIA_CONFIG } from '../data/media';

interface PartnersPageProps {
  onNavigate: (page: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Large Photographic Hero Header */}
      <section className="relative py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={MEDIA_CONFIG.company.partnersBanner}
            alt="Verified Technology Partners"
            className="w-full h-full object-cover opacity-20 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950" />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-35" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-brand-electric uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              Technology Ecosystem
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Verified Technology Partners &amp; Alliances
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Axel Networks partners with global technology titans to deliver authentic enterprise hardware, direct tier-1 warranties, and synchronized cybersecurity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Verification Strip */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>100% Genuine Manufacturer Hardware &amp; Serial Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-blue" />
              <span>Authorized System Integrators for Sophos &amp; Matrix</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-blue" />
              <span>Direct Manufacturer RMA &amp; Warranty Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Strategic Partners Spotlight (Sophos & Matrix) */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
              Primary Strategic Alliances
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-2">
              Deep Certified Integrations
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our core engineering practice centers around deep certified competency with Sophos cybersecurity and Matrix biometric &amp; surveillance systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sophos Deep Profile */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 flex items-center">
                    <img 
                      src="/assets/sophos_inner.png" 
                      alt="Sophos" 
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Certified Solutions Partner
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-navy-900">
                  Sophos Synchronized Security &amp; Next-Gen Firewalls
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Sophos is a global leader in next-generation cybersecurity, protecting over 500,000 organizations. Axel Networks deploys Sophos XGS Next-Gen UTM Firewalls with automated Security Heartbeat, connecting endpoint telemetry with gateway defenses to neutralize zero-day ransomware in seconds.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Axel Networks Certified Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Sophos XGS Firewall Stacking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Intercept X Advanced EDR</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Zero-Day Sandstorm Sandbox</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Enterprise Sophos AP Setup</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a 
                  href="https://www.sophos.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-semibold text-slate-500 hover:text-brand-blue flex items-center gap-1"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit Official Sophos Portal</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Inquire on Sophos
                </button>
              </div>
            </div>

            {/* Matrix Deep Profile */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 flex items-center">
                    <img 
                      src="/assets/matrix_logo.png" 
                      alt="Matrix Security Solutions" 
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Authorized System Integrator
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-navy-900">
                  Matrix Telecom &amp; Security Solutions
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Matrix is a leading manufacturer of world-class telecom and security solutions marketed across 50+ countries. Axel Networks specializes in Matrix COSEC biometric access control, palm vein recognition door controllers, and SATATYA video surveillance management.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Axel Networks Certified Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>COSEC PATH &amp; ARC Controllers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Palm Vein &amp; Smart RF Cards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>SATATYA SAMAS Enterprise VMS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Centralized HRMS Database Sync</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a 
                  href="https://www.matrixcomsec.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-semibold text-slate-500 hover:text-brand-blue flex items-center gap-1"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit Official Matrix Portal</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Inquire on Matrix
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Verified Partner Catalog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
              OEM Portfolio
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 mt-1">
              All Enterprise Technology Partners
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Select brands we engineer and deploy based on your architectural requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner) => (
              <div 
                key={partner.id}
                className="bg-surface-alt border border-slate-200 rounded-2xl p-6 hover:shadow-card-hover hover:border-brand-blue/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="h-12 flex items-center justify-between">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-10 max-w-[160px] object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {partner.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-blue transition-colors">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-medium text-brand-blue mt-0.5">
                      {partner.category}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Specializations:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {partner.specialization.map((spec, sIdx) => (
                        <span key={sIdx} className="text-[10px] text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <a 
                    href={partner.websiteUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-500 hover:text-brand-blue flex items-center gap-1 transition-colors"
                  >
                    <span>OEM Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="font-bold text-brand-blue hover:underline flex items-center gap-1"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
