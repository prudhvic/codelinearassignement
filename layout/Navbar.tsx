"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { tv } from "tailwind-variants";
import { useState } from "react";

const navbar = tv({
    slots: {
        wrapper: "w-full px-8 pt-6",

        nav: `
      mx-auto flex max-w-3xl items-center justify-between
      rounded-3xl border border-white/10
      bg-zinc-900/95 p-2.5
      backdrop-blur-xl
    `,

        logo: "text-2xl font-normal text-white",

        desktopMenu: "hidden items-center gap-14 lg:flex",

        navItem: `
      flex items-center gap-1
      text-xs font-medium uppercase
      text-white transition-colors
      hover:text-white/80
    `,

        button: `
      hidden md:flex items-center justify-center
      rounded-2xl border border-white
      px-10 py-3
      text-xs font-medium uppercase
      text-white transition-all
      hover:bg-white hover:text-black
    `,

        mobileButton: `
      flex h-10 w-10 items-center justify-center
      rounded-xl border border-white/20
      text-white lg:hidden
    `,

        mobileMenu: "mt-3 lg:hidden",

        mobileContent: `
      rounded-3xl border border-white/10
      bg-zinc-900 p-6
    `,

        mobileNavList: "flex flex-col gap-6",

        mobileNavItem: `
      flex items-center justify-between
      text-xs font-medium uppercase text-white
    `,
        requestDemoMobileButton: "mt-6 w-full rounded-2xl border border-white py-3 text-xs font-medium uppercase text-white"

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
        mobileMenu,
        mobileContent,
        mobileNavList,
        mobileNavItem,
        requestDemoMobileButton
    } = navbar();

    return (
        <header className={wrapper()}>
            <nav className={nav()}>

                {/* Logo */}
                <h1 className={logo()}>N7</h1>

                {/* Desktop Nav */}
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

                {/* Desktop Button */}
                <button className={button()}>
                    REQUEST DEMO
                </button>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className={mobileButton()}
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
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
            )}
        </header>
    );
}