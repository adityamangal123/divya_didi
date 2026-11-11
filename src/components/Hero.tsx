import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Wifi, 
  Server, 
  Cpu, 
  CheckCircle2, 
  Lock, 
  Activity,
  Layers,
  PhoneCall
} from 'lucide-react';
import { COMPANY } from '../data/company';

interface HeroProps {
  onExploreSolutions: () => void;
  onContactTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSolutions, onContactTeam }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden enterprise-gradient-hero text-white">
      {/* Background Decorative Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern-dark pointer-events-none opacity-60"></div>

      {/* Subtle Glowing Orb Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-electric/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Enterprise Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-brand-electric/30 text-xs font-semibold text-brand-electric shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-brand-electric animate-pulse"></span>
              <span>Enterprise IT Infrastructure & Cybersecurity • Est. 2011</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building Smarter, Secure &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-white to-blue-200">Connected Businesses.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Axel Networks empowers enterprises with high-speed wireless infrastructure (WaaS), Next-Gen synchronized cybersecurity, robust LAN/WAN topologies, and Matrix biometric workforce management. Cost-effective, customized, and engineered for relentless uptime.
            </p>

            {/* Key Trust Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0" />
                <span>Zero-Downtime Migration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0" />
                <span>Certified System Integrators</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0" />
                <span>24/7 SLA Engineering</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreSolutions}
                className="w-full sm:w-auto px-7 py-3.5 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactTeam}
                className="w-full sm:w-auto px-7 py-3.5 bg-navy-850 hover:bg-navy-800 text-white font-semibold rounded-xl border border-slate-700/80 hover:border-brand-electric/50 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-brand-electric" />
                <span>Contact Our Team</span>
              </button>
            </div>

            {/* Phone Quick Dial */}
            <p className="text-xs text-slate-400">
              Need immediate technical consultation? Call our direct desk:{' '}
              <a href={`tel:${COMPANY.phone.primary}`} className="text-brand-electric hover:underline font-semibold">
                {COMPANY.phone.displayPrimary}
              </a>
            </p>
          </div>

          {/* Right Column: Sophisticated Network & Cyber Visual Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Card Container */}
              <div className="relative bg-navy-950/80 backdrop-blur-xl border border-navy-800 rounded-2xl p-6 shadow-2xl overflow-hidden cyber-glow">
                {/* Tech Diagram Header */}
                <div className="flex items-center justify-between border-b border-navy-850 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">Axel-SecCore :: Topology.v4</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                    <Activity className="w-3 h-3 animate-spin" />
                    <span>SYSTEM ONLINE</span>
                  </div>
                </div>

                {/* Simulated Network Stack Node Visualization */}
                <div className="space-y-4">
                  {/* Layer 1: Perimeter Gateway */}
                  <div className="bg-navy-900/90 rounded-xl p-3.5 border border-navy-800 hover:border-brand-blue/50 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center text-brand-electric">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Sophos Synchronized Perimeter</div>
                        <div className="text-[11px] text-slate-400">Deep Packet Inspection • Zero-Day Sandbox</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-brand-electric bg-navy-950 px-2 py-1 rounded border border-navy-800">
                      SECURED
                    </span>
                  </div>

                  {/* Connecting Line */}
                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="w-0.5 h-5 bg-gradient-to-b from-brand-electric to-brand-blue"></div>
                  </div>

                  {/* Layer 2: Core Distribution Fabric */}
                  <div className="bg-navy-900/90 rounded-xl p-3.5 border border-navy-800 hover:border-brand-blue/50 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center text-brand-electric">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">High-Throughput Core Switching</div>
                        <div className="text-[11px] text-slate-400">10G/40G Fiber Backbone • L3 Redundancy</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-navy-950 px-2 py-1 rounded border border-navy-800">
                      99.99% UP
                    </span>
                  </div>

                  {/* Connecting Line */}
                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="w-0.5 h-5 bg-gradient-to-b from-brand-blue to-brand-electric"></div>
                  </div>

                  {/* Layer 3: Managed Wireless & Endpoints */}
                  <div className="bg-navy-900/90 rounded-xl p-3.5 border border-navy-800 hover:border-brand-blue/50 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center text-brand-electric">
                        <Wifi className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Managed Enterprise Wi-Fi (WaaS)</div>
                        <div className="text-[11px] text-slate-400">Multi-Floor Roaming • Captive OTP Gateway</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-brand-electric bg-navy-950 px-2 py-1 rounded border border-navy-800">
                      OPTIMAL
                    </span>
                  </div>
                </div>

                {/* Live Stats Footer Strip */}
                <div className="mt-5 pt-4 border-t border-navy-850 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-navy-900/50 p-2 rounded-lg border border-navy-850">
                    <div className="text-base font-bold text-white">2011</div>
                    <div className="text-[10px] text-slate-400 font-medium">Established</div>
                  </div>
                  <div className="bg-navy-900/50 p-2 rounded-lg border border-navy-850">
                    <div className="text-base font-bold text-brand-electric">100%</div>
                    <div className="text-[10px] text-slate-400 font-medium">Customized</div>
                  </div>
                  <div className="bg-navy-900/50 p-2 rounded-lg border border-navy-850">
                    <div className="text-base font-bold text-white">&lt;2h</div>
                    <div className="text-[10px] text-slate-400 font-medium">SLA Support</div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Cyber Badge */}
              <div className="absolute -bottom-4 -right-4 bg-navy-900 border border-brand-electric/40 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-electric" />
                <span className="text-xs font-semibold text-white">Zero Trust Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

