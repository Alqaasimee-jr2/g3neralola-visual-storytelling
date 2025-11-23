import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Professional Photography Services",
  description: "Professional photography services by G3NERALOLA in Lagos, Nigeria. Portrait photography from ₦15,000, lifestyle shoots from ₦25,000, event coverage from ₦40,000. Book your session today.",
  keywords: ["photography services Nigeria", "portrait photography Lagos", "lifestyle photography services", "event photography Nigeria", "photography pricing Lagos", "book photographer Nigeria", "campus photography services"],
  openGraph: {
    title: "Photography Services - G3NERALOLA",
    description: "Professional portrait, lifestyle, and event photography services in Lagos. Competitive pricing starting from ₦15,000.",
    url: "https://g3neralola.com/services",
    images: [{
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=1200&height=630&resize=cover",
      width: 1200,
      height: 630,
      alt: "G3NERALOLA Photography Services"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Services - G3NERALOLA",
    description: "Professional portrait, lifestyle, and event photography services in Lagos.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=1200&height=630&resize=cover"]
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
