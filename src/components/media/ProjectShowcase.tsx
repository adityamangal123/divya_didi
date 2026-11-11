import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Server } from 'lucide-react';
import { MEDIA_CONFIG } from '../../data/media';
import { ImageLightbox } from './ImageLightbox';

interface ProjectShowcaseProps {
  onContactClick?: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onContactClick }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const projects = [
    {
      id: "p1",
      title: "Campus Optical Fiber & 10G Backbone",
      clientType: "Higher Education / University",
      image: "/media/images/projects/fiber-splicing.jpg",
      scope: "Single-Mode fiber termination connecting 8 campus blocks with redundant ring failover.",
      specs: ["10G SFP+ Uplinks", "Below 0.02dB Fusion Splicing", "Zero Packet Drop"],
      year: "Completed Project"
    },
    {
      id: "p2",
      title: "Next-Gen Data Center Server Rack Deployment",
      clientType: "FinTech & Corporate Headquarters",
      image: "/media/images/projects/server-rack-cabling.jpg",
      scope: "Structured Cat6A patching, high-density cable dressing, and Fluke certification.",
      specs: ["Fluke DSX-8000 Certified", "Dual-Corded Smart PDUs", "Color-Coded Segregation"],
      year: "Turnkey Implementation"
    },
    {
      id: "p3",
      title: "Synchronized Cyber Defense Network Operations",
      clientType: "Multi-Location Hospital Group",
      image: "/media/images/projects/noc-control-room.jpg",
      scope: "Sophos XGS UTM cluster deployment with automated lateral ransomware isolation.",
      specs: ["Sophos Security Heartbeat", "Active-Passive HA Cluster", "Zero Downtime"],
      year: "Mission Critical"
    },
    {
      id: "p4",
      title: "Managed Enterprise Wi-Fi 6 (WaaS) Facility",
      clientType: "Corporate Business Park",
      image: "/media/images/projects/corporate-campus.jpg",
      scope: "High-density enterprise Wi-Fi across 4 floors supporting seamless executive roaming.",
      specs: ["802.11ax Wi-Fi 6", "Captive OTP Authentication", "24/7 SLA Telemetry"],
      year: "Wi-Fi as a Service"
    }
  ];

  const galleryItems = projects.map(p => ({
    id: p.id,
    title: p.title,
    category: p.clientType,
    src: p.image,
    caption: p.scope
  }));

  return (
    <section className="py-20 bg-surface-alt border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
              Proven Deployments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-3 tracking-tight">
              Featured Infrastructure Projects
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Real-world engineering implementations across commercial real estate, corporate headquarters, and high-density campuses.
            </p>
          </div>

          {onContactClick && (
            <div>
              <button
                onClick={onContactClick}
                className="px-5 py-2.5 bg-white border border-slate-300 hover:border-brand-blue text-sm font-semibold text-navy-900 hover:text-brand-blue rounded-xl shadow-sm transition-all flex items-center gap-1.5"
              >
                <span>Request Case Study Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* 2x2 Rich Project Showcase Grid with Large Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue/40 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-navy-950">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono font-bold text-white bg-navy-900/90 backdrop-blur-md px-3 py-1 rounded-md border border-navy-800">
                    {proj.clientType}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold text-brand-electric">
                    {proj.year}
                  </span>
                  <span className="text-xs font-semibold underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Full Photographic Resolution <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-brand-blue transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {proj.scope}
                  </p>
                </div>

                {/* Technical Specs Tags */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                  {proj.specs.map((sp, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono font-medium text-slate-700 bg-surface-alt px-2.5 py-1 rounded-md border border-slate-200"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <ImageLightbox
          images={galleryItems}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          onNext={() => setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length)}
          onPrev={() => setSelectedImageIndex((selectedImageIndex - 1 + galleryItems.length) % galleryItems.length)}
        />
      )}
    </section>
  );
};

