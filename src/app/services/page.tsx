"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Users, Briefcase, Sparkles, Clock, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Camera,
      title: "Portrait Photography",
      description:
        "Professional portrait sessions that capture your personality and essence.",
      features: [
        "Individual or group portraits",
        "Indoor and outdoor locations",
        "Professional editing & retouching",
        "High-resolution digital files",
        "1-2 hour session",
      ],
      pricing: "From ₦15,000",
    },
    {
      icon: Users,
      title: "Lifestyle & Candid Shoots",
      description:
        "Natural, authentic photography that tells your story in everyday moments.",
      features: [
        "Relaxed, candid photography",
        "Multiple outfit changes",
        "Location scouting included",
        "Color-graded final images",
        "2-3 hour session",
      ],
      pricing: "From ₦25,000",
    },
    {
      icon: Briefcase,
      title: "Events & Campus Life",
      description:
        "Comprehensive coverage of your special events and campus activities.",
      features: [
        "Full event coverage",
        "Candid and posed shots",
        "Photo highlights within 48 hours",
        "Online gallery for sharing",
        "Half or full-day coverage",
      ],
      pricing: "From ₦40,000",
    },
    {
      icon: Sparkles,
      title: "Creative & Gaming Content",
      description:
        "Unique creative photography for content creators and gamers.",
      features: [
        "Conceptual photo shoots",
        "Gaming setup photography",
        "Content creation collaboration",
        "Social media ready formats",
        "Flexible session duration",
      ],
      pricing: "Custom Quote",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We discuss your vision, ideas, and requirements for the shoot.",
    },
    {
      step: "02",
      title: "Planning & Preparation",
      description:
        "I'll handle location scouting, scheduling, and creative direction.",
    },
    {
      step: "03",
      title: "The Photoshoot",
      description:
        "Relaxed and professional session where we bring your vision to life.",
    },
    {
      step: "04",
      title: "Editing & Delivery",
      description:
        "Professional editing and delivery of your high-quality images.",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to receive my photos?",
      answer:
        "Edited photos are typically delivered within 7-14 days, depending on the type of shoot. Event highlights are available within 48 hours.",
    },
    {
      question: "Can I choose the location for the shoot?",
      answer:
        "Absolutely! You can suggest locations, or I can recommend spots that work well for the type of photography you're looking for.",
    },
    {
      question: "What should I wear for my photoshoot?",
      answer:
        "I'll provide styling guidance during our consultation. Generally, wear what makes you feel confident and comfortable!",
    },
    {
      question: "Do you offer packages for multiple sessions?",
      answer:
        "Yes! I offer package deals for clients booking multiple sessions or long-term collaborations. Contact me for custom pricing.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">Services</h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Professional photography services tailored to capture your unique
              story
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3 sm:gap-4">
                    <div className="text-xl sm:text-2xl font-bold">{service.pricing}</div>
                    <Button asChild className="w-full">
                      <Link href="/contact">Book This Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4">How It Works</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              A simple, straightforward process from concept to final delivery
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary/20 mb-3 sm:mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg px-4">
              Got questions? Here are some answers
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-5 sm:p-6 rounded-lg border"
              >
                <h3 className="text-base sm:text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{faq.answer}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss your photography needs and create something amazing
              together
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Book Your Session</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}