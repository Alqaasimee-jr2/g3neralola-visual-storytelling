import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL('https://g3neralola.com'),
  title: {
    default: "G3NERALOLA - Visual Storyteller & Nigerian Photographer",
    template: "%s | G3NERALOLA Visual Storytelling"
  },
  description: "Adeola Olamilekan (G3NERALOLA) is a Lagos-based visual storyteller specializing in authentic portraiture, lifestyle narratives, campus milestones, and expressive street photography.",
  keywords: ["Nigerian photographer", "Lagos photographer", "portrait photography Lagos", "lifestyle photography Nigeria", "street photography Lagos", "LASU photographer", "G3NERALOLA", "g3ner4l0la", "creative director Lagos", "editorial photographer Nigeria"],
  authors: [{ name: "G3NERALOLA", url: "https://www.instagram.com/g3ner4l0la/" }],
  creator: "G3NERALOLA",
  publisher: "G3NERALOLA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://g3neralola.com",
    siteName: "G3NERALOLA Visual Storytelling",
    title: "G3NERALOLA - Visual Storyteller & Nigerian Photographer",
    description: "Lagos-based visual storyteller capturing real human emotion, cinematic light, and unfiltered Nigerian narratives. Book portrait, lifestyle, and brand shoots.",
    images: [{
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
      width: 1200,
      height: 630,
      alt: "G3NERALOLA - Visual Storyteller"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "G3NERALOLA - Visual Storyteller & Nigerian Photographer",
    description: "Lagos-based visual storyteller capturing raw emotion and cinematic reality. Book your session.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain"],
    creator: "@g3ner4l0la"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "NSZqFZyeAB6qerB9XfLWlUuLs_U-CwS1GTABrLQ3RWM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://g3neralola.com",
    "name": "G3NERALOLA Photography",
    "description": "Professional photography and visual storytelling services in Lagos, Nigeria",
    "url": "https://g3neralola.com",
    "logo": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png",
    "image": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png",
    "priceRange": "₦₦",
    "telephone": "+234-802-124-7749",
    "email": "adeolaomogbolahan48@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.5244",
      "longitude": "3.3792"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "founder": {
      "@type": "Person",
      "name": "Adeola Olamilekan (G3NERALOLA)",
      "alternateName": "g3ner4l0la",
      "jobTitle": "Visual Storyteller & Photographer",
      "url": "https://www.instagram.com/g3ner4l0la/",
      "sameAs": [
        "https://www.instagram.com/g3ner4l0la/",
        "https://wa.me/2348021247749"
      ]
    },
    "sameAs": [
      "https://www.instagram.com/g3ner4l0la/"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://g3neralola.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider defaultTheme="dark" storageKey="g3neralola-theme">
          <ErrorReporter />
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <WhatsAppFloatingButton />
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}