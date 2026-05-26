export type Solution = {
  imageUrl: string;
  title: string;
  badge?: string;
  description: string;
};

export type CaseStudy = {
  category: string;
  title: string;
  company: string;
  companyIcon: string;
};

export type Article = {
  category: string;
  title: string;
  author: string;
  date: string;
};

export type Address = {
  city: string;
  text: string;
};

export type NavLinkGroup = {
  heading: string;
  items: string[];
};

export type Feature = {
  heading: string;
  description: string;
  bullets: string[];
};

export type TickerItem =
  | { type: "brand"; content: string }
  | { type: "text"; before: string; emoji: string; after: string };
