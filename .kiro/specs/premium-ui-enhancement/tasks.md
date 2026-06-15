# Implementation Plan: Premium UI Enhancement

## Overview

Transform the Advocate Pinki Goswami portfolio from a basic black-and-white design into a premium dark-themed website with gold (#d4af37) accents, Framer Motion animations, glassmorphism effects, and premium typography. Implementation follows a foundation-first approach: install packages → design system setup → component enhancements (in render order) → page wiring → SEO → final build verification.

## Tasks

- [x] 1. Install dependencies and set up design system foundation
  - [x] 1.1 Install new npm packages
    - Run: `npm install framer-motion @fontsource/playfair-display @fontsource/inter react-intersection-observer react-countup clsx tailwind-merge`
    - _Requirements: 1.1, 1.2, 1.3, 1.5_

  - [x] 1.2 Create `lib/utils.ts` with the `cn()` utility function
    - Implement `cn()` using `clsx` + `tailwind-merge` for conditional/merged Tailwind class names
    - _Requirements: 1.5_

  - [x] 1.3 Create `lib/animations.ts` with shared Framer Motion variants
    - Define `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`, and `staggerContainer` variants
    - All variants must use `easeOut` timing and appropriate durations per design spec
    - _Requirements: 1.3_

  - [x] 1.4 Create `lib/constants.ts` with all typed data constants
    - Define interfaces: `PracticeArea`, `ProcessStep`, `ContactItem`, `Stat`
    - Export `practiceAreas` (8 items), `processSteps` (4 items), `stats` (3 items), `contactItems`, `navLinks`
    - _Requirements: 3.3, 5.1, 6.1, 7.1, 7.2_

  - [x] 1.5 Update `app/globals.css` with dark theme CSS variables and font setup
    - Replace existing `:root` with dark theme tokens: `--color-background`, `--color-gold`, `--color-text-primary`, etc.
    - Add `--font-display` and `--font-body` custom properties
    - Add `@media (prefers-reduced-motion: reduce)` rule to disable CSS animations
    - Set body background to `var(--color-background)` and font to `var(--font-body)`
    - _Requirements: 1.1, 1.2, 11.5, 12.1, 12.5_

- [x] 2. Checkpoint - Verify foundation setup
  - Ensure all packages installed successfully, lib files have no TypeScript errors, and globals.css compiles. Ask the user if questions arise.

- [x] 3. Enhance Navbar component with glassmorphism
  - [x] 3.1 Rewrite `components/Navbar.tsx` as a premium glassmorphism navbar
    - Add `"use client"` directive
    - Implement scroll detection (>50px) to toggle glassmorphism: `backdrop-blur-xl bg-black/60 border-b border-white/10`
    - Display brand name with gold accent color
    - Animate mobile menu open/close with Framer Motion `AnimatePresence` + `motion.div`
    - Highlight WhatsApp CTA button with gold background/border
    - Import nav links from `lib/constants.ts`
    - Use `cn()` from `lib/utils.ts` for conditional classes
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 12.1, 12.2_

- [x] 4. Enhance Hero section with animations and counters
  - [x] 4.1 Rewrite `components/Hero.tsx` as full-viewport premium hero
    - Add `"use client"` directive
    - Set section to `min-h-screen` with dark background
    - Implement staggered heading text reveal using `fadeInUp` variants
    - Add parallax/layered background effect for depth
    - Display gold accent on name and decorative elements
    - Add primary WhatsApp CTA button and secondary phone call button
    - Display "R/4361/2025 — Bar Council of Rajasthan" text
    - Integrate `react-countup` with `react-intersection-observer` for stats: 4+ Years, 500+ Cases, 2 Courts
    - Import stats from `lib/constants.ts`
    - Use `useReducedMotion` to conditionally disable animations
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 11.5, 12.1_

- [x] 5. Enhance About section with split layout
  - [x] 5.1 Rewrite `components/About.tsx` as split-layout premium section
    - Add `"use client"` directive
    - Implement 2-column grid (`lg:grid-cols-2`): photo left, text right on desktop
    - Display profile photo (`/pinki-adv.jpeg`) with gold border/decorative frame using Next.js `Image` component with lazy loading
    - Add quote card with dark background and gold decorative quotation marks
    - Add two address cards: Office (Foot Planet, Near PNB Bank, Madhuban Basni, Jodhpur) and HC Chamber (Chamber No. 13, 3rd Floor, New HC Building, Jalamand, Rajasthan High Court, Jodhpur)
    - Animate photo with `fadeInLeft` and text with `fadeInRight` on scroll
    - Dark background throughout
    - Use `useReducedMotion` for accessibility
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 11.3, 11.5, 12.1_

- [x] 6. Enhance Practice section with animated card grid
  - [x] 6.1 Rewrite `components/Practice.tsx` as premium practice areas grid
    - Add `"use client"` directive
    - Display exactly 8 practice area cards from `lib/constants.ts`
    - Responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
    - Stagger animation on scroll using `staggerContainer` + `fadeInUp` variants
    - Gold border glow + subtle scale on hover via `whileHover`
    - Dark card backgrounds with gold icons/decorative elements
    - Dark section background
    - Use `useReducedMotion` for accessibility
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 11.5, 12.1, 12.2_

  - [x] 6.2 Write property test for Practice Areas data integrity
    - **Property 4: Practice Areas Data Integrity**
    - Verify exactly 8 cards render, each with non-empty title and description
    - **Validates: Requirements 5.1**

- [x] 7. Create Process timeline component (replaces Services.tsx)
  - [x] 7.1 Create `components/Process.tsx` as a vertical timeline component
    - Add `"use client"` directive
    - Render 4 process steps from `lib/constants.ts`: Free Initial Consultation, Case Strategy & Documentation, Court Representation, Ongoing Support & Updates
    - Vertical timeline layout with connecting line between steps
    - Animate connecting line growing downward on scroll using `useScroll` + `useTransform`
    - Each step fades in on viewport entry using `useInView`
    - Gold accent for step numbers, timeline dots, connecting line
    - Dark background throughout
    - Use `useReducedMotion` for accessibility
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 11.5, 12.1, 12.2_

- [x] 8. Checkpoint - Verify component enhancements (Navbar through Process)
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Enhance Contact section
  - [x] 9.1 Rewrite `components/Contact.tsx` as premium contact section
    - Add `"use client"` directive
    - Display WhatsApp as primary/most prominent contact with gold accent emphasis
    - Show phone, office address, Instagram (@adv_pinki_goswami_jodhpur), HC Chamber as secondary options
    - Embed Google Maps iframe with grayscale filter to match dark theme
    - Stagger animation on contact cards using `staggerContainer`
    - Dark background throughout
    - Import contact data from `lib/constants.ts`
    - Use `useReducedMotion` for accessibility
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 11.5, 12.1, 12.2_

- [x] 10. Enhance FloatingWhatsApp button
  - [x] 10.1 Rewrite `components/FloatingWhatsApp.tsx` as premium floating action button
    - Add `"use client"` directive
    - Fixed position `bottom-6 right-6 z-50`
    - Continuous pulse animation via Framer Motion `animate` with `scale: [1, 1.05, 1]` infinite loop
    - Gold/green gradient background
    - WhatsApp icon + text label (text hidden below `sm` breakpoint)
    - Link to `https://wa.me/917073318678` with `target="_blank"`
    - Use `useReducedMotion` to disable pulse when user prefers reduced motion
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 11.5, 12.2_

- [x] 11. Enhance Footer with premium branding
  - [x] 11.1 Rewrite `components/Footer.tsx` as premium dark footer
    - Server component (no `"use client"` needed)
    - Display advocate name with gold accent, tagline, Bar Council R/4361/2025
    - Quick navigation links: About, Practice, Process, Contact
    - Social/contact links: WhatsApp, Phone, Instagram
    - Copyright notice and credit line on dark background
    - Import navLinks from `lib/constants.ts`
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 12.1, 12.2_

- [x] 12. Update page and layout for dynamic imports and SEO
  - [x] 12.1 Update `app/page.tsx` with dynamic imports and Process swap
    - Keep Hero as static import (above-the-fold critical path)
    - Dynamic import for About, Practice, Process, Contact, FloatingWhatsApp using `next/dynamic`
    - Replace `Services` import with `Process` component
    - Keep Footer as static import (server component)
    - _Requirements: 11.1_

  - [x] 12.2 Update `app/layout.tsx` with fonts, enhanced metadata, and JSON-LD
    - Import `@fontsource/playfair-display` (400, 600, 700) and `@fontsource/inter` (400, 500, 600)
    - Enhance `Metadata` export: full description with SEO keywords (criminal lawyer Jodhpur, advocate Pinki Goswami, bail application, NDPS cases, Rajasthan High Court)
    - Add `metadataBase`, `alternates.canonical`, Twitter card metadata (`summary_large_image`)
    - Enhance Open Graph with image (`/pinki-adv.jpeg`, 1200x630)
    - Add JSON-LD `<script type="application/ld+json">` for Attorney schema with name, address, telephone, areaServed
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 11.2_

- [x] 13. Delete old Services.tsx
  - [x] 13.1 Remove `components/Services.tsx` since it is replaced by Process.tsx
    - Verify no remaining imports reference Services.tsx
    - _Requirements: 6.1_

- [x] 14. Final checkpoint - Build verification
  - Run `npm run build` to ensure the project compiles without errors. Ensure all TypeScript types resolve, no missing imports, and static generation succeeds. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- The project uses Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- All components except Footer are client components due to Framer Motion usage
- Services.tsx is replaced (not modified) by Process.tsx

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "1.4", "1.5"] },
    { "id": 2, "tasks": ["3.1"] },
    { "id": 3, "tasks": ["4.1", "5.1"] },
    { "id": 4, "tasks": ["6.1", "7.1"] },
    { "id": 5, "tasks": ["6.2", "9.1", "10.1", "11.1"] },
    { "id": 6, "tasks": ["12.1", "12.2", "13.1"] }
  ]
}
```
