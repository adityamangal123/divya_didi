import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Cpu, 
  MapPin, 
  PhoneCall 
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { MEDIA_CONFIG } from '../data/media';
import { ImageGallery } from '../components/media/ImageGallery';
import { FullWidthVideoSection } from '../components/media/FullWidthVideoSection';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Large Photographic Hero Header */}
      <section className="relative py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={MEDIA_CONFIG.hero.posterImage}
            alt="Axel Networks Infrastructure Background"
            className="w-full h-full object-cover opacity-20 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950" />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-35" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-brand-electric uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              Corporate Overview • Established 2011
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Engineering Trust, Connectivity &amp; Resilient IT Infrastructure.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Axel Networks was founded in 2011 with a singular conviction: enterprises deserve cost-effective, custom-engineered technology solutions without the bloated overhead or vendor lock-in of traditional IT consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Storytelling & 14-Year Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
                Our Genesis &amp; Growth
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                Over a Decade of Continuous Technical Evolution
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Started in 2011, Axel Networks has never looked back. Slowly and steadily, we have achieved milestone after milestone in terms of successful corporate deployments and loyal clients across diverse industries.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Each corporate facility presents distinct physical layouts, bandwidth bottlenecks, and security imperatives. Our certified team of systems engineers embraces these challenges with passion, continually expanding our technical repertoire across advanced routing, high-density Wi-Fi 6, perimeter defense, and physical access control.
              </p>
              <div className="border-l-4 border-brand-blue pl-4 py-3 italic text-slate-700 bg-surface-alt rounded-r-lg text-sm">
                "We don't simply deploy hardware; we architect operational certainty for organizations where downtime is never an option."
              </div>
            </div>

            {/* Timeline Visual */}
            <div className="lg:col-span-6">
              <div className="bg-surface-alt rounded-2xl p-8 border border-slate-200 space-y-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy-900 border-b border-slate-200 pb-3 flex items-center justify-between">
                  <span>Key Evolutionary Milestones</span>
                  <span className="text-xs font-mono text-brand-blue font-bold">2011 – PRESENT</span>
                </h3>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                  <div className="relative flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow">
                      '11
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Founded in Jaipur, India</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Established core IT network consultation and structured LAN infrastructure services.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-navy-900 text-brand-electric flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow">
                      '14
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Matrix Security Solutions Distributorship</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Expanded into biometric access control (COSEC) and SATATYA video surveillance systems.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-navy-900 text-brand-electric flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow">
                      '17
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Sophos Synchronized Security Partnership</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Became authorized solutions partner delivering Next-Gen UTM Firewalls &amp; EDR.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow">
                      '21
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Launch of Managed Wi-Fi as a Service (WaaS)</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Pioneered subscription-based enterprise wireless setups with zero maintenance overhead.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow">
                      NOW
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">14+ Years of Industry Leadership</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Trusted systems integrator for commercial, educational, and healthcare enterprises.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Visual Elements */}
      <section className="py-24 bg-surface-alt border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-brand-blue/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To deliver cost-effective, tailor-made enterprise IT networking, cybersecurity, and workforce access solutions that eliminate downtime, protect corporate intellectual property, and enable businesses to scale effortlessly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-brand-blue/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To be the most respected and dependable enterprise IT systems integrator, celebrated for technical precision, authentic partner hardware, zero-friction SLA support, and long-term client advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Full-Width Video Section */}
      <FullWidthVideoSection onContactClick={() => onNavigate('contact')} />

      {/* Team & Workplace Gallery */}
      <ImageGallery 
        title="Team, Workplace & Engineering In Action"
        subtitle="Explore our certified engineers, server room setups, and on-site testing environments."
      />

      {/* Core Operational Values */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mt-3 tracking-tight">
              Our Core Operational Values
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              The fundamental standards that govern every network rack we dress, firewall rule we apply, and client agreement we uphold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-surface-alt border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Authenticity &amp; Integrity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero counterfeit parts. We provide only verified OEM hardware with authentic manufacturer serial numbers, warranties, and official licenses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-alt border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Engineering Excellence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rigorous adherence to international EIA/TIA cabling standards, Fluke testing, and strict multi-VLAN segmentation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-alt border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Long-Term Partnerships</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We measure success not by one-off hardware sales, but by multi-year relationships where clients view us as their primary IT department.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-alt border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Direct Responsibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When network incidents occur, you speak directly with senior engineers who possess intimate knowledge of your specific setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Location Details */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-brand-electric uppercase tracking-wider">
                Technical Headquarters
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Corporate Headquarters &amp; Operations
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Axel Networks houses an in-house engineering squad capable of handling the entire technology stack from physical optical fiber fusion splicing to complex Layer 3 BGP/OSPF routing and Sophos XGS policy tuning.
              </p>

              <div className="space-y-4 pt-2 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-electric shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Corporate Office:</div>
                    <div>{COMPANY.address.full}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-electric shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Operational Desk:</div>
                    <div>{COMPANY.businessHours.days}: {COMPANY.businessHours.hours}</div>
                    <div className="text-xs text-slate-500">24/7 Emergency Dispatch for Active AMC Clients</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 text-brand-electric shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Engineering Lines:</div>
                    <div>Sales: {COMPANY.phone.displayPrimary}</div>
                    <div>Support: {COMPANY.phone.displaySupport}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-navy-800 shadow-2xl h-80 sm:h-96">
                <img
                  src={MEDIA_CONFIG.company.solutionsBanner}
                  alt="Axel Networks Headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-3.5 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-xl shadow-lg transition-colors text-center text-sm"
                  >
                    Schedule an In-Person Office Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
