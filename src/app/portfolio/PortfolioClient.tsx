"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox, { GalleryItem } from "@/components/Lightbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const portfolioImages: GalleryItem[] = [
  // ── PORTRAITS ──
  {
    src: "/images/generalola.jpeg",
    alt: "Adeola Olamilekan signature portrait in cap and blazer",
    category: "Portraits",
    story: "Tactical composure and timeless elegance against the open Lagos sky.",
    location: "Lagos, Nigeria",
  },
  {
    src: "/images/shot-10.jpeg",
    alt: "Warm close-up portrait with natural catchlights",
    category: "Portraits",
    story: "Intimate close-range lighting accentuating eye catchlights and skin tones.",
    location: "Studio Lagos",
  },
  {
    src: "/images/shot-20.jpeg",
    alt: "Confidence & poise by the railing",
    category: "Portraits",
    story: "Relaxed outdoor direction capturing natural posture and subtle shadows.",
    location: "Lagos, Nigeria",
  },
  {
    src: "/images/shot-40.jpeg",
    alt: "Monochrome Nigerian native wear & embroidered fila",
    category: "Portraits",
    story: "High-contrast black & white study in traditional elegance and geometry.",
    location: "Lagos Mainland",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20240717_192507_Instagram-1763320468631.jpg?width=8000&height=8000&resize=contain",
    alt: "Pink hijab & eyewear editorial contrast",
    category: "Portraits",
    story: "Editorial framing with saturated magenta hues in Lagos sunlight.",
    location: "Lagos, Nigeria",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_0517-1763320481424.jpg?width=8000&height=8000&resize=contain",
    alt: "Outdoor red attire portrait with natural glow",
    category: "Portraits",
    story: "Warm portrait capturing relaxed elegance and rich skin undertones.",
    location: "Ikeja, Lagos",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443628920-1763320480153.jpg?width=8000&height=8000&resize=contain",
    alt: "Basketball court golden hour portrait",
    category: "Portraits",
    story: "High-contrast urban sports aesthetic blended with youth fashion.",
    location: "LASU Sports Complex",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=8000&height=8000&resize=contain",
    alt: "White hijab and Ayoba street cap",
    category: "Portraits",
    story: "Fusing modesty with Lagos streetwear identity.",
    location: "Lagos, Nigeria",
  },

  // ── CAMPUS & CONVOCATION ──
  {
    src: "/images/shot-25.jpeg",
    alt: "Joyful convocation milestone in royal blue & celebratory hijab",
    category: "Campus & Convocation",
    story: "Capturing authentic triumph, graduation joy, and youthful radiance.",
    location: "LASU Ojo Campus",
  },
  {
    src: "/images/shot-30.jpeg",
    alt: "Golden hour campus sunburst over LASU",
    category: "Campus & Convocation",
    story: "Atmospheric lens flare framing university grounds during golden hour.",
    location: "LASU Campus",
  },
  {
    src: "/images/shot-55.jpeg",
    alt: "Classroom golden light falloff & window silhouettes",
    category: "Campus & Convocation",
    story: "Playing with natural afternoon sunlight streaming through lecture hall windows.",
    location: "Lagos Campus",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1749457997626-1763320478848.jpg?width=8000&height=8000&resize=contain",
    alt: "Academic convocation gown milestone",
    category: "Campus & Convocation",
    story: "Triumph and celebratory colors of university graduation.",
    location: "LASU Ojo Campus",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1086659322-1763320473931.jpg?width=8000&height=8000&resize=contain",
    alt: "Live basketball game motion freeze",
    category: "Campus & Convocation",
    story: "Freezing raw athleticism and collegiate energy.",
    location: "Lagos, Nigeria",
  },

  // ── STREET & LIFESTYLE ──
  {
    src: "/images/shot-50.jpeg",
    alt: "Lagos Island cathedral & coastal palm perspective",
    category: "Street & Lifestyle",
    story: "Urban architecture and colonial cathedral heritage on Lagos Island.",
    location: "Lagos Island, Nigeria",
  },
  {
    src: "/images/shot-02.jpeg",
    alt: "Tropical papaya foliage against vivid Nigerian sky",
    category: "Street & Lifestyle",
    story: "Everyday Lagos landscape transformed into vibrant tropical art.",
    location: "Lagos, Nigeria",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1719729734474-1-1763320490472.jpg?width=8000&height=8000&resize=contain",
    alt: "Lounge interior mood & ambiance",
    category: "Street & Lifestyle",
    story: "Lagos nightlife warmth, moody tones, and urban lifestyle.",
    location: "Victoria Island, Lagos",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320848766-1763320972260.jpeg?width=8000&height=8000&resize=contain",
    alt: "Low-angle skyward architectural perspective",
    category: "Street & Lifestyle",
    story: "Dramatic upward perspective capturing Nigerian skies and structures.",
    location: "Lagos, Nigeria",
  },

  // ── FINE ART & MACRO ──
  {
    src: "/images/shot-01.jpeg",
    alt: "Vibrant purple botanical floral macro",
    category: "Fine Art & Macro",
    story: "Microscopic nature textures and delicate tropical color grade.",
    location: "Lagos Botanical",
  },
  {
    src: "/images/shot-03.jpeg",
    alt: "Golden orange daisy bloom under ambient tropical light",
    category: "Fine Art & Macro",
    story: "Intense color saturation and fine petal details in outdoor light.",
    location: "Lagos Gardens",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/PSX_20240510_194341-1763320762070.jpg?width=8000&height=8000&resize=contain",
    alt: "Vibrant marble light refraction study",
    category: "Fine Art & Macro",
    story: "Optical refractions and vibrant spectrum play through glass.",
    location: "Studio Experiment",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320865776-1763320935247.jpeg?width=8000&height=8000&resize=contain",
    alt: "Monochrome fine-art wet strawberry",
    category: "Fine Art & Macro",
    story: "Tactile high-contrast black and white fine art.",
    location: "Studio Lagos",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320861569-1763320935599.jpeg?width=8000&height=8000&resize=contain",
    alt: "High-speed water splash droplet explosion",
    category: "Fine Art & Macro",
    story: "High-speed motion capture transforming liquid physics into art.",
    location: "Studio Lagos",
  },
];

const CATEGORIES = [
  "All",
  "Portraits",
  "Street & Lifestyle",
  "Campus & Convocation",
  "Fine Art & Macro",
];

export default function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return portfolioImages;
    }
    return portfolioImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background text-foreground selection:bg-white selection:text-black">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">The Archives</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight">
              Selected Works
            </h1>
          </div>
          <p className="text-sm font-serif italic text-muted-foreground max-w-xs">
            22+ photographic stories across Lagos & Nigeria.
          </p>
        </div>
      </section>

      {/* Sleek Minimal Category Tabs (No Heavy Box Outlines) */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pb-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border/40 pb-4 text-xs font-mono uppercase tracking-wider">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All"
                ? portfolioImages.length
                : portfolioImages.filter((img) => img.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1 transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "text-foreground font-bold border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Pure Borderless Edge-to-Edge Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src + index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer bg-neutral-900 shadow-md"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />

              {/* Minimal Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  {image.category}
                </span>
                <p className="text-sm sm:text-base font-serif font-bold leading-snug">
                  {image.alt}
                </p>
                <div className="flex justify-between items-center text-xs text-amber-200 mt-2">
                  <span>{image.location}</span>
                  <span className="underline underline-offset-4">View Story →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seamless Minimalist CTA */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">Have a specific look in mind?</h3>
          <p className="text-muted-foreground text-sm font-serif italic">
            Sessions are tailored with location scouting and relaxed direction.
          </p>
          <div className="pt-2">
            <Button asChild className="rounded-full px-8 py-6 bg-foreground text-background hover:opacity-90">
              <Link href="/services">View Investment Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setCurrentImageIndex((prev) =>
              prev < filteredImages.length - 1 ? prev + 1 : prev
            )
          }
          onPrevious={() =>
            setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev))
          }
        />
      )}
    </main>
  );
}
