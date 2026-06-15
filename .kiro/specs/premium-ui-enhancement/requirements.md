# Requirements Document

## Introduction

Transform the existing Advocate Pinki Goswami portfolio website from a basic black-and-white design into a premium, luxury-tier dark-themed website with gold (#d4af37) accents, smooth Framer Motion animations, premium typography (Playfair Display + Inter), and glassmorphism effects. The upgrade covers all sections: Navbar, Hero, About, Practice Areas, Process Timeline, Contact, Footer, and a floating WhatsApp button. New packages (framer-motion, @fontsource/playfair-display, @fontsource/inter, react-intersection-observer, react-countup, clsx, tailwind-merge) are introduced alongside performance and SEO enhancements.

## Glossary

- **Website**: The Next.js 16 App Router application for Advocate Pinki Goswami located at the project root
- **Design_System**: The set of color tokens, typography scales, spacing rules, and animation variants used consistently across the Website
- **Navbar**: The fixed top navigation bar component rendered on every page
- **Hero_Section**: The full-viewport introductory section displayed at the top of the homepage
- **About_Section**: The section presenting Advocate Pinki Goswami's biography, photo, quote, and office details
- **Practice_Section**: The section displaying 8 practice area cards in a grid layout
- **Process_Section**: The timeline-based section (replacing Services.tsx) showing the 4-step client engagement workflow
- **Contact_Section**: The section providing all contact methods with WhatsApp as the primary channel
- **Footer**: The bottom section displaying credits, links, and branding
- **WhatsApp_Button**: The floating action button fixed to the viewport providing instant WhatsApp access
- **Gold_Accent**: The color #d4af37 used as the primary accent throughout the Website
- **Glassmorphism**: A visual effect using backdrop-blur, semi-transparent backgrounds, and subtle borders to create a frosted-glass appearance
- **Stagger_Animation**: A sequential animation pattern where elements animate in one after another with incremental delay
- **Scroll_Animation**: An animation triggered when an element enters the viewport, detected via Intersection Observer
- **Stats_Counter**: An animated numeric counter that increments from zero to a target value when visible

## Requirements

### Requirement 1: Design System Foundation

**User Story:** As a website visitor, I want a consistent premium visual language across all sections, so that the website feels cohesive and luxurious.

#### Acceptance Criteria

1. THE Design_System SHALL define color tokens including a dark background (#0a0a0a or similar), a gold accent (#d4af37), and supporting neutral shades for text and borders.
2. THE Design_System SHALL use Playfair Display as the display/heading typeface and Inter as the body typeface.
3. THE Design_System SHALL define reusable Framer Motion animation variants for fade-in-up, fade-in-left, fade-in-right, scale-in, and stagger-container patterns.
4. THE Website SHALL preload the Playfair Display and Inter font files to prevent layout shift during page load.
5. THE Website SHALL import clsx and tailwind-merge to provide a utility function for conditional and merged Tailwind class names.

### Requirement 2: Glassmorphism Navbar

**User Story:** As a website visitor, I want a sleek, translucent navigation bar that feels modern and premium, so that I can navigate without visual distraction.

#### Acceptance Criteria

1. THE Navbar SHALL use a Glassmorphism effect with backdrop-blur and a semi-transparent dark background when the page is scrolled beyond 50 pixels.
2. THE Navbar SHALL display the Gold_Accent color on the brand name or logo icon.
3. WHEN the mobile menu hamburger button is pressed, THE Navbar SHALL animate the mobile menu open using a slide-down or fade-in Framer Motion transition.
4. WHEN the mobile menu close button is pressed, THE Navbar SHALL animate the mobile menu closed using the reverse animation.
5. THE Navbar SHALL highlight the WhatsApp call-to-action button using the Gold_Accent color as a background or border.

### Requirement 3: Full-Viewport Hero Section

**User Story:** As a website visitor, I want an impactful first impression with animated text and stats, so that I perceive the advocate as premium and trustworthy.

#### Acceptance Criteria

1. THE Hero_Section SHALL occupy the full viewport height (100vh) with a dark background.
2. WHEN the Hero_Section becomes visible, THE Hero_Section SHALL animate the heading text using a reveal/fade-in-up animation with staggered delays for each line.
3. THE Hero_Section SHALL display a Stats_Counter that animates the values for "4+ Years Experience", "500+ Cases Handled", and "2 Courts" from zero to the target number when visible.
4. THE Hero_Section SHALL include a subtle parallax or layered background effect to add depth.
5. THE Hero_Section SHALL display the Gold_Accent color on key typographic elements such as the name or a decorative accent line.
6. THE Hero_Section SHALL render a primary WhatsApp call-to-action button and a secondary phone call button.
7. THE Hero_Section SHALL display the Bar Council registration text "R/4361/2025 — Bar Council of Rajasthan".

### Requirement 4: Split-Layout About Section

**User Story:** As a website visitor, I want to see the advocate's photo, credentials, and philosophy presented in a visually rich layout, so that I feel confident in her expertise.

#### Acceptance Criteria

1. THE About_Section SHALL use a split layout with the profile photo (/pinki-adv.jpeg) on one side and text content on the other side on desktop viewports.
2. THE About_Section SHALL display the profile photo with a Gold_Accent border or decorative frame element.
3. THE About_Section SHALL include a quote card with a dark background and Gold_Accent decorative quotation marks or border.
4. THE About_Section SHALL display two address cards: one for the office address (Foot Planet, Near PNB Bank, Madhuban Basni, Jodhpur) and one for the HC Chamber (Chamber No. 13, 3rd Floor, New HC Building, Jalamand, Rajasthan High Court, Jodhpur).
5. WHEN the About_Section enters the viewport, THE About_Section SHALL animate its content elements using fade-in-left (photo) and fade-in-right (text) Scroll_Animations.
6. THE About_Section SHALL use a dark background consistent with the full dark theme.

### Requirement 5: Practice Areas Grid

**User Story:** As a website visitor, I want to browse all legal services offered in an engaging card layout, so that I can quickly identify relevant expertise.

#### Acceptance Criteria

1. THE Practice_Section SHALL display exactly 8 practice area cards: Criminal Cases, NDPS Cases, Bail Matters, Divorce Cases, Family Disputes, Court Marriage, Sessions Court Trials, and Legal Consultation (Online Available).
2. THE Practice_Section SHALL arrange cards in a responsive grid: 1 column on mobile, 2 columns on tablet, and 4 columns on desktop.
3. WHEN the Practice_Section enters the viewport, THE Practice_Section SHALL animate the cards using a Stagger_Animation with incremental delays.
4. WHEN a visitor hovers over a practice area card, THE Practice_Section SHALL apply a hover effect including a border glow or elevation change using the Gold_Accent color.
5. THE Practice_Section SHALL use a dark card background with Gold_Accent for icons or decorative elements.
6. THE Practice_Section SHALL use a dark section background consistent with the full dark theme.

### Requirement 6: Premium Process Timeline

**User Story:** As a website visitor, I want to understand the client engagement process through a visually engaging timeline, so that I know what to expect when hiring the advocate.

#### Acceptance Criteria

1. THE Process_Section SHALL replace the existing Services.tsx component and render 4 process steps: Free Initial Consultation, Case Strategy & Documentation, Court Representation, and Ongoing Support & Updates.
2. THE Process_Section SHALL display the steps as a vertical timeline layout with a connecting line between steps.
3. WHEN the Process_Section is scrolled into view, THE Process_Section SHALL animate the connecting line growing downward as the user scrolls through the section.
4. WHEN each step enters the viewport, THE Process_Section SHALL animate the step content using a fade-in Scroll_Animation.
5. THE Process_Section SHALL use the Gold_Accent color for step numbers, timeline dots, or the connecting line.
6. THE Process_Section SHALL use a dark background consistent with the full dark theme.

### Requirement 7: Premium Contact Section

**User Story:** As a potential client, I want a clear and visually premium contact section with WhatsApp prominently featured, so that I can easily reach the advocate.

#### Acceptance Criteria

1. THE Contact_Section SHALL display WhatsApp as the primary and most visually prominent contact method using the Gold_Accent color for emphasis.
2. THE Contact_Section SHALL display phone, office address, Instagram handle (@adv_pinki_goswami_jodhpur), and HC Chamber address as secondary contact options.
3. THE Contact_Section SHALL include an embedded Google Maps iframe showing the office location.
4. WHEN the Contact_Section enters the viewport, THE Contact_Section SHALL animate its contact cards using a Stagger_Animation.
5. THE Contact_Section SHALL use a dark background consistent with the full dark theme.

### Requirement 8: Floating WhatsApp Button

**User Story:** As a website visitor on any section, I want persistent access to WhatsApp chat, so that I can reach out at any moment without scrolling.

#### Acceptance Criteria

1. THE WhatsApp_Button SHALL remain fixed at the bottom-right corner of the viewport on all pages.
2. THE WhatsApp_Button SHALL display a continuous pulse animation to draw attention.
3. WHEN a visitor clicks the WhatsApp_Button, THE WhatsApp_Button SHALL open the WhatsApp chat link (https://wa.me/917073318678) in a new tab.
4. THE WhatsApp_Button SHALL use the Gold_Accent color or a green-gold gradient for its background.
5. THE WhatsApp_Button SHALL include the WhatsApp icon and a text label visible on screens wider than 640px.

### Requirement 9: Premium Footer

**User Story:** As a website visitor, I want a polished footer that reinforces the premium branding, so that the experience feels complete and professional.

#### Acceptance Criteria

1. THE Footer SHALL display the advocate's name, tagline, and Bar Council registration number (R/4361/2025).
2. THE Footer SHALL use the Gold_Accent color for the brand name or decorative elements.
3. THE Footer SHALL include quick navigation links to all main sections (About, Practice, Process, Contact).
4. THE Footer SHALL include social/contact links: WhatsApp, Phone, and Instagram.
5. THE Footer SHALL display a copyright notice and credit line on a dark background.

### Requirement 10: SEO Metadata Enhancement

**User Story:** As the website owner, I want comprehensive SEO metadata, so that the website ranks well in search engines for relevant criminal lawyer queries in Jodhpur.

#### Acceptance Criteria

1. THE Website SHALL define Open Graph metadata including title, description, type, and image for social sharing.
2. THE Website SHALL define Twitter Card metadata with a large image summary format.
3. THE Website SHALL include structured data (JSON-LD) for a LegalService or Attorney schema with name, address, telephone, and area served.
4. THE Website SHALL define a meta description containing keywords: criminal lawyer Jodhpur, advocate Pinki Goswami, bail application, NDPS cases, Rajasthan High Court.
5. THE Website SHALL set a canonical URL in the metadata.

### Requirement 11: Performance Optimizations

**User Story:** As a website visitor, I want fast page load and smooth interactions, so that the premium experience is not compromised by poor performance.

#### Acceptance Criteria

1. THE Website SHALL lazy-load all below-the-fold sections using dynamic imports or Intersection Observer-based rendering.
2. THE Website SHALL preload the Playfair Display and Inter font files using link preload or Next.js font optimization.
3. THE Website SHALL use Next.js Image component with appropriate sizing, priority flag for the hero, and lazy loading for other images.
4. THE Website SHALL configure Incremental Static Regeneration (ISR) or static generation for the homepage to serve pre-rendered content.
5. WHEN Framer Motion animations are defined, THE Website SHALL use the reduce-motion media query to disable animations for users who prefer reduced motion.

### Requirement 12: Full Dark Theme with Gold Accent

**User Story:** As a website visitor, I want a consistent dark color scheme with gold accents across every section, so that the website feels unified and luxurious.

#### Acceptance Criteria

1. THE Website SHALL apply a dark background (shades of #0a0a0a to #1a1a1a) to all sections including Navbar, Hero, About, Practice, Process, Contact, and Footer.
2. THE Website SHALL use the Gold_Accent color (#d4af37) consistently for accent elements, borders, icons, and interactive highlights across all sections.
3. THE Website SHALL use white or light gray (#e5e5e5, #a3a3a3) for primary and secondary text on dark backgrounds.
4. THE Website SHALL not display any section with a light/white background.
5. THE Website SHALL define the dark and gold color tokens in the global CSS or Tailwind configuration for centralized theme management.
