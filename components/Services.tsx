const steps = [
  {
    num: "01",
    title: "Free initial consultation",
    desc: "Discuss your matter over WhatsApp or phone. We assess your situation and explain your legal options clearly.",
  },
  {
    num: "02",
    title: "Case strategy & documentation",
    desc: "We review all facts, build a defence strategy, and prepare all necessary documentation and court filings.",
  },
  {
    num: "03",
    title: "Court representation",
    desc: "Rigorous representation at hearings, bail applications, and trials with your best interests always at the centre.",
  },
  {
    num: "04",
    title: "Ongoing support & updates",
    desc: "Regular case status updates via WhatsApp. You are never left guessing about your matter.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs tracking-widest uppercase text-zinc-400 mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight max-w-lg">
            From your first call to courtroom defence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-200 rounded-lg overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`p-8 lg:p-10 ${
                i % 2 === 0 ? "border-r-0 md:border-r border-zinc-200" : ""
              } ${i < 2 ? "border-b border-zinc-200" : ""}`}
            >
              <p className="text-4xl font-thin text-zinc-200 mb-4">{step.num}</p>
              <h3 className="font-semibold text-black text-base mb-2">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
