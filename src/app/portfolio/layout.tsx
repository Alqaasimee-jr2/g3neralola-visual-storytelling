import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Photography Gallery",
  description: "Explore G3NERALOLA's photography portfolio featuring portraits, lifestyle, street photography, events, and creative work across Nigeria. View professional mobile photography.",
  keywords: ["photography portfolio", "portrait gallery", "lifestyle photos", "Nigerian photography", "Lagos photography", "mobile photography portfolio", "street photography gallery"],
  openGraph: {
    title: "Portfolio - G3NERALOLA Photography Gallery",
    description: "Explore professional portrait, lifestyle, and street photography by G3NERALOLA - Lagos-based mobile photographer.",
    url: "https://g3neralola.com/portfolio",
    images: [{
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20240717_192507_Instagram-1763320468631.jpg?width=1200&height=630&resize=cover",
      width: 1200,
      height: 630,
      alt: "G3NERALOLA Photography Portfolio"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - G3NERALOLA Photography Gallery",
    description: "Explore professional portrait, lifestyle, and street photography by G3NERALOLA.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20240717_192507_Instagram-1763320468631.jpg?width=1200&height=630&resize=cover"]
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
