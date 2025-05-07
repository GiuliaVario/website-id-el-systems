import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO
export const metadata: Metadata = {
  title: {
    default: "Id. El. Systems",
    template: "%s | Id. El. Systems",
  },
  description: "Impianti elettrici e soluzioni tecnologiche",
};

// Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased leading-relaxed bg-white text-neutral-900`}
      >
        <Header />
        <main className="pt-0 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
