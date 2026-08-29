"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Lightbox, { GalleryItem } from "@/components/Lightbox";
import { Camera, Sparkles, Filter, Grid, LayoutGrid, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const portfolioImages: GalleryItem[] = [
  // Portraits
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20240717_192507_Instagram-1763320468631.jpg?width=8000&height=8000&resize=contain",
    alt: "Pink hijab & dark eyewear editorial contrast",
    category: "Portraits",
    story: "Editorial framing playing with saturated magenta hues and crisp Lagos sunlight.",
    location: "Lagos, Nigeria",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_0517-1763320481424.jpg?width=8000&height=8000&resize=contain",
    alt: "Outdoor red attire portrait with natural glow",
    category: "Portraits",
    story: "Warm outdoor portrait capturing relaxed elegance and rich skin undertones.",
    location: "Ikeja, Lagos",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443628920-1763320480153.jpg?width=8000&height=8000&resize=contain",
    alt: "Basketball court golden hour portrait",
    category: "Portraits",
    story: "High-contrast urban sports aesthetic blended with contemporary youth fashion.",
    location: "LASU Sports Complex",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1757264318184-1763320761003.jpeg?width=8000&height=8000&resize=contain",
    alt: "Curly hair editorial with colorful sunglasses",
    category: "Portraits",
    story: "Vibrant Gen-Z creative expression with sharp depth-of-field.",
    location: "Surulere, Lagos",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=8000&height=8000&resize=contain",
    alt: "White hijab and Ayoba street cap",
    category: "Portraits",
    story: "Fusing modesty with Lagos streetwear identity.",
    location: "Lagos, Nigeria",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443626927-1763320772409.jpg?width=8000&height=8000&resize=contain",
    alt: "Profile silhouette with blue glasses",
    category: "Portraits",
    story: "Clean side-profile geometry and striking eyewear accents.",
    location: "Lagos, Nigeria",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320869308-1763320935366.jpeg?width=8000&height=8000&resize=contain",
    alt: "Warm ambient close-up portrait",
    category: "Portraits",
    story: "Intimate close-range lighting accentuating eye catchlights.",
    location: "Studio Lagos",
  },

  // Street & Lifestyle
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1719729734474-1-1763320490472.jpg?width=8000&height=8000&resize=contain",
    alt: "Lounge interior mood & ambiance",
    category: "Street & Lifestyle",
    story: "Lagos nightlife warmth, moody tones, and urban lifestyle atmosphere.",
    location: "Victoria Island, Lagos",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_20221112_174832-1763320764583.jpg?width=8000&height=8000&resize=contain",
    alt: "Lagos Island monument street chronicle",
    category: "Street & Lifestyle",
    story: "Historical landmarks and urban identity of Lagos Island.",
    location: "Lagos Island, Nigeria",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320848766-1763320972260.jpeg?width=8000&height=8000&resize=contain",
    alt: "Low-angle skyward architectural perspective",
    category: "Street & Lifestyle",
    story: "Dramatic upward perspective capturing the grandeur of Nigerian sky and structure.",
    location: "Lagos, Nigeria",
  },

  // Campus & Convocation
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1749457997626-1763320478848.jpg?width=8000&height=8000&resize=contain",
    alt: "Academic convocation gown milestone",
    category: "Campus & Convocation",
    story: "Capturing the triumph and celebratory colors of university graduation.",
    location: "LASU Ojo Campus",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/e9136dc927ec109ab05a4e56b5c683ed-1763320470910.png?width=8000&height=8000&resize=contain",
    alt: "Bridal and milestone celebration portrait",
    category: "Campus & Convocation",
    story: "Classic elegance and immaculate white lace detail.",
    location: "Lagos, Nigeria",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/786650331-1763320473621.jpg?width=8000&height=8000&resize=contain",
    alt: "Basketball court through fence framing",
    category: "Campus & Convocation",
    story: "Creative foreground framing creating depth in athletic campus spaces.",
    location: "LASU Sports Field",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1086659322-1763320473931.jpg?width=8000&height=8000&resize=contain",
    alt: "Live basketball game motion freeze",
    category: "Campus & Convocation",
    story: "Freezing peak athleticism, teamwork, and raw collegiate energy.",
    location: "Lagos, Nigeria",
  },

  // Fine Art & Macro
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/962643062-1763320471825.jpg?width=8000&height=8000&resize=contain",
    alt: "Red bougainvillea floral botanical study",
    category: "Fine Art & Macro",
    story: "Rich scarlet hues under intense afternoon sunlight.",
    location: "Lagos Gardens",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/8d17b7fbad6fba7b104d86d2de6b7468-1763320471099.png?width=8000&height=8000&resize=contain",
    alt: "White and blue petal botanical macro",
    category: "Fine Art & Macro",
    story: "Microscopic nature textures and delicate color gradients.",
    location: "Studio Botanical",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/PSX_20240510_194341-1763320762070.jpg?width=8000&height=8000&resize=contain",
    alt: "Vibrant marble light refraction study",
    category: "Fine Art & Macro",
    story: "Optical refractions and vibrant spectrum play through glass marbles.",
    location: "Studio Experiment",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/abdullah.qaasim_1763320890663-1763320935513.jpeg?width=8000&height=8000&resize=contain",
    alt: "Macro rust texture with water droplets",
    category: "Fine Art & Macro",
    story: "Industrial decay meeting organic moisture in sharp macro focus.",
    location: "Lagos Mainland",
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

export default function PortfolioPage() {
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
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-b border-border/60">
        <div className="container mx-auto text-center max-w-4xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight">
              Visual Archives
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto pt-2">
              A curated collection of portraits, campus milestones, and street chronicles captured across Lagos and Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Category Filter Bar */}
      <section className="py-4 sm:py-5 px-4 sm:px-6 lg:px-8 border-b sticky top-20 glass-nav z-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
            {CATEGORIES.map((category) => {
              const count =
                category === "All"
                  ? portfolioImages.length
                  : portfolioImages.filter((img) => img.category === category).length;
              const isSelected = selectedCategory === category;

              return (
                <Button
                  key={category}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isSelected ? "shadow-md scale-105" : "hover:bg-secondary"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`ml-1.5 px-1.5 py-0.2 text-[10px] rounded-full font-mono ${
                      isSelected
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src + index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-secondary shadow-md hover:shadow-xl transition-all duration-300 border border-border/60"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-end">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-bold font-serif leading-snug">
                      {image.alt}
                    </h4>
                    <p className="text-xs text-gray-300 mt-1 line-clamp-2">{image.story}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-amber-200">
                      <span>{image.location}</span>
                      <span className="font-semibold underline underline-offset-2">View →</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 space-y-3">
              <p className="text-muted-foreground text-lg">No images found in this category.</p>
              <Button variant="outline" onClick={() => setSelectedCategory("All")}>
                Show All Photos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Booking Teaser Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/60 border-t border-border/60">
        <div className="container mx-auto max-w-4xl text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif">
            Inspired by these visuals?
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Every session is personalized with location scouting, moodboards, and comfortable direction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild className="rounded-full px-8">
              <Link href="/services">View Session Packages & Pricing</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/contact">Check Calendar Availability</Link>
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