import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Nigerian Mobile Photographer",
  description: "Meet G3NERALOLA, a Lagos-based mobile photographer and Peace Studies student at LASU. Capturing real people in real moments with vision over gear. Learn about his story and photography philosophy.",
  keywords: ["about photographer", "Nigerian photographer bio", "Lagos photographer story", "mobile photographer Nigeria", "G3NERALOLA biography", "photography philosophy", "LASU photographer"],
  openGraph: {
    title: "About G3NERALOLA - Nigerian Mobile Photographer",
    description: "Lagos-based mobile photographer capturing real people in real moments. Vision over gear, purpose-driven photography.",
    url: "https://g3neralola.com/about",
    images: [{
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
      width: 1200,
      height: 630,
      alt: "G3NERALOLA - Professional Photographer"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About G3NERALOLA - Nigerian Mobile Photographer",
    description: "Lagos-based mobile photographer capturing real people in real moments.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain"]
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
