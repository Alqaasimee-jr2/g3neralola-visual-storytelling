import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Book Your Photography Session",
  description: "Contact G3NERALOLA for professional photography services in Nigeria. Book portrait, lifestyle, or event photography sessions. Available via email, phone, WhatsApp, or Instagram. Get a response within 24 hours.",
  keywords: ["book photographer Nigeria", "contact photographer Lagos", "photography booking", "hire photographer Nigeria", "photography inquiry", "WhatsApp photographer Lagos"],
  openGraph: {
    title: "Contact G3NERALOLA - Book Your Photography Session",
    description: "Get in touch to book professional photography services in Lagos, Nigeria. Quick response within 24 hours.",
    url: "https://g3neralola.com/contact",
    images: [{
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
      width: 1200,
      height: 630,
      alt: "Contact G3NERALOLA Photography"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact G3NERALOLA - Book Your Photography Session",
    description: "Get in touch to book professional photography services in Lagos, Nigeria.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain"]
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
