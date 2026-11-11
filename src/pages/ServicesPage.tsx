import React, { useState } from 'react';
import { 
  Network, 
  Wifi, 
  Layers, 
  ShieldCheck, 
  ServerCog, 
  Fingerprint, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Zap,
  Play
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { COMPANY } from '../data/company';
import { MEDIA_CONFIG } from '../data/media';
import { VideoModal } from '../components/media/VideoModal';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    selectedServiceId || SERVICES[0].id
  );
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network': return Network;
      case 'Wifi': return Wifi;
      case 'Layers': return Layers;
      case 'ShieldCheck': return ShieldCheck;
      case 'ServerCog': return ServerCog;
      case 'Fingerprint': return Fingerprint;
      default: return Network;
    }
  };

  const getServiceImage = (serviceId: string) => {
    switch (serviceId) {
      case 'it-consulting': return MEDIA_CONFIG.services.itConsulting;
      case 'wireless-networking': return MEDIA_CONFIG.services.wirelessWaas;
      case 'network-infrastructure': return MEDIA_CONFIG.services.networkInfrastructure;
      case 'cybersecurity-solutions': return MEDIA_CONFIG.services.cybersecurity;
      case 'it-management': return MEDIA_CONFIG.services.managedIt;
      case 'workforce-management': return MEDIA_CONFIG.services.workforceAccess;
      default: return MEDIA_CONFIG.services.networkInfrastructure;
    }
  };

  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];
  const ActiveIcon = getServiceIcon(activeService.icon);
  const activeImage = getServiceImage(activeService.id);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Large Photographic Hero Header */}
      <section className="relative py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={MEDIA_CONFIG.hero.secondaryImage}
            alt="Enterprise Technology Services"
            className="w-full h-full object-cover opacity-20 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950" />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-35" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-brand-electric uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              Technology Practices
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Enterprise Technology Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From strategic IT network consulting and Wi-Fi as a Service (WaaS) to next-gen synchronized threat protection and biometric workforce automation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sub-Navigation Strip */}
      <section className="bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {SERVICES.map((s) => {
              const IconComp = getServiceIcon(s.icon);
              const isActive = s.id === activeServiceId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveServiceId(s.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-all shrink-0 ${
                    isActive 
                      ? 'bg-navy-900 text-white shadow-sm' 
                      : 'bg-surface-alt text-slate-700 hover:bg-slate-200 hover:text-navy-900'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-brand-electric' : 'text-slate-500'}`} />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Service Detailed Presentation with High-Res Photography */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split Screen Media Hero for Active Service */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
                <ActiveIcon className="w-4 h-4" />
                <span>{activeService.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-navy-900 leading-tight">
                {activeService.title}
              </h2>

              <div className="text-base sm:text-lg font-medium text-brand-blue">
                {activeService.subtitle}
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Technologies */}
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider self-center mr-2">
                  Key Technologies:
                </span>
                {activeService.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-surface-alt px-3 py-1 rounded-lg border border-slate-200 text-xs font-mono font-medium text-navy-900">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-xl shadow-md hover:shadow-glow transition-all text-sm flex items-center gap-2"
                >
                  <span>Request Architectural Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-5 py-3.5 bg-surface-alt hover:bg-slate-200 text-navy-900 font-semibold rounded-xl border border-slate-200 transition-colors text-sm flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-brand-blue fill-current" />
                  <span>Watch Video Walkthrough</span>
                </button>
              </div>
            </div>

            {/* Right Large Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-elevated bg-navy-950 h-96 sm:h-[460px] group">
                <img
                  src={activeImage}
                  alt={activeService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-mono font-bold text-brand-electric bg-navy-900/90 px-2 py-0.5 rounded border border-navy-800">
                    AXEL ENGINEERING SPECIFICATION
                  </span>
                  <h4 className="text-base font-bold mt-1">
                    {activeService.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Architectural Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1: Challenges Addressed */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900">Challenges Addressed</h3>
                  <p className="text-xs text-slate-500">Corporate pain points resolved</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {activeService.challenges.map((chal, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span>{chal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Key Features & Architectural Scope */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900">Features &amp; Scope</h3>
                  <p className="text-xs text-slate-500">Technical specifications delivered</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {activeService.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Business Benefits & ROI */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900">Business Benefits</h3>
                  <p className="text-xs text-slate-500">Measurable impact &amp; uptime</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {activeService.benefits.map((ben, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Implementation Approach Sequence */}
          <div className="mt-16 bg-surface-alt border border-slate-200 rounded-2xl p-8 lg:p-12">
            <h3 className="text-xl font-bold text-navy-900 mb-8 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-blue"></span>
              <span>Our Implementation Approach for {activeService.title}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeService.approach.map((step, sIdx) => (
                <div key={sIdx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs relative">
                  <div className="text-3xl font-black text-brand-blue/20 mb-2">0{sIdx + 1}</div>
                  <div className="text-sm font-bold text-navy-900">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        video={MEDIA_CONFIG.videos[0]}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};
