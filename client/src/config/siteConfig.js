/**
 * Site Configuration
 * This file contains all configurable content for the website
 * Last updated: 2025-09-30T19:01:15.517Z
 */

// contactInfo configuration
export const contactInfo = {
  agent: {
    name: "Maddison Dombroski",
    photo: "https://via.placeholder.com/150x150?text=Agent",
    phone: "7054409346",
    email: "maddison.dombroski@gmail.com",
    company: "Maddison Dombroski",
    license: "RECO #84397152",
    repo: "New-Listing-413"
  },
  social: {
    instagram: "https://instagram.com/executivehomesrealtyinc",
    facebook: "https://facebook.com/executivehomesrealtyinc",
    twitter: "https://twitter.com/executivehomesrealtyinc",
    linkedin: "https://linkedin.com/company/executivehomesrealtyinc"
  }
};

// heroVideo configuration
export const heroVideo = {
  url: "https://player.vimeo.com/video/1121520262",
  type: "video/mp4",
  autoplay: true,
  loop: true,
  muted: true,
  playsInline: true
};

// neighborhood configuration
export const neighborhood = {
  name: "Beeton Community",
  city: "Beeton",
  description: "Beeton Community is a close‑knit small town celebrated for its annual Honey and Garden Festival and strong local agriculture roots. Residents enjoy easy access to scenic walking and equestrian routes along the Trans Canada Trail, a selection of cozy cafes and family‑friendly dining on Main Street, and year‑round recreational options with nearby Lake Simcoe.",
  highlights: [
    "Banting Heritage Park, celebrating Sir Frederick Banting's legacy",
    "Tottenham Conservation Area with wildlife views, fishing, and camping",
    "Museum on the Boyne showcasing local history and cultural artifacts",
    "Annual Beeton Honey and Garden Festival celebrating local horticulture and honey"
  ]
};

// neighborhoodAmenities configuration
export const neighborhoodAmenities = [
  {
    id: 1,
    name: "Lickity Split Ice Cream in Beeton",
    distance: "",
    category: "shopping",
    iconName: "ShoppingBag"
  },
  {
    id: 2,
    name: "Tottenham Conservation Area",
    distance: "",
    category: "recreation",
    iconName: "Leaf"
  },
  {
    id: 3,
    name: "Museum on the Boyne",
    distance: "",
    category: "education",
    iconName: "School"
  },
  {
    id: 4,
    name: "Country Style (Coffee shop)",
    distance: "",
    category: "dining",
    iconName: "Coffee"
  },
  {
    id: 5,
    name: "Henriette (Restaurant)",
    distance: "",
    category: "dining",
    iconName: "Utensils"
  },
  {
    id: 6,
    name: "Barrie St. @ Holland St. W. (Bus stop)",
    distance: "",
    category: "transportation",
    iconName: "Car"
  },
  {
    id: 7,
    name: "Tecumseth Fairy Land",
    distance: "",
    category: "recreation",
    iconName: "Users"
  },
  {
    id: 8,
    name: "Landmark Bus Lines",
    distance: "",
    category: "business",
    iconName: "Wifi"
  }
];

// neighborhoodStats configuration
export const neighborhoodStats = [
  {
    id: 1,
    title: "Walk Score",
    value: "55/100",
    caption: "Somewhat Walkable",
    iconName: "BadgeCheck",
    color: "bg-green-500"
  },
  {
    id: 2,
    title: "Transit Score",
    value: "N/A",
    caption: "Some Transit",
    iconName: "Compass",
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "BikeScore",
    value: "51/100",
    caption: "Bikeable",
    iconName: "Compass",
    color: "bg-blue-500"
  }
];

// openHouseBenefits configuration
export const openHouseBenefits = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 3 bedroom, 2 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Detached sales in Beeton.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information",
    description: "Simcoe County District School Board (SCDSB). Tecumseth Beeton Elementary School, Monsignor J E Ronan Catholic School, St. Thomas Aquinas Catholic Secondary School and Banting Memorial High School.",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// openHouseDetails configuration
export const openHouseDetails = {
  nextDate: "Saturday, October 4, 2025",
  time: "2:00 PM - 4:00 PM",
  host: "Maddison Dombroski",
  phone: "7054409346",
  email: "maddison.dombroski@gmail.com",
  ctaText: "RSVP for Open House",
  virtualTourAvailable: false,
  virtualTourUrl: "",
  allOpenHouses: [
    {
      date: "Saturday, October 4, 2025",
      time: "2:00 PM - 4:00 PM"
    }
  ]
};

// packageItems configuration
export const packageItems = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 3 bedroom, 2 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Detached sales in Beeton.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information",
    description: "Simcoe County District School Board (SCDSB). Tecumseth Beeton Elementary School, Monsignor J E Ronan Catholic School, St. Thomas Aquinas Catholic Secondary School and Banting Memorial High School.",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// propertyFeatures configuration
export const propertyFeatures = [
  "Main floor freshly painted (2025)",
  "● New back deck stairs (2025) with a gazebo over the deck",
  "● Stunning sunroom – perfect for morning coffee or year-round enjoyment",
  "● Hot tub with gazebo – ideal for relaxation in any season",
  "● Kitchen updated 5 years ago (2020)",
  "● Bathroom renovated 3 years ago (2022)",
  "● Roof replaced 6 years ago (2019)",
  "● Eavestroughs & gutters new – 1 year old (2024)",
  "● Windows replaced 2 years ago (2023)",
  "● New doors (2023–2024)",
  "● Driveway redone 1 year ago (2024) with space for 7 vehicles",
  "● 2 Gas hookups for BBQ, one on the deck and 1 by the hot tub",
  "● 3 backyard sheds:",
  "Shed 1 & 2: storage and garden shed"
];

// siteBranding configuration
export const siteBranding = {
  logoUrl: "/logo.svg",
  logoAlt: "118 Patterson St N",
  favicon: "/favicon.ico",
  colors: {
    primary: "#D9A566",
    primaryDark: "#8B6839",
    primaryLight: "#E6C38C",
    dark: "#111111",
    light: "#FFFFFF"
  },
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1759258465470-001.jpg",
  footer: {
    copyrightText: "© 2024 118 Patterson St N. All rights reserved.",
    disclaimer: "This website is for informational purposes only. Details are subject to change."
  }
};

// siteMetadata configuration
export const siteMetadata = {
  title: "118 Patterson St N | Detached | Beeton",
  description: "Sunroom + Hot Tub + Man Cave = Your Perfect Family Home Just Listed!",
  keywords: "detached, Beeton real estate, 3 bedroom, 2 bathroom, $959,900",
  ogImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1759258465470-001.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
  canonical: "https://118pattersonstn.com"
};

// testimonials configuration
export const testimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "Recent Homebuyer",
    content: "Maddison Dombroski provided exceptional service and found us exactly what we were looking for in Beeton.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 2,
    name: "Jennifer Liu",
    role: "Interior Designer",
    content: "The attention to detail and quality of finishes in this property is outstanding. Maddison Dombroski presented every detail clearly.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mark Williams",
    role: "Neighborhood Resident",
    content: "Living in this area, you appreciate the convenience and lifestyle. Maddison Dombroski knows the market incredibly well.",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg"
  }
];

