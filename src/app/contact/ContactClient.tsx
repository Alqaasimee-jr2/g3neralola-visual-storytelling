"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MessageCircle, 
  Send, 
  MapPin, 
  Instagram,
  ArrowRight
} from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-contact-email";
import { toast } from "sonner";

function ContactFormInner() {
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
        message: prev.message || `Inspired by: "${prefilledLook}".`,
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
      toast.success("Inquiry received! Adeola will respond within 24 hours.");
      
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
          : "Failed to send. Click 'WhatsApp Concierge' for instant chat."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi G3NERALOLA! I'd like to book a photography session:
• Name: ${formData.name || "Client"}
• Service: ${formData.service}
• Date: ${formData.shootDate || "Flexible"}
• Location: ${formData.location}
${formData.budget ? `• Budget: ${formData.budget}\n` : ""}${formData.look ? `• Look: ${formData.look}\n` : ""}
Details: ${formData.message || "Checking calendar availability!"}`;

    return `https://wa.me/2348021247749?text=${encodeURIComponent(text)}`;
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background text-foreground selection:bg-white selection:text-black">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-8 pb-12">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Direct Inquiries</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight">
            Book a Shoot
          </h1>
          <p className="text-base sm:text-lg font-serif italic text-muted-foreground max-w-md pt-1">
            Available in Lagos & worldwide. Fill out the form or chat directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Borderless Form & Direct Channels Grid */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Name *
                  </label>
                  <Input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    disabled={isSubmitting}
                    className="rounded-xl bg-secondary/40 border-0 h-12 text-sm focus-visible:ring-1 focus-visible:ring-foreground"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    disabled={isSubmitting}
                    className="rounded-xl bg-secondary/40 border-0 h-12 text-sm focus-visible:ring-1 focus-visible:ring-foreground"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    WhatsApp / Phone
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    disabled={isSubmitting}
                    className="rounded-xl bg-secondary/40 border-0 h-12 text-sm focus-visible:ring-1 focus-visible:ring-foreground"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Package *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full h-12 px-3.5 rounded-xl bg-secondary/40 border-0 text-sm text-foreground focus:outline-hidden focus:ring-1 focus:ring-foreground cursor-pointer"
                  >
                    <option value="Solo Signature Portrait (₦65,000)">Solo Portrait (₦65,000)</option>
                    <option value="Editorial & Lifestyle Story (₦125,000)">Editorial Story (₦125,000)</option>
                    <option value="Convocation & Campus Milestone (₦85,000)">Convocation Milestone (₦85,000)</option>
                    <option value="Brand & Commercial Campaign (₦250,000+)">Brand Campaign (₦250,000+)</option>
                    <option value="Custom Creative Collaboration">Custom Collaboration</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Target Date
                  </label>
                  <Input
                    name="shootDate"
                    type="date"
                    value={formData.shootDate}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="rounded-xl bg-secondary/40 border-0 h-12 text-sm focus-visible:ring-1 focus-visible:ring-foreground"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full h-12 px-3.5 rounded-xl bg-secondary/40 border-0 text-sm text-foreground focus:outline-hidden focus:ring-1 focus:ring-foreground cursor-pointer"
                  >
                    <option value="Lagos Mainland (Ikeja, Surulere, Yaba)">Lagos Mainland</option>
                    <option value="Lagos Island (Lekki, VI, Ikoyi)">Lagos Island</option>
                    <option value="LASU Ojo / Campus">LASU Campus</option>
                    <option value="Private Indoor Studio">Private Studio</option>
                    <option value="Outside Lagos / Travel">Outside Lagos / Travel</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Shoot Vision & Notes *
                </label>
                <Textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Number of outfits, vibes, aesthetic inspiration..."
                  rows={4}
                  className="rounded-xl bg-secondary/40 border-0 text-sm focus-visible:ring-1 focus-visible:ring-foreground resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 rounded-full py-6 bg-foreground text-background hover:opacity-90 text-xs font-mono uppercase tracking-wider"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>

                <Button
                  asChild
                  type="button"
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full py-6 text-xs font-mono uppercase tracking-wider"
                >
                  <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Instant WhatsApp</span>
                  </a>
                </Button>
              </div>
            </form>
          </div>

          {/* Right Direct Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Direct Channels</span>
              <h3 className="text-2xl font-serif font-bold">Fast Response Channels</h3>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                <a href="https://wa.me/2348021247749" target="_blank" rel="noopener noreferrer" className="text-lg font-serif underline underline-offset-4">
                  +234 802 124 7749
                </a>
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Email</p>
                <a href="mailto:adeolaomogbolahan48@gmail.com" className="text-base font-serif underline underline-offset-4">
                  adeolaomogbolahan48@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Instagram</p>
                <a href="https://www.instagram.com/g3ner4l0la/" target="_blank" rel="noopener noreferrer" className="text-base font-serif underline underline-offset-4">
                  @g3ner4l0la
                </a>
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Base</p>
                <p className="text-base font-serif">Lagos, Nigeria • Travel Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactClient() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-sm font-mono">Loading...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
