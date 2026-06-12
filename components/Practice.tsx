import { Shield, Gavel, FileText, Users, AlertTriangle, BookOpen } from "lucide-react";

const areas = [
  {
    icon: Shield,
    title: "Criminal Defence",
    desc: "Bail, anticipatory bail, trial defence & acquittal proceedings across all criminal courts.",
  },
  {
    icon: Gavel,
    title: "Sessions Court Trials",
    desc: "Serious criminal trials, sessions cases, and appeals at Jodhpur High Court.",
  },
  {
    icon: FileText,
    title: "FIR & Complaints",
    desc: "FIR quashing petitions, complaint drafting & legal notice preparation.",
  },
  {
    icon: Users,
    title: "Family Criminal Matters",
    desc: "Domestic violence, dowry harassment cases & protection order applications.",
  },
  {
    icon: AlertTriangle,
    title: "Anticipatory Bail",
    desc: "Pre-arrest bail applications for clients facing imminent arrest threats.",
  },
  {
    icon: BookOpen,
    title: "Legal Consultation",
    desc: "Expert legal advice on criminal matters, rights, and court procedures.",
  },
];

export default function Practice() {
  return (
    <section id="practice" className="bg-zinc-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs tracking-widest uppercase text-zinc-400 mb-4">Areas of Practice</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight">
              Criminal Law Services
            </h2>
            <p className="text-zinc-500 text-sm max-w-xs">
              Comprehensive criminal legal representation tailored to your situation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="bg-white border border-zinc-200 rounded-lg p-6 hover:border-black hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-md bg-zinc-100 flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-200">
                  <Icon className="w-5 h-5 text-zinc-700 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-semibold text-black text-sm mb-2">{area.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
