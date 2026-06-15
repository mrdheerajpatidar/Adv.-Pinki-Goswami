"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { processSteps } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

function ProcessStep({
  step,
  index,
  prefersReducedMotion,
}: {
  step: (typeof processSteps)[number];
  index: number;
  prefersReducedMotion: boolean | null;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="relative flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full border-2 border-[#d4af37] bg-[#0a0a0a] flex items-center justify-center z-10 shrink-0 transition-all duration-500 ${
            inView ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
          style={prefersReducedMotion ? { scale: 1, opacity: 1 } : undefined}
        >
          <span className="text-[#d4af37] font-semibold text-sm font-[family-name:var(--font-display)]">
            {step.number}
          </span>
        </div>
        {/* Vertical connecting segment between dots (hidden on last item) */}
        {index < processSteps.length - 1 && (
          <div className="w-px flex-1 bg-[#d4af37]/20 mt-2" />
        )}
      </div>

      {/* Step content */}
      <motion.div
        variants={prefersReducedMotion ? undefined : fadeInUp}
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate={prefersReducedMotion ? undefined : inView ? "show" : "hidden"}
        className="pt-1 pb-4"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-[family-name:var(--font-display)]">
          {step.title}
        </h3>
        <p className="text-[#a3a3a3] text-sm sm:text-base leading-relaxed max-w-md">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-[#0a0a0a] py-20 lg:py-28"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="text-xs tracking-widest uppercase text-[#d4af37] mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight font-[family-name:var(--font-display)]">
            Our Process
          </h2>
          <p className="text-[#a3a3a3] text-sm sm:text-base mt-4 max-w-lg mx-auto">
            From your first consultation to case resolution, we guide you through every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated connecting line */}
          <div className="absolute left-[19px] sm:left-[19px] top-0 bottom-0 w-px bg-[#d4af37]/10">
            <motion.div
              className="w-full bg-[#d4af37] origin-top"
              style={{
                height: prefersReducedMotion ? "100%" : lineHeight,
              }}
            />
          </div>

          {/* Steps */}
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
