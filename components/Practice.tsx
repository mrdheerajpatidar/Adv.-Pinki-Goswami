"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Shield,
  Pill,
  Key,
  Heart,
  Users,
  FileText,
  Gavel,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { practiceAreas } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Pill,
  Key,
  Heart,
  Users,
  FileText,
  Gavel,
  MessageCircle,
};

export default function Practice() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="practice" className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs tracking-widest uppercase text-[#d4af37] mb-4">
            Areas of Practice
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-display)] font-semibold text-white leading-tight">
            Comprehensive Legal Services
          </h2>
          <p className="text-[#a3a3a3] text-sm mt-4 max-w-lg mx-auto">
            Expert criminal defence and family law representation tailored to your situation.
          </p>
        </div>

        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {practiceAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.title}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                custom={i}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { scale: 1.02, borderColor: "rgba(212, 175, 55, 0.5)" }
                }
                className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              >
                <div className="w-10 h-10 rounded-md bg-[#d4af37]/10 flex items-center justify-center mb-4">
                  {Icon && (
                    <Icon className="w-5 h-5 text-[#d4af37]" />
                  )}
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">
                  {area.title}
                </h3>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
