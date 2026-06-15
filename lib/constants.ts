export interface PracticeArea {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
  href: string;
  cta: string;
  highlighted: boolean;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const practiceAreas: PracticeArea[] = [
  { icon: "Shield", title: "Criminal Cases", description: "Expert defence in criminal matters including IPC offences, theft, assault, and white-collar crimes" },
  { icon: "Pill", title: "NDPS Cases", description: "Specialized representation in Narcotic Drugs and Psychotropic Substances Act cases" },
  { icon: "Key", title: "Bail Matters", description: "Swift bail applications in Sessions Court and Rajasthan High Court" },
  { icon: "Heart", title: "Divorce Cases", description: "Compassionate handling of divorce proceedings and mutual consent matters" },
  { icon: "Users", title: "Family Disputes", description: "Resolution of family conflicts including maintenance, custody, and domestic violence" },
  { icon: "FileText", title: "Court Marriage", description: "Complete assistance with court marriage registration and legal formalities" },
  { icon: "Gavel", title: "Sessions Court Trials", description: "Full trial representation in Sessions Court for serious criminal offences" },
  { icon: "MessageCircle", title: "Legal Consultation", description: "Online and in-person legal consultation available for all matters" },
];

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Free Initial Consultation", description: "Discuss your case via WhatsApp or in-person. We listen, assess, and provide honest guidance on your legal options." },
  { number: "02", title: "Case Strategy & Documentation", description: "We develop a tailored legal strategy, gather evidence, prepare filings, and keep you informed at every step." },
  { number: "03", title: "Court Representation", description: "Vigorous courtroom advocacy in Sessions Court and Rajasthan High Court with meticulous preparation." },
  { number: "04", title: "Ongoing Support & Updates", description: "Regular case updates, next-hearing reminders, and post-judgment guidance until your matter concludes." },
];

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Cases Handled" },
  { value: 2, suffix: "", label: "Courts" },
];

export const contactItems: ContactItem[] = [
  { icon: "MessageCircle", label: "WhatsApp", value: "+91 70733 18678", subtext: "Chat anytime — fastest response", href: "https://wa.me/917073318678", cta: "Chat Now", highlighted: true },
  { icon: "Phone", label: "Phone", value: "+91 70733 18678", subtext: "Available during court hours", href: "tel:+917073318678", cta: "Call Now", highlighted: false },
  { icon: "MapPin", label: "Office", value: "Foot Planet, Near PNB Bank", subtext: "Madhuban Basni, Jodhpur", href: "https://maps.google.com/?q=Madhuban+Basni+Jodhpur", cta: "Get Directions", highlighted: false },
  { icon: "Instagram", label: "Instagram", value: "@adv_pinki_goswami_jodhpur", subtext: "Legal updates & insights", href: "https://instagram.com/adv_pinki_goswami_jodhpur", cta: "Follow", highlighted: false },
  { icon: "Building", label: "HC Chamber", value: "Chamber No. 13, 3rd Floor", subtext: "New HC Building, Jalamand, Rajasthan High Court, Jodhpur", href: "https://maps.google.com/?q=Rajasthan+High+Court+Jodhpur", cta: "Get Directions", highlighted: false },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Practice", href: "#practice" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
