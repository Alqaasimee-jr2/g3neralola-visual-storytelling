"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Lightbox from "@/components/Lightbox";

const categories = [
  "All",
  "Portraits",
  "Lifestyle",
  "Events & Campus Life",
  "Gaming/Creative",
];

const portfolioImages = [
  // Portraits
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20240717_192507_Instagram-1763320468631.jpg?width=8000&height=8000&resize=contain",
    alt: "Portrait with pink hijab and sunglasses",
    category: "Portraits",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_0517-1763320481424.jpg?width=8000&height=8000&resize=contain",
    alt: "Outdoor portrait in red attire",
    category: "Portraits",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443628920-1763320480153.jpg?width=8000&height=8000&resize=contain",
    alt: "Portrait on basketball court with sunglasses",
    category: "Portraits",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1757264318184-1763320761003.jpeg?width=8000&height=8000&resize=contain",
    alt: "Young person with curly hair and colorful sunglasses",
    category: "Portraits",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=8000&height=8000&resize=contain",
    alt: "Portrait with white hijab and ayoba cap",
    category: "Portraits",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443626927-1763320772409.jpg?width=8000&height=8000&resize=contain",
    alt: "Side portrait with blue sunglasses and white hijab",
    category: "Portraits",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320869308-1763320935366.jpeg?width=8000&height=8000&resize=contain",
    alt: "Close-up portrait with warm lighting",
    category: "Portraits",
  },
  // Lifestyle
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1719729734474-1-1763320490472.jpg?width=8000&height=8000&resize=contain",
    alt: "Restaurant lounge interior scene",
    category: "Lifestyle",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_20221112_174832-1763320764583.jpg?width=8000&height=8000&resize=contain",
    alt: "Lagos Island Local Government monument",
    category: "Lifestyle",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320848766-1763320972260.jpeg?width=8000&height=8000&resize=contain",
    alt: "Low angle street photography with blue sky",
    category: "Lifestyle",
  },
  // Events & Campus Life
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1749457997626-1763320478848.jpg?width=8000&height=8000&resize=contain",
    alt: "Graduation ceremony in colorful gown",
    category: "Events & Campus Life",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/e9136dc927ec109ab05a4e56b5c683ed-1763320470910.png?width=8000&height=8000&resize=contain",
    alt: "Bridal portrait in white dress",
    category: "Events & Campus Life",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/786650331-1763320473621.jpg?width=8000&height=8000&resize=contain",
    alt: "Basketball court through fence",
    category: "Events & Campus Life",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1086659322-1763320473931.jpg?width=8000&height=8000&resize=contain",
    alt: "Basketball game in action",
    category: "Events & Campus Life",
  },
  // Gaming/Creative
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/962643062-1763320471825.jpg?width=8000&height=8000&resize=contain",
    alt: "Red bougainvillea flowers",
    category: "Gaming/Creative",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/8d17b7fbad6fba7b104d86d2de6b7468-1763320471099.png?width=8000&height=8000&resize=contain",
    alt: "White and blue flower close-up",
    category: "Gaming/Creative",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/PSX_20240510_194341-1763320762070.jpg?width=8000&height=8000&resize=contain",
    alt: "Colorful marbles close-up",
    category: "Gaming/Creative",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/abdullah.qaasim_1763320890663-1763320935513.jpeg?width=8000&height=8000&resize=contain",
    alt: "Macro shot of rusty metal with water droplets",
    category: "Gaming/Creative",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320865776-1763320935247.jpeg?width=8000&height=8000&resize=contain",
    alt: "Black and white artistic shot of wet strawberry",
    category: "Gaming/Creative",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320861569-1763320935599.jpeg?width=8000&height=8000&resize=contain",
    alt: "Black and white water splash art",
    category: "Gaming/Creative",
  },
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

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : prev
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">Portfolio</h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Explore my collection of portraits, lifestyle shots, and creative
              moments captured across Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-b sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all text-xs sm:text-sm"
                size={typeof window !== 'undefined' && window.innerWidth < 640 ? "sm" : "default"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={8000}
                    height={8000}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center px-4">
                      <p className="text-xs sm:text-sm font-semibold">{image.category}</p>
                      <p className="text-xs mt-1">Click to view</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16 sm:py-20">
              <p className="text-muted-foreground text-base sm:text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">
              Let's Create Something Together
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Interested in booking a photoshoot? Get in touch to discuss your
              vision
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="/contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}