import { MessageCircle, Phone, MapPin, Link, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 70733 18678",
    sub: "Preferred mode of contact",
    href: "https://wa.me/917073318678",
    cta: "Chat now",
    highlight: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 70733 18678",
    sub: "Call for urgent matters",
    href: "tel:+917073318678",
    cta: "Call now",
    highlight: false,
  },
  {
    icon: MapPin,
    label: "Office address",
    value: "1/35, Near PNB Bank",
    sub: "Foot Planet, Madhuban Basni, Jodhpur",
    href: "https://maps.google.com/?q=1/35+near+PNB+Bank+Foot+Planet+Madhuban+Basni+Jodhpur",
    cta: "Get directions",
    highlight: false,
  },
  {
    icon: Link,
    label: "Instagram",
    value: "@adv_pinki_goswami_jodhpur",
    sub: "Follow for legal updates",
    href: "https://www.instagram.com/adv_pinki_goswami_jodhpur",
    cta: "Follow",
    highlight: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs tracking-widest uppercase text-zinc-500 mb-4">Contact</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Reach out directly
            </h2>
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>Mon – Sat, 9am – 7pm</span>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-4 p-6 rounded-lg border transition-all duration-200 ${
                  item.highlight
                    ? "bg-white text-black border-white hover:bg-zinc-100"
                    : "bg-zinc-900 text-white border-zinc-800 hover:border-zinc-600"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 ${
                    item.highlight ? "bg-black" : "bg-zinc-800"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${item.highlight ? "text-white" : "text-zinc-300"}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs uppercase tracking-widest mb-1 ${
                      item.highlight ? "text-zinc-500" : "text-zinc-500"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`font-medium text-sm truncate ${
                      item.highlight ? "text-black" : "text-white"
                    }`}
                  >
                    {item.value}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      item.highlight ? "text-zinc-500" : "text-zinc-500"
                    }`}
                  >
                    {item.sub}
                  </p>
                </div>
                <span
                  className={`text-xs font-medium mt-1 group-hover:underline flex-shrink-0 ${
                    item.highlight ? "text-black" : "text-zinc-400"
                  }`}
                >
                  {item.cta} →
                </span>
              </a>
            );
          })}
        </div>

        {/* Map embed placeholder */}
        <div className="rounded-lg overflow-hidden border border-zinc-800">
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=Madhuban+Basni+Jodhpur+Rajasthan&output=embed"
            width="100%"
            height="300"
            className="w-full grayscale opacity-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
