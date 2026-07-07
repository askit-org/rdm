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
  metadataBase: new URL("https://rdmmoringa.co.in"),
  title: "RDM Moringa | Best Organic Moringa Powder in India",
  description: "Looking for the best moringa in India? RDM Moringa Powder is a premium, FSSAI certified Ayurvedic supplement made of 100% pure organic Moringa Oleifera leaves. Boost energy, immunity, and skin wellness naturally.",
  openGraph: {
    title: "RDM Moringa | Best Organic Moringa Powder in India",
    description: "Looking for the best moringa in India? RDM Moringa Powder is a premium, FSSAI certified Ayurvedic supplement made of 100% pure organic Moringa Oleifera leaves. Boost energy, immunity, and skin wellness naturally.",
    url: "https://rdmmoringa.co.in",
    siteName: "RDM Moringa",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "RDM Moringa Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RDM Moringa | Best Organic Moringa Powder in India",
    description: "Looking for the best moringa in India? RDM Moringa Powder is a premium, FSSAI certified Ayurvedic supplement made of 100% pure organic Moringa Oleifera leaves. Boost energy, immunity, and skin wellness naturally.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-primary text-cream">
        <FlowingLeaves />
        {children}
      </body>
    </html>
  );
}

