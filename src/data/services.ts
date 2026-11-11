export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge: string;
  challenges: string[];
  features: string[];
  benefits: string[];
  approach: string[];
  technologies: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "it-consulting",
    slug: "it-consulting",
    title: "IT Consulting & Architecture",
    subtitle: "Strategic Infrastructure Planning & Scalability Engineering",
    shortDesc: "Comprehensive network assessment, topology design, and technology roadmap consulting to build future-proof, high-performance IT backbones.",
    fullDesc: "Whether expanding an existing corporate footprint or designing a brand-new facility, Axel Networks provides strategic IT consulting. Our certified senior engineers analyze your data flow, bandwidth constraints, failover resiliency, and scalability needs to build robust, compliant network topologies aligned with business objectives.",
    icon: "Network",
    badge: "Strategic Advisory",
    challenges: [
      "Unplanned network growth causing unexpected bottlenecks and latency",
      "Lack of redundancy leading to costly unplanned business downtime",
      "Difficulty aligning IT infrastructure investments with 3-5 year corporate projections",
      "Inefficient multi-branch or hybrid connectivity across dispersed locations"
    ],
    features: [
      "End-to-end Network Layout & Topology Blueprinting",
      "Bandwidth Aggregation & Quality of Service (QoS) Optimization",
      "Server Room & Data Center Rack Infrastructure Planning",
      "Structured Copper & Fiber Optic Backbone Schematics",
      "Security Audits & Multi-Branch WAN Consolidation"
    ],
    benefits: [
      "Eliminate costly retrofits through predictive capacity planning",
      "Guaranteed 99.9%+ operational continuity with active-passive failover",
      "Clear vendor-neutral hardware procurement recommendations",
      "Optimized total cost of ownership (TCO) across IT life cycles"
    ],
    approach: [
      "Discovery & Infrastructure Audit",
      "Traffic & Capacity Modeling",
      "Architectural Blueprint Delivery",
      "Executive Review & Phased Rollout Roadmap"
    ],
    technologies: ["Cisco", "Aruba", "Extreme Networks", "MikroTik", "Fiber Backbones"]
  },
  {
    id: "wireless-networking",
    slug: "wireless-networking",
    title: "Enterprise Wireless & WaaS",
    subtitle: "High-Speed, Dense Wi-Fi as a Service with Zero Maintenance",
    shortDesc: "High-density enterprise wireless deployments on managed subscription (WaaS) or turnkey ownership models with seamless roaming and zero downtime.",
    fullDesc: "Axel Networks' Wi-Fi as a Service (WaaS) model frees your organization from wireless complexity and capital expenditure bottlenecks. We deploy cutting-edge enterprise 802.11ax (Wi-Fi 6/6E) access points, central cloud controllers, and automated interference management, backed by proactive 24/7 SLA monitoring.",
    icon: "Wifi",
    badge: "Flagship Offering",
    challenges: [
      "Dead zones, packet drops, and unstable wireless roaming in dense offices",
      "Security risks from unsegmented guest traffic and rogue access points",
      "High upfront CapEx for enterprise access points and cloud licenses",
      "Internal IT overwhelmed by ongoing RF tuning and firmware updates"
    ],
    features: [
      "Predictive Heatmap RF Site Surveys & Spectrum Analysis",
      "Seamless 802.11k/r/v Fast BSS Roaming Across Multi-Floor Facilities",
      "Granular Captive Portals with OTP & Single Sign-On (SSO) Authentication",
      "Automated Band Steering & Airtime Fairness Optimization",
      "Flexible OpEx Subscription Model (Wi-Fi as a Service) or CapEx Turnkey"
    ],
    benefits: [
      "Zero maintenance burden on internal IT teams with full SLA management",
      "Consistent Gigabit wireless speeds across executive, open, and warehouse areas",
      "Strict network isolation between corporate devices, IoT, and guest visitors",
      "Detailed bandwidth analytics, user logging, and compliance reporting"
    ],
    approach: [
      "Pre-Deployment RF Heatmap Survey",
      "Hardware Installation & Cabling",
      "SSID, VLAN & Firewall Isolation Configuration",
      "Continuous Cloud Monitoring & SLA Maintenance"
    ],
    technologies: ["Sophos AP Series", "Aruba Networks", "Ruckus", "Ubiquiti UniFi Enterprise"]
  },
  {
    id: "network-infrastructure",
    slug: "network-infrastructure",
    title: "Network Infrastructure & LAN/WLAN",
    subtitle: "Enterprise Switching, Routing & Server Room Integration",
    shortDesc: "Engineered local and wide area network setups, intelligent Layer 2/Layer 3 switching, clean cable management, and high-availability rack architectures.",
    fullDesc: "A company's operational speed depends on the stability of its physical and logical network layers. Axel Networks designs, installs, and manages enterprise switching fabrics, VLAN segmentation, core-distribution-access hierarchy, and structured cabling that withstand high bandwidth demands.",
    icon: "Layers",
    badge: "Core Engineering",
    challenges: [
      "Spaghetti cabling and untracked patch panels causing extended MTTR",
      "Broadcast storms and network loops crashing office switches",
      "Aging legacy 100Mbps/1Gbps switches struggling with modern cloud workloads",
      "Lack of environmental monitoring and backup power in server enclosures"
    ],
    features: [
      "Layer 2 & Layer 3 Managed Switch Stacking & Trunking",
      "VLAN Segmentation for Voice, Video, Data, and Surveillance",
      "Structured Category 6A / Category 7 & Fiber Optic Cable Termination",
      "Precision Server Room Cable Dressing & Labeling Standards",
      "Redundant Power Distribution Units (PDU) & Smart UPS Integration"
    ],
    benefits: [
      "Blazing throughput with 10Gbps/40Gbps optical uplink backbones",
      "Rapid troubleshooting thanks to systematized color-coded labeling",
      "Isolated broadcast domains preventing company-wide network cascades",
      "Clean, scalable server room footprint ready for enterprise audits"
    ],
    approach: [
      "Physical Site & Server Room Inspection",
      "Rack Elevation & Cable Pathway Engineering",
      "Switch Stacking & VLAN Provisioning",
      "Fluke Certification Testing & Documentation Handover"
    ],
    technologies: ["Cisco Catalyst", "Aruba CX", "D-Link Enterprise", "Schneider Electric", "CommScope"]
  },
  {
    id: "cybersecurity-solutions",
    slug: "cybersecurity-solutions",
    title: "Cybersecurity & UTM Firewall",
    subtitle: "Synchronized Next-Gen Threat Defense & Perimeter Protection",
    shortDesc: "Next-Gen UTM Firewalls, deep packet inspection, endpoint synchronization, zero-day malware defense, and secure VPNs for distributed workforces.",
    fullDesc: "Modern cyber threats evade traditional antivirus. Axel Networks partners with global cybersecurity leaders like Sophos and Fortinet to deploy Synchronized Security. When an endpoint is compromised, your firewall instantly isolates it from the rest of the network within milliseconds, preventing lateral ransomware spread.",
    icon: "ShieldCheck",
    badge: "Mission Critical",
    challenges: [
      "Sophisticated ransomware and phishing campaigns targeting corporate endpoints",
      "Remote workers accessing corporate networks over insecure channels",
      "Zero visibility into encrypted SSL/TLS traffic and hidden shadow IT apps",
      "Regulatory compliance mandates (ISO 27001, GDPR, Indian Data Protection)"
    ],
    features: [
      "Sophos XGS Next-Gen Firewall & Unified Threat Management (UTM)",
      "Synchronized Security Heartbeat Linking Firewalls & Endpoints",
      "Deep Packet Inspection (DPI) with AI-powered Zero-Day Sandboxing",
      "Enterprise IPSec & SSL VPN Gateways with Multi-Factor Authentication",
      "Web Content Filtering, Application Control & Bandwidth Shaping"
    ],
    benefits: [
      "Automatic lateral movement isolation stops ransomware in its tracks",
      "Total visibility into user internet consumption and bandwidth hogs",
      "Zero data leakage via encrypted, audited remote-work access tunnels",
      "Peace of mind with real-time threat intelligence and proactive alerts"
    ],
    approach: [
      "Vulnerability & Security Posture Assessment",
      "Firewall Architecture & Rule Set Definition",
      "Endpoint Agent Rollout & Heartbeat Pairing",
      "Ongoing Threat Definition Updates & Log Audits"
    ],
    technologies: ["Sophos XGS/UTM", "Sophos Intercept X", "Fortinet FortiGate", "Palo Alto Networks"]
  },
  {
    id: "it-management",
    slug: "it-management",
    title: "Managed IT & AMC Support",
    subtitle: "Proactive Infrastructure Monitoring, Maintenance & SLA Helpdesk",
    shortDesc: "Comprehensive Annual Maintenance Contracts (AMC), proactive health monitoring, scheduled preventive servicing, and rapid technical support.",
    fullDesc: "Eliminate unpredictable IT downtime with Axel Networks' managed services. We provide flexible Annual Maintenance Contracts (AMC) and on-demand engineering support. Our engineers conduct regular preventive maintenance, firmware audits, backup verifications, and swift incident response.",
    icon: "ServerCog",
    badge: "24/7 Reliability",
    challenges: [
      "High cost of retaining full-time in-house tier-2 and tier-3 network engineers",
      "Reactive firefighting instead of proactive hardware degradation alerts",
      "Silent backup failures discovered only after data loss incidents",
      "Inconsistent SLA response times from disparate local vendors"
    ],
    features: [
      "Comprehensive & Non-Comprehensive Annual Maintenance Contracts (AMC)",
      "Proactive 24/7 SNMP Network Device Monitoring & Alerting",
      "Scheduled Monthly Preventive Maintenance Visits & Dust Cleaning",
      "Automated Configuration Backups for Routers, Switches, and Firewalls",
      "Dedicated Helpdesk with Guaranteed First-Response & Resolution SLAs"
    ],
    benefits: [
      "Predictable, transparent operational IT expenses with zero surprises",
      "Drastically reduced Mean Time to Detect (MTTD) and Resolve (MTTR)",
      "Extended lifespan of enterprise network hardware assets",
      "Certified senior engineers available on-call for emergency dispatches"
    ],
    approach: [
      "Asset Inventory & Health Baseline Audit",
      "Custom SLA & Escalation Matrix Formalization",
      "Deployment of Remote Health Telemetry",
      "Regular Quarterly Reviews & Performance Optimization"
    ],
    technologies: ["Zabbix", "PRTG", "SolarWinds", "Automated Config Backup Systems"]
  },
  {
    id: "workforce-management",
    slug: "workforce-management",
    title: "Workforce & Access Control",
    subtitle: "Matrix Biometric Attendance, Palm Vein & Door Controllers",
    shortDesc: "Matrix COSEC biometric access control, palm vein scanners, contactless RF cards, and centralized multi-location attendance software integration.",
    fullDesc: "Control physical premise access and streamline employee attendance with Matrix Security Solutions engineered by Axel Networks. From high-security palm vein and optical fingerprint door controllers to multi-site centralized attendance software, we deploy scalable, tamper-proof enterprise systems.",
    icon: "Fingerprint",
    badge: "Enterprise Security",
    challenges: [
      "Buddy punching and inaccurate manual attendance records in growing firms",
      "Unauthorized premise access endangering proprietary assets and safety",
      "Difficulty synchronizing employee clock-ins across multiple branches/plants",
      "Clunky integration between door hardware and corporate HRMS/payroll tools"
    ],
    features: [
      "Matrix COSEC Palm Vein, Fingerprint & RFID Door Controllers",
      "Centralized Site Controllers (COSEC PANEL LITE) Managing Up to 255 Doors",
      "Integration with Turnstiles, Electromagnetic Locks & Fire Alarms",
      "Web-Based & Mobile Employee Self-Service Attendance Portals",
      "Seamless API / Database Synchronization with SAP, Oracle, and Custom HRMS"
    ],
    benefits: [
      "100% accurate, tamper-proof biometric records eliminating payroll fraud",
      "Instant automated door release during emergency fire alarm events",
      "Real-time visibility into branch attendance across all corporate sites",
      "Rugged IP65-rated enclosures suitable for both offices and industrial floors"
    ],
    approach: [
      "Site Access Points & Physical Door Survey",
      "Hardware Installation & Low-Voltage Power Wiring",
      "COSEC Software Deployment & HRMS Integration",
      "Enrollment Training & Admin Handover"
    ],
    technologies: ["Matrix COSEC Centra", "COSEC Door Controllers", "COSEC ARC", "EM/Mifare/HID Cards"]
  }
];

