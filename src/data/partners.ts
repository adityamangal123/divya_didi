export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  role: string;
  logo: string;
  description: string;
  featured: boolean;
  specialization: string[];
  websiteUrl: string;
}

export const PARTNERS: PartnerItem[] = [
  {
    id: "sophos",
    name: "Sophos",
    category: "Cybersecurity & Firewall",
    role: "Certified Solutions Partner",
    logo: "/assets/sophos_inner.png",
    description: "Global leader in next-generation cybersecurity. Axel Networks engineers Sophos XGS Next-Gen Firewalls, Synchronized Security Heartbeat, and Intercept X endpoint protection to seal networks against zero-day threats and ransomware.",
    featured: true,
    specialization: ["Synchronized Security", "XGS Next-Gen UTM Firewalls", "Intercept X Endpoint Protection", "Sophos AP Wireless"],
    websiteUrl: "https://www.sophos.com"
  },
  {
    id: "matrix",
    name: "Matrix Security Solutions",
    category: "Biometrics & Video Surveillance",
    role: "Authorized System Integrator & Distributor",
    logo: "/assets/matrix_logo.png",
    description: "Leading manufacturer of world-class telecom and security solutions marketed across 50+ countries. Axel Networks delivers Matrix COSEC biometric access control, palm vein controllers, and SATATYA enterprise video surveillance management.",
    featured: true,
    specialization: ["COSEC Biometric & Palm Vein", "Time-Attendance Systems", "SATATYA Enterprise VMS", "IP Dome & Bullet Cameras"],
    websiteUrl: "https://www.matrixcomsec.com"
  },
  {
    id: "fortinet",
    name: "Fortinet",
    category: "Network Security",
    role: "Enterprise Technology Partner",
    logo: "/assets/Fortinet.jpg",
    description: "Pioneers in high-performance cybersecurity networking. Deploying FortiGate enterprise firewalls and secure fabric architectures for corporate clients requiring ultra-low latency packet filtering.",
    featured: true,
    specialization: ["FortiGate NGFW", "Secure SD-WAN", "Network Access Control"],
    websiteUrl: "https://www.fortinet.com"
  },
  {
    id: "aruba",
    name: "Aruba Networks (HPE)",
    category: "Enterprise Wireless & Switching",
    role: "Enterprise Mobility Partner",
    logo: "/assets/Aruba.jpg",
    description: "Industry standard for AI-powered enterprise wireless infrastructure, campus switching, and Wi-Fi 6 high-density deployments with centralized cloud management.",
    featured: true,
    specialization: ["Enterprise Wi-Fi 6/6E", "Aruba CX Campus Switching", "ClearPass Policy Management"],
    websiteUrl: "https://www.arubanetworks.com"
  },
  {
    id: "paloalto",
    name: "Palo Alto Networks",
    category: "Enterprise Cloud & Security",
    role: "Cybersecurity Technology Partner",
    logo: "/assets/Paloalto.jpg",
    description: "Global cybersecurity leader continually delivering innovation in threat defense, cloud protection, and high-capacity perimeter gateways.",
    featured: false,
    specialization: ["ML-Powered NGFW", "Prisma Cloud Security", "Zero Trust Architecture"],
    websiteUrl: "https://www.paloaltonetworks.com"
  },
  {
    id: "acronis",
    name: "Acronis",
    category: "Data Protection & Disaster Recovery",
    role: "Cyber Protect Partner",
    logo: "/assets/Acronis.jpg",
    description: "Unified backup, disaster recovery, and next-generation cybersecurity management designed to protect critical enterprise workloads from system failures.",
    featured: false,
    specialization: ["Cyber Backup & Cloud Storage", "Disaster Recovery as a Service", "Ransomware Defense"],
    websiteUrl: "https://www.acronis.com"
  },
  {
    id: "bosch",
    name: "Bosch Security",
    category: "Premise Security & Audio",
    role: "Integrated Systems Partner",
    logo: "/assets/Bosch.jpg",
    description: "World-class manufacturer of integrated premise safety, commercial public address, voice evacuation, and specialized perimeter surveillance systems.",
    featured: false,
    specialization: ["Intelligent Video Analytics", "Public Address & Voice Alarm", "Critical Infrastructure Protection"],
    websiteUrl: "https://www.boschsecurity.com"
  },
  {
    id: "crestron",
    name: "Crestron",
    category: "Commercial AV & Automation",
    role: "Enterprise Automation Partner",
    logo: "/assets/Creston.jpg",
    description: "Industry authority in unified conference room automation, smart boardrooms, high-resolution AV-over-IP distribution, and meeting space management.",
    featured: false,
    specialization: ["Boardroom Automation", "AirMedia Wireless Presentation", "AV over IP Distribution"],
    websiteUrl: "https://www.crestron.com"
  },
  {
    id: "microsoft",
    name: "Microsoft",
    category: "Cloud & Productivity Infrastructure",
    role: "Authorized Technology Partner",
    logo: "/assets/MSFT_logo.jpg",
    description: "Enterprise foundation for cloud directory identity (Entra ID), Microsoft 365, hybrid cloud server synchronization, and corporate workstation licensing.",
    featured: false,
    specialization: ["Microsoft 365 Hybrid Deployments", "Windows Server Infrastructure", "Azure Cloud Connect"],
    websiteUrl: "https://www.microsoft.com"
  }
];

