"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href="https://wa.me/917073318678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 text-white rounded-full shadow-lg hover:shadow-xl px-4 py-3 sm:py-3.5"
      style={{ background: "linear-gradient(135deg, #25D366, #d4af37)" }}
      animate={prefersReducedMotion ? undefined : { scale: [1, 1.05, 1] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm font-medium hidden sm:inline">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
