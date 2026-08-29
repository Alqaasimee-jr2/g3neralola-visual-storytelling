"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import PricingCalculator from "@/components/PricingCalculator";

export default function ServicesClient() {
  const serviceTiers = [
    {
      id: "portrait",
      title: "Solo Signature Portrait",
      popular: false,
      priceNGN: "₦65,000",
      priceUSD: "~$45",
      deliverables: ["1.5 hrs session", "2 outfits", "8 master retouches", "48h sneak peek"],
      desc: "Personal branding, milestone headshots, and editorial portraits.",
    },
    {
      id: "lifestyle",
      title: "Editorial Narrative",
      popular: true,
      priceNGN: "₦125,000",
      priceUSD: "~$85",
      deliverables: ["2.5 hrs session", "4 outfits", "18 master retouches", "Moodboard & styling", "All digital proofs"],
      desc: "Fashion, street culture, multi-look creative storytelling.",
    },
    {
      id: "campus",
      title: "Convocation Milestone",
      popular: false,
      priceNGN: "₦85,000",
      priceUSD: "~$55",
      deliverables: ["2 hrs session", "Gown & native looks", "12 master retouches", "Family portraits included", "Ceremony proofs"],
      desc: "Celebrating university graduation and family pride at LASU & Lagos campuses.",
    },
    {
      id: "brand",
      title: "Brand Campaign",
      popular: false,
      priceNGN: "₦250,000+",
      priceUSD: "~$165+",
      deliverables: ["Half/Full day production", "30+ assets", "Commercial license", "4K BTS video reels", "72h rush delivery"],
      desc: "Commercial lookbooks, artist campaigns, and high-end visual production.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background text-foreground selection:bg-white selection:text-black">
      {/* Editorial Header */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-8 pb-12">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Investments & Rates</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight">
            Session Packages
          </h1>
          <p className="text-base sm:text-lg font-serif italic text-muted-foreground max-w-md pt-1">
            Transparent rates, zero hidden fees, and rapid 48-hour sneak peek delivery.
          </p>
        </div>
      </section>

      {/* Sleek Borderless Tier Grid */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceTiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-8 rounded-2xl flex flex-col justify-between space-y-8 transition-all ${
                tier.popular
                  ? "bg-foreground text-background shadow-2xl"
                  : "bg-secondary/30 text-foreground"
              }`}
            >
              <div className="space-y-4">
                {tier.popular && (
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-background text-foreground inline-block">
                    Most Requested
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-serif font-bold">{tier.title}</h3>
                  <p className={`text-xs mt-1 ${tier.popular ? "opacity-80" : "text-muted-foreground"}`}>
                    {tier.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-3xl font-serif font-bold">{tier.priceNGN}</div>
                  <div className={`text-xs font-mono ${tier.popular ? "opacity-70" : "text-muted-foreground"}`}>
                    {tier.priceUSD}
                  </div>
                </div>

                <ul className="space-y-2 pt-4 border-t border-current/15 text-xs font-mono">
                  {tier.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-current"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className={`w-full rounded-full py-5 text-xs font-mono uppercase tracking-wider ${
                    tier.popular
                      ? "bg-background text-foreground hover:opacity-90"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  <Link href={`/contact?service=${encodeURIComponent(tier.title)}&budget=${encodeURIComponent(tier.priceNGN)}`}>
                    Select Tier
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Custom Estimator */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 border-t border-border/30 mt-12">
        <PricingCalculator />
      </section>

      {/* 4 Process Milestones (Borderless) */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-20 border-t border-border/30">
        <div className="max-w-xl mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">The Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">Four Simple Steps</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Moodboard", desc: "Align on vision, outfits, and location aesthetics." },
            { step: "02", title: "Date Lock", desc: "50% deposit confirms your calendar slot." },
            { step: "03", title: "The Shoot", desc: "High-energy, completely relaxed on-set direction." },
            { step: "04", title: "Delivery", desc: "48-hour sneak peek followed by master gallery." },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-3xl font-serif font-bold text-muted-foreground/40">{item.step}</span>
              <h4 className="text-lg font-serif font-bold">{item.title}</h4>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
