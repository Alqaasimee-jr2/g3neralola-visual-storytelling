"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const defaultMessage = encodeURIComponent(
    "Hi G3NERALOLA! I'm interested in booking a photography session with you. Could you share your upcoming availability?"
  );
  const whatsappUrl = `https://wa.me/2348021247749?text=${defaultMessage}`;

  return (
    <motion.aside
      aria-label="Direct WhatsApp Contact"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-background/95 text-foreground text-xs font-medium border border-border/70 shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        Chat on WhatsApp ⚡
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Direct WhatsApp Inquiry"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="sr-only">Contact on WhatsApp</span>
      </a>
    </motion.aside>
  );
}
