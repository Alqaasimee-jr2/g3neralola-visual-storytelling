"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: { src: string; alt: string; category: string }[];
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 left-4 text-white text-sm z-50">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-50"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-50"
          disabled={currentIndex === images.length - 1}
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Image Info */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center z-50">
          <p className="text-sm font-medium">{currentImage.category}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
