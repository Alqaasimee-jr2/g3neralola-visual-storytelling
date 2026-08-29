"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Camera, 
  Instagram, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Zap, 
  MessageCircle, 
  Calendar, 
  Award,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Lightbox, { GalleryItem } from "@/components/Lightbox";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function HomeClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const featuredImages: GalleryItem[] = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20240717_192507_Instagram-1763320468631.jpg?width=8000&height=8000&resize=contain",
      alt: "Editorial portrait with pink hijab and sunglasses",
      category: "Portraits",
      story: "High-contrast editorial framing highlighting bold color synergy in Lagos.",
      location: "Lagos, Nigeria",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=8000&height=8000&resize=contain",
      alt: "Street portrait with white hijab and Ayoba cap",
      category: "Street & Culture",
      story: "Capturing authentic Nigerian youth culture with natural sunlight and effortless gaze.",
      location: "LASU Ojo, Lagos",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320848766-1763320972260.jpeg?width=8000&height=8000&resize=contain",
      alt: "Low angle Lagos urban skyward architectural perspective",
      category: "Lifestyle",
      story: "Looking upward through the bustling rhythm of Lagos City.",
      location: "Lagos Island, Nigeria",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1749457997626-1763320478848.jpg?width=8000&height=8000&resize=contain",
      alt: "Academic milestone & graduation ceremony in vibrant gown",
      category: "Convocation",
      story: "Celebrating hard work and academic triumph at Lagos State University.",
      location: "LASU Campus",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1086659322-1763320473931.jpg?width=8000&height=8000&resize=contain",
      alt: "Dynamic basketball court motion capture",
      category: "Campus Life",
      story: "Raw athletic energy and speed frozen at peak intensity.",
      location: "Sports Complex, Lagos",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320865776-1763320935247.jpeg?width=8000&height=8000&resize=contain",
      alt: "Monochrome fine-art macro of wet strawberry",
      category: "Fine Art",
      story: "Textural studies proving that beauty lives in microscopic everyday details.",
      location: "Studio Lagos",
    },
  ];

  const testimonials = [
    {
      quote:
        "I was always awkward in front of cameras, but Adeola made me feel like an absolute runway model. He gave clear directions, played great music, and my convocation photos broke my Instagram!",
      name: "Toluwani A.",
      role: "LASU 2024 Graduate",
      tag: "Convocation Milestone",
    },
    {
      quote:
        "The turnaround time was astonishing. I had my sneak peek gallery in 48 hours and every single retouched frame felt cinematic. True military discipline in his work ethic.",
      name: "David K.",
      role: "Creative Director & Stylist",
      tag: "Editorial Lookbook",
    },
    {
      quote:
        "G3NERALOLA doesn't just shoot pictures; he captures your inner confidence. His vision over gear ethos is 100% real — pure organic art.",
      name: "Zainab B.",
      role: "Lifestyle Content Creator",
      tag: "Portrait Session",
    },
  ];

  const openModal = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black text-white px-4 sm:px-6 lg:px-8">
        {/* Background Image with Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&h=1080&fit=crop"
            alt="Cinematic Photography Background"
            fill
            className="object-cover opacity-35 scale-105 transition-transform duration-10000 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/70" />
          <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for 2025/2026 Sessions in Lagos & Nationwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tight leading-[1.05]">
              Where Discipline <br />
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-gray-300">
                Meets Visual Poetry
              </span>
            </h1>

            {/* Sub-tagline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Lagos-based visual storytelling by <strong className="font-semibold text-white">Adeola Olamilekan</strong>. 
              Authentic portraits, campus milestones, and raw street culture — captured with fearless vision.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 max-w-md mx-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <Link href="/portfolio" className="flex items-center justify-center gap-2">
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/15 rounded-full px-8 py-6 text-base font-semibold backdrop-blur-sm"
              >
                <Link href="/services" className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>View Packages</span>
                </Link>
              </Button>
            </div>

            {/* Quick Micro Stats */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/10 max-w-lg mx-auto text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-white">200+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Stories Told</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-white">48h</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Rush Previews</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-white">100%</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Raw Authenticity</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Philosophy & Artist Narrative */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/40 border-y border-border/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=8000&height=8000&resize=contain"
                  alt="Adeola Olamilekan - G3NERALOLA"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-2">
                    <Camera className="w-3.5 h-3.5" />
                    <span>The Eye Behind the Lens</span>
                  </div>
                  <h3 className="text-xl font-bold font-serif">Adeola Olamilekan</h3>
                  <p className="text-xs text-gray-300">Ex-Commando Heritage • LASU Peace Studies Scholar</p>
                </div>
              </div>
            </motion.div>

            {/* Right Copywriting */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The G3NERALOLA Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight leading-tight">
                "Vision Over Gear." <br />
                <span className="italic font-normal text-muted-foreground">Stories Matter More Than Sensors.</span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Most photographers focus on bulky lenses and rigid posing scripts. I focus on <strong className="text-foreground font-semibold">you</strong>. 
                Raised with strict military discipline and shaped by academic Peace Studies at Lagos State University, 
                I bring an intentional, fearless eye to every frame.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether navigating the electric tempo of Lagos Island or curating an intimate campus graduation portrait, 
                my mission is simple: to make you feel effortless in front of the lens and deliver photographs that stop time.
              </p>

              {/* 3 Core Differentiator Cards */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Zero Awkward Posing</h4>
                  <p className="text-xs text-muted-foreground">Organic guidance that brings out your natural confidence.</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs">
                  <Zap className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Cinematic Skin Tones</h4>
                  <p className="text-xs text-muted-foreground">Color science tuned for vibrant Nigerian light & rich skin tones.</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs">
                  <Clock className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">48h Sneak Peek</h4>
                  <p className="text-xs text-muted-foreground">Instant preview gallery so you can celebrate without waiting weeks.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="rounded-full px-6">
                  <Link href="/about">Read The Full Artist Story</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <a
                    href="https://instagram.com/ad3ola_olamil3kan_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Follow on Instagram</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Color Grade Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <BeforeAfterSlider
            beforeImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443628920-1763320480153.jpg?width=8000&height=8000&resize=contain"
            afterImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=8000&height=8000&resize=contain"
            beforeLabel="Natural Light Capture"
            afterLabel="Signature G3NERALOLA Grade"
            title="The Art of the Visual Grade"
            subtitle="Slide across to witness how framing, light shaping, and intentional color science bring stories to life."
          />
        </div>
      </section>

      {/* Featured Works Masonry Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                <Camera className="w-3.5 h-3.5" />
                <span>Selected Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight">
                Curated Frames
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
                From intimate portraits to high-energy campus milestones and street chronicles.
              </p>
            </div>

            <Button asChild variant="outline" className="rounded-full self-start md:self-auto">
              <Link href="/portfolio" className="flex items-center gap-2">
                <span>View All 18+ Works</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => openModal(index)}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-secondary shadow-md hover:shadow-xl transition-all duration-300 border border-border/60"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Gradient Vignette & Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-end">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-serif">{image.alt}</h4>
                    <p className="text-xs text-gray-300 mt-1 line-clamp-2">{image.story}</p>
                    <span className="inline-block mt-3 text-xs text-amber-200 font-medium underline underline-offset-4">
                      Click to expand & inquire →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Client Voices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight">
              Trusted by Creatives, Grads & Brands
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3">
              Real reflections from people who stepped in front of the lens.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/80 shadow-md flex flex-col justify-between space-y-6"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-mono mb-4">
                    {item.tag}
                  </span>
                  <p className="text-sm sm:text-base text-foreground/90 italic leading-relaxed font-serif">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <p className="font-bold text-sm text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight">
            Your Moment Deserves To Be Immortalized.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto font-light">
            Whether preparing for your graduation milestone, launching a brand campaign, or capturing signature portraits — let's create something unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Book a Session Now</span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold w-full sm:w-auto"
            >
              <a
                href="https://wa.me/2348021247749?text=Hi%20G3NERALOLA,%20I'd%20like%20to%20inquire%20about%20your%20photography%20sessions!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      {lightboxOpen && (
        <Lightbox
          images={featuredImages}
          currentIndex={activeImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setActiveImageIndex((prev) => (prev < featuredImages.length - 1 ? prev + 1 : prev))}
          onPrevious={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : prev))}
        />
      )}
    </main>
  );
}
