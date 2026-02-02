# FLM Squarespace-Style Design System

## Color Palette

```css
/* Primary Colors */
--black: #000000
--white: #FFFFFF

/* Grays (tints) */
--gray-50: #F9FAFB   /* Near white background */
--gray-100: #F3F4F6  /* Light backgrounds */
--gray-200: #E5E7EB  /* Borders */
--gray-300: #D1D5DB  /* Input borders */
--gray-400: #9CA3AF  /* Muted text, borders */
--gray-500: #6B7280  /* Secondary text */
--gray-600: #4B5563  /* Body text */
--gray-700: #374151  /* Dark text */
--gray-800: #1F2937  /* Very dark */
--gray-900: #111827  /* Nearly black */
```

## Typography System

### Font Families
```css
/* Headings - Serif, elegant */
font-family: 'Playfair Display', serif;
font-weight: 400, 600, 700, 900
letter-spacing: -0.5px

/* Body - Sans-serif, clean */
font-family: 'Inter', sans-serif;
font-weight: 300, 400, 500, 600, 700
letter-spacing: 0
```

### Heading Scale
```
H1: 56px (desktop) / 36px (mobile)  — font-playfair, font-bold, leading-tight
H2: 48px (desktop) / 32px (mobile)  — font-playfair, font-bold
H3: 32px (desktop) / 24px (mobile)  — font-playfair, font-bold
H4: 24px (desktop) / 20px (mobile)  — font-playfair, font-semibold
H5: 20px                             — font-playfair, font-semibold
H6: 16px                             — font-playfair, font-semibold

p: 16px (body)                       — font-inter, font-light, text-gray-600
p-lg: 18-20px (large paragraph)      — font-inter, font-light
p-sm: 14px (small paragraph)         — font-inter, text-gray-500
p-xs: 12px (extra small)             — font-inter, text-gray-400
```

### Font Weights
```
Playfair Display:
  - 400: Regular (body copy, quotes)
  - 600: Semi-bold
  - 700: Bold (most headings)
  - 900: Extra bold (hero headings)

Inter:
  - 300: Light (subtitles, descriptions)
  - 400: Regular (body text)
  - 500: Medium (emphasized body, labels)
  - 600: Semi-bold (strong emphasis, small headings)
  - 700: Bold (rarely used, button text)
```

## Spacing System

```css
/* Padding/Margin Scale (px) */
0,   4,   8,   12,  16,  20,  24,  32,  40,  48,  56,  64,  80,  96, 128

Tailwind mapping:
  p-0 = 0px
  p-1 = 4px
  p-2 = 8px
  p-3 = 12px
  p-4 = 16px
  p-6 = 24px
  p-8 = 32px
  p-12 = 48px
  p-20 = 80px
```

### Section Spacing
```
Hero sections:      py-20 (80px) or h-screen (100vh)
Content sections:   py-20 (top/bottom), px-4 (sides)
Subsections:        py-16 (64px)
Cards within:       p-8 (32px)
Text paragraphs:    mb-4 (16px) between paras
```

## Component Specifications

### Navigation Bar
```
Fixed top, z-50
Height: 64px (h-16)
Background: bg-white/95 with backdrop-blur
Border: border-b border-gray-200

Logo: text-2xl font-bold
Nav links: text-sm font-medium text-gray-700 hover:text-black
CTA button: bg-black text-white px-6 py-2 rounded hover:bg-gray-800
```

### Hero Section
```
Full viewport (h-screen or h-[80vh])
Background: bg-gradient-to-br from-gray-900 via-gray-800 to-black
Text color: text-white
Center content with max-w-3xl

Headline: text-6xl md:text-7xl font-playfair font-bold
Subheading: text-xl md:text-2xl text-gray-300 font-light

CTAs: flex gap-4 flex-col sm:flex-row
  - Primary: bg-white text-black px-8 py-4 rounded hover:bg-gray-200
  - Secondary: border-2 border-white text-white hover:bg-white hover:text-black
```

### Card Component
```
Base: border border-gray-200 p-8 rounded-lg
Hover: hover:shadow-lg transition
Background: bg-white or bg-gray-50

Typical structure:
  - Emoji icon (text-5xl mb-4)
  - Title (text-2xl font-bold font-playfair)
  - Description (text-gray-600 mb-4)
  - Link (text-black font-semibold group-hover:translate-x-2)
```

### Button Styles
```
/* Primary Button */
bg-black text-white px-8 py-4 rounded font-semibold
hover:bg-gray-800 transition text-lg

/* Secondary/Outline Button */
border-2 border-black text-black px-8 py-4 rounded font-semibold
hover:bg-black hover:text-white transition text-lg

/* Link-style Button */
text-black font-semibold hover:opacity-70 transition
(with arrow: "Explore Classes →")

/* Text Button */
text-sm font-medium text-gray-700 hover:text-black transition
```

### Form Inputs
```
Base: border border-gray-300 rounded px-4 py-3
Focus: focus:outline-none focus:border-black focus:ring-1 focus:ring-black
Placeholder: placeholder-gray-400

Typical:
  <input className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black" />
```

### Table Styling
```
<table className="w-full">
  <thead>
    <tr className="bg-black text-white">
      <th className="px-6 py-4 text-left font-semibold">Header</th>
  <tbody>
    <tr className="border-b">
      <td className="px-6 py-4">Cell</td>
```

### Footer
```
Background: bg-black text-white
Padding: py-16
Grid: grid-cols-1 md:grid-cols-4 gap-12

Sections:
  h4 font-semibold mb-4
  ul space-y-2 text-gray-400 text-sm
  a hover:text-white transition

Bottom: border-t border-gray-800 pt-8
  Flex: flex-col md:flex-row justify-between items-center
```

## Visual Hierarchy

### Homepage Layout
```
1. Hero (Hero)
   - Large headline (56-96px)
   - Subheading (18-20px)
   - Two CTAs
   
2. Four Pillars (Features)
   - H2 section title (48px)
   - Description (16px)
   - 2x2 grid of cards
   
3. Why Choose (Stats)
   - H2 section title (48px)
   - 3 stat cards with large numbers (text-4xl font-bold)
   
4. Testimonials
   - H2 section title (48px)
   - 3 testimonial cards in grid
   
5. CTA Section (Black bg)
   - Large headline
   - Button CTA
   
6. Events
   - H2 section title
   - 3 event cards
   
7. Newsletter
   - Form with email input
   - Subscribe button
```

## Responsive Breakpoints

```
Mobile: 320px - 640px    (small phones, portrait)
Tablet: 641px - 1024px   (iPad, portrait)
Desktop: 1025px+         (MacBook, desktop)

Tailwind breakpoints:
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px

Common pattern:
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  (1 col mobile, 2 tablet, 3 desktop)
```

## Interaction Patterns

### Hover States
```
Cards: hover:shadow-lg transition
Buttons: hover:opacity-80 transition (text) or hover:bg-gray-800 (bg)
Links: hover:opacity-70 transition or hover:translate-x-2 (arrow links)
```

### Transitions
```
Default: transition (150ms)
Custom: transition-all duration-300 (all properties, 300ms)
Specific: transition-colors duration-200
```

### Focus States
```
Inputs: focus:outline-none focus:border-black focus:ring-1 focus:ring-black
Buttons: Focus state naturally from outline
Links: Use keyboard focus indicator
```

## Shadow System

```
None:       box-shadow: none
Small:      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
Medium:     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Large:      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
Extra Lg:   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1)

Tailwind:
  shadow (sm)
  shadow-md
  shadow-lg (used on cards hover)
  shadow-xl
  shadow-2xl
```

## Border Radius

```
None:       0
Small:      4px (rounded-sm)
Default:    6px (rounded)
Medium:     8px (rounded-lg)
Large:      12px (rounded-xl)
Extra Lg:   16px (rounded-2xl)

Used in:
  Buttons: rounded (6px)
  Cards: rounded-lg (8px)
  Inputs: rounded (6px)
  Images: rounded-lg (8px)
```

## Z-Index Scale

```
Base:           0 (default)
Dropdown:       10
Navigation:     50
Modal overlay:  40
Tooltip:        30
Notification:   50
```

## Accessibility Guidelines

```
✓ Color Contrast: 4.5:1 for normal text, 3:1 for large text
✓ Focus indicators: Visible outline on interactive elements
✓ Touch targets: Minimum 48px height/width
✓ Text sizing: Base 16px, scalable with zoom
✓ Keyboard navigation: Tab through all interactive elements
✓ Alt text: All images have descriptive alt text
✓ Semantic HTML: Use <button>, <a>, <form>, <input> correctly
✓ ARIA labels: For complex components
```

## Loading Performance

```
✓ No heavy animations (smooth 60fps)
✓ Minimal JavaScript (mostly static)
✓ Optimized images (next/image)
✓ Font loading: Preconnect to Google Fonts
✓ CSS: Tailwind JIT (only used classes)
✓ Code splitting: Next.js automatic
```

## Examples

### Hero Button
```jsx
<Link
  href="/book"
  className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition inline-block text-lg"
>
  Book Your Trial
</Link>
```

### Card with Icon
```jsx
<div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
  <div className="text-5xl mb-4">💃</div>
  <h3 className="text-3xl font-bold font-playfair mb-3">Dance & Fitness</h3>
  <p className="text-gray-600 mb-4 text-lg">Description here...</p>
  <Link href="/dance-fitness" className="text-black font-semibold hover:opacity-70 transition">
    Explore Classes →
  </Link>
</div>
```

### Full-width Section
```jsx
<section className="py-20 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-bold text-center mb-16 font-playfair">Section Title</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Cards here */}
    </div>
  </div>
</section>
```

---

This design system ensures consistency across all pages while maintaining Squarespace's minimalist, professional aesthetic.
