"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Building } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-[#d4af37] mb-4">
            About
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-display)] font-semibold text-white leading-tight">
            Experienced Criminal Defence Lawyer
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Photo with gold frame */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInLeft}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative gold corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#d4af37] rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#d4af37] rounded-br-lg" />

              <div className="relative ring-2 ring-[#d4af37] ring-offset-4 ring-offset-[#0a0a0a] rounded-lg overflow-hidden">
                <Image
                  src="/pinki-adv.jpeg"
                  alt="Advocate Pinki Goswami"
                  width={500}
                  height={600}
                  className="rounded-lg object-cover w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — Text + Quote + Address Cards */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInRight}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Bio Text */}
            <div>
              <p className="text-[#e5e5e5] text-base leading-relaxed mb-4">
                Advocate Pinki Goswami is a seasoned criminal law practitioner
                based in Jodhpur, Rajasthan, with a strong presence at the
                Jodhpur District &amp; Sessions Court. She provides strategic
                legal counsel and vigorous defence representation across all
                criminal matters.
              </p>
              <p className="text-[#a3a3a3] text-base leading-relaxed">
                Known for her thorough case preparation and client-first
                approach, she ensures every client receives fair, dedicated, and
                effective legal representation — from bail hearings to full trial
                defence.
              </p>
            </div>

            {/* Quote Card */}
            <div className="relative bg-[#1a1a1a] border border-white/10 rounded-lg p-6 lg:p-8">
              {/* Gold decorative quotation marks */}
              <span className="absolute top-4 left-4 text-5xl font-serif leading-none text-[#d4af37] opacity-60 select-none">
                &ldquo;
              </span>
              <blockquote className="relative pt-6 pl-2 text-lg font-light leading-relaxed text-[#e5e5e5] italic">
                Justice is not just a right — it&apos;s a responsibility. Every
                client deserves a voice, and I am here to be that voice.
              </blockquote>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white font-medium text-sm">
                  Adv. Pinki Goswami
                </p>
                <p className="text-[#a3a3a3] text-xs mt-1">
                  Criminal Lawyer · Jodhpur, Rajasthan
                </p>
              </div>
            </div>

            {/* Address Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Office Address Card */}
              <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-5 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-sm font-medium text-[#d4af37]">
                    Office
                  </span>
                </div>
                <p className="text-sm text-[#e5e5e5] leading-relaxed">
                  Foot Planet, Near PNB Bank, Madhuban Basni, Jodhpur
                </p>
              </div>

              {/* HC Chamber Card */}
              <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-5 hover:border-[#d4af37]/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Building className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-sm font-medium text-[#d4af37]">
                    HC Chamber
                  </span>
                </div>
                <p className="text-sm text-[#e5e5e5] leading-relaxed">
                  Chamber No. 13, 3rd Floor, New HC Building, Jalamand,
                  Rajasthan High Court, Jodhpur
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
