export interface CompanyInfo {
  name: string;
  tagline: string;
  foundedYear: number;
  yearsOfExcellence: number;
  phone: {
    primary: string;
    displayPrimary: string;
    support: string;
    displaySupport: string;
  };
  email: {
    sales: string;
    support: string;
    info: string;
  };
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  businessHours: {
    days: string;
    hours: string;
    closed: string;
  };
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
  };
}

export const COMPANY: CompanyInfo = {
  name: "Axel Networks",
  tagline: "Building Smarter, Secure & Connected Businesses",
  foundedYear: 2011,
  yearsOfExcellence: new Date().getFullYear() - 2011,
  phone: {
    primary: "+911414012333",
    displayPrimary: "+91 141 4012333",
    support: "+911415105103",
    displaySupport: "+91 141 510 5103",
  },
  email: {
    sales: "sales@axelnetworks.com",
    support: "support@axelnetworks.com",
    info: "info@axelnetworks.co.in",
  },
  address: {
    street: "403A, 4th Floor, Shyam Anukampa",
    locality: "Ashok Rd, C Scheme",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302001",
    country: "India",
    full: "403A, 4th Floor Shyam Anukampa, Ashok Rd, C Scheme, Jaipur, Rajasthan 302001",
  },
  businessHours: {
    days: "Monday – Saturday",
    hours: "10:00 AM – 7:00 PM IST",
    closed: "Sunday Closed",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/axel-networks",
    twitter: "https://twitter.com/axelnetworks",
    facebook: "https://www.facebook.com/axelnetworks",
    youtube: "https://www.youtube.com/@axelnetworks",
  },
};

