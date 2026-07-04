"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"wellness" | "advanced">(
    "wellness",
  );
  const [isZoomed, setIsZoomed] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [burstCount, setBurstCount] = useState(0);
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; rotate: number; scale: number }[]
  >([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Periodically trigger leaf scatter burst every 4 seconds
    const interval = setInterval(() => {
      setBurstCount((c) => c + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate leaf particles on every periodic burst trigger
    const newParticles = Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2 + (Math.random() - 0.5) * 0.3; // 12 directional angles
      const distance = Math.random() * 65 + 35; // scatter radius (35px to 100px)
      return {
        id: Date.now() + i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        rotate: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.6,
      };
    });
    setParticles(newParticles);
    const timeout = setTimeout(() => setParticles([]), 800);
    return () => clearTimeout(timeout);
  }, [burstCount]);

  const amazonLink = "https://amzn.in/d/03Mnwvgr";

  const benefitsWellness = [
    {
      title: "Boosts Immune System",
      desc: "Rich in vitamin C and powerful antioxidants that strengthen body defense mechanisms.",
      icon: "🛡️",
    },
    {
      title: "Increases Energy Levels",
      desc: "Natural energy booster without the caffeine crash, helping you stay active all day.",
      icon: "⚡",
    },
    {
      title: "Rich in Antioxidants",
      desc: "Helps protect your body's cells from oxidative stress and fights free radicals.",
      icon: "🌱",
    },
    {
      title: "Supports Digestive Health",
      desc: "Promotes healthy digestion and metabolism function with gentle, natural fiber.",
      icon: "✨",
    },
    {
      title: "Promotes Healthy Skin & Hair",
      desc: "Nourishes from within with vitamins A and E for a radiant, glowing appearance.",
      icon: "✨",
    },
    {
      title: "Detoxifies the Body",
      desc: "Helps cleanse system of toxins naturally and supports liver function.",
      icon: "💧",
    },
  ];

  const benefitsAdvanced = [
    {
      title: "High in Vitamins & Minerals",
      desc: "Naturally packed with essential Vitamin A, C, Calcium, Iron, and vital proteins.",
      icon: "🧪",
    },
    {
      title: "Supports Heart Health",
      desc: "Helps maintain healthy cardiovascular function and cholesterol balance.",
      icon: "❤️",
    },
    {
      title: "Balances Blood Sugar",
      desc: "Supports healthy glucose levels already within the normal range.",
      icon: "🩸",
    },
    {
      title: "Improves Eye Health",
      desc: "High Vitamin A content supports sharp, healthy vision and reduces strain.",
      icon: "👁️",
    },
    {
      title: "Reduces Inflammation",
      desc: "Contains bio-active compounds that help soothe inflammation throughout the body.",
      icon: "🌿",
    },
    {
      title: "Boosts Brain Function",
      desc: "Promotes cognitive health, memory retention, and mental clarity.",
      icon: "🧠",
    },
  ];

  return (
    <div className="min-h-screen text-cream font-sans selection:bg-gold selection:text-primary scroll-smooth relative overflow-x-hidden">
      {/* JSON-LD Schema Markup for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "RDM Pure Organic Moringa Powder",
            "image": ["https://rdmmoringa.co.in/product-jar.jpg"],
            "description": "Premium FSSAI certified Ayurvedic supplement made of 100% pure organic Moringa Oleifera leaves. Boosts energy, immunity, and skin wellness naturally.",
            "brand": {
              "@type": "Brand",
              "name": "RDM"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "160",
              "itemCondition": "https://schema.org/NewCondition",
              "availability": "https://schema.org/InStock",
              "url": "https://amzn.in/d/03Mnwvgr"
            }
          })
        }}
      />

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-blue-950/30 backdrop-blur-xl py-3 shadow-lg border-b border-blue-500/20"
            : "bg-blue-950/15 backdrop-blur-lg py-5 border-b border-blue-500/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/30 group-hover:border-gold transition-colors">
              <Image
                src="/logo.jpg"
                alt="RDM Moringa Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-bold text-lg tracking-wider transition-colors text-gold">
              RDM MORINGA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#benefits"
              className="text-sm font-medium tracking-wide transition-colors text-cream/90 hover:text-gold"
            >
              Benefits
            </a>
            <a
              href="#usage"
              className="text-sm font-medium tracking-wide transition-colors text-cream/90 hover:text-gold"
            >
              How to Use
            </a>
            <a
              href="#specs"
              className="text-sm font-medium tracking-wide transition-colors text-cream/90 hover:text-gold"
            >
              Specifications
            </a>
            <a
              href="#contact"
              className="text-sm font-medium tracking-wide transition-colors text-cream/90 hover:text-gold"
            >
              Contact
            </a>
          </nav>

          {/* CTA Header Button */}
          <div className="hidden md:flex relative w-[130px] justify-end items-center">
            <motion.a
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 0 0px rgba(202, 162, 63, 0)",
                  "0 0 0 8px rgba(202, 162, 63, 0.3)",
                  "0 0 0 0px rgba(202, 162, 63, 0)",
                ]
              }}
              transition={{
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase bg-gold hover:bg-gold-dark text-primary shadow-lg cursor-pointer min-h-[38px] z-10"
            >
              {/* Swaying organic leaf */}
              <motion.span
                animate={{ rotate: [0, -12, 12, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="inline-block text-sm"
              >
                🌿
              </motion.span>
              <span className="whitespace-nowrap inline-block font-bold">
                Buy Now
              </span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full animate-shimmer" />
            </motion.a>

            {/* Scatter leaf particles around the button */}
            {particles.map((p) => (
              <motion.span
                key={p.id}
                initial={{ opacity: 1, scale: p.scale, x: 0, y: 0, rotate: 0 }}
                animate={{
                  opacity: 0,
                  scale: 0.25,
                  x: p.x,
                  y: p.y,
                  rotate: p.rotate,
                }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="absolute text-sm pointer-events-none select-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                🌿
              </motion.span>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-cream focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-cream"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="md:hidden bg-[#032217]/95 backdrop-blur-xl text-cream border-t border-gold/20 px-6 py-4"
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#benefits"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium py-1 hover:text-gold transition-colors"
              >
                Benefits
              </a>
              <a
                href="#usage"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium py-1 hover:text-gold transition-colors"
              >
                How to Use
              </a>
              <a
                href="#specs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium py-1 hover:text-gold transition-colors"
              >
                Specifications
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium py-1 hover:text-gold transition-colors"
              >
                Contact
              </a>
              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-primary py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all shadow-md mt-2"
              >
                Buy Now on Amazon
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden bg-transparent">
        {/* Subtle background glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-light/20 filter blur-3xl -top-40 -left-40 pointer-events-none"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-light/25 filter blur-3xl -bottom-40 -right-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 z-10 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fbfcf9] text-primary font-bold text-xs tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#caa23f]"></span>
              Nature's Premium Superfood
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gold leading-tight tracking-tight">
              100% Pure Organic <br className="hidden md:inline" />
              Moringa Powder
            </h1>

            <p className="text-base md:text-lg text-cream/90 max-w-xl leading-relaxed">
              Experience the wellness secrets of the Moringa Oleifera tree.
              Cultivated organically and dried to preserve maximum potency. Rich
              in Essential Vitamins, Minerals, and active Antioxidants to
              support your immunity, boost natural metabolism, and nurture
              radiant skin.
            </p>

            {/* Micro value props grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg pt-2">
              <div className="flex items-center gap-3 bg-[#fbfcf9] px-5 py-3.5 rounded-full shadow-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#caa23f]/15 flex items-center justify-center text-[#caa23f] text-xs font-bold">
                  ✓
                </span>
                <span className="text-xs font-semibold text-charcoal">
                  FSSAI Certified
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#fbfcf9] px-5 py-3.5 rounded-full shadow-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#caa23f]/15 flex items-center justify-center text-[#caa23f] text-xs font-bold">
                  ✓
                </span>
                <span className="text-xs font-semibold text-charcoal">
                  100% Natural Leaf
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#fbfcf9] px-5 py-3.5 rounded-full shadow-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#caa23f]/15 flex items-center justify-center text-[#caa23f] text-xs font-bold">
                  ✓
                </span>
                <span className="text-xs font-semibold text-charcoal">
                  Zero Additives
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#fbfcf9] px-5 py-3.5 rounded-full shadow-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#caa23f]/15 flex items-center justify-center text-[#caa23f] text-xs font-bold">
                  ✓
                </span>
                <span className="text-xs font-semibold text-charcoal">
                  Made in India
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold hover:bg-gold-dark text-primary text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-gold/30 text-center"
              >
                Buy Now on Amazon
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gold/40 hover:border-gold text-gold hover:bg-gold/15 text-sm font-semibold tracking-wider transition-all duration-300 text-center"
              >
                Explore Benefits
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative z-10">
            {/* Background design elements */}
            <div className="absolute w-72 h-72 rounded-full bg-primary-light/30 filter blur-3xl -z-10 animate-pulse"></div>

            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl border-2 border-gold/40 bg-primary-light group animate-float">
              <Image
                src="/product-jar.jpg"
                alt="RDM Pure Organic Moringa Powder Jar"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="text-xs uppercase tracking-widest text-gold font-bold">
                  100% Pure Organic
                </span>
                <p className="text-sm font-medium mt-1">
                  Rich Green Superfood Supplement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-[#032217] backdrop-blur-md py-8 text-cream/90 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-1">🌿</span>
            <span className="text-xs tracking-widest uppercase font-bold text-gold">
              100% Natural
            </span>
            <span className="text-[10px] text-cream/60">Pure Leaves Only</span>
          </div>
          <div className="flex flex-col items-center border-l border-white/10">
            <span className="text-3xl mb-1">🛡️</span>
            <span className="text-xs tracking-widest uppercase font-bold text-gold">
              FSSAI License
            </span>
            <span className="text-[10px] text-cream/60">
              No. 21525041003269
            </span>
          </div>
          <div className="flex flex-col items-center border-l border-white/10">
            <span className="text-3xl mb-1">✨</span>
            <span className="text-xs tracking-widest uppercase font-bold text-gold">
              Premium Quality
            </span>
            <span className="text-[10px] text-cream/60">
              Finely Dried & Sifted
            </span>
          </div>
          <div className="flex flex-col items-center border-l border-white/10">
            <span className="text-3xl mb-1">🏺</span>
            <span className="text-xs tracking-widest uppercase font-bold text-gold">
              Ayurvedic Medicine
            </span>
            <span className="text-[10px] text-cream/60">Ref. Book: A.B.</span>
          </div>
        </div>
      </section>

      {/* Benefits Hub Section */}
      <section id="benefits" className="py-20 md:py-28 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs tracking-widest uppercase font-bold text-gold mb-3">
              Powerhouse of Nutrition
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-cream tracking-tight">
              Unlock the Healing Benefits of Moringa
            </h3>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
            <p className="text-cream/80 mt-6 leading-relaxed">
              Moringa is globally renowned as one of nature's most nutrient-rich
              plants. Each serving is packed with essential amino acids, key
              vitamins, and natural minerals that nourish your body inside out.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-full bg-[#0a3d2b] border border-gold/25 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("wellness")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === "wellness"
                    ? "bg-gold text-primary shadow-md"
                    : "text-cream/80 hover:text-cream"
                }`}
              >
                Daily Wellness & Energy
              </button>
              <button
                onClick={() => setActiveTab("advanced")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === "advanced"
                    ? "bg-gold text-primary shadow-md"
                    : "text-cream/80 hover:text-cream"
                }`}
              >
                Vitamins & Advanced Care
              </button>
            </div>
          </div>

          {/* Grid Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Benefits List Column - Frosted Glass Cards */}
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(activeTab === "wellness"
                  ? benefitsWellness
                  : benefitsAdvanced
                ).map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="p-6 rounded-xl bg-[#0a3d2b]/60 backdrop-blur-md border border-gold/15 shadow-3d hover:border-gold/45 hover:bg-[#0a3d2b]/95 cursor-default"
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      boxShadow:
                        "0 25px 35px -10px rgba(8, 56, 39, 0.22), 0 12px 20px -8px rgba(8, 56, 39, 0.15), 0 0 1px 1px rgba(214, 175, 55, 0.4), inset 0 0 0 1px rgba(214, 175, 55, 0.1)",
                    }}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center text-xl mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-bold text-gold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-cream/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Infographic Image Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center">
              <div className="relative w-full max-w-[360px] aspect-[2/3] rounded-2xl overflow-hidden shadow-xl border-2 border-gold/30 bg-primary-light/50 backdrop-blur-md group">
                <Image
                  src={
                    activeTab === "wellness"
                      ? "/benefits-1.jpg"
                      : "/benefits-2.jpg"
                  }
                  alt={
                    activeTab === "wellness"
                      ? "Pure Organic Moringa Powder Wellness Benefits Infographic"
                      : "Moringa Oleifera Powder Vitamins and Advanced Care Infographic"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Zoom Hover Overlay */}
                <div
                  className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    setIsZoomed(
                      activeTab === "wellness"
                        ? "/benefits-1.jpg"
                        : "/benefits-2.jpg",
                    )
                  }
                >
                  <div className="bg-cream/90 backdrop-blur-sm text-primary px-4 py-2.5 rounded-full text-xs font-semibold shadow-md flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                    View Full Infographic
                  </div>
                </div>
              </div>
              <span className="text-xs text-cream/50 mt-3 italic">
                Click graphic to inspect details
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How To Use Section - Glassmorphism Cards */}
      <section
        id="usage"
        className="py-20 md:py-28 px-6 bg-[#032217]/50 backdrop-blur-[2px]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs tracking-widest uppercase font-bold text-gold mb-3">
              Usage Guide
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-cream tracking-tight">
              Integrating Moringa Into Your Routine
            </h3>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
            <p className="text-cream/80 mt-6 leading-relaxed">
              Moringa is incredibly versatile. It has an earthy, matcha-like
              flavor that blends beautifully with many foods and beverages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              className="p-8 rounded-2xl bg-[#0a3d2b]/60 backdrop-blur-md border border-gold/15 shadow-3d text-center flex flex-col items-center cursor-default"
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow:
                  "0 25px 35px -10px rgba(8, 56, 39, 0.22), 0 12px 20px -8px rgba(8, 56, 39, 0.15), 0 0 1px 1px rgba(214, 175, 55, 0.4), inset 0 0 0 1px rgba(214, 175, 55, 0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center font-bold text-gold text-lg mb-6">
                1
              </div>
              <h4 className="text-lg font-bold text-gold mb-3">Measure</h4>
              <p className="text-sm text-cream/85 leading-relaxed">
                Take 1/2 to 1 teaspoon (approx. 2-5 grams) of pure RDM Moringa
                powder.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="p-8 rounded-2xl bg-[#0a3d2b]/60 backdrop-blur-md border border-gold/15 shadow-3d text-center flex flex-col items-center cursor-default"
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow:
                  "0 25px 35px -10px rgba(8, 56, 39, 0.22), 0 12px 20px -8px rgba(8, 56, 39, 0.15), 0 0 1px 1px rgba(214, 175, 55, 0.4), inset 0 0 0 1px rgba(214, 175, 55, 0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center font-bold text-gold text-lg mb-6">
                2
              </div>
              <h4 className="text-lg font-bold text-gold mb-3">Mix</h4>
              <p className="text-sm text-cream/85 leading-relaxed">
                Stir well into warm water, juice, milk, soup, or blend it
                directly into your favorite morning green smoothie.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="p-8 rounded-2xl bg-[#0a3d2b]/60 backdrop-blur-md border border-gold/15 shadow-3d text-center flex flex-col items-center cursor-default"
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow:
                  "0 25px 35px -10px rgba(8, 56, 39, 0.22), 0 12px 20px -8px rgba(8, 56, 39, 0.15), 0 0 1px 1px rgba(214, 175, 55, 0.4), inset 0 0 0 1px rgba(214, 175, 55, 0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center font-bold text-gold text-lg mb-6">
                3
              </div>
              <h4 className="text-lg font-bold text-gold mb-3">Nourish</h4>
              <p className="text-sm text-cream/85 leading-relaxed">
                Consume once or twice daily to support immunity, skin radiance,
                and sustained organic energy.
              </p>
            </motion.div>
          </div>

          {/* Storage note */}
          <div className="max-w-3xl mx-auto mt-12 p-6 rounded-xl bg-[#0a3d2b]/95 backdrop-blur-md text-cream/95 text-center shadow-md border border-gold/30">
            <span className="font-bold text-gold block text-sm tracking-wider uppercase mb-1">
              Storage Instructions
            </span>
            <p className="text-xs leading-relaxed">
              Store in a cool, dry place away from direct sunlight to maintain
              the freshness, potency, and vibrant green color of your Moringa
              powder. Keep the jar tightly closed.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications & Packaging Label Section */}
      <section
        id="specs"
        className="py-20 md:py-28 px-6 border-t border-gold/15 bg-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Specs Info */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-xs tracking-widest uppercase font-bold text-gold mb-3">
                  Packaging & Standard
                </h2>
                <h3 className="text-3xl font-extrabold text-cream tracking-tight">
                  Product Details & Integrity
                </h3>
                <div className="w-16 h-1 bg-gold mt-4 rounded-full"></div>
              </div>

              <p className="text-cream/80 leading-relaxed">
                RDM Moringa Powder is registered as an Ayurvedic Medicine and
                produced under strict safety guidelines. Check the official
                labeling specifications below.
              </p>

              {/* Specs Table */}
              <motion.div
                className="border border-gold/15 rounded-xl overflow-hidden bg-[#0a3d2b]/60 backdrop-blur-md shadow-3d cursor-default"
                whileHover={{
                  scale: 1.01,
                  boxShadow:
                    "0 20px 30px -10px rgba(8, 56, 39, 0.15), 0 0 1px 1px rgba(214, 175, 55, 0.2)",
                }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <table className="min-w-full divide-y divide-gold/10 text-sm">
                  <tbody className="divide-y divide-gold/10">
                    <tr className="bg-[#083324]">
                      <td className="px-6 py-4 font-bold text-gold w-2/5">
                        Formulation
                      </td>
                      <td className="px-6 py-4 text-cream/90">
                        Ayurvedic Medicine (Moringa Oleifera 100% Leaves)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-gold">
                        FSSAI Lic. Number
                      </td>
                      <td className="px-6 py-4 text-cream/90 font-mono">
                        21525041003269
                      </td>
                    </tr>
                    <tr className="bg-[#083324]">
                      <td className="px-6 py-4 font-bold text-gold">
                        Net Weight
                      </td>
                      <td className="px-6 py-4 text-cream/90">120 grams</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-gold">
                        Maximum Retail Price
                      </td>
                      <td className="px-6 py-4 text-[#e5c158] font-bold">
                        Rs. 160/- (Inclusive of all taxes)
                      </td>
                    </tr>
                    <tr className="bg-[#083324]">
                      <td className="px-6 py-4 font-bold text-gold">
                        Reference Book
                      </td>
                      <td className="px-6 py-4 text-cream/90">
                        A.B. (Ayurvedic Pharmacopoeia)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-gold">
                        Manufactured In
                      </td>
                      <td className="px-6 py-4 text-cream/90">
                        India by RDM Enterprises
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              <div className="flex gap-4">
                <a
                  href="/label.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cream hover:text-gold transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Label PDF
                </a>
              </div>
            </div>

            {/* Right Mini Dark Glass Graphic Banner */}
            <motion.div
              className="lg:col-span-5 bg-[#0a3d2b]/85 backdrop-blur-lg text-cream rounded-2xl p-8 flex flex-col justify-between border border-gold/30 shadow-2xl relative overflow-hidden"
              whileHover={{
                scale: 1.03,
                y: -6,
                boxShadow:
                  "0 30px 50px -10px rgba(8, 56, 39, 0.35), 0 0 2px 1px rgba(214, 175, 55, 0.5)",
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Background watermark logo */}
              <div className="absolute -right-16 -bottom-16 w-60 h-60 opacity-[0.03]">
                <Image
                  src="/logo.jpg"
                  alt="RDM Moringa Watermark Logo"
                  fill
                  sizes="240px"
                  className="object-cover rounded-full"
                />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/50 relative">
                  <Image
                    src="/logo.jpg"
                    alt="RDM Moringa Logo Symbol"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold tracking-tight">
                  RDM Quality Assurance
                </h4>
                <p className="text-sm text-cream/85 leading-relaxed">
                  We guarantee 100% transparency. Our Moringa leaves are
                  harvested at peak nutrition levels, washed thoroughly, dried
                  in hygienic conditions, and ground into fine powder without
                  chemicals, colorants, or fillers.
                </p>
                <ul className="text-xs text-cream/70 space-y-2 pt-2">
                  <li className="flex items-center gap-2">
                    ✓ No Artificial Sugars
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Gluten Free & Vegan
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Direct Sourced from Solapur Farmers
                  </li>
                </ul>
              </div>

              <div className="pt-8 relative z-10">
                <a
                  href={amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-primary py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all shadow-md"
                >
                  Order Directly From Amazon
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final Strip */}
      <section className="bg-gradient-to-r from-primary/95 to-primary-light/95 backdrop-blur-md text-cream py-16 px-6 relative overflow-hidden border-t border-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <span className="text-gold text-xs uppercase tracking-widest font-bold">
            Limited Batches Available
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Nourish Your Body With Clean Green Superfood
          </h3>
          <p className="text-sm md:text-base text-cream/75 max-w-xl mx-auto leading-relaxed">
            Take a step towards healthier living. Add RDM Moringa Powder to your
            daily juices, smoothies, or meals today.
          </p>
          <div className="pt-4">
            <a
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold hover:bg-gold-dark text-primary text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-xl hover:shadow-gold/20"
            >
              Order Now on Amazon.in
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer
        id="contact"
        className="bg-[#031d14]/95 backdrop-blur-md text-cream/80 py-16 px-6 border-t border-gold/20 relative z-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                <Image
                  src="/logo.jpg"
                  alt="RDM Enterprises Moringa Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-cream font-bold tracking-wider text-base">
                  RDM ENTERPRISES
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                  Moringa Superfood Supplements
                </p>
              </div>
            </div>
            <p className="text-xs text-cream/60 leading-relaxed max-w-sm">
              Dedicated to delivering raw, authentic, and certified natural
              supplements straight from India's fertile regions. Clean nutrition
              for modern lifestyles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-cream text-xs uppercase tracking-widest font-bold text-gold">
              Browse Product
            </h5>
            <ul className="text-xs space-y-2">
              <li>
                <a
                  href="#benefits"
                  className="hover:text-gold transition-colors"
                >
                  Key Benefits
                </a>
              </li>
              <li>
                <a href="#usage" className="hover:text-gold transition-colors">
                  How to Consume
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-gold transition-colors">
                  FSSAI & Labeling
                </a>
              </li>
              <li>
                <a
                  href={amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Amazon Storefront
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-cream text-xs uppercase tracking-widest font-bold text-gold">
              Customer Care & Support
            </h5>
            <ul className="text-xs space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-gold">📞</span>
                <div>
                  <p className="text-[10px] text-cream/50 uppercase tracking-widest">
                    Call or WhatsApp
                  </p>
                  <a
                    href="tel:+918625998625"
                    className="hover:text-gold font-semibold transition-colors"
                  >
                    +91 8625998625
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">✉️</span>
                <div>
                  <p className="text-[10px] text-cream/50 uppercase tracking-widest">
                    Email Address
                  </p>
                  <a
                    href="mailto:rdmenterprises11@gmail.com"
                    className="hover:text-gold font-semibold transition-colors"
                  >
                    rdmenterprises11@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">📷</span>
                <div>
                  <p className="text-[10px] text-cream/50 uppercase tracking-widest">
                    Follow Us
                  </p>
                  <a
                    href="https://instagram.com/rdmmoringa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold font-semibold transition-colors"
                  >
                    @rdmmoringa
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom line */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-cream/5 text-[11px] text-cream/40 flex flex-col sm:flex-row justify-between gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} RDM Enterprises. All rights reserved.
          </p>
          <p>Mfg. in India. Brand owned & marketed by RDM Group.</p>
        </div>
      </footer>

      {/* Zoom Image Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setIsZoomed(null)}
        >
          <div className="relative w-full max-w-[500px] aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-gold/30">
            <Image
              src={isZoomed}
              alt="Zoomed RDM Moringa Powder Benefits Infographic Detail"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain bg-white"
            />
            <button
              onClick={() => setIsZoomed(null)}
              className="absolute top-4 right-4 bg-primary text-cream w-8 h-8 rounded-full flex items-center justify-center shadow-lg font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
