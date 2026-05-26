import type { Address, NavLinkGroup } from "@/types";

export const addresses: Address[] = [
  {
    city: "London",
    text: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    text: "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    city: "London",
    text: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
];

export const navLinks: NavLinkGroup[] = [
  {
    heading: "Solutions",
    items: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    heading: "N7 Banking",
    items: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center",
    ],
  },
  {
    heading: "Our Socials",
    items: ["LinkedIn", "X"],
  },
];
