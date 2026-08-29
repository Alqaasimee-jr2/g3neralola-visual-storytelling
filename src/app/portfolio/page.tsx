import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Visual Archives & Portfolio | Portraits, Lifestyle & Campus | G3NERALOLA",
  description:
    "Explore 18+ curated photographic works across Lagos: editorial portraits, Nigerian street lifestyle, convocation milestones, and fine art macro photography by Adeola Olamilekan.",
  alternates: {
    canonical: "https://g3neralola.com/portfolio",
  },
  openGraph: {
    title: "Portfolio & Visual Archives | G3NERALOLA Lagos Photographer",
    description:
      "Curated photographic works: High-contrast editorial portraits, Lagos street subcultures, LASU convocation celebrations, and fine art by Adeola Olamilekan.",
    url: "https://g3neralola.com/portfolio",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20240717_192507_Instagram-1763320468631.jpg?width=1200&height=630&resize=contain",
        width: 1200,
        height: 630,
        alt: "G3NERALOLA Photography Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Portfolio | G3NERALOLA Lagos",
    description:
      "Explore editorial portraits, Nigerian street culture, and graduation milestone archives.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20240717_192507_Instagram-1763320468631.jpg?width=1200&height=630&resize=contain",
    ],
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "G3NERALOLA Visual Storytelling Portfolio",
    "description": "Curated collection of portraits, street photography, and convocation milestones across Nigeria.",
    "url": "https://g3neralola.com/portfolio",
    "creator": {
      "@type": "Person",
      "name": "Adeola Olamilekan (G3NERALOLA)"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioClient />
    </>
  );
}