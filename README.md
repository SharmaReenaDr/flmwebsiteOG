# Fitness Life Mantra (FLM)

Founder-led, single-page marketing and booking site for Fitness Life Mantra. Built with Next.js (App Router), TypeScript, and Tailwind CSS to ship a calm, premium, mobile-first experience quickly.

## Quick start

1. Install dependencies (already installed if you ran `pnpm install`):
   ```bash
   pnpm install
   ```
2. Run the dev server:
   ```bash
   pnpm dev
   ```
   Visit http://localhost:3000.
3. Lint (optional):
   ```bash
   pnpm lint
   ```

## Content & CTAs
- Booking: update the Calendly links in `app/page.tsx` (`https://calendly.com/your-flm-link`).
- Payments: replace Stripe/PayPal placeholder links in the Payments card with live payment links or buttons.
- Email: update `hello@fitnesslifemantra.com` if needed.
- Form: the contact form currently uses a `mailto:` action. Swap for Google Forms, Formspree, or your CRM form when ready.

## Structure
- `app/page.tsx`: all sections (Hero, About, Offerings, How to Join, Founder, Payments, Contact/CTA, Footer).
- `app/globals.css`: Tailwind base plus custom tokens (sand/gold/ink palette, gradients, buttons).
- `tailwind.config.ts`: neutral palette, typography, and utility extensions.

## Brand & design
- Tone: calm, premium, spiritual-not-religious, investor-safe.
- Palette: ivory/beige base, gold accents, ink text.
- Typography: Playfair Display for headlines, Inter for body.

## Next steps
- Connect live Calendly, Stripe/PayPal links.
- Add analytics and CRM/automation when ready.
- Point your custom domain once deployed.
