import React, { useState } from 'react';
import { 
  Wifi, 
  ShieldAlert, 
  Fingerprint, 
  Video, 
  ServerCog, 
  ArrowRight,
  Check,
  Layers,
  PhoneCall,
  Play
} from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { COMPANY } from '../data/company';
import { MEDIA_CONFIG } from '../data/media';
import { VideoModal } from '../components/media/VideoModal';

interface SolutionsPageProps {
  onNavigate: (page: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return Wifi;
      case 'ShieldAlert': return ShieldAlert;
      case 'Fingerprint': return Fingerprint;
      case 'Video': return Video;
      case 'ServerCog': return ServerCog;
      default: return Layers;
    }
  };

  const filteredCategories = selectedCategoryId === 'all' 
    ? SOLUTIONS 
    : SOLUTIONS.filter(c => c.id === selectedCategoryId);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Large Photographic Hero Header */}
      <section className="relative py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={MEDIA_CONFIG.company.solutionsBanner}
            alt="Enterprise Solutions Portfolio"
            className="w-full h-full object-cover opacity-20 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950" />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-35" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-brand-electric uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              Enterprise Solutions Portfolio
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Tailored Enterprise Technology Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Modular, high-performance hardware and software combinations engineered for corporate offices, hospitals, manufacturing hubs, educational institutions, and multi-location retail chains.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Category Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            <button
              onClick={() => setSelectedCategoryId('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                selectedCategoryId === 'all'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-surface-alt text-slate-700 hover:bg-slate-200 hover:text-navy-900'
              }`}
            >
              All Enterprise Categories ({SOLUTIONS.length})
            </button>
            {SOLUTIONS.map((cat) => {
              const IconComp = getCategoryIcon(cat.icon);
              const isActive = cat.id === selectedCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-all shrink-0 ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-surface-alt text-slate-700 hover:bg-slate-200 hover:text-navy-900'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-brand-electric' : 'text-slate-500'}`} />
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Listing */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredCategories.map((category) => {
            const CatIcon = getCategoryIcon(category.icon);
            return (
              <div key={category.id} className="space-y-6">
                {/* Category Header */}
                <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 text-brand-blue font-bold text-xs uppercase tracking-wider mb-1">
                      <CatIcon className="w-4 h-4" />
                      <span>{category.category}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                      {category.headline}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Grid of Sub-Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.solutions.map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-card-hover hover:border-brand-blue/40 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 font-bold">
                            {item.partnerTech}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-navy-900 leading-snug">
                          {item.name}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Specs */}
                        <div className="pt-2 border-t border-slate-100 space-y-1.5">
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Technical Highlights:
                          </div>
                          {item.specs.map((sp, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                              <Check className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                              <span>{sp}</span>
                            </div>
                          ))}
                        </div>

                        {/* Ideal Applications */}
                        <div className="pt-2">
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                            Ideal For:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.applications.map((app, aIdx) => (
                              <span key={aIdx} className="text-[10px] text-slate-600 bg-surface-alt px-2 py-0.5 rounded border border-slate-200">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action */}
                      <div className="pt-5 mt-5 border-t border-slate-100">
                        <button
                          onClick={() => onNavigate('contact')}
                          className="w-full py-2.5 bg-surface-alt hover:bg-navy-900 text-navy-900 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-navy-900"
                        >
                          <span>Inquire About This Solution</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Architect Consultation CTA */}
      <section className="py-20 bg-navy-950 text-white border-t border-navy-850">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Have a specialized hybrid requirement?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Many enterprise environments require custom integration across biometric access, video management, and synchronized firewall policies. We provide end-to-end multi-vendor system integration.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-xl shadow-lg transition-all"
            >
              Consult an Integration Engineer
            </button>
            <a 
              href={`tel:${COMPANY.phone.primary}`}
              className="px-8 py-3.5 bg-navy-900 hover:bg-navy-850 text-white font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-brand-electric" />
              <span>Direct Sales: {COMPANY.phone.displayPrimary}</span>
            </a>
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
