# Design Document: Premium UI Enhancement

## Architecture Overview

This design transforms the existing Advocate Pinki Goswami portfolio from a basic black-and-white site into a premium dark-themed website with gold accents, Framer Motion animations, and glassmorphism effects. The architecture preserves the existing Next.js 16 App Router single-page structure while introducing a shared design system, animation library, and performance optimizations.

**Tech Stack:**
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- @fontsource/playfair-display + @fontsource/inter (typography)
- react-intersection-observer (scroll triggers)
- react-countup (animated stats)
- clsx + tailwind-merge (class utilities)

---

## File & Folder Structure

```
├── app/
│   ├── globals.css              # CSS variables, font imports, theme tokens
│   ├── layout.tsx               # Root layout with fonts, metadata, JSON-LD
│   ├── page.tsx                 # Homepage with dynamic imports for below-fold
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx               # Glassmorphism navbar (client component)
│   ├── Hero.tsx                 # Full-viewport hero with counters (client)
│   ├── About.tsx                # Split-layout about section (client)
│   ├── Practice.tsx             # 8-card practice areas grid (client)
│   ├── Process.tsx              # Timeline replacing Services.tsx (client)
│   ├── Contact.tsx              # Premium contact section (client)
│   ├── Footer.tsx               # Premium footer (server component)
│   └── FloatingWhatsApp.tsx     # Pulse-animated FAB (client)
├── lib/
│   ├── animations.ts            # Shared Framer Motion variants
│   ├── utils.ts                 # cn() utility (clsx + tailwind-merge)
│   └── constants.ts             # All client data: practice areas, steps, contacts, stats
├── public/
│   └── pinki-adv.jpeg           # Profile photo (existing)
├── package.json
└── tsconfig.json
```

### Key Structural Decisions

1. **Services.tsx → Process.tsx**: The existing `Services.tsx` is replaced by `Process.tsx` with a vertical timeline layout. The nav link changes from "Services" to "Process".
2. **lib/ directory**: New shared modules for animations, utilities, and data constants.
3. **All components are client components** (except Footer) since they use Framer Motion hooks or browser APIs.

---

## Component Architecture

### Component Hierarchy

```
RootLayout (server)
├── Navbar (client) — fixed, glassmorphism, scroll-aware
└── Page (server)
    ├── Hero (client) — full viewport, counters, parallax
    ├── About (client, dynamic import) — split layout, photo + text
    ├── Practice (client, dynamic import) — 8-card grid
    ├── Process (client, dynamic import) — vertical timeline
    ├── Contact (client, dynamic import) — contact cards + map
    ├── Footer (server) — static, no JS needed
    └── FloatingWhatsApp (client) — fixed FAB with pulse
```

### Component Details

#### Navbar (`components/Navbar.tsx`)
- **Type:** Client component (`"use client"`)
- **State:** `scrolled: boolean` (scroll > 50px), `menuOpen: boolean`
- **Behavior:** Transparent on top, glassmorphism on scroll. Mobile menu animated with `AnimatePresence` + `motion.div`.
- **Styling:** `backdrop-blur-xl bg-black/60 border-b border-white/10` when scrolled.

```typescript
// Scroll detection hook
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 50);
  window.addEventListener("scroll", handler, { passive: true });
  return () => window.removeEventListener("scroll", handler);
}, []);
```

#### Hero (`components/Hero.tsx`)
- **Type:** Client component
- **Dependencies:** `framer-motion`, `react-countup`, `react-intersection-observer`
- **Structure:** Full-viewport (min-h-screen), staggered text reveal, animated stat counters, parallax background layer.
- **Stats:** `{ value: 4, suffix: "+", label: "Years Experience" }`, `{ value: 500, suffix: "+", label: "Cases Handled" }`, `{ value: 2, suffix: "", label: "Courts" }`
- **Bar Council text:** "R/4361/2025 — Bar Council of Rajasthan"

```typescript
// Stats counter with intersection observer
const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
// CountUp only starts when inView is true
```

#### About (`components/About.tsx`)
- **Type:** Client component
- **Layout:** 2-column grid on desktop (lg:grid-cols-2). Left: photo with gold frame. Right: text + quote card + address cards.
- **Photo:** Next.js `Image` component with `src="/pinki-adv.jpeg"`, decorative gold border via `ring-2 ring-gold`.
- **Quote Card:** Dark bg card with gold quotation marks (pseudo-element or SVG).
- **Address Cards:** Two cards — Office (Foot Planet, Near PNB Bank, Madhuban Basni, Jodhpur) and HC Chamber (Chamber No. 13, 3rd Floor, New HC Building, Jalamand, Rajasthan High Court, Jodhpur).
- **Animation:** `fadeInLeft` on photo column, `fadeInRight` on text column.

#### Practice (`components/Practice.tsx`)
- **Type:** Client component
- **Data:** 8 practice areas from `lib/constants.ts`
- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Animation:** Stagger container on scroll, each card fades in with incremental delay.
- **Hover:** Gold border glow + slight scale using `whileHover`.

```typescript
// Stagger animation pattern
<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {areas.map((area, i) => (
    <motion.div key={area.title} variants={fadeInUp} custom={i}>
      {/* card content */}
    </motion.div>
  ))}
</motion.div>
```

#### Process (`components/Process.tsx`)
- **Type:** Client component
- **Data:** 4 steps from `lib/constants.ts`
- **Layout:** Vertical timeline with connecting line. Each step: circle marker + content card on alternating sides (or single side on mobile).
- **Timeline Line:** Animated height grows as user scrolls through section using `useScroll` + `useTransform` from Framer Motion.
- **Step Animation:** Each step uses `useInView` to trigger fade-in when scrolled into view.

```typescript
const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
```

#### Contact (`components/Contact.tsx`)
- **Type:** Client component
- **Data:** Contact items from `lib/constants.ts` (WhatsApp highlighted, phone, office, Instagram, HC Chamber).
- **Animation:** Stagger container for contact cards.
- **Map:** Google Maps iframe with grayscale + reduced opacity to match dark theme.
- **WhatsApp prominence:** Gold accent background/border on primary card.

#### Footer (`components/Footer.tsx`)
- **Type:** Server component (no client interactivity needed)
- **Content:** Brand name (gold), tagline, Bar Council R/4361/2025, navigation links (About, Practice, Process, Contact), social links (WhatsApp, Phone, Instagram), copyright + credit.

#### FloatingWhatsApp (`components/FloatingWhatsApp.tsx`)
- **Type:** Client component
- **Position:** `fixed bottom-6 right-6 z-50`
- **Animation:** Continuous pulse via Framer Motion `animate` prop with `scale: [1, 1.05, 1]` infinite loop.
- **Styling:** Gold/green gradient background, WhatsApp icon + text label (hidden below sm breakpoint).
- **Link:** `https://wa.me/917073318678`, `target="_blank"`

---

## Design System Implementation

### CSS Variables (`app/globals.css`)

```css
@import "tailwindcss";

:root {
  --color-background: #0a0a0a;
  --color-background-elevated: #111111;
  --color-background-card: #1a1a1a;
  --color-gold: #d4af37;
  --color-gold-light: #e5c76b;
  --color-gold-dark: #b8960c;
  --color-text-primary: #ffffff;
  --color-text-secondary: #e5e5e5;
  --color-text-muted: #a3a3a3;
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-gold: rgba(212, 175, 55, 0.3);
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-body);
}

/* Reduce motion support */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Typography Setup (`app/layout.tsx`)

```typescript
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
```

Heading elements use `font-display` (Playfair Display). Body text uses `font-body` (Inter). Applied via Tailwind's `font-[]` arbitrary values or CSS custom properties.

### Animation Variants (`lib/animations.ts`)

```typescript
import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};
```

All variants respect `prefers-reduced-motion` via Framer Motion's built-in `useReducedMotion` hook, which is checked at the component level to conditionally disable animations.

### Utility Function (`lib/utils.ts`)

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

---

## Data Flow

All client-facing data is defined as typed constants in `lib/constants.ts`. No external API calls. No database. The page is statically generated.

### Data Constants (`lib/constants.ts`)

```typescript
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
  { icon: "Shield", title: "Criminal Cases", description: "..." },
  { icon: "Pill", title: "NDPS Cases", description: "..." },
  { icon: "Key", title: "Bail Matters", description: "..." },
  { icon: "Heart", title: "Divorce Cases", description: "..." },
  { icon: "Users", title: "Family Disputes", description: "..." },
  { icon: "FileText", title: "Court Marriage", description: "..." },
  { icon: "Gavel", title: "Sessions Court Trials", description: "..." },
  { icon: "MessageCircle", title: "Legal Consultation", description: "..." },
];

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Free Initial Consultation", description: "..." },
  { number: "02", title: "Case Strategy & Documentation", description: "..." },
  { number: "03", title: "Court Representation", description: "..." },
  { number: "04", title: "Ongoing Support & Updates", description: "..." },
];

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Cases Handled" },
  { value: 2, suffix: "", label: "Courts" },
];

export const contactItems: ContactItem[] = [/* ... */];
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Practice", href: "#practice" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
```

### Data Flow Diagram

```
lib/constants.ts (typed data)
       │
       ├── components/Hero.tsx ← stats, navLinks
       ├── components/Practice.tsx ← practiceAreas
       ├── components/Process.tsx ← processSteps
       ├── components/Contact.tsx ← contactItems
       ├── components/Navbar.tsx ← navLinks
       └── components/Footer.tsx ← navLinks
```

---

## Performance Patterns

### 1. Dynamic Imports (Below-the-Fold Lazy Loading)

```typescript
// app/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Practice = dynamic(() => import("@/components/Practice"));
const Process = dynamic(() => import("@/components/Process"));
const Contact = dynamic(() => import("@/components/Contact"));
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Practice />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
```

Hero is statically imported (above-the-fold critical path). All other sections use `dynamic()` for code splitting.

### 2. Image Optimization

```typescript
// Hero/About use Next.js Image component
import Image from "next/image";

// In About section:
<Image
  src="/pinki-adv.jpeg"
  alt="Advocate Pinki Goswami"
  width={500}
  height={600}
  className="rounded-lg object-cover"
  loading="lazy"
/>
```

No `priority` flag on the about photo since it's below the fold. Hero uses background styling (no Image component needed for the parallax layer).

### 3. Font Loading Strategy

Using `@fontsource` packages for self-hosted fonts eliminates third-party network requests. Fonts are imported at the layout level and included in the CSS build via Tailwind.

### 4. Reduce Motion Support

```typescript
// Pattern used in all animated components
import { useReducedMotion } from "framer-motion";

export default function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInUp}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true }}
    >
      {/* content */}
    </motion.div>
  );
}
```

Additionally, the CSS `@media (prefers-reduced-motion: reduce)` rule disables all CSS animations as a fallback.

### 5. Static Generation

The homepage is fully statically generated (no `"use server"` data fetching, no dynamic runtime). The `next build` output will be a static HTML page with JS bundles for client interactivity.

---

## SEO Implementation

### Metadata Export (`app/layout.tsx`)

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adv. Pinki Goswami | Criminal Lawyer – Jodhpur, Rajasthan",
  description: "Expert criminal defence lawyer in Jodhpur. Bail applications, NDPS cases, Sessions Court trials, Rajasthan High Court. Criminal lawyer Jodhpur, advocate Pinki Goswami. Call or WhatsApp: +91 70733 18678",
  keywords: "criminal lawyer Jodhpur, advocate Pinki Goswami, bail application, NDPS cases, Rajasthan High Court, criminal defence Rajasthan",
  metadataBase: new URL("https://advpinkigoswami.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adv. Pinki Goswami | Criminal Lawyer – Jodhpur",
    description: "Expert criminal defence lawyer in Jodhpur, Rajasthan. Bail, NDPS, Sessions Court trials.",
    type: "website",
    url: "https://advpinkigoswami.com",
    images: [{ url: "/pinki-adv.jpeg", width: 1200, height: 630, alt: "Advocate Pinki Goswami" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adv. Pinki Goswami | Criminal Lawyer – Jodhpur",
    description: "Expert criminal defence lawyer in Jodhpur, Rajasthan.",
    images: ["/pinki-adv.jpeg"],
  },
};
```

### JSON-LD Structured Data (`app/layout.tsx`)

Rendered as a `<script type="application/ld+json">` tag in the body:

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Advocate Pinki Goswami",
  description: "Criminal Defence Lawyer in Jodhpur, Rajasthan",
  telephone: "+91-7073318678",
  url: "https://advpinkigoswami.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Foot Planet, Near PNB Bank, Madhuban Basni",
    addressLocality: "Jodhpur",
    addressRegion: "Rajasthan",
    postalCode: "342005",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "State",
    name: "Rajasthan",
  },
  knowsAbout: ["Criminal Law", "Bail Applications", "NDPS Cases", "Sessions Court Trials"],
};
```

---

## Error Handling

1. **Font Load Failure:** System fonts are defined as fallbacks in CSS (`font-family: var(--font-body), system-ui, sans-serif`). If @fontsource files fail to load, text remains readable.
2. **Animation Failure:** All content renders without animations (progressive enhancement). `initial` states use visible defaults so content is never hidden if JS fails.
3. **Image Load Failure:** Next.js Image component handles broken images gracefully. Alt text provides context.
4. **Google Maps Iframe Failure:** Map container has a dark background fallback. Address text is always visible outside the iframe.
5. **WhatsApp Link:** Falls back to default browser handling if WhatsApp is not installed.

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Class Name Merge Conflict Resolution

*For any* set of Tailwind CSS class strings passed to `cn()`, including conflicting utilities (e.g., `"p-4"` and `"p-6"`), the output SHALL be a single string where later conflicting classes override earlier ones, with no duplicate utility classes.

**Validates: Requirements 1.5**

### Property 2: Animation Variants Respect Reduced Motion

*For any* animation variant defined in `lib/animations.ts`, when a component detects `prefers-reduced-motion: reduce`, the component SHALL render content without transform or opacity transitions (content is immediately visible in its final state).

**Validates: Requirements 11.5**

### Property 3: No Light Backgrounds in Any Section

*For any* section component rendered on the page (Navbar, Hero, About, Practice, Process, Contact, Footer), the root element SHALL NOT apply a light/white background class (such as `bg-white`, `bg-zinc-50`, `bg-gray-50`). All sections use dark backgrounds exclusively.

**Validates: Requirements 12.1, 12.4**

### Property 4: Practice Areas Data Integrity

*For any* rendering of the Practice section, exactly 8 practice area cards SHALL be displayed, each with a non-empty title and description string.

**Validates: Requirements 5.1**

