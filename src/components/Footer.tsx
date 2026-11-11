import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import { COMPANY } from '../data/company';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-850">
      {/* Top Banner: Corporate Trust Assurance */}
      <div className="border-b border-navy-900 bg-navy-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-electric shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Enterprise Pedigree Since 2011</h4>
                <p className="text-xs text-slate-400 mt-0.5">Over a decade of mission-critical corporate deployments.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-electric shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Guaranteed SLA & Active AMC</h4>
                <p className="text-xs text-slate-400 mt-0.5">Rapid incident response and scheduled preventive care.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-electric shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Direct Engineering Helpdesk</h4>
                <p className="text-xs text-slate-400 mt-0.5">Talk to certified network architects, not call centers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-lg border border-slate-200/20">
                <img 
                  src="/assets/logo.png" 
                  alt="Axel Networks" 
                  className="h-9 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-tight block">AXEL NETWORKS</span>
                <span className="text-[11px] text-brand-electric font-medium uppercase tracking-wider">Enterprise IT & Network Solutions</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Started in 2011, Axel Networks delivers cost-effective, customized enterprise IT consulting, managed wireless (WaaS), Next-Gen cybersecurity, network infrastructure, and biometric workforce management for growing corporate organizations across India.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href={COMPANY.socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href={COMPANY.socialLinks.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href={COMPANY.socialLinks.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href={COMPANY.socialLinks.youtube} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-navy-850 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-brand-electric transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-blue" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-brand-electric transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-blue" /> About Axel Networks
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-electric transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-blue" /> Technology Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-brand-electric transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-blue" /> Enterprise Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('partners')} className="hover:text-brand-electric transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-blue" /> Technology Partners
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-brand-electric transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-blue" /> Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-navy-850 pb-2">
              Our Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-electric transition-colors text-left">
                  IT Consulting & Topology
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-electric transition-colors text-left">
                  Wi-Fi as a Service (WaaS)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-electric transition-colors text-left">
                  Next-Gen UTM Firewalls
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-electric transition-colors text-left">
                  Structured LAN / WLAN Setup
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-electric transition-colors text-left">
                  Matrix Biometric Access (COSEC)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-electric transition-colors text-left">
                  Enterprise Video Surveillance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-navy-850 pb-2">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                <span>{COMPANY.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-electric shrink-0" />
                <div>
                  <a href={`tel:${COMPANY.phone.primary}`} className="text-white hover:text-brand-electric block font-medium">
                    {COMPANY.phone.displayPrimary}
                  </a>
                  <span className="text-xs text-slate-500">Sales & General Corporate</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-electric shrink-0" />
                <div>
                  <a href={`tel:${COMPANY.phone.support}`} className="text-white hover:text-brand-electric block font-medium">
                    {COMPANY.phone.displaySupport}
                  </a>
                  <span className="text-xs text-slate-500">Dedicated Helpdesk & AMC</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-electric shrink-0" />
                <div>
                  <a href={`mailto:${COMPANY.email.sales}`} className="text-white hover:text-brand-electric block">
                    {COMPANY.email.sales}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400">
                  <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
                  <p className="text-slate-500">Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-navy-900 bg-navy-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Axel Networks. All rights reserved. Enterprise IT Consulting & Solutions Since 2011.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('about')} className="hover:text-slate-300 transition-colors">
              About
            </button>
            <button onClick={() => handleNav('partners')} className="hover:text-slate-300 transition-colors">
              Technology Ecosystem
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors">
              Direct Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
