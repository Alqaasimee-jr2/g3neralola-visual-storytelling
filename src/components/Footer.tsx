import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">G3NERALOLA</h3>
            <p className="text-muted-foreground text-sm">
              Nigerian photographer capturing portraits, lifestyle, and candid
              moments with expressive visual storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/portfolio"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/ad3ola_olamil3kan_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@ad3ola_olamil3kan_</span>
              </a>
              <a
                href="mailto:contact@g3neralola.com"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@g3neralola.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} G3NERALOLA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
