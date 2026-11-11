import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface SplitImageSectionProps {
  badge: string;
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  ctaText?: string;
  onCtaClick?: () => void;
  floatingCard?: {
    title: string;
    value: string;
    subtitle: string;
  };
}

export const SplitImageSection: React.FC<SplitImageSectionProps> = ({
  badge,
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  ctaText,
  onCtaClick,
  floatingCard,
}) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
          imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
        }`}>
          {/* Text Column */}
          <div className={`space-y-6 ${imagePosition === 'left' ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'}`}>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
              {badge}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              {description}
            </p>

            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {ctaText && onCtaClick && (
              <div className="pt-4">
                <button
                  onClick={onCtaClick}
                  className="px-6 py-3 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold rounded-xl shadow-md hover:shadow-glow transition-all inline-flex items-center gap-2 text-sm"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Visual Column */}
          <div className={`relative ${imagePosition === 'left' ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6'}`}>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-elevated bg-slate-100 group">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Floating Metric Card */}
            {floatingCard && (
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-navy-950 text-white p-5 rounded-2xl border border-navy-800 shadow-2xl z-10 max-w-[240px]">
                <div className="text-xs font-mono text-brand-electric uppercase tracking-wider">
                  {floatingCard.title}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {floatingCard.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {floatingCard.subtitle}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

