import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Wifi, 
  Network, 
  Fingerprint, 
  ServerCog, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Award, 
  Users, 
  ChevronRight,
  TrendingUp,
  Cpu,
  BarChart,
  PhoneCall,
  ArrowUpRight,
  Play
} from 'lucide-react';
import { HeroMedia } from '../components/media/HeroMedia';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { ProcessSteps } from '../components/ProcessSteps';
import { FullWidthVideoSection } from '../components/media/FullWidthVideoSection';
import { ProjectShowcase } from '../components/media/ProjectShowcase';
import { ImageGallery } from '../components/media/ImageGallery';
import { VideoGallery } from '../components/media/VideoGallery';
import { SERVICES } from '../data/services';
import { SOLUTIONS } from '../data/solutions';
import { COMPANY } from '../data/company';
import { MEDIA_CONFIG } from '../data/media';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectService }) => {
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

  const handleServiceClick = (id: string) => {
    if (onSelectService) {
      onSelectService(id);
    }
    onNavigate('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Cinematic Hero Media Section with Real Video Background */}
      <HeroMedia 
        onExploreSolutions={() => onNavigate('solutions')}
        onContactTeam={() => onNavigate('contact')}
      />

      {/* 2. Verified Technology Partners Marquee */}
      <PartnerMarquee onPartnerClick={() => onNavigate('partners')} />

      {/* 3. Company Introduction with Asymmetrical Visual Composition */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-brand-blue uppercase tracking-wider">
                <span>About Axel Networks</span>
                <span>•</span>
                <span>Established 2011</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-[1.15]">
                Pioneering Enterprise IT, Wireless &amp; Security Engineering for Over a Decade.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Started in 2011, Axel Networks has never looked back. Slowly and steadily, we have conquered technology milestones in terms of high-performance deployments and long-term client trust across India.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Each corporate facility brings unique architectural challenges. Our certified engineers design customized, cost-effective IT infrastructures that guarantee zero packet drop, seal perimeter vulnerabilities, and ensure seamless workforce access.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border border-slate-200 rounded-xl p-4 bg-surface-alt">
                  <h4 className="text-navy-900 font-bold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    Customized Topologies
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Engineered precisely to your building footprint and user density, avoiding rigid template constraints.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-surface-alt">
                  <h4 className="text-navy-900 font-bold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    Cost-Effective Delivery
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Optimized CapEx & OpEx investments with vendor-neutral procurement and flexible Wi-Fi as a Service.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blueDark group"
                >
                  <span>Learn more about our journey and engineering philosophy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Asymmetrical Layered Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Large Visual Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-elevated bg-navy-950 group h-96 sm:h-[450px]">
                  <img
                    src={MEDIA_CONFIG.company.officeTeam}
                    alt="Axel Networks Systems Engineering"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                    <span className="text-[10px] font-mono font-bold text-brand-electric bg-navy-900/90 px-2.5 py-1 rounded border border-navy-800">
                      ON-SITE SYSTEMS INTEGRATION
                    </span>
                    <h4 className="text-base font-bold mt-1.5">
                      Hands-On Engineering &amp; Fluke Certification
                    </h4>
                  </div>
                </div>

                {/* Overlapping Floating Secondary Image */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 rounded-xl overflow-hidden border-2 border-white shadow-2xl bg-white hidden sm:block">
                  <img
                    src={MEDIA_CONFIG.company.techReview}
                    alt="Network Review"
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3 bg-navy-950 text-white text-[11px] font-medium flex items-center justify-between">
                    <span>14+ Years Active</span>
                    <span className="text-brand-electric font-mono font-bold">EST. 2011</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Media-First Services Showcase with Large Photography */}
      <section className="py-24 bg-surface-alt border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
                Technology Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mt-3 tracking-tight">
                Specialized Enterprise IT Services
              </h2>
              <p className="text-base text-slate-600 mt-3 leading-relaxed">
                Click any service to view architectural specifications, challenges addressed, and our engineered implementation approach.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-white border border-slate-300 hover:border-brand-blue text-sm font-bold text-navy-900 hover:text-brand-blue rounded-xl shadow-sm transition-all"
              >
                <span>View Full Practice Directory</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 6 Media-Rich Service Cards with Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const servicePhoto = getServiceImage(service.id);
              return (
                <div 
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Photo Frame */}
                  <div className="relative h-48 overflow-hidden bg-navy-950">
                    <img
                      src={servicePhoto}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold text-white bg-navy-900/90 backdrop-blur-md px-2.5 py-1 rounded border border-navy-800">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-blue transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-600 bg-surface-alt px-2 py-0.5 rounded border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="pt-2 flex items-center justify-between text-xs font-bold text-brand-blue group-hover:text-brand-blueDark">
                      <span>Explore Technical Approach</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Full-Width Cinematic Video Section */}
      <FullWidthVideoSection onContactClick={() => onNavigate('contact')} />

      {/* 6. Why Choose Axel Networks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
              The Axel Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mt-3 tracking-tight">
              Why Corporate Clients Choose Axel Networks
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              We combine enterprise engineering rigor with the personalized responsiveness of a dedicated technology partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl border border-slate-200 bg-surface-alt hover:border-brand-blue/30 hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Experienced Engineering Team</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Qualified, certified network engineers with deep expertise in routing, switching, RF propagation, and synchronized cybersecurity.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-surface-alt hover:border-brand-blue/30 hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">100% Customized Solutions</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No boxed compromises. Topologies, VLAN partitions, and security policies designed specifically for your physical facility and user density.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-surface-alt hover:border-brand-blue/30 hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Cost-Effective Implementation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Flexible operational models like Wi-Fi as a Service (WaaS) combined with optimized CapEx procurement maximize ROI and eliminate waste.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-surface-alt hover:border-brand-blue/30 hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Disciplined 4-Step Process</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strict phase gating from RF heatmap surveys to certified Fluke cable testing guarantees zero unexpected downtime during cutovers.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-surface-alt hover:border-brand-blue/30 hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Reliable Customer Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct engineer hotline access (+91 141 510 5103) and proactive AMC visits guarantee your infrastructure receives prompt attention.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-surface-alt hover:border-brand-blue/30 hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Long-Term Partner Ties</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct authorized relationships with Sophos, Matrix, Aruba, and Fortinet ensure authentic hardware and top-tier warranty backing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Featured Real-World Project Showcase with Photography */}
      <ProjectShowcase onContactClick={() => onNavigate('contact')} />

      {/* 8. Modern 4-Step Process Stepper */}
      <ProcessSteps />

      {/* 9. Video Gallery Showcase */}
      <VideoGallery />

      {/* 10. Photo Gallery with Interactive Lightbox */}
      <ImageGallery />

      {/* 11. Final High-Conversion CTA Banner */}
      <section className="py-24 bg-navy-950 text-white relative overflow-hidden border-t border-navy-850">
        <div className="absolute inset-0 tech-grid-pattern-dark pointer-events-none opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-brand-electric/30 text-xs font-semibold text-brand-electric">
            <ShieldCheck className="w-4 h-4" />
            <span>Ready for Smarter, Secure Operations?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Let's Build a Smarter Technology Infrastructure.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with an Axel Networks senior network architect. We'll assess your current setup, discuss bandwidth or security bottlenecks, and design a customized, cost-effective roadmap.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-xl shadow-lg hover:shadow-glow transition-all flex items-center justify-center gap-2 text-base"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-navy-900 hover:bg-navy-850 text-white font-bold rounded-xl border border-slate-700 hover:border-brand-electric/50 transition-all flex items-center justify-center gap-2 text-base"
            >
              <PhoneCall className="w-5 h-5 text-brand-electric" />
              <span>Discuss Your Requirements</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-400">
            Corporate Sales Desk: <a href={`tel:${COMPANY.phone.primary}`} className="text-brand-electric font-bold underline">{COMPANY.phone.displayPrimary}</a> • Guaranteed response within 24–48 hours.
          </div>
        </div>
      </section>
    </div>
  );
};
