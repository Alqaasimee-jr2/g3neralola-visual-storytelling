"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Camera, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services & Pricing" },
    { href: "/contact", label: "Contact & Booking" },
  ];

  // Dynamic styling: home page has dark hero background at the top, other pages have light/dark theme backgrounds
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent text-white"
          : "glass-nav border-b border-border/40 text-foreground shadow-xs"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isTransparent
                ? "bg-white/15 text-white backdrop-blur-md group-hover:bg-white/25"
                : "bg-primary text-primary-foreground group-hover:opacity-90"
            }`}>
              <Camera className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight font-serif transition-colors ${
                isTransparent ? "text-white" : "text-foreground"
              }`}>
                G3NERALOLA
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-mono ${
                isTransparent ? "text-white/70" : "text-muted-foreground"
              }`}>
                Visual Storyteller
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isTransparent
                      ? isActive
                        ? "bg-white/20 text-white font-semibold"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : isActive
                      ? "bg-secondary text-foreground font-semibold shadow-2xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                        isTransparent ? "bg-white" : "bg-primary"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Book CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://instagram.com/ad3ola_olamil3kan_"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                isTransparent
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <ThemeToggle />

            <Button
              asChild
              size="sm"
              className={`rounded-full px-4 font-medium transition-transform hover:scale-105 active:scale-95 ${
                isTransparent
                  ? "bg-white text-black hover:bg-gray-100 shadow-md"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs"
              }`}
            >
              <Link href="/contact" className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Shoot</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-secondary"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-nav border-b border-border/60 bg-background/98 text-foreground"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-secondary text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
                <Button
                  asChild
                  className="w-full justify-center rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Book a Session</span>
                  </Link>
                </Button>
                <a
                  href="https://instagram.com/ad3ola_olamil3kan_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground py-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow @ad3ola_olamil3kan_</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}