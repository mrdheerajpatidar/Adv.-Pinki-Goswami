import { MapPin, MessageCircle, Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Diagonal texture pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Vertical rule accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 text-zinc-400 text-xs tracking-widest uppercase px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
            Criminal Law Specialist · Bar Council of Rajasthan
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-4 leading-none">
            Advocate
          </h1>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-none">
            Pinki Goswami
          </h2>

          {/* Location */}
          <div className="flex items-center gap-2 text-zinc-400 text-sm mb-8">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>Madhuban Basni, Jodhpur, Rajasthan</span>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
            Dedicated criminal defence lawyer providing expert legal counsel at Jodhpur District &amp; Sessions Court. Trusted by clients across Rajasthan for bail, trials, and criminal matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/917073318678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-7 py-3.5 rounded hover:bg-zinc-100 transition-colors duration-200 text-sm"
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
            <a
              href="https://maps.google.com/?q=1/35+near+PNB+Bank+Foot+Planet+Madhuban+Basni+Jodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-zinc-400 font-medium px-7 py-3.5 rounded hover:bg-white/5 transition-colors duration-200 text-sm"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Cases Handled" },
              { value: "Jodhpur", label: "High Court" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-semibold text-white">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
