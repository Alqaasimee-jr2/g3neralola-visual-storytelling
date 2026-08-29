import Link from "next/link";
import { Instagram, Mail, Phone, MessageCircle, MapPin, Sparkles, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </div>
              <span className="text-2xl font-bold font-serif tracking-tight">G3NERALOLA</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed font-serif italic">
              Lagos-based visual storytelling. Raw portraits, street culture, and cinematic life.
            </p>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Accepting Bookings • Lagos & Beyond</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-foreground">Explore</h4>
            <div className="space-y-2.5 text-sm">
              <Link
                href="/portfolio"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Selected Portfolio
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                The Artist & Story
              </Link>
              <Link
                href="/services"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Packages & Pricing
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Book a Shoot
              </Link>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-foreground">Direct Concierge</h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Lagos, Nigeria (Mainland, Island & LASU)</span>
              </div>
              <a
                href="https://wa.me/2348021247749"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                <span>WhatsApp: +234 802 124 7749</span>
              </a>
              <a
                href="mailto:adeolaomogbolahan48@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>adeolaomogbolahan48@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/ad3ola_olamil3kan_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0 text-pink-500" />
                <span>@ad3ola_olamil3kan_</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <p>&copy; {new Date().getFullYear()} G3NERALOLA Visual Storytelling. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Vision Over Gear</span>
            <span>•</span>
            <span>Based in Lagos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}