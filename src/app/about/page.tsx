"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera, Award, Users, Heart } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Camera, label: "Projects Completed", value: "200+" },
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Heart, label: "Passion Level", value: "100%" },
  ];

  const values = [
    {
      title: "Raw Authenticity",
      description:
        "Capturing real people in real moments—no artificial poses, just genuine human emotion and truth.",
    },
    {
      title: "Vision Over Gear",
      description:
        "Great photography starts with vision, not expensive equipment. A phone is all I need to create visual poetry.",
    },
    {
      title: "Purpose-Driven",
      description:
        "Fusing imagery with purpose, every frame carries meaning and tells a story worth remembering.",
    },
    {
      title: "Disciplined Craft",
      description:
        "Military discipline meets creative vision—bringing structure, dedication, and precision to every shot.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
                About G3NERALOLA
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 md:mb-6">
                G3NERALOLA is a Lagos-based mobile photographer capturing real 
                people in real moments. He tells raw, emotional stories through 
                portrait and street photography.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg">
                A student of Peace Studies at LASU, he fuses imagery with purpose. 
                Raised with military discipline, his ex-commando roots shape his craft.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-lg overflow-hidden"
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

      {/* Stats Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3 md:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">The Vision</h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg">
              <p>
                With nothing but a phone, G3NERALOLA turns ordinary scenes into 
                visual poetry. From crowded streets to quiet faces, his lens seeks 
                the soul—the unguarded moment, the raw emotion, the truth beneath 
                the surface.
              </p>
              <p>
                He believes great photography starts with vision, not expensive gear. 
                While others chase the latest cameras, he's out there capturing life 
                with what's in his pocket. His work proves that the story matters 
                more than the equipment.
              </p>
              <p>
                Each frame reflects his grit, his eye, and the world as he sees it. 
                Influenced by his military upbringing and ex-commando roots, there's 
                a discipline to his chaos—a structure to his spontaneity. He approaches 
                every shoot with the same intensity: focused, fearless, and fully present.
              </p>
              <p>
                As a Peace Studies student at Lagos State University (LASU), he brings 
                an academic lens to his visual storytelling. His photography isn't just 
                about aesthetics—it's about meaning, connection, and documenting the 
                human experience in Lagos and beyond.
              </p>
              <p>
                From the bustling streets of Lagos to intimate portrait sessions, 
                G3NERALOLA captures moments that matter. His work is a testament to 
                what's possible when passion meets purpose, when discipline meets 
                creativity, and when a photographer truly sees the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4">What Drives Me</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              The principles that guide every shoot and every frame I capture
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-5 sm:p-6 rounded-lg border"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Interested in collaborating or booking a session? I'd love to hear
              from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}