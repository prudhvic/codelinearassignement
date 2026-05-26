"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { tv } from "tailwind-variants";
import { useState } from "react";

const navbar = tv({
  slots: {
    wrapper: "w-full px-4 pt-6 sm:px-8",

    nav: [
      "mx-auto flex max-w-3xl items-center justify-between",
      "rounded-3xl border border-white/10",
      "bg-zinc-900/95 p-2.5 backdrop-blur-xl",
    ],

    logo: "text-2xl font-normal text-white",

    desktopMenu: "hidden items-center gap-14 lg:flex",

    navItem: [
      "flex items-center gap-1",
      "text-xs font-medium uppercase",
      "text-white transition-colors hover:text-white/80",
    ],

    button: [
      "hidden lg:flex items-center justify-center",
      "rounded-2xl border border-white",
      "px-10 py-3 text-xs font-medium uppercase",
      "text-white transition-all hover:bg-white hover:text-black",
    ],

    mobileButton: [
      "flex h-10 w-10 items-center justify-center",
      "rounded-xl border border-white/20",
      "text-white lg:hidden",
      "transition-all duration-300",
    ],

    mobileIcon: "transition-transform duration-300",

    mobileMenu: [
      "overflow-hidden lg:hidden",
      "transition-all duration-300 ease-in-out",
    ],

    mobileContent: [
      "rounded-3xl border border-white/10",
      "bg-zinc-900 p-6",
      "backdrop-blur-xl",
    ],

    mobileNavList: "flex flex-col gap-6",

    mobileNavItem: [
      "flex items-center justify-between",
      "text-xs font-medium uppercase text-white",
    ],

    requestDemoMobileButton:
      "mt-6 w-full rounded-2xl border border-white py-3 text-xs font-medium uppercase text-white",
  },

  variants: {
    open: {
      true: {
        mobileMenu: "max-h-96 opacity-100 translate-y-0 mt-3",
        mobileIcon: "rotate-180",
      },

      false: {
        mobileMenu: "max-h-0 opacity-0 -translate-y-2",
        mobileIcon: "rotate-0",
      },
    },
  },

  defaultVariants: {
    open: false,
  },
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const {
    wrapper,
    nav,
    logo,
    desktopMenu,
    navItem,
    button,
    mobileButton,
    mobileIcon,
    mobileMenu,
    mobileContent,
    mobileNavList,
    mobileNavItem,
    requestDemoMobileButton,
  } = navbar({ open });

  return (
    <header className={wrapper()}>
      <nav className={nav()}>
        <h1 className={logo()}>N7</h1>

        <ul className={desktopMenu()}>
          <li>
            <Link href="#" className={navItem()}>
              SOLUTIONS
              <ChevronDown size={16} />
            </Link>
          </li>

          <li>
            <Link href="#" className={navItem()}>
              RESOURCES
              <ChevronDown size={16} />
            </Link>
          </li>

          <li>
            <Link href="#" className={navItem()}>
              ABOUT US
            </Link>
          </li>
        </ul>

        <button className={button()}>REQUEST DEMO</button>

        <button
          onClick={() => setOpen(!open)}
          className={mobileButton()}
        >
          <div className={mobileIcon()}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </div>
        </button>
      </nav>

      <div className={mobileMenu()}>
        <div className={mobileContent()}>
          <ul className={mobileNavList()}>
            <li>
              <Link href="#" className={mobileNavItem()}>
                SOLUTIONS
                <ChevronDown size={16} />
              </Link>
            </li>

            <li>
              <Link href="#" className={mobileNavItem()}>
                RESOURCES
                <ChevronDown size={16} />
              </Link>
            </li>

            <li>
              <Link href="#" className={mobileNavItem()}>
                ABOUT US
              </Link>
            </li>
          </ul>

          <button className={requestDemoMobileButton()}>
            REQUEST DEMO
          </button>
        </div>
      </div>
    </header>
  );
}