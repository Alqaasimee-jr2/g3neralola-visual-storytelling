"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, MessageCircle } from "lucide-react";

export default function AboutClient() {
  const pillars = [
    {
      num: "01",
      title: "Ex-Commando Discipline",
      text: "Military precision in framing, punctuality, and focus on the set.",
    },
    {
      num: "02",
      title: "Peace Studies Depth",
      text: "Empathy rooted in human connection, dignity, and cultural honor.",
    },
    {
      num: "03",
      title: "Vision Over Gear",
      text: "Raw perception and light shaping far outweighing bulky equipment.",
    },
    {
      num: "04",
      title: "Lagos Street Culture",
      text: "Documenting authentic Nigerian subcultures, motion, and youth vitality.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background text-foreground selection:bg-white selection:text-black">
      {/* Editorial Spread Hero */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
              <Image
                src="/images/generalola.jpeg"
                alt="Adeola Olamilekan - G3NERALOLA"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-2xl font-serif font-bold">Adeola Olamilekan</p>
                <p className="text-xs text-gray-300 font-mono uppercase tracking-widest">
                  G3NERALOLA • Lagos, Nigeria
                </p>
              </div>
            </div>
          </motion.div>

          {/* Minimal Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                The Storyteller
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-[1.05]">
                Where Discipline <br />
                <span className="italic font-normal text-muted-foreground">Meets Visual Poetry.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl font-serif text-muted-foreground leading-relaxed">
              I document the raw, beautiful, and unapologetic essence of human beings. 
              Combining military upbringing with LASU Peace Studies perspective, 
              I turn ordinary Lagos moments into timeless cinema.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border/40 font-mono text-xs">
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">200+</p>
                <p className="text-muted-foreground uppercase mt-1">Milestones Documented</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">5+ Yrs</p>
                <p className="text-muted-foreground uppercase mt-1">Behind The Lens</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="rounded-full px-8 py-6 bg-foreground text-background hover:opacity-90 text-sm font-medium">
                <Link href="/contact">Book a Session</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-full px-8 py-6 text-sm font-medium">
                <a
                  href="https://www.instagram.com/g3ner4l0la/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@g3ner4l0la</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars of Craft (Borderless Typographic Grid) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-border/30">
        <div className="max-w-xl mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">The Craft</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">Four Pillars</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-3xl font-serif font-bold text-muted-foreground/40">{pillar.num}</span>
              <h3 className="text-xl font-serif font-bold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Break / Quote Section */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-foreground leading-snug">
          "You don't take a photograph, you make it with all the pictures you have seen, 
          the books you have read, the music you have heard, and the people you have loved."
        </blockquote>
      </section>

      {/* Seamless Minimalist CTA */}
      <section className="py-20 px-4 text-center">
        <div className="space-y-4">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold">Ready to create?</h3>
          <p className="text-muted-foreground text-sm font-serif italic">Inquire about dates and moodboard direction.</p>
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-full px-8 py-6 bg-foreground text-background hover:opacity-90">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
