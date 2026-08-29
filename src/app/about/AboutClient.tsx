"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Award, 
  Users, 
  Heart, 
  ShieldCheck, 
  BookOpen, 
  Sparkles, 
  Compass, 
  Instagram, 
  MessageCircle,
  Calendar
} from "lucide-react";

export default function AboutClient() {
  const stats = [
    { icon: Camera, label: "Projects Completed", value: "200+" },
    { icon: Users, label: "Clients Empowered", value: "180+" },
    { icon: Award, label: "Years Behind The Lens", value: "5+" },
    { icon: Heart, label: "Client Satisfaction", value: "100%" },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Ex-Commando Discipline",
      description:
        "Raised in military discipline, I approach every shoot with military punctuality, unwavering focus, and tactical attention to framing and detail.",
    },
    {
      icon: BookOpen,
      title: "Peace Studies Perspective",
      description:
        "Studying Peace and Conflict Resolution at LASU informs my empathy. I see photography as a bridge of human connection, dignity, and cultural pride.",
    },
    {
      icon: Sparkles,
      title: "Vision Over Gear",
      description:
        "Expensive cameras don't create emotion — human vision does. I capture high-end, gallery-worthy visual poetry with minimal friction and maximum authenticity.",
    },
    {
      icon: Compass,
      title: "Lagos Street Culture",
      description:
        "Deeply immersed in the raw pulse of Lagos — from Mainland grit to Island luxury and campus dynamism. Every frame carries genuine Nigerian vitality.",
    },
  ];

  const faqs = [
    {
      q: "What is your photography background?",
      a: "I began documenting the raw energy of Lagos streets, campus movements at LASU, and personal portraits. Over the last 5+ years, I developed a signature high-contrast, editorial style that blends street realism with cinematic portraiture.",
    },
    {
      q: "How do you work with people who feel camera-shy?",
      a: "80% of my clients are not models. My secret is relaxed direction: conversation, music, continuous motion, and clear guidance. You will never be left wondering what to do with your hands or face.",
    },
    {
      q: "Where do you shoot in Lagos?",
      a: "Anywhere stories live. Popular spots include curated aesthetic outdoor parks, Lagos Island architectural streets, university grounds, private studio spaces (Ikeja, Lekki, Surulere), and client homes.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero / Introduction */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-b border-border/60">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                <Camera className="w-3.5 h-3.5" />
                <span>The Storyteller</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight leading-tight">
                Adeola Olamilekan <br />
                <span className="italic font-normal text-muted-foreground text-3xl sm:text-4xl md:text-5xl">
                  Known to the world as G3NERALOLA
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I am a Lagos-based visual storyteller capturing the raw, beautiful, 
                and unapologetic essence of human beings. I don't manufacture plastic perfection; 
                I document truth, character, and legacy.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Combining the rigor of my military upbringing with the empathy of my 
                Peace Studies degree at Lagos State University (LASU), my lens is both 
                a disciplined instrument and a compassionate observer.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="rounded-full px-6">
                  <Link href="/contact">Book a Session With Me</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <a
                    href="https://instagram.com/ad3ola_olamil3kan_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Follow @ad3ola_olamil3kan_</span>
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763320227191.png?width=8000&height=8000&resize=contain"
                  alt="Adeola Olamilekan - G3NERALOLA"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-semibold font-serif">"Vision starts in the mind, not the camera bag."</p>
                  <p className="text-xs text-gray-300 mt-1">— G3NERALOLA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border/50 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif">{stat.value}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Story: The Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Behind The Name</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight">
              The Journey of G3NERALOLA
            </h2>
          </motion.div>

          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Born and shaped within a disciplined military environment, my childhood was defined 
              by structure, punctuality, and unwavering commitment. When I first picked up a lens, 
              those principles didn't fade—they evolved into an obsessive eye for composition, 
              geometry, and human timing.
            </p>
            <p>
              While studying Peace and Conflict Resolution at Lagos State University (LASU), 
              I realized that photography is far more than snapshots. It is a tool of human dignity. 
              In a city as intense and multifaceted as Lagos, everyone has a story worth telling with honor.
            </p>
            <p>
              Under the moniker <strong className="text-foreground font-semibold">G3NERALOLA</strong>, 
              I set out to prove that you don't need millions in heavy camera gear to make people feel 
              iconic. With sharp instincts, natural lighting mastery, and an innate rapport with people, 
              I turn ordinary campus walkways, roadside alleys, and studio spaces into high-fashion cinema.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/40 border-y border-border/60">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight">
              What Sets The Craft Apart
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              The four guiding philosophies that shape every frame I deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-serif text-foreground">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">Behind the Scenes Questions</h2>
            <p className="text-muted-foreground text-sm sm:text-base">A few details about my working style.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2">
                <h4 className="text-base font-bold text-foreground font-serif">{faq.q}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">
            Let's Make History in a Frame.
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-base max-w-xl mx-auto">
            Ready to schedule your portrait, convocation milestone, or creative editorial shoot?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8">
              <Link href="/contact">Book Your Date</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-8">
              <Link href="/portfolio">Explore The Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
