import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Photography Packages & Pricing 2025/2026 | G3NERALOLA Lagos",
  description:
    "Transparent pricing for professional photography in Lagos: Solo portraits (₦65k), Editorial & Lifestyle stories (₦125k), Convocation milestones (₦85k), and Brand campaigns. Instant WhatsApp booking.",
  alternates: {
    canonical: "https://g3neralola.com/services",
  },
  openGraph: {
    title: "Photography Packages & Pricing | G3NERALOLA Lagos",
    description:
      "Explore transparent session rates for portraits, editorial lookbooks, and campus convocation shoots in Lagos, Nigeria. Includes 48h sneak peeks and custom estimator.",
    url: "https://g3neralola.com/services",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
        width: 1200,
        height: 630,
        alt: "G3NERALOLA Photography Services & Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Pricing & Packages | G3NERALOLA Lagos",
    description:
      "Transparent Nigerian creative photography packages with 48h rush previews and custom pricing calculator.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
    ],
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "G3NERALOLA Photography Services",
    "provider": {
      "@type": "Person",
      "name": "Adeola Olamilekan (G3NERALOLA)",
      "url": "https://g3neralola.com"
    },
    "areaServed": "Lagos, Nigeria",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Solo Signature Portrait",
          "price": "65000",
          "priceCurrency": "NGN",
          "description": "1.5-hour session, 2 outfits, 8 retouched master frames, 48h preview."
        },
        {
          "@type": "Offer",
          "name": "Editorial & Lifestyle Narrative",
          "price": "125000",
          "priceCurrency": "NGN",
          "description": "2.5-hour session, 4 outfits, 18 retouched master frames, moodboard direction."
        },
        {
          "@type": "Offer",
          "name": "Campus & Convocation Milestone",
          "price": "85000",
          "priceCurrency": "NGN",
          "description": "2-hour convocation shoot, gown and native looks, solo and family portraits."
        },
        {
          "@type": "Offer",
          "name": "Brand & Creative Campaign",
          "price": "250000",
          "priceCurrency": "NGN",
          "description": "Full day commercial lookbook production, advertising license, 4K BTS reels."
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClient />
    </>
  );
}