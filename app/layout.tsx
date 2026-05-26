import type { Metadata } from "next";
import { Chivo_Mono, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "N7 — Digital Banking Platform",
  description:
    "N7 helps financial institutions improve client experience, automate procedures, and ensure full regulatory compliance with modern digital banking solutions.",
  keywords: [
    "digital banking",
    "core banking",
    "open banking",
    "fintech",
    "loan management",
    "N7",
    "CB7",
  ],
  authors: [{ name: "N7 Banking" }],
  openGraph: {
    title: "N7 — Digital Banking Platform",
    description:
      "Modern digital banking solutions for financial institutions — core banking, open banking, loan origination and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "N7 — Digital Banking Platform",
    description: "Modern digital banking solutions for financial institutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chivoMono.variable} ${archivo.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-[#060D1A] overflow-x-hidden font-archivo">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
