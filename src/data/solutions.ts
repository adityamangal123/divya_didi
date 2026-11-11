export interface SolutionCategory {
  id: string;
  category: string;
  headline: string;
  description: string;
  icon: string;
  solutions: {
    name: string;
    description: string;
    applications: string[];
    partnerTech: string;
    specs: string[];
  }[];
}

export const SOLUTIONS: SolutionCategory[] = [
  {
    id: "network-wireless",
    category: "Network & Wireless Infrastructure",
    headline: "Uninterrupted High-Throughput Corporate Connectivity",
    description: "Enterprise grade switching, routing, optical backbones, and dense Wi-Fi deployments engineered for zero packet drop and seamless roaming.",
    icon: "Wifi",
    solutions: [
      {
        name: "Managed Wi-Fi as a Service (WaaS)",
        description: "Turnkey enterprise Wi-Fi 6 infrastructure on a predictable monthly operational model with hardware, cloud controllers, and 24/7 maintenance included.",
        applications: ["Corporate Campuses", "Hospitals", "Co-working Spaces", "Warehouses"],
        partnerTech: "Aruba / Sophos APs",
        specs: ["Dual/Tri-band 802.11ax", "Up to 512 concurrent users/AP", "Zero handoff roaming"]
      },
      {
        name: "Core & Distribution Network Switching",
        description: "Layer 3 redundant switching architecture with multi-gigabit copper and 10G/40G fiber uplinks, link aggregation, and complete broadcast isolation.",
        applications: ["Data Centers", "Multi-Floor Corporate Offices", "Manufacturing Plants"],
        partnerTech: "Cisco / Aruba CX",
        specs: ["10G/40G SFP+ Uplinks", "Stacking up to 8 switches", "Hardware redundant power"]
      },
      {
        name: "Structured Cabling & Server Room Rack Design",
        description: "High-density Cat6A/Cat7 copper and Single-Mode/Multi-Mode optical fiber cabling, cable dressing, server rack elevation, and thermal airflow management.",
        applications: ["Server Rooms", "Modern Office Fitouts", "R&D Labs"],
        partnerTech: "CommScope / Schneider",
        specs: ["Fluke DSX-8000 Certified", "25-Year Performance Warranty", "Zero-tangle labeling"]
      }
    ]
  },
  {
    id: "enterprise-security",
    category: "Enterprise Security & Threat Defense",
    headline: "Perimeter, Gateway & Endpoint Synchronized Security",
    description: "Zero-trust network architecture, Next-Gen UTM Firewalls, deep packet inspection, and coordinated endpoint isolation to block sophisticated threats.",
    icon: "ShieldAlert",
    solutions: [
      {
        name: "Sophos Synchronized Next-Gen UTM Firewall",
        description: "Integrates network security and endpoint protection with automated Security Heartbeat, isolating infected machines in seconds before malware spreads.",
        applications: ["Financial Services", "Healthcare", "IT/ITeS", "Educational Institutes"],
        partnerTech: "Sophos XGS Series",
        specs: ["Deep Packet SSL Inspection", "Sandstorm Zero-Day Sandbox", "Active Directory SSO"]
      },
      {
        name: "Secure Remote Access & Zero Trust VPN",
        description: "High-throughput encrypted VPN tunnels for remote employees and multi-branch site-to-site WANs with multi-factor authentication (MFA).",
        applications: ["Hybrid Teams", "Branch Offices", "Executive Remote Access"],
        partnerTech: "Sophos Connect / FortiClient",
        specs: ["IPSec & OpenVPN support", "Geo-IP Filtering", "MFA Token integration"]
      },
      {
        name: "Endpoint Threat Detection & Response (EDR/XDR)",
        description: "AI-driven behavioral analysis that halts ransomware encryption instantly and rolls back altered files to their uncorrupted state.",
        applications: ["Corporate Workstations", "Critical Database Servers", "Executive Laptops"],
        partnerTech: "Sophos Intercept X",
        specs: ["CryptoGuard Ransomware Rollback", "Root Cause Analysis", "Exploit Prevention"]
      }
    ]
  },
  {
    id: "workforce-access",
    category: "Workforce & Biometric Access Control",
    headline: "Tamper-Proof Physical Security & Centralized HRMS Sync",
    description: "Matrix COSEC biometric systems engineered for precise time attendance, automated door control, visitor management, and multi-location governance.",
    icon: "Fingerprint",
    solutions: [
      {
        name: "Matrix COSEC Biometric Door Controllers",
        description: "Optical fingerprint, contactless RF card, and palm vein recognition door controllers with built-in PoE and weather-resistant IP65 casing.",
        applications: ["Executive Suites", "Server Rooms", "Manufacturing Gates", "R&D Centers"],
        partnerTech: "Matrix COSEC PATH / ARC",
        specs: ["50,000 Event Buffer", "0.5 sec Verification Speed", "Wiegand / RS-485 / IP"]
      },
      {
        name: "Centralized Multi-Site Attendance Software",
        description: "Web and cloud-based attendance management handling complex shift rosters, leave policies, overtime calculations, and automated payroll exports.",
        applications: ["Multi-Branch Enterprises", "Retail Chains", "Hospitality"],
        partnerTech: "Matrix COSEC CENTRA",
        specs: ["Unlimited Multi-Location Sync", "Direct SAP / Oracle HRMS API", "Mobile App with Geo-tag"]
      },
      {
        name: "Elevator & Auxiliary Device Control",
        description: "COSEC ARC IO800 controllers for elevator floor access restriction, siren triggers, and automated unlock integrations with fire alarm panels.",
        applications: ["Commercial High-Rises", "Hospitals", "High-Security Labs"],
        partnerTech: "Matrix COSEC ARC IO800",
        specs: ["8 Input / 8 Output Ports", "Elevator Floor Restriction", "Fire Alarm Interlock"]
      }
    ]
  },
  {
    id: "video-surveillance",
    category: "Video Surveillance & Visual Management (VMS)",
    headline: "Intelligent IP Surveillance & High-Definition Video Analytics",
    description: "Enterprise IP and hybrid video surveillance systems with centralized SATATYA VMS, PTZ optical zoom tracking, and automated perimeter intrusion alerts.",
    icon: "Video",
    solutions: [
      {
        name: "Matrix SATATYA Enterprise VMS (SAMAS)",
        description: "Centralized Video Management System supporting hundreds of camera feeds, smart bandwidth cascading, and e-map monitoring across dispersed branches.",
        applications: ["Enterprise Campuses", "Malls & Retail Hubs", "Warehouse Logistics"],
        partnerTech: "Matrix SATATYA SAMAS",
        specs: ["Multi-server Architecture", "Smart Video Analytics (IVS)", "Mobile Monitoring App"]
      },
      {
        name: "High-Definition IP IR Dome & Bullet Cameras",
        description: "Crisp Sony Starvis sensor cameras with true WDR, adaptive IR illumination up to 150m, and onboard edge tripwire intrusion detection.",
        applications: ["Perimeter Defense", "Indoor Office Floors", "Loading Docks"],
        partnerTech: "Matrix SATATYA IP Cameras",
        specs: ["Full HD to 4K Clarity", "H.265 Compression", "IP67 Weather & IK10 Vandal-Proof"]
      },
      {
        name: "Network & Hybrid Video Recorders (NVR/HVR)",
        description: "Enterprise rack-mountable NVRs with hot-swappable SATA bays, RAID redundancy, automated failover recording, and multi-display HDMI/VGA outputs.",
        applications: ["Control Rooms", "Security Command Centers"],
        partnerTech: "Matrix SATATYA NVR/HVR Series",
        specs: ["Up to 64 Channel Inputs", "RAID 0/1/5/10 Redundancy", "Dual Gigabit LAN"]
      }
    ]
  },
  {
    id: "it-infrastructure-management",
    category: "IT Infrastructure Management & AMC",
    headline: "Proactive Lifecycle Operations & SLA-Guaranteed Engineering",
    description: "End-to-end hardware maintenance, 24/7 network performance monitoring, scheduled preventive checks, and rapid on-site troubleshooting.",
    icon: "ServerCog",
    solutions: [
      {
        name: "Enterprise Annual Maintenance Contracts (AMC)",
        description: "Customized service contracts covering preventive physical servicing, firmware patching, standby hardware replacement, and priority engineer dispatch.",
        applications: ["Corporate Headquarters", "Factories", "Hotels", "Schools & Colleges"],
        partnerTech: "Multi-Vendor Support",
        specs: ["SLA Response from 2 Hours", "Quarterly Preventive Checks", "Standby Hardware Pool"]
      },
      {
        name: "Proactive Network Health & Telemetry Audits",
        description: "Continuous SNMP monitoring of CPU, memory, bandwidth saturation, link flap, and thermal indicators across all network appliances.",
        applications: ["24/7 Operations Centers", "Mission Critical Facilities"],
        partnerTech: "Enterprise Telemetry Tools",
        specs: ["Automated SMS/Email Alerts", "Historical Capacity Trends", "Scheduled Executive Reports"]
      }
    ]
  }
];

