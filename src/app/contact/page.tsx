import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Book a Photography Session in Lagos | G3NERALOLA",
  description:
    "Schedule your photography session with Adeola Olamilekan (G3NERALOLA). Inquire about portraits, convocation milestones, and brand lookbooks across Lagos with instant WhatsApp concierge.",
  alternates: {
    canonical: "https://g3neralola.com/contact",
  },
  openGraph: {
    title: "Book a Shoot | G3NERALOLA Visual Storytelling Lagos",
    description:
      "Direct booking concierge for Adeola Olamilekan. Inquire about shoot availability in Lagos Mainland, Island, LASU, and nationwide.",
    url: "https://g3neralola.com/contact",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
        width: 1200,
        height: 630,
        alt: "Book a Session with G3NERALOLA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Photography Session | G3NERALOLA Lagos",
    description:
      "Schedule your portrait, convocation, or brand session. Fast 24-hour response and WhatsApp concierge.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
    ],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Book a Photography Session with G3NERALOLA",
    "description": "Direct contact and booking portal for G3NERALOLA visual storytelling sessions in Lagos, Nigeria.",
    "url": "https://g3neralola.com/contact",
    "mainEntity": {
      "@type": "Person",
      "name": "Adeola Olamilekan (G3NERALOLA)",
      "telephone": "+2348021247749",
      "email": "adeolaomogbolahan48@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}