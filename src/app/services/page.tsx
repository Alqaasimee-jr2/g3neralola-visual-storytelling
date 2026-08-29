"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Users, 
  Briefcase, 
  Sparkles, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  Zap
} from "lucide-react";
import PricingCalculator from "@/components/PricingCalculator";

export default function ServicesPage() {
  const serviceTiers = [
    {
      id: "portrait",
      title: "Solo Signature Portrait",
      popular: false,
      tagline: "High-impact personal branding, birthday milestones, and editorial headshots.",
      priceNGN: "₦65,000",
      priceUSD: "~$45 USD",
      features: [
        "1.5-hour dedicated session",
        "Up to 2 outfit changes",
        "8 master retouched magazine-grade frames",
        "Private online proofing gallery",
        "48-hour sneak peek previews",
        "Full commercial personal usage rights",
      ],
      idealFor: "Students, creators, professionals, birthdays",
    },
    {
      id: "lifestyle",
      title: "Editorial & Lifestyle Story",
      popular: true,
      tagline: "Multi-look visual narrative, high fashion, street culture, and curated moodboards.",
      priceNGN: "₦125,000",
      priceUSD: "~$85 USD",
      features: [
        "2.5-hour immersive session",
        "Up to 4 distinct outfit / look changes",
        "18 master retouched cinematic frames",
        "Access to all color-graded digital proofs",
        "Creative moodboard & location scouting",
        "Studio pass coordination or outdoor Lagos locations",
        "48-hour highlights + 5-day final gallery",
      ],
      idealFor: "Fashion stylists, influencers, creatives, couples",
    },
    {
      id: "campus",
      title: "Convocation & Campus Milestone",
      popular: false,
      tagline: "Celebrating university graduation and family pride with dignified elegance.",
      priceNGN: "₦85,000",
      priceUSD: "~$55 USD",
      features: [
        "2-hour convocation shoot",
        "Gown look + native/casual secondary look",
        "Solo + family & friend group portraits included",
        "12 master retouched celebratory frames",
        "Full unedited ceremony proofs gallery",
        "Rapid 48-hour delivery for social media celebration",
      ],
      idealFor: "LASU & Nigerian university graduating seniors",
    },
    {
      id: "brand",
      title: "Brand & Creative Campaign",
      popular: false,
      tagline: "Commercial lookbooks, gaming setups, music artists, and product campaigns.",
      priceNGN: "₦250,000+",
      priceUSD: "From ~$165 USD",
      features: [
        "Half-day to full-day on-set production",
        "Complete creative direction & shot list curation",
        "30+ master retouched high-resolution assets",
        "Full commercial advertising usage license",
        "4K behind-the-scenes video reels included",
        "72-hour expedited master delivery",
      ],
      idealFor: "Apparel brands, gaming creators, music artists",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Vision & Moodboard",
      description:
        "We discuss your aesthetic goals, color palette, outfit selections, and location options via WhatsApp or brief call.",
    },
    {
      step: "02",
      title: "Booking & Date Lock",
      description:
        "A 50% deposit secures your shoot date on the production calendar, and we finalize location permits or studio access.",
    },
    {
      step: "03",
      title: "The Photoshoot",
      description:
        "A high-energy, completely relaxed session with natural direction, music, and guided framing. Zero stiff or awkward poses.",
    },
    {
      step: "04",
      title: "Master Delivery",
      description:
        "Receive your 48-hour sneak peek highlights, select your favorite frames, and get the final master gallery delivered in 5–7 days.",
    },
  ];

  const faqs = [
    {
      q: "How do I secure my shoot date?",
      a: "Dates are locked on the calendar with a 50% production deposit. The remaining 50% balance is payable on shoot day upon completion.",
    },
    {
      q: "How soon do I receive my finished photos?",
      a: "You will receive a 48-hour sneak peek highlight reel so you can start posting immediately. The full master retouched high-resolution gallery is delivered within 5 to 7 days.",
    },
    {
      q: "What if it rains during an outdoor shoot in Lagos?",
      a: "We actively monitor weather forecasts. If adverse weather occurs, we can either seamlessly transition to an aesthetic indoor studio space or reschedule to an agreeable backup date without penalty.",
    },
    {
      q: "Do you travel outside Lagos for shoots?",
      a: "Yes! I am available nationwide (Abuja, Ibadan, Port Harcourt, Abeokuta) and worldwide. Travel logistics and lodging are calculated transparently into custom invoices.",
    },
    {
      q: "Can I book studio sessions through you?",
      a: "Absolutely. I partner with premier natural light and cyclorama studios across Ikeja, Lekki, Surulere, and Yaba. Studio hourly passes can be integrated directly into your session.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-b border-border/60">
        <div className="container mx-auto text-center max-w-4xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent & Realistic 2025/2026 Rates</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight">
              Packages & Investments
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto pt-2">
              Every package is designed to deliver magazine-grade visual storytelling with zero hidden fees and rapid turnaround.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {serviceTiers.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                  tier.popular
                    ? "bg-card border-primary ring-2 ring-primary shadow-2xl scale-[1.02]"
                    : "bg-card border-border/80 shadow-md hover:shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-foreground">{tier.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">{tier.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="py-3 border-y border-border/60">
                    <div className="text-3xl font-bold font-serif text-foreground">{tier.priceNGN}</div>
                    <div className="text-xs text-muted-foreground font-mono">{tier.priceUSD}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50 space-y-3">
                  <div className="text-[11px] text-muted-foreground">
                    <strong>Ideal for:</strong> {tier.idealFor}
                  </div>
                  <Button
                    asChild
                    className={`w-full rounded-xl ${
                      tier.popular
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <Link href={`/contact?service=${encodeURIComponent(tier.title)}&budget=${encodeURIComponent(tier.priceNGN)}`}>
                      Book This Tier
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Custom Estimator Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border/60">
        <div className="container mx-auto">
          <PricingCalculator />
        </div>
      </section>

      {/* 4-Step Process Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight">
              From Concept to Gallery
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A structured, seamless process crafted with military punctuality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md relative"
              >
                <span className="text-5xl font-bold font-mono text-primary/15 absolute top-5 right-6">
                  {step.step}
                </span>
                <div className="space-y-3 pt-6">
                  <h3 className="text-lg font-bold font-serif text-foreground">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/40 border-t border-border/60">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Everything you need to know about booking, deliverables, and shoot logistics.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2"
              >
                <h4 className="text-base font-bold text-foreground font-serif">{faq.q}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">
            Ready to Secure Your Shoot Date?
          </h2>
          <p className="text-primary-foreground/85 text-sm sm:text-base max-w-xl mx-auto font-light">
            Dates fill quickly, especially during campus convocation cycles and festive weekends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
              <Link href="/contact">Go to Booking Form</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-8">
              <a
                href="https://wa.me/2348021247749?text=Hi%20G3NERALOLA!%20I'm%20inquiring%20about%20your%20photography%20packages%20and%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}