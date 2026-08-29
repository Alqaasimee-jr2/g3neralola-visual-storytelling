"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, MessageCircle, ArrowRight, Sparkles, MapPin, Shirt, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PackageOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  defaultOutfits: number;
  defaultImages: number;
}

const PACKAGES: PackageOption[] = [
  {
    id: "portrait",
    name: "Solo Signature Portrait",
    basePrice: 65000,
    description: "High-impact individual portraits, personal branding, & editorial headshots.",
    defaultOutfits: 2,
    defaultImages: 8,
  },
  {
    id: "lifestyle",
    name: "Editorial & Lifestyle Narrative",
    basePrice: 125000,
    description: "Multi-look visual storytelling, fashion, street culture, & moodboard styling.",
    defaultOutfits: 3,
    defaultImages: 18,
  },
  {
    id: "campus",
    name: "Campus & Convocation Milestone",
    basePrice: 85000,
    description: "LASU / University convocation, graduation glory, family moments & gown portraits.",
    defaultOutfits: 2,
    defaultImages: 12,
  },
  {
    id: "commercial",
    name: "Brand & Creative Campaign",
    basePrice: 250000,
    description: "Lookbooks, gaming setups, music artist visuals, & commercial usage license.",
    defaultOutfits: 4,
    defaultImages: 30,
  },
];

const LOCATIONS = [
  { id: "mainland", name: "Lagos Mainland (Ikeja, Surulere, Yaba)", fee: 0 },
  { id: "island", name: "Lagos Island (Lekki, VI, Ikoyi)", fee: 15000 },
  { id: "campus", name: "LASU Ojo / Campus Grounds", fee: 0 },
  { id: "interstate", name: "Out of Lagos / Interstate Travel", fee: 60000 },
];

export default function PricingCalculator() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>("lifestyle");
  const [selectedLocationId, setSelectedLocationId] = useState<string>("mainland");
  const [outfitCount, setOutfitCount] = useState<number>(3);
  const [addons, setAddons] = useState<{
    rushDelivery: boolean;
    extraRetouch: boolean;
    studioRental: boolean;
    btsReel: boolean;
  }>({
    rushDelivery: false,
    extraRetouch: false,
    studioRental: false,
    btsReel: false,
  });

  const currentPackage = useMemo(
    () => PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[0],
    [selectedPackageId]
  );

  const currentLocation = useMemo(
    () => LOCATIONS.find((l) => l.id === selectedLocationId) || LOCATIONS[0],
    [selectedLocationId]
  );

  // Calculate totals
  const extraOutfits = Math.max(0, outfitCount - currentPackage.defaultOutfits);
  const extraOutfitCost = extraOutfits * 10000;

  const addonCost =
    (addons.rushDelivery ? 30000 : 0) +
    (addons.extraRetouch ? 15000 : 0) +
    (addons.studioRental ? 35000 : 0) +
    (addons.btsReel ? 25000 : 0);

  const totalNGN = currentPackage.basePrice + currentLocation.fee + extraOutfitCost + addonCost;
  const approxUSD = Math.round(totalNGN / 1500);

  const formatPrice = (num: number) => `₦${num.toLocaleString()}`;

  // WhatsApp Pre-fill URL
  const generateWhatsAppUrl = () => {
    const text = `Hi G3NERALOLA! I customized an estimate on your website:
• Package: ${currentPackage.name}
• Location: ${currentLocation.name}
• Outfits: ${outfitCount}
• Add-ons: ${[
      addons.rushDelivery ? "24-48h Express Delivery" : "",
      addons.extraRetouch ? "5 Extra Master Retouches" : "",
      addons.studioRental ? "Studio Space Access" : "",
      addons.btsReel ? "BTS Video Reel" : "",
    ]
      .filter(Boolean)
      .join(", ") || "None"}
• Estimated Total: ${formatPrice(totalNGN)} (~$${approxUSD} USD)

Can we check your calendar availability for this shoot?`;

    return `https://wa.me/2348021247749?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="w-full max-w-5xl mx-auto my-12 p-6 sm:p-8 md:p-10 rounded-3xl bg-card border border-border/80 shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-border/60">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif">
            Build Your Custom Session
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mt-1">
            Transparent, tailored pricing for your specific vision and location.
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-secondary/80 border border-border text-left md:text-right">
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
            Estimated Investment
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-foreground">
            {formatPrice(totalNGN)}
            <span className="text-sm font-normal text-muted-foreground ml-2">
              (approx. ${approxUSD} USD)
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Options Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Select Package */}
          <div>
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-mono">1</span>
              Choose Session Category
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => {
                    setSelectedPackageId(pkg.id);
                    setOutfitCount(pkg.defaultOutfits);
                  }}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedPackageId === pkg.id
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-secondary/40 hover:bg-secondary border-border text-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold">{pkg.name}</span>
                    {selectedPackageId === pkg.id && <Check className="w-4 h-4" />}
                  </div>
                  <div className={`text-xs ${selectedPackageId === pkg.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </div>
                  <div className="mt-2 text-xs font-mono font-bold">
                    From {formatPrice(pkg.basePrice)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Select Location */}
          <div>
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-mono">2</span>
              <MapPin className="w-4 h-4 text-primary" />
              Shoot Location / Region
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLocationId(loc.id)}
                  className={`p-3 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                    selectedLocationId === loc.id
                      ? "bg-foreground text-background border-foreground font-semibold"
                      : "bg-secondary/30 hover:bg-secondary border-border text-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{loc.name}</span>
                    <span className="font-mono">{loc.fee > 0 ? `+${formatPrice(loc.fee)}` : "Included"}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Outfits & Looks */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-mono">3</span>
                <Shirt className="w-4 h-4 text-primary" />
                Number of Outfits / Looks
              </label>
              <span className="text-sm font-bold font-mono px-2 py-0.5 rounded-md bg-secondary">
                {outfitCount} {outfitCount === 1 ? "Look" : "Looks"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={outfitCount}
              onChange={(e) => setOutfitCount(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
              <span>1 Look</span>
              <span>2 Looks (Standard)</span>
              <span>3 Looks</span>
              <span>4 Looks</span>
              <span>5 Looks (Extended)</span>
            </div>
          </div>

          {/* 4. Creative Add-ons */}
          <div>
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-mono">4</span>
              <Sparkles className="w-4 h-4 text-primary" />
              Enhance Your Experience (Optional Add-ons)
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {[
                {
                  key: "rushDelivery" as const,
                  title: "⚡ 24-48h Express Delivery",
                  cost: 30000,
                  desc: "Rush master retouches for urgent events",
                },
                {
                  key: "extraRetouch" as const,
                  title: "🎨 +5 Master Retouches",
                  cost: 15000,
                  desc: "Additional magazine-grade frames",
                },
                {
                  key: "studioRental" as const,
                  title: "🏢 Indoor Studio Space Pass",
                  cost: 35000,
                  desc: "Professional studio set in Lagos",
                },
                {
                  key: "btsReel" as const,
                  title: "🎬 4K Behind-The-Scenes Reel",
                  cost: 25000,
                  desc: "Instagram/TikTok ready video clip",
                },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() =>
                    setAddons((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                  }
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    addons[item.key]
                      ? "bg-primary/10 border-primary text-foreground font-semibold"
                      : "bg-secondary/20 hover:bg-secondary/60 border-border text-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span>{item.title}</span>
                    <span className="font-mono text-primary font-bold">+{formatPrice(item.cost)}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1 font-normal">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Summary Card & Booking Actions */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-secondary/60 border border-border/80 space-y-6">
          <div>
            <h4 className="text-base font-bold mb-4 font-serif text-foreground">
              Package Summary Breakdown
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-1.5 border-b border-border/40">
                <span className="text-muted-foreground">{currentPackage.name}</span>
                <span className="font-mono font-medium">{formatPrice(currentPackage.basePrice)}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-border/40">
                <span className="text-muted-foreground">Location Logistics</span>
                <span className="font-mono font-medium">
                  {currentLocation.fee > 0 ? formatPrice(currentLocation.fee) : "₦0 (Included)"}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-border/40">
                <span className="text-muted-foreground">{outfitCount} Total Outfits / Looks</span>
                <span className="font-mono font-medium">
                  {extraOutfitCost > 0 ? `+${formatPrice(extraOutfitCost)}` : "Included"}
                </span>
              </div>

              {addons.rushDelivery && (
                <div className="flex justify-between py-1 border-b border-border/40 text-xs">
                  <span className="text-muted-foreground">Express 24-48h Delivery</span>
                  <span className="font-mono">+₦30,000</span>
                </div>
              )}

              {addons.extraRetouch && (
                <div className="flex justify-between py-1 border-b border-border/40 text-xs">
                  <span className="text-muted-foreground">+5 Master Retouches</span>
                  <span className="font-mono">+₦15,000</span>
                </div>
              )}

              {addons.studioRental && (
                <div className="flex justify-between py-1 border-b border-border/40 text-xs">
                  <span className="text-muted-foreground">Studio Space Pass</span>
                  <span className="font-mono">+₦35,000</span>
                </div>
              )}

              {addons.btsReel && (
                <div className="flex justify-between py-1 border-b border-border/40 text-xs">
                  <span className="text-muted-foreground">BTS Video Reel</span>
                  <span className="font-mono">+₦25,000</span>
                </div>
              )}
            </div>

            {/* Total Highlight */}
            <div className="mt-6 pt-4 border-t-2 border-border flex justify-between items-baseline">
              <span className="font-bold text-base">Total Estimated</span>
              <div className="text-right">
                <div className="text-2xl font-bold font-mono text-primary">
                  {formatPrice(totalNGN)}
                </div>
                <div className="text-xs text-muted-foreground">
                  ~${approxUSD} USD
                </div>
              </div>
            </div>

            <div className="mt-3 p-3 rounded-lg bg-background text-xs text-muted-foreground leading-relaxed border border-border/60">
              💡 <strong>50% deposit</strong> secures your date on the production calendar. Includes digital proofs gallery + lifetime cloud storage.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5">
            <Button
              asChild
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-xl py-6 shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book This Custom Estimate on WhatsApp</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full rounded-xl py-5 border-border hover:bg-background"
            >
              <Link
                href={`/contact?service=${encodeURIComponent(currentPackage.name)}&budget=${encodeURIComponent(formatPrice(totalNGN))}`}
                className="flex items-center justify-center gap-2 text-sm"
              >
                <span>Proceed to Email Booking Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
