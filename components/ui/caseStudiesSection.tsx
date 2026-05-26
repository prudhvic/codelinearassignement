"use client";

import { useState } from "react";
import { tv } from "tailwind-variants";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/common/button";
import CustomLink from "../common/customLink";

type CaseStudy = {
  category: string;
  title: string;
  company: string;
  companyIcon: string;
};

const caseStudies: CaseStudy[] = [
  {
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    companyIcon: "/icons/zoomerr.svg",
  },
  {
    category: "DIGITAL BANKING",
    title: "Streamlining payments for a global fintech leader",
    company: "Kontrastr",
    companyIcon: "/icons/kontrastr.svg",
  },
  {
    category: "OPEN BANKING",
    title: "Building seamless API integrations for modern banks",
    company: "Smart Finder",
    companyIcon: "/icons/smart-finder.svg",
  },
  {
    category: "LOAN MANAGEMENT",
    title: "Transforming loan origination with digital solutions",
    company: "Shells",
    companyIcon: "/icons/shells.svg",
  },
];

const styles = tv({
  slots: {
    section: ["w-full flex flex-col gap-12", "px-4 py-16 sm:px-8 md:px-14"],

    heading: ["text-4xl font-normal text-white text-center", "lg:text-5xl"],

    sliderOuter: "overflow-hidden",

    track: "flex transition-transform duration-500 ease-in-out",

    slide: [
      "shrink-0 basis-full",
      "grid grid-cols-1 lg:grid-cols-2",
      "gap-8 items-center",
    ],

    imageCard: [
      "flex items-center justify-center",
      "rounded-3xl bg-blue-950",
      "min-h-80 overflow-hidden",
    ],

    iconGrid: "grid grid-cols-2 gap-6 p-10",

    content: "flex flex-col gap-6",

    categoryLabel: [
      "text-xs font-medium uppercase",
      "tracking-widest text-brand",
    ],

    slideTitle: ["text-3xl font-normal leading-snug text-white", "lg:text-4xl"],

    companyRow: "flex items-center gap-3",

    companyIconWrapper: [
      "w-8 h-8 rounded-full bg-zinc-800",
      "flex items-center justify-center overflow-hidden",
    ],

    companyName: "text-sm text-zinc-400",

    navRow: ["relative flex items-center justify-center", "gap-6"],

    arrowBtn: [
      "w-12 h-12 rounded-full",
      "border border-blue-600",
      "flex items-center justify-center",
      "text-blue-600 transition-colors",
    ],

    dotsRow: "flex items-center gap-2",

    dot: [
      "w-2 h-2 rounded-full",
      "bg-white/30 cursor-pointer",
      "transition-all duration-300",
    ],

    activeDot: [
      "w-6 h-2 rounded-full",
      "bg-brand cursor-pointer",
      "transition-all duration-300",
    ],

    viewAllLink: [
      "absolute right-0",
      "inline-flex items-center gap-1.5",
      "text-xs font-medium uppercase tracking-widest",
      "text-brand hover:opacity-80 transition-opacity",
    ],
  },
});

export default function CaseStudiesSection() {
  const [active, setActive] = useState(0);
  const {
    section,
    heading,
    sliderOuter,
    track,
    slide,
    imageCard,
    iconGrid,
    content,
    categoryLabel,
    slideTitle,
    companyRow,
    companyIconWrapper,
    companyName,
    navRow,
    arrowBtn,
    dotsRow,
    dot,
    activeDot,
    viewAllLink,
  } = styles();

  const prev = () =>
    setActive((i) => (i - 1 + caseStudies.length) % caseStudies.length);
  const next = () => setActive((i) => (i + 1) % caseStudies.length);

  return (
    <section className={section()}>
      <h2 className={heading()}>Our Case Studies</h2>

      <div className={sliderOuter()}>
        <div
          className={track()}
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {caseStudies.map((study, i) => (
            <div key={i} className={slide()}>
              <div className={imageCard()}>
                <div className={iconGrid()}>
                  {[0, 1, 2, 3].map((j) => (
                    <Image
                      key={j}
                      src={study.companyIcon}
                      alt=""
                      width={80}
                      height={80}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <div className={content()}>
                <p className={categoryLabel()}>{study.category}</p>
                <h3 className={slideTitle()}>{study.title}</h3>
                <div className={companyRow()}>
                  <div className={companyIconWrapper()}>
                    <Image
                      src={study.companyIcon}
                      alt={study.company}
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className={companyName()}>{study.company}</span>
                </div>
                <Button variant="ghost">READ MORE</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={navRow()}>
        <button className={arrowBtn()} onClick={prev} aria-label="Previous">
          <ArrowLeft size={18} />
        </button>

        <div className={dotsRow()}>
          {caseStudies.map((_, i) => (
            <button
              key={i}
              className={i === active ? activeDot() : dot()}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button className={arrowBtn()} onClick={next} aria-label="Next">
          <ArrowRight size={18} />
        </button>
        <div>
          <CustomLink text="VIEW ALL" className="text-right mr-auto" />
        </div>
      </div>
    </section>
  );
}
