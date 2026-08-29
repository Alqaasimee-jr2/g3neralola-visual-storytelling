import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "G3NERALOLA — Nigerian Photographer & Visual Storyteller | Lagos",
  description:
    "Adeola Olamilekan (G3NERALOLA) is a premier Lagos-based visual storyteller. Capturing raw portraits, Nigerian street lifestyle, convocation milestones, and commercial brand campaigns.",
  alternates: {
    canonical: "https://g3neralola.com",
  },
  openGraph: {
    title: "G3NERALOLA — Visual Storyteller & Nigerian Photographer",
    description:
      "Where Military Precision Meets Visual Poetry. Authentic portraits, campus convocation milestones, and raw Lagos street culture.",
    url: "https://g3neralola.com",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
        width: 1200,
        height: 630,
        alt: "G3NERALOLA Visual Storytelling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G3NERALOLA — Visual Storyteller Lagos",
    description:
      "Authentic portraits, campus milestones, and street culture in Lagos, Nigeria.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
    ],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "G3NERALOLA Visual Storytelling",
    "url": "https://g3neralola.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://g3neralola.com/portfolio?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}