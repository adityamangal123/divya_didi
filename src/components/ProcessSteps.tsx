import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  Cpu, 
  LifeBuoy, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Wifi,
  BarChart3
} from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Understand Business Requirements",
      subtitle: "Comprehensive Infrastructure Assessment & Site Audit",
      icon: Search,
      desc: "Every deployment begins with an in-depth on-site technical inspection. Our certified network engineers analyze your current physical wiring, bandwidth choke points, RF interference maps, security posture, and projected user growth.",
      deliverables: [
        "Physical site and server room assessment",
        "Wi-Fi RF spectrum and heatmap analysis",
        "Vulnerability and bandwidth utilization audit",
        "Future capacity and user-density forecasting"
      ]
    },
    {
      number: "02",
      title: "Plan the Right Solution",
      subtitle: "Custom Architecture, Topology & Hardware Specification",
      icon: Compass,
      desc: "We design a customized, vendor-neutral blueprint balancing performance, fault tolerance, and cost efficiency. We specify exact hardware, VLAN segmentation strategies, firewall policies, and failover pathways.",
      deliverables: [
        "Layer 2 / Layer 3 network topology schematics",
        "Firewall rule sets and UTM synchronized security architecture",
        "Vendor-neutral bill of materials (BoM)",
        "Zero-downtime migration and cutover roadmap"
      ]
    },
    {
      number: "03",
      title: "Implement & Integrate",
      subtitle: "Engineered Deployment, Structured Cabling & Testing",
      icon: Cpu,
      desc: "Our senior technicians execute precision installation. From clean rack dressing and fiber termination to firewall heartbeat pairing and Matrix biometric door controller wiring, every component is rigorously tested.",
      deliverables: [
        "Structured Cat6A/fiber termination with certified Fluke testing",
        "Switch stacking, trunking, and SSID VLAN isolation",
        "Sophos firewall & endpoint synchronized heartbeat pairing",
        "Staff training and comprehensive network handover documentation"
      ]
    },
    {
      number: "04",
      title: "Support & Optimize",
      subtitle: "24/7 SLA Monitoring, Preventive Audits & AMC",
      icon: LifeBuoy,
      desc: "We maintain ongoing responsibility for your technology infrastructure. Through flexible Annual Maintenance Contracts (AMC) and proactive telemetry alerts, we ensure uninterrupted corporate productivity.",
      deliverables: [
        "Continuous SNMP health monitoring and threshold alerting",
        "Guaranteed rapid response and resolution SLA windows",
        "Scheduled monthly physical preventive cleaning and maintenance",
        "Automated router/firewall configuration backups and firmware patching"
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface-alt border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
            Our Proven Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-3 tracking-tight">
            How Axel Networks Delivers Certainty
          </h2>
          <p className="text-base text-slate-600 mt-3">
            A disciplined, four-phase engineering framework refined over 14+ years to eliminate project risk, prevent costly retrofits, and ensure flawless deployment.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-xl border text-left transition-all duration-200 relative overflow-hidden ${
                  isActive 
                    ? 'bg-navy-900 text-white border-brand-blue shadow-lg' 
                    : 'bg-white text-navy-900 border-slate-200 hover:border-brand-blue/40 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black ${isActive ? 'text-brand-electric' : 'text-slate-300'}`}>
                    {step.number}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>
                <h3 className={`text-sm font-bold leading-tight ${isActive ? 'text-white' : 'text-navy-900'}`}>
                  {step.title}
                </h3>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-electric to-brand-blue"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-elevated p-8 lg:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
                <span>Phase {steps[activeStep].number}</span>
                <span>•</span>
                <span>{steps[activeStep].subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                {steps[activeStep].title}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                  Key Deliverables in this Phase:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-surface-alt p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-950 rounded-xl p-6 text-white border border-navy-800 space-y-4">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                <span className="text-xs font-mono text-brand-electric">Axel Milestone Gate</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  VERIFIED
                </span>
              </div>
              <div className="text-xs text-slate-300 space-y-2">
                <p>
                  No phase concludes without formal sign-off. Axel Networks adheres to strict compliance checklists ensuring every connection, SSID, firewall rule, and controller is certified before proceeding.
                </p>
              </div>
              <div className="pt-2 border-t border-navy-850 flex items-center justify-between text-xs">
                <span className="text-slate-400">Next Step:</span>
                <button 
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="text-brand-electric hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Advance to Phase {steps[(activeStep + 1) % steps.length].number}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

