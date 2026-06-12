import { Scale } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-xs tracking-widest uppercase text-zinc-400 mb-4">About</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-6 leading-tight">
              Experienced Criminal Defence Lawyer
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed mb-4">
              Advocate Pinki Goswami is a seasoned criminal law practitioner based in Jodhpur, Rajasthan, with a strong presence at the Jodhpur District &amp; Sessions Court. She provides strategic legal counsel and vigorous defence representation across all criminal matters.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed mb-8">
              Known for her thorough case preparation and client-first approach, she ensures every client receives fair, dedicated, and effective legal representation — from bail hearings to full trial defence.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {[
                "Bar Council of Rajasthan — Registered Advocate",
                "Jodhpur District & Sessions Court practitioner",
                "Specialisation in Criminal Defence & Bail matters",
                "Available for consultation via WhatsApp & phone",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — card */}
          <div className="bg-black text-white rounded-lg p-8 lg:p-10">
            <Scale className="w-8 h-8 mb-6 text-zinc-400" />
            <blockquote className="text-xl font-light leading-relaxed text-zinc-200 mb-6">
              &ldquo;Justice is not just a right — it&apos;s a responsibility. Every client deserves a voice, and I am here to be that voice.&rdquo;
            </blockquote>
            <div className="border-t border-white/10 pt-6">
              <p className="text-white font-medium text-sm">Adv. Pinki Goswami</p>
              <p className="text-zinc-500 text-xs mt-1">Criminal Lawyer · Jodhpur, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
