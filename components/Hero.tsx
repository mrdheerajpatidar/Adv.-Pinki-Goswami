"use client";

import { MessageCircle, Phone, ChevronDown } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { stats } from "@/lib/constants";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax effect for background layer
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Stats counter intersection observer
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Parallax layered background for depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: prefersReducedMotion ? 0 : bgY }}
      >
        {/* Radial gradient layer */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, rgba(212,175,55,0.15) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(212,175,55,0.08) 0%, transparent 50%)",
          }}
        />
        {/* Diagonal texture pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </motion.div>

      {/* Gold accent vertical line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, #d4af37, transparent)" }}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
        variants={prefersReducedMotion ? undefined : staggerContainer}
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate={prefersReducedMotion ? undefined : "show"}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="inline-flex items-center gap-2 border border-white/20 text-zinc-400 text-xs tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "#d4af37" }}
            />
            Criminal Law Specialist · Jodhpur
          </motion.div>

          {/* Heading with staggered reveal */}
          <motion.h1
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-4 leading-none text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Advocate
          </motion.h1>
          <motion.h2
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-none"
            style={{ fontFamily: "var(--font-display)", color: "#d4af37" }}
          >
            Pinki Goswami
          </motion.h2>

          {/* Decorative gold accent line */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="w-20 h-0.5 mb-8"
            style={{ background: "linear-gradient(to right, #d4af37, transparent)" }}
          />

          {/* Description */}
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10"
          >
            Dedicated criminal defence lawyer providing expert legal counsel at
            Jodhpur District &amp; Sessions Court and Rajasthan High Court.
            Trusted by clients across Rajasthan for bail, trials, and criminal
            matters.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/917073318678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded transition-colors duration-200 text-sm text-black"
              style={{ background: "#d4af37" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e5c76b")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#d4af37")
              }
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+917073318678"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 rounded hover:bg-white/10 transition-colors duration-200 text-sm"
            >
              <Phone className="w-4 h-4" />
              +91 70733 18678
            </a>
          </motion.div>

          {/* Stats row with animated counters */}
          <motion.div
            ref={statsRef}
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-white">
                  {statsInView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>
                      0{stat.suffix}
                    </span>
                  )}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
