"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Sparkles, MessageCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  story?: string;
  location?: string;
}

interface LightboxProps {
  images: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrevious]);

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between z-50 text-white w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-mono tracking-wider">
              {currentIndex + 1} / {images.length}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium uppercase tracking-wider text-gray-300">
              {currentImage.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2.5 text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Center Image with Nav Buttons */}
        <div className="relative flex-1 flex items-center justify-center my-2 max-w-7xl w-full mx-auto">
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-0 sm:left-4 z-50 p-3 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
            disabled={currentIndex === 0}
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-0 sm:right-4 z-50 p-3 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-all disabled:opacity-30 disabled:pointer-events-none"
            disabled={currentIndex === images.length - 1}
            aria-label="Next Image"
          >
            <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
          </button>

          {/* Active Image Frame */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-[65vh] sm:h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 85vw"
              priority
            />
          </motion.div>
        </div>

        {/* Bottom Story & Booking Bar */}
        <div
          className="w-full max-w-3xl mx-auto z-50 p-4 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-white">{currentImage.alt}</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {currentImage.location || "Captured in Lagos, Nigeria"} • Shot by G3NERALOLA
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="bg-white text-black hover:bg-gray-200 rounded-full text-xs"
            >
              <Link href={`/contact?service=${encodeURIComponent(currentImage.category)}&look=${encodeURIComponent(currentImage.alt)}`}>
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                Book This Style
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
