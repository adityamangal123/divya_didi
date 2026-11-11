export interface MediaItem {
  id: string;
  title: string;
  category: string;
  src: string;
  thumbnail?: string;
  caption: string;
  aspect?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  src: string;
  thumbnail: string;
  description: string;
  badge?: string;
}

export const MEDIA_CONFIG = {
  // Hero Visual Assets
  hero: {
    videoSrc: "/media/videos/company/axelnetworks_v3.mp4",
    posterImage: "/media/images/hero/datacenter-hero.jpg",
    secondaryImage: "/media/images/hero/cyber-network.jpg",
  },

  // Service Specific Images
  services: {
    itConsulting: "/media/images/services/it-consulting.jpg",
    wirelessWaas: "/media/images/services/wireless-waas.jpg",
    networkInfrastructure: "/media/images/services/network-infrastructure.jpg",
    cybersecurity: "/media/images/services/cybersecurity.jpg",
    managedIt: "/media/images/services/managed-it.jpg",
    workforceAccess: "/media/images/services/access-control.jpg",
    waasRoomOriginal: "/media/images/services/waas-room.png",
    lanWlanOriginal: "/media/images/services/lan-wlan.png",
  },

  // Corporate & Facility Images
  company: {
    officeTeam: "/media/images/team/engineers-at-work.jpg",
    techReview: "/media/images/team/tech-review.jpg",
    inner02: "/media/images/about/inner-img02.png",
    inner03: "/media/images/about/inner-img03.jpg",
    inner04: "/media/images/about/inner-img04.png",
    solutionsBanner: "/media/images/solutions/solutions-banner.jpg",
    partnersBanner: "/media/images/partners/partners-banner.jpg",
  },

  // Reusable Video Catalog
  videos: [
    {
      id: "company-overview",
      title: "Axel Networks Corporate Presentation",
      duration: "01:45",
      src: "/media/videos/company/axelnetworks_v3.mp4",
      thumbnail: "/media/images/hero/datacenter-hero.jpg",
      description: "Discover Axel Networks' 14-year legacy in delivering enterprise-class network infrastructure, managed Wi-Fi, and cybersecurity.",
      badge: "Corporate Reel"
    },
    {
      id: "synchronized-cybersecurity",
      title: "Sophos Synchronized Security Architecture",
      duration: "02:10",
      src: "/media/videos/company/axelnetworks_v3.mp4",
      thumbnail: "/media/images/services/cybersecurity.jpg",
      description: "How automated Security Heartbeat isolates compromised endpoints within milliseconds to prevent lateral ransomware spread.",
      badge: "Security Deep Dive"
    },
    {
      id: "waas-deployment",
      title: "Managed Wi-Fi as a Service (WaaS) Walkthrough",
      duration: "01:30",
      src: "/media/videos/company/axelnetworks_v3.mp4",
      thumbnail: "/media/images/services/wireless-waas.jpg",
      description: "Zero upfront CapEx enterprise Wi-Fi 6 rollout with proactive cloud telemetry and automated band steering.",
      badge: "Infrastructure"
    }
  ] as VideoItem[],

  // Curated Project Showcase & Gallery
  gallery: [
    {
      id: "g1",
      title: "High-Density Server Room & Fiber Backbones",
      category: "Infrastructure",
      src: "/media/images/projects/server-rack-cabling.jpg",
      caption: "Fluke DSX-8000 certified Cat6A structured cabling and 10G/40G optical uplinks dressed for enterprise audit compliance.",
      aspect: "landscape"
    },
    {
      id: "g2",
      title: "Multi-Floor Corporate Campus Wireless",
      category: "Wireless WaaS",
      src: "/media/images/projects/corporate-campus.jpg",
      caption: "Enterprise Wi-Fi 6 deployment supporting 2,500+ concurrent clients with zero-handoff fast BSS roaming.",
      aspect: "square"
    },
    {
      id: "g3",
      title: "24/7 Network Operations & Security Desk",
      category: "Cybersecurity",
      src: "/media/images/projects/noc-control-room.jpg",
      caption: "Centralized Sophos XGS firewall monitoring, real-time threat telemetry, and automated threshold alerts.",
      aspect: "portrait"
    },
    {
      id: "g4",
      title: "Optical Fiber Fusion Splicing & Testing",
      category: "Network Engineering",
      src: "/media/images/projects/fiber-splicing.jpg",
      caption: "Precision core alignment fusion splicing delivering insertion loss below 0.02 dB on enterprise campus backbones.",
      aspect: "landscape"
    },
    {
      id: "g5",
      title: "Executive Smart Boardroom & Unified AV",
      category: "Automation",
      src: "/media/images/projects/smart-boardroom.jpg",
      caption: "High-resolution AV over IP distribution and enterprise collaboration ecosystem integration.",
      aspect: "square"
    },
    {
      id: "g6",
      title: "Industrial Manufacturing Premise Access",
      category: "Biometrics",
      src: "/media/images/projects/industrial-plant.jpg",
      caption: "Matrix COSEC weather-proof IP65 biometric palm vein and turnstile access control deployed at manufacturing plant.",
      aspect: "landscape"
    }
  ] as MediaItem[]
};

