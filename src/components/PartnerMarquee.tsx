import React from 'react';
import { PARTNERS } from '../data/partners';
import { ArrowUpRight } from 'lucide-react';

interface PartnerMarqueeProps {
  onPartnerClick?: () => void;
}

export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({ onPartnerClick }) => {
  return (
    <section className="py-12 bg-surface-alt border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-1">
              Verified Enterprise Ecosystem
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
              Authorized Technology Partnerships
            </h3>
          </div>
          {onPartnerClick && (
            <button 
              onClick={onPartnerClick}
              className="text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blueDark flex items-center gap-1 group transition-colors"
            >
              <span>Explore All Verified Partners</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {PARTNERS.slice(0, 5).map((partner) => (
            <div 
              key={partner.id}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-blue/40 transition-all duration-300 flex flex-col items-center justify-center text-center group h-32"
            >
              <div className="h-12 w-full flex items-center justify-center mb-2 px-2">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to name text badge if image fails to render
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-navy-900 group-hover:text-brand-blue transition-colors truncate max-w-[150px]">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium truncate max-w-[140px]">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

