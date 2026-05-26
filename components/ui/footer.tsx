import { tv } from "tailwind-variants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { addresses, navLinks } from "@/data/footer";

const styles = tv({
  slots: {
    footer: ["w-full", "px-4 sm:px-8 md:px-14", "pt-8 sm:pt-16 pb-10"],

    topGrid: ["grid grid-cols-1 lg:grid-cols-2", "items-start gap-10 lg:gap-0"],

    n7Text: [
      "text-8xl mx-auto md:mx-0 md:text-[20rem] font-medium leading-none",
      "inline-block pointer-events-none select-none",
    ],

    rightSide: "flex flex-col",

    addressGrid: ["grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", "gap-8 pb-12"],

    cityName: "text-sm font-semibold text-white mb-2",

    addressText: "text-xs leading-6 text-zinc-400",

    divider: "border-t border-white/10",

    linksGrid: ["grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", "gap-8 pt-12"],

    linkHeading: "text-sm font-semibold text-white mb-5",

    linkList: "flex flex-col gap-3",

    linkRow: [
      "flex items-center justify-between gap-4",
      "text-sm text-zinc-400 font-archivo",
      "hover:text-white transition-colors",
    ],

    linkArrow: "text-brand shrink-0",

    copyright: [
      "border-t border-white/10",
      "mt-12 pt-6",
      "text-xs leading-6 text-zinc-500",
    ],
  },
});

export default function Footer() {
  const {
    footer,
    topGrid,
    n7Text,
    addressGrid,
    cityName,
    addressText,
    divider,
    linksGrid,
    linkHeading,
    linkList,
    linkRow,
    linkArrow,
    rightSide,
    copyright,
  } = styles();

  return (
    <footer className={footer()}>
      <div className={topGrid()}>
        <span
          className={n7Text()}
          style={{
            background: "linear-gradient(to bottom, #00E5FF 0%, #0055EE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          N7
        </span>

        <div className={rightSide()}>
          <div className={addressGrid()}>
            {addresses.map(({ city, text }, i) => (
              <div key={i}>
                <p className={cityName()}>{city}</p>
                <p className={addressText()}>{text}</p>
              </div>
            ))}
          </div>

          <div className={divider()} />

          <div className={linksGrid()}>
            {navLinks.map(({ heading, items }) => (
              <div key={heading}>
                <p className={linkHeading()}>{heading}</p>
                <ul className={linkList()}>
                  {items.map((item) => (
                    <li key={item}>
                      <Link href="#" className={linkRow()}>
                        <span>{item}</span>
                        <ArrowRight size={14} className={linkArrow()} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
            <p className={copyright()}>
              Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
              Commercial Brand] — [Registered under the Companies Act 2006 in
              England and Wales | Number of Incorporation 13100992]
            </p>
        </div>
      </div>
    </footer>
  );
}
