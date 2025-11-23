"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredImages = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20240717_192507_Instagram-1763320468631.jpg?width=8000&height=8000&resize=contain",
      alt: "Portrait with pink hijab and sunglasses",
      category: "Portraits",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1753443625903-1763320770761.jpg?width=8000&height=8000&resize=contain",
      alt: "Portrait with white hijab and ayoba cap",
      category: "Portraits",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320848766-1763320972260.jpeg?width=8000&height=8000&resize=contain",
      alt: "Low angle street photography with blue sky",
      category: "Lifestyle",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Photo_1749457997626-1763320478848.jpg?width=8000&height=8000&resize=contain",
      alt: "Graduation ceremony in colorful gown",
      category: "Events",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1086659322-1763320473931.jpg?width=8000&height=8000&resize=contain",
      alt: "Basketball game in action",
      category: "Campus Life",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ad3ola_olamil3kan_1763320865776-1763320935247.jpeg?width=8000&height=8000&resize=contain",
      alt: "Black and white artistic shot of wet strawberry",
      category: "Creative",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&h=1080&fit=crop"
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
              G3NERALOLA
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 max-w-2xl mx-auto px-4">
              Capturing real people in real moments — Portraits • Lifestyle • Street Photography
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
              >
                <Link href="/portfolio">
                  View Portfolio <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                <Link href="/contact">Book a Session</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 md:h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Visual poetry shot on mobile — from crowded streets to quiet faces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {featuredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/portfolio">
                View Full Portfolio <Camera className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Vision Over Gear
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 md:mb-6">
                G3NERALOLA is a Lagos-based mobile photographer capturing real people 
                in real moments. He tells raw, emotional stories through portrait and 
                street photography.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 md:mb-6">
                A student of Peace Studies at LASU, he fuses imagery with purpose. 
                Raised with military discipline, his ex-commando roots shape his craft.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 md:mb-8">
                With nothing but a phone, he turns ordinary scenes into visual poetry. 
                He believes great photography starts with vision, not expensive gear.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/about">Learn More About Me</Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a
                    href="https://instagram.com/ad3ola_olamil3kan_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=8000&height=8000&resize=contain"
                alt="G3NERALOLA - Mobile Photographer"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-primary-foreground rounded-xl md:rounded-2xl p-8 sm:p-10 md:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Ready to Capture Your Story?
            </h2>
            <p className="text-base sm:text-lg mb-6 md:mb-8 max-w-2xl mx-auto opacity-90 px-4">
              Let's work together to create authentic visual stories that reflect 
              real moments and genuine emotion.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}