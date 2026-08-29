import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Adeola Olamilekan (G3NERALOLA) | The Visual Storyteller",
  description:
    "Discover the story of Adeola Olamilekan (G3NERALOLA). Fusing military precision, LASU Peace Studies perspective, and raw street photography in Lagos, Nigeria.",
  alternates: {
    canonical: "https://g3neralola.com/about",
  },
  openGraph: {
    title: "About Adeola Olamilekan (G3NERALOLA) | Lagos Visual Storyteller",
    description:
      "From the parade ground to the visual canvas: Ex-commando discipline meets LASU Peace Studies depth. Authentic Nigerian portraits and street narratives.",
    url: "https://g3neralola.com/about",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
        width: 1200,
        height: 630,
        alt: "Adeola Olamilekan - G3NERALOLA Visual Storytelling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About G3NERALOLA | Nigerian Visual Storyteller",
    description:
      "Ex-commando discipline meets visual poetry. Discover Adeola Olamilekan's photography journey in Lagos.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
    ],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Adeola Olamilekan",
      "alternateName": "G3NERALOLA",
      "description": "Lagos-based photographer and visual storyteller.",
      "jobTitle": "Visual Storyteller & Photographer",
      "url": "https://g3neralola.com/about",
      "sameAs": [
        "https://instagram.com/ad3ola_olamil3kan_",
        "https://wa.me/2348021247749"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}