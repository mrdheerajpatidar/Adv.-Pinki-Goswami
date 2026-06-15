"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  MapPin,
  AtSign,
  Building,
  type LucideIcon,
} from "lucide-react";
import { contactItems } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Phone,
  MapPin,
  Instagram: AtSign,
  Building,
};

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs tracking-widest uppercase text-[#d4af37] mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-[var(--font-display)] font-semibold text-white leading-tight">
            Get in Touch
          </h2>
          <p className="text-[#a3a3a3] text-sm mt-4 max-w-lg">
            Reach out directly — WhatsApp is the fastest way to connect.
          </p>
        </div>

        {/* Contact cards with stagger animation */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {contactItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isHighlighted = item.highlighted;

            return (
              <motion.a
                key={item.label}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col gap-4 p-6 rounded-lg border transition-all duration-300 ${
                  isHighlighted
                    ? "bg-[#d4af37]/10 border-[#d4af37]/50 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] sm:col-span-2 lg:col-span-1"
                    : "bg-[#1a1a1a] border-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-md flex items-center justify-center ${
                    isHighlighted
                      ? "bg-[#d4af37]/20"
                      : "bg-white/5"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-5 h-5 ${
                        isHighlighted ? "text-[#d4af37]" : "text-[#a3a3a3]"
                      }`}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs uppercase tracking-widest mb-1 ${
                      isHighlighted ? "text-[#d4af37]" : "text-[#a3a3a3]"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="font-medium text-white text-sm truncate">
                    {item.value}
                  </p>
                  <p className="text-[#a3a3a3] text-xs mt-1">
                    {item.subtext}
                  </p>
                </div>
                <span
                  className={`text-xs font-medium group-hover:underline ${
                    isHighlighted
                      ? "text-[#d4af37]"
                      : "text-[#a3a3a3] group-hover:text-white"
                  }`}
                >
                  {item.cta} →
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Google Maps embed with grayscale filter */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden border border-white/10"
        >
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=Madhuban+Basni+Jodhpur+Rajasthan&output=embed"
            width="100%"
            height="300"
            className="w-full grayscale opacity-60"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
