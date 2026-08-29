"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Sliders } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Original Frame",
  afterLabel = "Signature Cinematic Grade",
  title = "The Art of the Grade",
  subtitle = "Hover or slide across the frame to see how raw Lagos reality transforms into cinematic visual poetry.",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Alchemy</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-serif">{title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mt-2">
          {subtitle}
        </p>
      </div>

      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl select-none bg-neutral-950">
        {/* Background Image (After - Graded) */}
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
          {afterLabel}
        </div>

        {/* Foreground Image (Before - Raw) with Clip-Path */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-wider">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
            <Sliders className="w-3.5 h-3.5 text-black" />
          </div>
        </div>

        {/* Hidden Range Input for full interactive control */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
          aria-label="Before and After Grade Slider"
        />
      </div>

      <div className="flex justify-between items-center text-[11px] font-mono text-muted-foreground mt-3 px-1">
        <span>← Raw Light</span>
        <span>Signature Grade →</span>
      </div>
    </div>
  );
}
