"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Camera, 
  Sparkles, 
  Instagram, 
  Calendar, 
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
      alt: "Pink hijab & eyewear contrast",
      category: "Portraits",
      story: "High-contrast editorial framing in Lagos sunlight.",
      location: "Lagos, Nigeria",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=8000&height=8000&resize=contain",
      alt: "Street portrait & Ayoba cap",
      category: "Culture",
      story: "Authentic Nigerian streetwear identity.",
      location: "LASU Ojo, Lagos",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320848766-1763320972260.jpeg?width=8000&height=8000&resize=contain",
      alt: "Lagos architectural skyward gaze",
      category: "Street",
      story: "Rhythm of Lagos City.",
      location: "Lagos Island",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1749457997626-1763320478848.jpg?width=8000&height=8000&resize=contain",
      alt: "Convocation milestone in vibrant gown",
      category: "Milestones",
      story: "University graduation glory.",
      location: "LASU Campus",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1086659322-1763320473931.jpg?width=8000&height=8000&resize=contain",
      alt: "Basketball court motion capture",
      category: "Campus Life",
      story: "Raw athletic energy frozen in time.",
      location: "Lagos",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320865776-1763320935247.jpeg?width=8000&height=8000&resize=contain",
      alt: "Monochrome fine-art macro",
      category: "Fine Art",
      story: "Tactile textural beauty.",
      location: "Studio Lagos",
    },
  ];

  const testimonials = [
    {
      quote: "Adeola made me feel effortless in front of the lens. My convocation photos broke my Instagram.",
      author: "Toluwani A.",
      role: "LASU Graduate",
    },
    {
      quote: "Sneak peek in 48 hours and every single frame felt cinematic. Exceptional work ethic.",
      author: "David K.",
      role: "Creative Director",
    },
    {
      quote: "He captures pure inner confidence. His vision over gear ethos is 100% real.",
      author: "Zainab B.",
      role: "Content Creator",
    },
  ];

  const openModal = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      {/* Full-Bleed Cinematic Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black text-white px-4 sm:px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&h=1080&fit=crop"
            alt="G3NERALOLA Photography Background"
            fill
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-24 pb-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            {/* Minimalist Live Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono tracking-widest uppercase text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Lagos • Worldwide</span>
            </div>

            {/* Giant Clean Title */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-serif tracking-tighter leading-[0.95]">
              G3NERALOLA
            </h1>

            <p className="text-lg sm:text-2xl text-gray-300 font-serif italic max-w-xl mx-auto font-light">
              Visual poetry, raw human emotion, and unfiltered Nigerian culture.
            </p>

            {/* Minimalist CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-sm font-medium bg-white text-black hover:bg-gray-200 shadow-2xl transition-transform hover:scale-105 active:scale-95"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  <span>View Archives</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-8 py-6 text-sm font-medium text-white hover:bg-white/10"
              >
                <Link href="/services">
                  <span>Packages & Pricing</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Minimal Scroll Cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
          <span className="text-[9px] uppercase tracking-widest font-mono">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </section>

      {/* Magazine Editorial Spread (Borderless) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Full-bleed Portrait Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=8000&height=8000&resize=contain"
                alt="Adeola Olamilekan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-0.5">
                <p className="text-xl font-serif font-bold">Adeola Olamilekan</p>
                <p className="text-xs text-gray-300 font-mono tracking-wider uppercase">Ex-Commando • Visual Storyteller</p>
              </div>
            </div>
          </div>

          {/* Minimalist Editorial Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                The Philosophy
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-[1.05]">
                "Vision Over Gear."
              </h2>
              <p className="text-xl sm:text-2xl font-serif italic text-muted-foreground leading-relaxed">
                Stories matter more than sensors. No stiff poses, just authentic presence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border/40">
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold">200+</p>
                <p className="text-xs text-muted-foreground uppercase font-mono mt-1">Stories</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold">48h</p>
                <p className="text-xs text-muted-foreground uppercase font-mono mt-1">Sneak Peek</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold">100%</p>
                <p className="text-xs text-muted-foreground uppercase font-mono mt-1">Organic</p>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild variant="link" className="px-0 text-base font-serif hover:no-underline group">
                <Link href="/about" className="flex items-center gap-2">
                  <span className="underline underline-offset-8">Read the artist journey</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visual Grade (Borderless) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider
          beforeImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443628920-1763320480153.jpg?width=8000&height=8000&resize=contain"
          afterImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=8000&height=8000&resize=contain"
          beforeLabel="Raw Light"
          afterLabel="Signature Grade"
          title="The Color Science"
          subtitle="Slide across to witness how light shaping and color grading bring frames to life."
        />
      </section>

      {/* Edge-to-Edge Curated Visual Gallery */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Selected Frames</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight mt-1">Visual Archives</h2>
          </div>
          <Link href="/portfolio" className="text-sm font-serif underline underline-offset-4 hover:opacity-80">
            View all 18+ →
          </Link>
        </div>

        {/* Pure Borderless Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer bg-neutral-900 shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">{image.category}</span>
                <p className="text-base font-serif font-semibold">{image.alt}</p>
                <span className="text-xs text-amber-200 mt-1">View Story & Book →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typographic Pull-Quotes (Borderless) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto border-t border-border/30">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Voices</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">The Experience</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {testimonials.map((t, i) => (
            <div key={i} className="space-y-4">
              <p className="text-lg sm:text-xl font-serif italic text-foreground leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-bold font-serif">{t.author}</p>
                <p className="text-xs text-muted-foreground font-mono">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seamless Minimalist CTA Banner */}
      <section className="py-24 sm:py-32 px-4 text-center bg-foreground text-background">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight">
            Ready to tell your story?
          </h2>
          <p className="text-lg font-serif italic opacity-85 max-w-lg mx-auto">
            Portraits, convocations, lookbooks & creative sessions across Nigeria.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 bg-background text-foreground hover:opacity-90 text-sm font-medium"
            >
              <Link href="/contact">Book a Session</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 border-background/40 text-background hover:bg-background/10 text-sm font-medium"
            >
              <Link href="/services">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
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
