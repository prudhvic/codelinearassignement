export type Feature = {
  heading: string;
  description: string;
  bullets: string[];
};

export type TickerItem =
  | { type: "brand"; content: string }
  | { type: "text"; before: string; emoji: string; after: string };

export const complianceFeature: Feature = {
  heading: "Fully compliant with regulatory requirements",
  description:
    "The governance of risk management with regulatory is achieved by our risk management framework. N7 is fully integrated to work with digital banking solutions to streamline procedures.",
  bullets: [
    "Pre-Integrated Security System",
    "Fully Compliant Anti-Regulatory Requirements",
    "Digitally Connected Core",
  ],
};

export const legacyFeature: Feature = {
  heading: "No legacy IT systems",
  description:
    "Our Digital Banking solution and multipotent approach help financial institutions take advantage of digital technologies while remaining aligned for trust and regulatory compliance.",
  bullets: [
    "Adaptive & Intelligent API Architecture",
    "Architected User Experience",
    "Cloud-native With lower TCO",
  ],
};

export const branchFeature: Feature = {
  heading: "No traditional branches",
  description:
    "Our Digital Banking solution-to-box provides while adjusting and optimising some local data for a seamless checkout type Experience.",
  bullets: [
    "Anomalous & Paperless Banking",
    "Digital transformation capability",
    "Customers, Institutions and Transfer",
  ],
};

export const tickerItems: TickerItem[] = [
  { type: "text", before: "Say ", emoji: "👋", after: " to the new way of banking" },
  { type: "brand", content: "CB7" },
  { type: "text", before: "Say ", emoji: "👋", after: " to the new way of banking" },
  { type: "brand", content: "N7" },
];
