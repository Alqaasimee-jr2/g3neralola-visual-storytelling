"use client";

import { useState, useMemo } from "react";
import { Check, MessageCircle, ArrowRight, MapPin, Shirt, Sparkles } from "lucide-react";
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
    description: "Personal branding & editorial headshots.",
    defaultOutfits: 2,
    defaultImages: 8,
  },
  {
    id: "lifestyle",
    name: "Editorial & Lifestyle Narrative",
    basePrice: 125000,
    description: "Multi-look fashion & street culture.",
    defaultOutfits: 3,
    defaultImages: 18,
  },
  {
    id: "campus",
    name: "Campus & Convocation Milestone",
    basePrice: 85000,
    description: "Graduation gown, family & solo portraits.",
    defaultOutfits: 2,
    defaultImages: 12,
  },
  {
    id: "commercial",
    name: "Brand & Creative Campaign",
    basePrice: 250000,
    description: "Commercial lookbooks & video assets.",
    defaultOutfits: 4,
    defaultImages: 30,
  },
];

const LOCATIONS = [
  { id: "mainland", name: "Lagos Mainland", fee: 0 },
  { id: "island", name: "Lagos Island", fee: 15000 },
  { id: "campus", name: "LASU Ojo / Campus", fee: 0 },
  { id: "interstate", name: "Interstate / Travel", fee: 60000 },
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

  const generateWhatsAppUrl = () => {
    const text = `Hi G3NERALOLA! I customized an estimate on your website:
• Package: ${currentPackage.name}
• Location: ${currentLocation.name}
• Outfits: ${outfitCount}
• Add-ons: ${[
      addons.rushDelivery ? "24-48h Express Delivery" : "",
      addons.extraRetouch ? "5 Extra Master Retouches" : "",
      addons.studioRental ? "Studio Space Pass" : "",
      addons.btsReel ? "BTS Video Reel" : "",
    ]
      .filter(Boolean)
      .join(", ") || "None"}
• Estimated Total: ${formatPrice(totalNGN)} (~$${approxUSD} USD)

Can we check your calendar availability for this shoot?`;

    return `https://wa.me/2348021247749?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 pb-8 border-b border-border/40">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Custom Session</span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight mt-1">
            Session Estimator
          </h3>
        </div>

        <div className="text-left md:text-right">
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Estimated Investment</span>
          <div className="text-3xl font-serif font-bold text-foreground">
            {formatPrice(totalNGN)}
            <span className="text-xs font-mono font-normal text-muted-foreground ml-2">
              (~${approxUSD} USD)
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
        {/* Left Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* 1. Category */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              01. Choose Tier
            </label>
            <div className="grid sm:grid-cols-2 gap-2">
              {PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => {
                    setSelectedPackageId(pkg.id);
                    setOutfitCount(pkg.defaultOutfits);
                  }}
                  className={`p-4 rounded-xl text-left transition-all cursor-pointer ${
                    selectedPackageId === pkg.id
                      ? "bg-foreground text-background font-semibold"
                      : "bg-secondary/40 hover:bg-secondary text-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center text-sm font-serif">
                    <span>{pkg.name}</span>
                    {selectedPackageId === pkg.id && <Check className="w-4 h-4" />}
                  </div>
                  <p className={`text-xs mt-1 ${selectedPackageId === pkg.id ? "opacity-80" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </p>
                  <p className="mt-2 text-xs font-mono font-bold">
                    From {formatPrice(pkg.basePrice)}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Location */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              02. Region & Location
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLocationId(loc.id)}
                  className={`p-3 rounded-xl text-left transition-all text-xs cursor-pointer ${
                    selectedLocationId === loc.id
                      ? "bg-foreground text-background font-semibold"
                      : "bg-secondary/40 hover:bg-secondary text-foreground"
                  }`}
                >
                  <div className="font-medium">{loc.name}</div>
                  <div className="text-[10px] font-mono opacity-70 mt-1">
                    {loc.fee > 0 ? `+${formatPrice(loc.fee)}` : "Included"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Outfits */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                03. Outfits / Looks
              </label>
              <span className="text-xs font-mono font-bold">
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
              className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-foreground"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>1 Look</span>
              <span>2 Standard</span>
              <span>3 Looks</span>
              <span>4 Looks</span>
              <span>5 Extended</span>
            </div>
          </div>

          {/* 4. Add-ons */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              04. Add-ons (Optional)
            </label>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { key: "rushDelivery" as const, title: "24-48h Rush Delivery", cost: 30000 },
                { key: "extraRetouch" as const, title: "+5 Master Retouches", cost: 15000 },
                { key: "studioRental" as const, title: "Indoor Studio Pass", cost: 35000 },
                { key: "btsReel" as const, title: "4K Behind-The-Scenes Reel", cost: 25000 },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setAddons((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                    addons[item.key]
                      ? "bg-foreground text-background font-semibold"
                      : "bg-secondary/40 hover:bg-secondary text-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span>{item.title}</span>
                    <span className="font-mono">+{formatPrice(item.cost)}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Summary */}
        <div className="lg:col-span-5 p-8 rounded-2xl bg-secondary/30 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Breakdown</span>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-border/30">
                <span className="text-muted-foreground">{currentPackage.name}</span>
                <span>{formatPrice(currentPackage.basePrice)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/30">
                <span className="text-muted-foreground">Location</span>
                <span>{currentLocation.fee > 0 ? formatPrice(currentLocation.fee) : "₦0"}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/30">
                <span className="text-muted-foreground">{outfitCount} Looks</span>
                <span>{extraOutfitCost > 0 ? `+${formatPrice(extraOutfitCost)}` : "Included"}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border/60 flex justify-between items-baseline">
              <span className="font-serif font-bold text-base">Total</span>
              <div className="text-right">
                <p className="text-2xl font-serif font-bold">{formatPrice(totalNGN)}</p>
                <p className="text-[11px] font-mono text-muted-foreground">~${approxUSD} USD</p>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-4">
            <Button
              asChild
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full py-6 font-medium text-xs font-mono uppercase tracking-wider"
            >
              <a href={generateWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book on WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full rounded-full py-5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              <Link href={`/contact?service=${encodeURIComponent(currentPackage.name)}&budget=${encodeURIComponent(formatPrice(totalNGN))}`}>
                <span>Use Booking Form →</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
