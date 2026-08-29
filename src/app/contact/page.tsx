"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  Instagram, 
  MessageCircle, 
  Send, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Clock,
  ShieldCheck
} from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-contact-email";
import { toast } from "sonner";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";
  const prefilledBudget = searchParams.get("budget") || "";
  const prefilledLook = searchParams.get("look") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: prefilledService || "Solo Signature Portrait (₦65,000)",
    shootDate: "",
    location: "Lagos Mainland (Ikeja, Surulere, Yaba)",
    budget: prefilledBudget || "",
    look: prefilledLook || "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
    if (prefilledBudget) {
      setFormData((prev) => ({ ...prev, budget: prefilledBudget }));
    }
    if (prefilledLook) {
      setFormData((prev) => ({
        ...prev,
        look: prefilledLook,
        message: prev.message || `Hi Adeola! I'm specifically inspired by your portfolio photo: "${prefilledLook}".`,
      }));
    }
  }, [prefilledService, prefilledBudget, prefilledLook]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      toast.success("Inquiry received! Adeola will get back to you within 24 hours.");
      
      // Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Solo Signature Portrait (₦65,000)",
        shootDate: "",
        location: "Lagos Mainland (Ikeja, Surulere, Yaba)",
        budget: "",
        look: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please click 'Chat on WhatsApp' for instant response."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi G3NERALOLA! I'd like to book a photography session with you:
• Name: ${formData.name || "Client"}
• Service: ${formData.service}
• Target Date: ${formData.shootDate || "Flexible"}
• Location: ${formData.location}
${formData.budget ? `• Budget: ${formData.budget}\n` : ""}${formData.look ? `• Inspired by: ${formData.look}\n` : ""}
Details: ${formData.message || "I'd like to check your availability!"}`;

    return `https://wa.me/2348021247749?text=${encodeURIComponent(text)}`;
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Direct WhatsApp",
      subtitle: "Instant booking response",
      value: "+234 802 124 7749",
      link: "https://wa.me/2348021247749",
      badge: "Fastest ⚡",
    },
    {
      icon: Mail,
      title: "Official Email",
      subtitle: "For brand proposals & invoices",
      value: "adeolaomogbolahan48@gmail.com",
      link: "mailto:adeolaomogbolahan48@gmail.com",
    },
    {
      icon: Instagram,
      title: "Instagram DM",
      subtitle: "@ad3ola_olamil3kan_",
      value: "View Recent Stories",
      link: "https://instagram.com/ad3ola_olamil3kan_",
    },
    {
      icon: MapPin,
      title: "Primary Base",
      subtitle: "Lagos Mainland, Island & LASU",
      value: "Open to Travel Nationwide",
      link: "https://wa.me/2348021247749",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-b border-border/60">
        <div className="container mx-auto text-center max-w-4xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Let's Create Together</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight">
              Book Your Session
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto pt-2">
              Ready to capture authentic portraits, campus milestones, or commercial visuals? Submit your details below or chat instantly on WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Form (8 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              <Card className="rounded-3xl border-border/80 shadow-lg bg-card">
                <CardHeader className="p-6 sm:p-8 border-b border-border/50">
                  <CardTitle className="text-2xl font-bold font-serif">
                    Session Booking Form
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the shoot details below and Adeola will confirm date availability and moodboard directions.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Your Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Toluwani Adeleke"
                          disabled={isSubmitting}
                          className="rounded-xl py-5"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="toluwani@example.com"
                          disabled={isSubmitting}
                          className="rounded-xl py-5"
                        />
                      </div>
                    </div>

                    {/* Phone & Service Package */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          WhatsApp / Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 802 XXX XXXX"
                          disabled={isSubmitting}
                          className="rounded-xl py-5"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Service Package *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full h-[46px] px-3.5 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-ring"
                        >
                          <option value="Solo Signature Portrait (₦65,000)">
                            Solo Signature Portrait (₦65,000)
                          </option>
                          <option value="Editorial & Lifestyle Story (₦125,000)">
                            Editorial & Lifestyle Story (₦125,000) - Most Popular
                          </option>
                          <option value="Convocation & Campus Milestone (₦85,000)">
                            Convocation & Campus Milestone (₦85,000)
                          </option>
                          <option value="Brand & Commercial Campaign (₦250,000+)">
                            Brand & Commercial Campaign (₦250,000+)
                          </option>
                          <option value="Custom Creative Collaboration">
                            Custom Creative Collaboration
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Date & Location */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="shootDate" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Target Shoot Date
                        </label>
                        <Input
                          id="shootDate"
                          name="shootDate"
                          type="date"
                          value={formData.shootDate}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="rounded-xl py-5"
                        />
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Preferred Location
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full h-[46px] px-3.5 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-ring"
                        >
                          <option value="Lagos Mainland (Ikeja, Surulere, Yaba)">
                            Lagos Mainland (Ikeja, Surulere, Yaba)
                          </option>
                          <option value="Lagos Island (Lekki, VI, Ikoyi)">
                            Lagos Island (Lekki, VI, Ikoyi)
                          </option>
                          <option value="LASU Ojo / University Campus">
                            LASU Ojo / University Campus
                          </option>
                          <option value="Private Indoor Studio (Lagos)">
                            Private Indoor Studio (Lagos)
                          </option>
                          <option value="Outside Lagos / Interstate Travel">
                            Outside Lagos / Interstate Travel
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message Details */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                        Vision, Outfit Ideas, & Specific Requests *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about what you have in mind: number of outfits, mood/vibes, inspiration references, or event specifics..."
                        rows={5}
                        className="rounded-2xl resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Submit Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 rounded-xl py-6 text-sm font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            <span>Send Email Booking Request</span>
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>

                      <Button
                        asChild
                        type="button"
                        size="lg"
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl py-6 text-sm font-semibold"
                      >
                        <a
                          href={generateWhatsAppMessage()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Send via WhatsApp ⚡</span>
                        </a>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Contact Cards & Information (4 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="p-6 sm:p-7 rounded-3xl bg-secondary/70 border border-border/80 space-y-4">
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The G3NERALOLA Guarantee</span>
                </div>
                <h4 className="text-xl font-bold font-serif">Fast, Authentic, & Disciplined.</h4>
                <ul className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>48-Hour Sneak Peek:</strong> Quick proof highlights delivered so you can celebrate without delays.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Effortless Direction:</strong> No awkwardness. You will be actively coached on posing, posture, and expression.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-3">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/70 shadow-xs hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground flex items-center gap-2">
                          <span>{method.title}</span>
                          {method.badge && (
                            <span className="px-2 py-0.2 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono">
                              {method.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{method.subtitle}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-32 text-center">
        <p className="text-muted-foreground text-sm">Loading booking concierge...</p>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}