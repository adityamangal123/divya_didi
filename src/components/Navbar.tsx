import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Wifi, 
  Network, 
  Fingerprint, 
  ServerCog, 
  Layers
} from 'lucide-react';
import { COMPANY } from '../data/company';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);

      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services', hasDropdown: true },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Partners', id: 'partners' },
    { label: 'Contact', id: 'contact' },
  ];

  const quickServices = [
    { title: 'IT Consulting & Topology', id: 'services', icon: Network },
    { title: 'Enterprise Wireless & WaaS', id: 'services', icon: Wifi },
    { title: 'Network Infrastructure LAN/WLAN', id: 'services', icon: Layers },
    { title: 'Cybersecurity & UTM Firewall', id: 'services', icon: ShieldCheck },
    { title: 'Managed IT & AMC Support', id: 'services', icon: ServerCog },
    { title: 'Workforce & Biometric Access', id: 'services', icon: Fingerprint },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-0.5 bg-gradient-to-r from-brand-blue via-brand-electric to-blue-300 transition-all duration-75 ease-out fixed top-0 left-0 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Corporate Strip */}
      <div className={`bg-navy-950 text-slate-300 text-xs border-b border-navy-850/80 transition-all duration-300 ${isScrolled ? 'py-1 opacity-90 hidden sm:block' : 'py-2.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <a 
              href={`tel:${COMPANY.phone.primary}`} 
              className="flex items-center gap-1.5 hover:text-brand-electric transition-colors"
              title="Primary Sales Line"
            >
              <Phone className="w-3.5 h-3.5 text-brand-electric" />
              <span>Corporate Desk: <strong className="text-white font-medium">{COMPANY.phone.displayPrimary}</strong></span>
            </a>
            <a 
              href={`tel:${COMPANY.phone.support}`} 
              className="flex items-center gap-1.5 hover:text-brand-electric transition-colors hidden sm:flex"
              title="Dedicated Support Desk"
            >
              <Phone className="w-3.5 h-3.5 text-brand-electric" />
              <span>AMC Support: <strong className="text-white font-medium">{COMPANY.phone.displaySupport}</strong></span>
            </a>
            <a 
              href={`mailto:${COMPANY.email.sales}`} 
              className="flex items-center gap-1.5 hover:text-brand-electric transition-colors hidden lg:flex"
            >
              <Mail className="w-3.5 h-3.5 text-brand-electric" />
              <span>{COMPANY.email.sales}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon – Sat: 10:00 AM – 7:00 PM IST</span>
            </span>
            <span className="hidden lg:inline text-navy-800">|</span>
            <span className="hidden lg:inline text-xs font-semibold text-brand-electric bg-navy-900 px-2 py-0.5 rounded border border-navy-800">
              Est. 2011 • 14+ Yrs Pedigree
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-950/95 backdrop-blur-xl shadow-2xl py-3 border-b border-navy-800/80' 
            : 'bg-navy-950/80 backdrop-blur-md py-4 border-b border-navy-850/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="bg-white p-1.5 rounded-lg shadow-sm border border-slate-200/20 group-hover:shadow-md transition-shadow">
                <img 
                  src="/assets/logo.png" 
                  alt="Axel Networks" 
                  className="h-9 sm:h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold tracking-tight text-lg leading-tight group-hover:text-brand-electric transition-colors">
                  AXEL NETWORKS
                </span>
                <span className="text-[10px] text-brand-electric/90 font-mono uppercase tracking-widest">
                  Enterprise IT Solutions
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setServicesDropdown(true)}
                  onMouseLeave={() => item.hasDropdown && setServicesDropdown(false)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
                      currentPage === item.id
                        ? 'text-white bg-navy-850 font-semibold shadow-inner border border-navy-800'
                        : 'text-slate-200 hover:text-white hover:bg-navy-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-90 text-slate-400`} />
                    )}
                  </button>

                  {/* Services Megamenu Dropdown */}
                  {item.hasDropdown && servicesDropdown && (
                    <div className="absolute top-full left-0 w-84 pt-2 z-50">
                      <div className="bg-navy-950/98 backdrop-blur-2xl border border-navy-800 rounded-2xl shadow-2xl p-3 grid gap-1">
                        <div className="px-3 py-2 border-b border-navy-850 mb-1 flex items-center justify-between">
                          <span className="text-xs font-semibold text-brand-electric uppercase tracking-wider font-mono">
                            Core Technology Practices
                          </span>
                          <span 
                            onClick={() => handleNavClick('services')}
                            className="text-xs text-slate-400 hover:text-white cursor-pointer"
                          >
                            View All →
                          </span>
                        </div>
                        {quickServices.map((qs, idx) => {
                          const IconComp = qs.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNavClick(qs.id)}
                              className="flex items-center gap-3 p-2.5 rounded-xl text-left text-slate-200 hover:text-white hover:bg-navy-900 transition-colors group/item"
                            >
                              <div className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-brand-electric group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <span className="text-xs font-medium text-slate-200 group-hover/item:text-white">
                                {qs.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueDark rounded-xl shadow-md hover:shadow-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get in Touch</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-3 py-1.5 text-xs font-bold text-white bg-brand-blue rounded-lg sm:hidden"
              >
                Contact
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 pt-4 pb-6 space-y-2 animate-fadeIn">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    currentPage === item.id
                      ? 'text-brand-electric bg-navy-900 border-l-4 border-brand-electric font-semibold'
                      : 'text-slate-200 hover:bg-navy-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-navy-850 space-y-3">
              <div className="bg-navy-900/60 p-3 rounded-xl text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-electric" />
                  <span>Call: <a href={`tel:${COMPANY.phone.primary}`} className="text-white font-semibold">{COMPANY.phone.displayPrimary}</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-electric" />
                  <span>{COMPANY.email.sales}</span>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 px-4 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Request Enterprise Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
