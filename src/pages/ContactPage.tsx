import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  Check 
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { MEDIA_CONFIG } from '../data/media';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Wireless Networking (WaaS)',
    preferredTime: '10:00 AM – 12:00 PM',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [referenceTicket, setReferenceTicket] = useState('');

  const servicesList = [
    'IT Consulting & Network Topology',
    'Enterprise Wireless & WaaS (Wi-Fi as a Service)',
    'Network Infrastructure & LAN/WLAN Setup',
    'Cybersecurity & Sophos UTM Firewalls',
    'Managed IT & Annual Maintenance Contracts (AMC)',
    'Matrix Biometric Access & Attendance (COSEC)',
    'Video Surveillance & SATATYA VMS',
    'Other Technology Inquiries'
  ];

  const timeSlots = [
    '10:00 AM – 12:00 PM',
    '12:00 PM – 2:00 PM',
    '2:00 PM – 4:00 PM',
    '4:00 PM – 6:00 PM'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid contact phone number';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company / Organization name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomTicket = `AXEL-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceTicket(randomTicket);
    }, 1200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY.phone.displayPrimary);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Large Photographic Hero Header */}
      <section className="relative py-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={MEDIA_CONFIG.hero.posterImage}
            alt="Contact Axel Networks"
            className="w-full h-full object-cover opacity-20 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950" />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-35" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-brand-electric uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Connect with Axel Networks
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you are planning a campus Wi-Fi deployment, auditing perimeter firewalls, or setting up biometric attendance across multi-floor facilities, our engineering desk is at your service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Information + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Corporate Channels & Verified Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
                  Verified Contact Points
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
                  We're Here to Assist Your Business
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  You can reach our corporate desk or dedicated support engineers directly. All formal inquiries receive written routing and response within 24 to 48 hours.
                </p>
              </div>

              {/* Supporting Business Environment Photo */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-48 bg-navy-950">
                <img
                  src={MEDIA_CONFIG.company.officeTeam}
                  alt="Axel Networks Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Sales Desk */}
                <div className="p-5 rounded-2xl bg-surface-alt border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>Corporate &amp; Sales Desk</span>
                    </span>
                    <button
                      onClick={handleCopyPhone}
                      className="text-xs text-slate-500 hover:text-brand-blue flex items-center gap-1 font-medium"
                      title="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="text-xl font-bold text-navy-900">
                    <a href={`tel:${COMPANY.phone.primary}`} className="hover:text-brand-blue transition-colors">
                      {COMPANY.phone.displayPrimary}
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    Direct line for new infrastructure projects, quotation requests, and partnership queries.
                  </div>
                </div>

                {/* Technical Helpdesk */}
                <div className="p-5 rounded-2xl bg-surface-alt border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Technical Support &amp; Active AMC</span>
                  </div>
                  <div className="text-xl font-bold text-navy-900">
                    <a href={`tel:${COMPANY.phone.support}`} className="hover:text-brand-blue transition-colors">
                      {COMPANY.phone.displaySupport}
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">
                    Priority engineering support line for active AMC clients, firewall incidents, and hardware repairs.
                  </div>
                </div>

                {/* Email Inquiries */}
                <div className="p-5 rounded-2xl bg-surface-alt border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Email Routing</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Sales &amp; Proposals:</span>
                      <a href={`mailto:${COMPANY.email.sales}`} className="font-semibold text-navy-900 hover:text-brand-blue">
                        {COMPANY.email.sales}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Support &amp; Tickets:</span>
                      <a href={`mailto:${COMPANY.email.support}`} className="font-semibold text-navy-900 hover:text-brand-blue">
                        {COMPANY.email.support}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Registered Address */}
                <div className="p-5 rounded-2xl bg-surface-alt border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Jaipur Headquarters</span>
                  </div>
                  <p className="text-xs sm:text-sm text-navy-900 font-medium leading-relaxed">
                    {COMPANY.address.full}
                  </p>
                  <div className="pt-1 text-xs text-slate-500 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Mon – Sat: 10:00 AM – 7:00 PM IST (Sunday Closed)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Business Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-elevated p-8 sm:p-10 relative">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        INQUIRY LOGGED :: REF #{referenceTicket}
                      </span>
                      <h3 className="text-2xl font-bold text-navy-900 pt-2">
                        Thank You, {formData.firstName}!
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Your enterprise inquiry has been securely routed to our solutions engineering team. We will contact you at <strong className="text-navy-900">{formData.email}</strong> during your preferred window ({formData.preferredTime}).
                      </p>
                    </div>

                    <div className="bg-surface-alt p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1 text-slate-600">
                      <div><strong className="text-navy-900">Company:</strong> {formData.company}</div>
                      <div><strong className="text-navy-900">Interest Area:</strong> {formData.serviceInterest}</div>
                      <div><strong className="text-navy-900">Phone:</strong> {formData.phone}</div>
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          company: '',
                          serviceInterest: 'Wireless Networking (WaaS)',
                          preferredTime: '10:00 AM – 12:00 PM',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900">
                        Submit a Business Technology Enquiry
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Please furnish your business details. Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
                      </p>
                    </div>

                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="Aditya"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-surface-alt focus:bg-white focus:outline-none transition-colors ${
                            errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                          }`}
                        />
                        {errors.firstName && <p className="text-[11px] text-red-500 mt-1">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Sharma"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-surface-alt focus:bg-white focus:outline-none transition-colors ${
                            errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                          }`}
                        />
                        {errors.lastName && <p className="text-[11px] text-red-500 mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Corporate Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-surface-alt focus:bg-white focus:outline-none transition-colors ${
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                          }`}
                        />
                        {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-surface-alt focus:bg-white focus:outline-none transition-colors ${
                            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / Organization / School Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Technologies Pvt Ltd"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-surface-alt focus:bg-white focus:outline-none transition-colors ${
                          errors.company ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                        }`}
                      />
                      {errors.company && <p className="text-[11px] text-red-500 mt-1">{errors.company}</p>}
                    </div>

                    {/* Service Selection & Preferred Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Service of Interest
                        </label>
                        <select
                          value={formData.serviceInterest}
                          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-surface-alt focus:bg-white focus:outline-none focus:border-brand-blue transition-colors"
                        >
                          {servicesList.map((srv, idx) => (
                            <option key={idx} value={srv}>{srv}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Contact Window
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-surface-alt focus:bg-white focus:outline-none focus:border-brand-blue transition-colors"
                        >
                          {timeSlots.map((slot, idx) => (
                            <option key={idx} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Description of Requirement / Challenge <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your campus scale, number of users, current bandwidth or security challenges..."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-surface-alt focus:bg-white focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                        }`}
                      ></textarea>
                      {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    {/* Anti-spam / Data Privacy Notice */}
                    <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-surface-alt p-3 rounded-lg border border-slate-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Axel Networks respects your corporate privacy. Your information is securely dispatched only to certified network solutions personnel and is never disclosed to external brokers.
                      </span>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3.5 px-6 rounded-xl font-bold text-white transition-all duration-200 shadow-md flex items-center justify-center gap-2 ${
                          isSubmitting 
                            ? 'bg-slate-400 cursor-not-allowed' 
                            : 'bg-brand-blue hover:bg-brand-blueDark hover:shadow-glow'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Routing Your Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Enterprise Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Google Maps Embed Section */}
      <section className="bg-surface-alt py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
                Office Location
              </span>
              <h3 className="text-xl font-bold text-navy-900 mt-1">
                Axel Networks Corporate Office – Jaipur
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                403A, 4th Floor Shyam Anukampa, Ashok Rd, C Scheme, Jaipur, Rajasthan 302001
              </p>
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=Axel+Networks+Jaipur"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 hover:border-brand-blue text-xs font-semibold text-navy-900 rounded-lg shadow-sm transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <iframe
              title="Axel Networks Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7787498703816!2d75.80436806315971!3d26.915017347932093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6969326223f%3A0xcdc7ea7c49bda6c6!2sAxel%20Networks!5e0!3m2!1sen!2sin!4v1486544049082"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
