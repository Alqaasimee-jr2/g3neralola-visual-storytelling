import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL('https://g3neralola.com'),
  title: {
    default: "G3NERALOLA - Nigerian Photographer | Portraits & Lifestyle Photography",
    template: "%s | G3NERALOLA Photography"
  },
  description: "G3NERALOLA is a Lagos-based mobile photographer specializing in portraits, lifestyle, street photography, and campus life. Book professional photography sessions in Nigeria.",
  keywords: ["Nigerian photographer", "Lagos photographer", "portrait photography", "lifestyle photography", "street photography", "mobile photography", "campus photography", "G3NERALOLA", "ad3ola_olamil3kan_", "photography Nigeria", "professional photographer Lagos"],
  authors: [{ name: "G3NERALOLA", url: "https://instagram.com/ad3ola_olamil3kan_" }],
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
    siteName: "G3NERALOLA Photography",
    title: "G3NERALOLA - Nigerian Photographer | Portraits & Lifestyle",
    description: "Lagos-based mobile photographer capturing real people in real moments. Professional portrait, lifestyle, and street photography services across Nigeria.",
    images: [{
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain",
      width: 1200,
      height: 630,
      alt: "G3NERALOLA - Professional Photographer"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "G3NERALOLA - Nigerian Photographer | Portraits & Lifestyle",
    description: "Lagos-based mobile photographer capturing real people in real moments. Book professional photography sessions.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=1200&height=630&resize=contain"],
    creator: "@ad3ola_olamil3kan_"
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
    "description": "Professional photography services specializing in portraits, lifestyle, and street photography in Lagos, Nigeria",
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
      "name": "G3NERALOLA",
      "alternateName": "ad3ola_olamil3kan_",
      "jobTitle": "Professional Photographer",
      "url": "https://instagram.com/ad3ola_olamil3kan_",
      "sameAs": [
        "https://instagram.com/ad3ola_olamil3kan_",
        "https://wa.me/2348021247749"
      ]
    },
    "sameAs": [
      "https://instagram.com/ad3ola_olamil3kan_"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Portrait Photography",
            "description": "Professional portrait sessions that capture personality and essence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lifestyle Photography",
            "description": "Natural, authentic photography in everyday moments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Photography",
            "description": "Comprehensive coverage of events and campus activities"
          }
        }
      ]
    }
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
      <body className="antialiased">
        <ThemeProvider defaultTheme="system" storageKey="g3neralola-theme">
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}