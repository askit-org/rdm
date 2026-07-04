import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FlowingLeaves from "./components/FlowingLeaves";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RDM Moringa Powder | 100% Pure Natural Superfood Supplement",
  description: "RDM Moringa Powder is a premium, FSSAI certified Ayurvedic supplement made of 100% pure organic Moringa Oleifera leaves. Boost energy, immunity, and skin wellness naturally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-primary text-cream">
        <FlowingLeaves />
        {children}
      </body>
    </html>
  );
}

