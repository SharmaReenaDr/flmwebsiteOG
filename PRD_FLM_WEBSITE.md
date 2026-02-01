# Product Requirements Document (PRD)
## Fitness Life Mantra (FLM) Website
**Version**: 1.0  
**Date**: February 1, 2026  
**Status**: In Development  
**Prepared for**: Dr. Reena Sharma + FLM Team

---

## A) EXECUTIVE SUMMARY

**Vision**: Build a premium, conversion-focused website for Fitness Life Mantra that rivals Squarespace in clarity, polish, and ease of use. The site will serve as a unified platform for lead capture, service bookings, content showcase, and community engagement across four core business pillars: Dance & Fitness, Performing Arts, Spirituality, and Corporate & Events.

**Why This Matters**: 
- Current state: Scattered touchpoints (Instagram, WhatsApp, email)
- Desired state: Single, professional hub that converts visitors → leads/bookings
- Business impact: 2-3x lead capture, automated workflows, scalable admin

**Scope (MVP)**: Homepage, 4 pillar pages, events calendar, booking forms, gallery, about, contact, blog starter
**Tech Stack**: Next.js 14 + Tailwind CSS + TypeScript + Headless CMS (Supabase/Sanity)
**Timeline**: MVP in 8 weeks, Phase 2 (ecommerce + advanced scheduling) in Q2 2026

---

## B) GOALS & NON-GOALS

### Goals ✅
1. **Conversion-Driven**: Every page has clear call-to-action (Register / Book / Contact)
2. **Lead Capture**: Forms + email routing to Dr. Sharma + auto-confirmations
3. **Content Showcase**: Portfolio of classes, events, testimonials, gallery
4. **Mobile-First**: Perfect experience on phones (60% of web traffic)
5. **Admin-Friendly**: Easy content updates without code (CMS integration)
6. **SEO-Ready**: Fast, accessible, schema-marked, OG tags
7. **Scalable**: Support growth: more team members, multiple locations, new services
8. **Brand Consistency**: Unified visual language across all sections

### Non-Goals ❌
1. **Not a Social Media Replacement**: LinkedIn, Instagram remain primary for community
2. **Not a Full LMS**: No course-based learning (Phase 2 consideration)
3. **Not a Marketplace**: No peer-to-peer or third-party vendor features
4. **Not a Custom Backend**: Use managed services (Supabase, Stripe, Zapier) to minimize ops
5. **Not Fully Localized**: English-only for MVP; Hindi + regional languages Phase 2

---

## C) PERSONAS & USER JOURNEYS

### Persona 1: Priya (Potential Student)
**Profile**: 28-year-old working professional, fitness enthusiast, discovers FLM via Instagram
**Goals**: Find quality dance/fitness classes, book trial, read reviews, pay online
**Pain Points**: Unclear schedules, difficult booking process, no trial clear CTA
**Journey**:
1. Lands on FLM homepage → clicks "Explore Classes"
2. Browses Dance & Fitness pillar → reads descriptions + testimonials
3. Clicks "Book Trial Class" → fills form (name, email, age, location, preference)
4. Receives auto-confirmation email + WhatsApp link to confirm
5. Books slot, attends, receives feedback form

### Persona 2: Arjun (Corporate Client)
**Profile**: 40-year-old HR manager, organizing team-building event
**Goals**: Find MC hosting or corporate event management service, get quote, hire quickly
**Pain Points**: Hard to find relevant portfolio, no clear pricing, hard to contact
**Journey**:
1. Google search "corporate event host India" → finds FLM
2. Clicks "Corporate & Events" pillar → sees past events + testimonials
3. Clicks "Request Proposal" → fills form (company, event type, date, budget, contact)
4. Gets auto-routed to Dr. Sharma's email + WhatsApp for follow-up
5. Discussion → booking → event

### Persona 3: Rajesh (Returning Community Member)
**Profile**: 22-year-old regular student, engaged in FLM community
**Goals**: Check class schedule, register for upcoming workshops, read blog
**Pain Points**: Schedule scattered across WhatsApp, no unified calendar view
**Journey**:
1. Checks FLM homepage for "Upcoming Classes" widget
2. Clicks specific date → sees full schedule for that week
3. Books workshop (Bhangra Intensive) → auto-reminder 24h before
4. Reads blog post on "Bhangra + Fitness" → shares on Instagram

### Persona 4: Dr. Sharma (Admin)
**Profile**: Founder, manages bookings, content, team, analytics
**Goals**: Update class info, view new leads, manage team, track performance
**Pain Points**: Multiple platforms (WhatsApp, email, spreadsheets), no visibility into metrics
**Journey**:
1. Logs into admin dashboard → sees 5 new leads from this week
2. Updates "Bollywood Fusion" class details, adds 3 gallery photos
3. Views analytics: 200 site visits, 45 trial bookings, 8 corporate inquiries
4. Exports leads report → shares with team via email

---

## D) INFORMATION ARCHITECTURE (SITEMAP)

```
FLM Website (Root)
├── Home (/)
│   ├── Hero + CTA
│   ├── 4 Pillars Grid (with links)
│   ├── Why Choose FLM (proof section)
│   ├── Testimonials Carousel
│   ├── Upcoming Events Widget
│   └── Newsletter Signup
│
├── Dance & Fitness (/dance-fitness)
│   ├── Hero
│   ├── Program Cards (Bollywood, Bhangra, Freestyle, Wellness, etc.)
│   ├── Schedule/Timetable
│   ├── Gallery
│   ├── Register CTA
│   └── FAQ
│
├── Performing Arts (/performing-arts)
│   ├── Hero
│   ├── Service Cards (MC Hosting, Acting, Theatre, etc.)
│   ├── Portfolio/Past Events
│   ├── Video Reel
│   ├── Book Now CTA
│   └── Testimonials
│
├── Spirituality (/spirituality)
│   ├── Hero
│   ├── Program Cards (Bhajan, Meditation, Wellness, etc.)
│   ├── Community Events Calendar
│   ├── Gallery
│   ├── Join Community CTA
│   └── Success Stories
│
├── Corporate & Events (/corporate-events)
│   ├── Hero
│   ├── Services (MC, Event Mgmt, Team Building, etc.)
│   ├── Case Studies (past events with photos)
│   ├── Pricing (optional)
│   ├── Request Proposal CTA
│   └── Client Testimonials
│
├── Events (/events)
│   ├── Calendar View (month/week)
│   ├── Upcoming Events List
│   ├── Event Detail Pages (individual)
│   ├── RSVP/Register
│   └── Archive/Past Events
│
├── Book / Register (/book)
│   ├── Form (class/service selection, date, name, email, phone, etc.)
│   ├── Confirmation Page
│   └── Thank You Message
│
├── Gallery (/gallery)
│   ├── Photo Grid
│   ├── Video Reel
│   ├── Testimonials with Photos
│   └── Filter by Pillar/Category
│
├── About (/about)
│   ├── Dr. Reena Sharma Bio
│   ├── Mission & Vision
│   ├── Team
│   ├── Press/Media
│   └── Social Links
│
├── Blog (/blog)
│   ├── Latest Posts
│   ├── Post Detail Page
│   ├── Categories (Dance, Fitness, Spirituality, Corporate, etc.)
│   └── Search
│
├── Contact (/contact)
│   ├── Contact Form
│   ├── Email + Phone Display
│   ├── Service Area Map
│   ├── WhatsApp Link
│   └── Office Location
│
├── Policies
│   ├── Privacy Policy (/privacy)
│   ├── Terms of Service (/terms)
│   ├── Cancellation & Refund Policy (/cancellation)
│   └── Cookie Policy (/cookies)
│
└── Admin Dashboard (/admin)
    ├── Leads Management
    ├── Content Editor (Services, Events, Testimonials, Gallery)
    ├── Analytics Dashboard
    ├── User/Team Management
    └── Settings
```

---

## E) PAGE-BY-PAGE REQUIREMENTS

### E.1) Home Page (/)

**Primary Goals**: Introduce brand, showcase 4 pillars, capture first-time visitor email, guide to relevant section

**Sections**:

#### 1. Hero Section
```
Layout: Full-width background video (or gradient) + centered text overlay
Content:
  - Headline: "Fitness Life Mantra: Dance, Spirituality, Performance, Mastery"
  - Subheading: "Transform your body, mind, and soul through movement"
  - CTA Button: "Explore Programs" (primary) + "Book Free Trial" (secondary)
  - Optional: Background video (FLM promo)

Acceptance Criteria:
- Hero occupies full viewport height on desktop, min 300px on mobile
- Text is readable on video background (text shadow or overlay)
- Both buttons are clickable and link to /dance-fitness and /book respectively
- Hero loads in <3s (optimized video or fallback gradient)
```

#### 2. Four Pillars Grid
```
Layout: 2x2 grid (desktop), stacked (mobile)
Content: 4 cards, each representing a pillar
  - Pillar 1: Dance & Fitness
    Icon/Image: dancing figure or gradient
    Title: "Dance & Fitness"
    Description: "Bollywood, Bhangra, freestyle, wellness fusion — all ages welcome."
    CTA: "Explore Classes" → /dance-fitness
  
  - Pillar 2: Performing Arts
    Title: "Performing Arts"
    Description: "MC hosting, acting workshops, theatre productions, stage craft."
    CTA: "See Portfolio" → /performing-arts
  
  - Pillar 3: Spirituality
    Title: "Spirituality & Wellness"
    Description: "Bhajans, meditation, breathwork, community gatherings."
    CTA: "Join Community" → /spirituality
  
  - Pillar 4: Corporate & Events
    Title: "Corporate & Events"
    Description: "Team building, corporate events, community management."
    CTA: "Request Proposal" → /corporate-events

Acceptance Criteria:
- Cards are equal height and width on desktop
- Cards have hover effect (shadow lift, slight scale)
- Each card links to correct pillar page
- Responsive layout on tablet and mobile
```

#### 3. Social Proof Section
```
Layout: 3-column feature cards
Content:
  - "500+ Happy Students" (icon: people silhouette, number highlighted)
  - "15+ Years of Excellence" (icon: trophy, number highlighted)
  - "20+ Programs Offered" (icon: calendar, number highlighted)

Design:
- Gradient background or light section
- Animated counters (on scroll into view, count from 0 to final number)
- Large typography, bold numbers

Acceptance Criteria:
- Numbers animate smoothly on scroll
- Stats are accurate and configurable via CMS
- Mobile layout stacks to 1 column
```

#### 4. Testimonials Carousel
```
Layout: Carousel/slider with 3-4 visible testimonials
Content per testimonial:
  - Quote: "FLM changed my life. I came for fitness, stayed for the community." — Priya S.
  - Author name + photo
  - Star rating (5-star)
  - Pillar/category (Dance & Fitness, Spirituality, etc.)

Interactions:
- Auto-scroll every 8 seconds (pause on hover)
- Arrow buttons to manual navigate
- Dot indicators for slide position

Acceptance Criteria:
- Carousel is accessible (keyboard nav with arrows)
- Testimonials are sourced from CMS
- Images are optimized (lazy-loaded)
- Mobile: show 1 testimonial at a time
```

#### 5. Upcoming Events Widget
```
Layout: Card grid (3 events) with "View All" link
Content per event:
  - Event name
  - Date/time (formatted)
  - Location (city or "Online")
  - CTA: "Register" → /book or event detail page

Acceptance Criteria:
- Pulls from Events CMS collection
- Shows next 3 upcoming events (by date)
- Links to /events for full calendar
```

#### 6. Newsletter Signup
```
Layout: Prominent section with gradient background
Content:
  - Headline: "Join the FLM Community"
  - Description: "Get exclusive updates, tips, and early access to new programs."
  - Email input field
  - Subscribe button

Interactions:
- Form validation (email format)
- On submit: save to CRM (Zapier → MailChimp or native email service)
- Show success message: "Check your email for a welcome gift!"

Acceptance Criteria:
- Form submits without page reload (AJAX)
- Email is validated and stored
- Auto-confirmation email is sent (1-2 min)
- Spam protection (rate limit, reCAPTCHA optional)
```

#### 7. Footer
```
Content:
- Brand info (logo, tagline, social links)
- Links (About, Blog, Policies, Contact)
- Contact info (email, phone, WhatsApp)
- Service area (cities/regions)
- Copyright + powered by statement

Design:
- Dark background (black or dark gradient)
- 4-column layout on desktop, stacked on mobile
- Social media icons (Instagram, YouTube, LinkedIn, WhatsApp)
```

---

### E.2) Dance & Fitness Page (/dance-fitness)

**Primary Goals**: Showcase programs, build trust via testimonials, convert to registration

**Sections**:

#### 1. Pillar Hero
```
Headline: "Dance & Fitness: Move Your Body, Free Your Mind"
Subheading: "From Bollywood to wellness, find your rhythm"
Background: Video or image of diverse dancers/fitness class
CTA: "Register for Class" (primary)
```

#### 2. Program Grid
```
Layout: 3-column grid (mobile: 1, tablet: 2)
Programs:
  1. Bollywood Dance
     - Icon/image
     - Description: "Learn iconic Bollywood moves with Choreography in a fun group setting."
     - Duration: "60 mins | Beginner to Advanced"
     - Schedule: "Mon, Wed, Fri 6-7 PM | Sat 4-5 PM"
     - CTA: "Register" → /book?program=bollywood
  
  2. Bhangra Dance
     - Description: "Energetic Punjabi folk dance for all ages."
     - Schedule: "Tue, Thu 6-7 PM"
  
  3. Freestyle / Hip Hop
  4. Dance Fitness Cardio
  5. Wellness Fusion
  6. Kids Dance Workshop

Acceptance Criteria:
- Each program card is clickable (links to /book with program pre-selected)
- Schedule is sourced from CMS (easily updatable)
- Images are responsive and optimized
```

#### 3. Instructor Bios
```
Layout: 2-column cards or carousel
Content:
  - Photo
  - Name
  - Specialization(s)
  - Bio (2-3 sentences)
  - Social links (Instagram, etc.)

Acceptance Criteria:
- Instructor info is CMS-managed
- Photos are professional quality
```

#### 4. Class Schedule Table
```
Layout: Timetable grid (days × time slots)
Content:
  - Days: Mon–Sun
  - Time slots: 6-7 AM, 6-7 PM, etc.
  - Class name + instructor + location

Acceptance Criteria:
- Schedule is CMS-driven
- Mobile: show weekly view or collapsible table
- Clicking a slot shows details + register option
```

#### 5. Testimonials + Gallery
```
- Testimonials carousel (same as homepage, but pillar-specific)
- Gallery grid (12+ images of classes)
  - Hover: zoom + overlay with program name
  - Modal: full-screen slideshow on click
```

#### 6. FAQ Section
```
Accordion component with Q&A pairs:
- "What should I wear?"
- "Do I need prior dance experience?"
- "What is the cost?"
- "Can I join mid-month?"
- "Is there a trial class?"

Acceptance Criteria:
- Questions are CMS-managed
- Accordion smooth open/close animation
```

#### 7. CTA Section
```
Two-button footer section:
  - Primary: "Register for a Class"
  - Secondary: "Contact for Custom Training"
```

---

### E.3) Performing Arts Page (/performing-arts)

**Primary Goals**: Showcase past events, build credibility, capture corporate/event inquiries

**Sections**:

#### 1. Pillar Hero
```
Headline: "Performing Arts: Take Center Stage"
Subheading: "MC Hosting | Acting Workshops | Theatre | Event Management"
CTA: "View Portfolio" or "Book a Performance"
```

#### 2. Service Cards (3-4)
```
Services:
  1. MC Hosting
     - Description: "Professional, witty, engaging MC for events"
     - Image: photo of Dr. Sharma on stage
     - CTA: "View Details" → /performing-arts/mc-hosting or scroll to portfolio
  
  2. Acting Workshops
     - Description: "Learn stage craft, character development, improvisation"
  
  3. Theatre Productions
     - Description: "Full-scale productions with direction, choreography, costume"
  
  4. Corporate Events Management
     - Description: "Full event coordination for team building and launches"
```

#### 3. Case Studies / Past Events
```
Layout: Masonry grid or card carousel
Content per case study:
  - Event name + date
  - Photos (6-10 per event, collage)
  - Brief description (100 words)
  - Client quote/testimonial
  - Outcomes (e.g., "500+ attendees, 5-star feedback")
  - Tags (Corporate, Wedding, Festival, etc.)

Examples:
  - "TechCorp Annual Retreat 2025"
  - "Bollywood Charity Gala 2025"
  - "Mumbai Youth Festival 2024"

Acceptance Criteria:
- Images are optimized and fast-loading
- Click image → modal slideshow
- Filterable by event type (optional Phase 2)
```

#### 4. Video Reel / Demo
```
- YouTube or Vimeo embed showing clips from performances
- Loop 2-3 minute highlight reel
```

#### 5. Testimonials
```
Client testimonials (longer, from corporate clients):
- "Dr. Reena brought energy and professionalism to our annual event. Highly recommended!" — Acme Corp HR Lead
```

#### 6. Pricing / Request Proposal
```
Option A (Transparent Pricing):
- MC Hosting: ₹X–₹Y per event
- Workshop (2-hour): ₹Z
- Full event management: Quote-based

Option B (Lead Capture):
- No pricing shown; "Request Proposal" button → /book?service=corporate
- Dr. Sharma quotes based on scope

Recommended: Hybrid (show MC hosting price, others are quote-based)
```

#### 7. CTA Section
```
"Ready to Book?"
- "Request Proposal" button → /book?service=corporate
- "WhatsApp" link (direct to Dr. Sharma)
```

---

### E.4) Spirituality Page (/spirituality)

**Primary Goals**: Build community engagement, showcase wellness offerings, capture signups

**Sections**:

#### 1. Pillar Hero
```
Headline: "Spirituality & Wellness: Find Your Inner Peace"
Subheading: "Bhajans | Meditation | Breathwork | Community Gatherings"
CTA: "Join the Community"
```

#### 2. Program Cards
```
Programs:
  1. Bhajan Sundays
     - Description: "Weekly devotional singing sessions"
     - Frequency: "Every Sunday 5-7 PM"
  
  2. Meditation & Mindfulness
     - Description: "Guided meditation for stress relief and spiritual growth"
     - Duration: "30 mins | 3x per week"
  
  3. Breathwork & Pranayama
     - Description: "Ancient breathing techniques for vitality"
  
  4. Wellness Circles
     - Description: "Community gatherings, wellness talks, group practice"
```

#### 3. Community Stories
```
Layout: Carousel or grid of member testimonials
- "Before FLM, I was stressed. Now meditation is my daily ritual." — Ananya
- Photos of community members (with permission)
```

#### 4. Upcoming Workshops
```
- "Yoga & Dance Integration" (Date)
- "Deepening Your Meditation" (Date)
- "Healing Through Music" (Date)
- Links to /events and /book
```

#### 5. Resource Library (Optional Phase 1.5)
```
- Free meditations (audio links)
- Breathing guides (PDF)
- Blog posts on wellness
```

#### 6. CTA
```
"Join the Wellness Journey"
- "Sign Up for Bhajan Sundays"
- "Contact for Private Sessions"
```

---

### E.5) Corporate & Events Page (/corporate-events)

**Primary Goals**: Capture corporate inquiries, showcase expertise, convert to proposals

**Sections**:

#### 1. Pillar Hero
```
Headline: "Corporate & Events: Elevate Your Experience"
Subheading: "Team Building | Corporate Hosting | Event Management | Community Events"
CTA: "Request a Proposal"
```

#### 2. Services Overview
```
Layout: 4 service cards
  1. Corporate Training (Team building, leadership, wellness programs)
  2. Event Management (Logistics, coordination, execution)
  3. MC & Entertainment (Hosting, performances, energy)
  4. Community Events (Festivals, galas, fundraisers)

Each card: icon + description + "Learn More" link
```

#### 3. Case Studies (same as Performing Arts, different context)
```
Examples:
  - "TechCorp Annual Summit 2025" (500 attendees, hybrid event)
  - "Wellness Week for NGO" (100 employees, 3-day program)
  - "Community Fundraiser 2024" (1000+ attendees, sold out)
```

#### 4. ROI / Results
```
- Team engagement scores improved 40% (post-event survey)
- 95% recommend for future events
- Average event size: 200–1000 attendees
```

#### 5. Pricing Options
```
Option 1: MC Hosting — ₹500–₹2000 per hour
Option 2: Team Building Workshop — ₹50k–₹100k per session
Option 3: Full Event Management — Custom quote

"Fill out a brief form to get a personalized quote" → /book?service=corporate
```

#### 6. Client Logos / Testimonials
```
- "Logos" of past clients (Acme Corp, TechStartup, NGO X, etc.)
- 1-2 testimonials from C-suite or HR leads
```

#### 7. CTA
```
"Start Planning Your Event"
- "Request Proposal" (large button)
- "Download Our Event Checklist" (lead magnet PDF)
- "WhatsApp for Urgent Inquiries"
```

---

### E.6) Events / Calendar Page (/events)

**Primary Goals**: Centralize all event info, drive registrations, build FOMO

**Sections**:

#### 1. Calendar View
```
Layout: Month calendar (desktop) or agenda list (mobile)
- Clickable dates
- Color-coded by pillar/type (blue: Dance, purple: Spirituality, etc.)
- Tooltip on hover: event name + time
```

#### 2. Upcoming Events List
```
Layout: Chronological cards
Per event:
  - Name
  - Date/time (formatted, with timezone)
  - Location (city/venue or "Online")
  - Capacity (X spots available)
  - Photo/thumbnail
  - Short description (50 words)
  - CTA: "Register" → /book?event=ID
```

#### 3. Event Detail Page (per event)
```
URL: /events/[event-id]
Sections:
  - Hero: event image/banner
  - Title + date/time/location + capacity
  - Full description
  - Instructor/host info
  - Agenda or outline (if workshop)
  - Testimonials from past attendees (if recurring event)
  - CTA: "Register Now"
  - "Add to Calendar" button (iCal export)
```

#### 4. Past Events Archive
```
- Tab or filter to show "Past Events"
- Gallery of past event photos + attendee testimonials
```

#### 5. Filtering (optional Phase 2)
```
- Filter by: Pillar, Type (Workshop, Community, Corporate), Upcoming/Past, Location
```

---

### E.7) Book / Register Page (/book)

**Primary Goals**: Frictionless registration/inquiry, lead capture

**Sections**:

#### 1. Multi-Step Form (or single-page form)
```
Step 1: Service Selection (if not pre-selected)
  Radio buttons:
  - Dance & Fitness Classes
  - Performing Arts (MC / Workshop / Theatre)
  - Spirituality Programs
  - Corporate Booking
  - Other Inquiry

Step 2: Personal Info
  Fields:
  - First Name (required)
  - Last Name (required)
  - Email (required, validated)
  - Phone (required)
  - Age Group dropdown (required)
  - City/Location (dropdown, searchable)

Step 3: Service-Specific Details
  (Conditional based on service selected)
  
  For Dance/Fitness:
    - Preferred Program (dropdown)
    - Preferred Time Slot (dropdown)
    - Is this a trial class? (yes/no)
    - Any injuries/limitations? (textarea)
  
  For Performing Arts:
    - Which service? (MC, Workshop, Theatre, Event Mgmt)
    - Event type (if Corporate)
    - Event date (date picker)
    - Expected attendees (number input)
  
  For Spirituality:
    - Program interest (Bhajan, Meditation, Breathwork)
    - Experience level (Beginner, Intermediate, Advanced)
  
  For Corporate:
    - Company name
    - Industry
    - Event type
    - Expected attendees
    - Budget range (optional)
    - Brief description of needs (textarea)

Step 4: Additional Options (optional)
  Checkboxes:
  - Subscribe to newsletter
  - Preferred contact method (Email / Phone / WhatsApp)
  - Any questions/special requests (textarea)

Step 5: Confirmation
  - Review info
  - Submit button
  - Show estimated response time ("We'll contact within 24 hours")

Acceptance Criteria:
- Form validates before submission (client-side + server-side)
- Conditional fields appear/disappear based on selections
- On submit:
  a) Lead saved to CMS (Supabase/Strapi)
  b) Confirmation email sent to user (within 1 min)
  c) Notification sent to Dr. Sharma (email + WhatsApp optional via Zapier)
  d) User redirected to Thank You page
- Mobile: single-column layout, clear input fields
- Accessibility: all inputs have labels, form is keyboard-navigable
```

#### 2. Thank You Page
```
URL: /book/success or show modal
Content:
  - "Thank You for Registering!"
  - "We've sent a confirmation to [email]"
  - "Next steps: Dr. Sharma will contact you within 24 hours via WhatsApp/phone"
  - Helpful links (back to homepage, explore other programs, FAQ)
  - Optional: appointment scheduling link (Calendly embed, Phase 2)
```

#### 3. Form Improvements (Squarespace-style)
```
- Clear progress indicator (Step X of 5)
- Autosave (draft form if user closes)
- Error messages inline, not at top
- Suggested alternatives if form seems incomplete ("Do you also need...")
- Social proof: "500+ people registered this month"
```

---

### E.8) Gallery Page (/gallery)

**Primary Goals**: Showcase lifestyle, build visual trust, drive engagement

**Sections**:

#### 1. Masonry Grid
```
Layout: Responsive grid (6 cols desktop, 2 cols mobile)
Content:
  - Photos from classes, events, community gatherings
  - Videos (thumbnail + play button)
  - Testimonial cards with photos (integrated)

Total: 30–50 items for MVP, expandable

Interactions:
  - Hover: slight zoom + overlay with category/title
  - Click: open modal with full-screen image or video
  - Keyboard nav: arrow keys to navigate, ESC to close
```

#### 2. Filter Buttons (optional Phase 1.5)
```
- All
- Dance & Fitness
- Performing Arts
- Spirituality
- Corporate Events
- Community
```

#### 3. Lightbox / Modal
```
- Full-screen image or video
- Captions below
- Arrow buttons to navigate through gallery
- Close button (X)
- Share button (optional, for social links)
```

#### 4. Upload Section (Admin Only, Phase 2)
```
- Admin can add new gallery items
- Bulk upload (multiple files)
- Auto-optimization (resize, format conversion)
- Alt text for accessibility
```

---

### E.9) About Page (/about)

**Primary Goals**: Build personal trust, establish authority, tell brand story

**Sections**:

#### 1. Dr. Reena Sharma Bio
```
Layout: Image on left, text on right (or stacked mobile)
Content:
  - Professional headshot
  - Full bio (300–500 words)
    - Background (dance, performing arts, corporate experience)
    - Certifications/credentials
    - Philosophy on wellness and community
  - Social links (Instagram, LinkedIn, etc.)
  - CTA: "Learn More" / "Book a Session"
```

#### 2. Mission & Vision
```
- Mission: "Empower individuals and communities through dance, performance, and spirituality"
- Vision: "A world where movement, creativity, and wellness are accessible to all"
- Values: Community, Excellence, Authenticity, Inclusion, Joy
```

#### 3. The FLM Story
```
- Timeline or narrative of how FLM started
- Key milestones (first class, community events, corporate partnerships)
- Why the name "Fitness Life Mantra"
- Photos of early classes or events
```

#### 4. Team
```
Layout: Grid of team member cards (if team exists)
Per member:
  - Photo
  - Name
  - Role (Instructor, Manager, etc.)
  - Specialization
  - Social link
```

#### 5. Press / Media
```
- Links to articles or podcasts featuring FLM
- Logos of media outlets or publications
- "Press Kit" PDF download
```

#### 6. Testimonials
```
- Long-form testimonials from community members (rotating quotes)
- "Read more" link to full gallery of testimonials
```

---

### E.10) Contact Page (/contact)

**Primary Goals**: Multiple contact pathways, reduce friction, convert to leads

**Sections**:

#### 1. Contact Form
```
Same as /book but simpler:
  - Name
  - Email
  - Phone
  - Subject (dropdown: Class Inquiry, Corporate, Press, Other)
  - Message (textarea)
  - Submit button

On submit:
  - Confirmation email to user
  - Email to Dr. Sharma (+ Zapier webhook)
  - Redirect to thank you page
```

#### 2. Contact Info
```
- Email: contact@flm.com (clickable mailto link)
- Phone: +91-XXXXX XXXXX (clickable tel link)
- WhatsApp: +91-XXXXX XXXXX (link to WhatsApp chat)
- Location(s): City(ies) where services offered
  - Office address (if applicable)
  - "Service area" map or description
- Hours: Mon–Fri 9 AM–6 PM IST, Sat 10 AM–4 PM IST
```

#### 3. Social Links
```
- Instagram: @fitnessmantralive (or similar)
- YouTube: FitnessLifeMantra channel
- LinkedIn: Fitness Life Mantra (for corporate inquiries)
- Facebook (optional)
```

#### 4. FAQ / Support
```
- "Frequently Asked Questions" accordion
- Common inquiries (pricing, schedules, refunds)
- "Can't find your answer? Contact us above."
```

#### 5. Map
```
- Embed Google Map of office location(s)
- Pins for multiple locations (if applicable)
- Directions link
```

#### 6. Response Promise
```
- "We respond to all inquiries within 24 hours"
- "For urgent matters, WhatsApp us directly"
```

---

### E.11) Blog (optional but recommended for SEO) (/blog)

**Primary Goals**: Drive organic traffic, build authority, engage community

**Sections**:

#### 1. Blog Index
```
Layout: Grid or list of recent posts (12 per page, with pagination)
Per post card:
  - Thumbnail image
  - Title (clickable to post)
  - Author (Dr. Reena or contributor)
  - Publish date
  - Category (Dance, Fitness, Spirituality, Corporate, Wellness)
  - Excerpt (50–100 words)
  - "Read More" link

Sidebar (desktop):
  - Search box
  - Categories (filter)
  - Recent posts
  - Popular posts
  - Newsletter signup
```

#### 2. Blog Post Template
```
URL: /blog/[post-slug]
Elements:
  - Hero image (wide, optimized)
  - Title + subtitle
  - Author info + date + read time
  - Featured quote or intro text
  - Body content (Markdown support for flexibility)
    - Headings (H2, H3)
    - Paragraphs
    - Lists
    - Embedded images
    - Quotes/callouts
    - Optional: embedded YouTube video
  - Author bio (at end)
  - Social share buttons (Twitter, LinkedIn, WhatsApp, Pinterest)
  - Related posts (3–4, same category or popular)
  - CTA box: "Ready to start? Register now" → /book or /events
  - Comments section (optional Phase 2, Disqus or similar)
```

#### 3. Featured Post
```
- Rotates weekly on blog index page
- Larger card format
```

#### 4. Content Calendar
```
Examples:
  - "5 Benefits of Bhangra Dance"
  - "Meditation Myths Debunked"
  - "How to Overcome Performance Anxiety"
  - "Corporate Wellness: Why Movement Matters"
  - "Interview: Meet Our Instructors"
  - "Event Recap: Charity Gala Photos + Testimonials"
```

---

### E.12) Policy Pages

#### Privacy Policy (/privacy)
```
Standard sections:
  - Data collection (what, why, how long)
  - Cookies
  - Third-party services (Stripe, Zapier, email service)
  - User rights (GDPR if applicable)
  - Contact for privacy concerns
```

#### Terms of Service (/terms)
```
- Liability disclaimers
- Payment terms
- Intellectual property
- Acceptable use
```

#### Cancellation & Refund Policy (/cancellation)
```
- Class cancellation policy (48h notice for refund)
- Event cancellation (weather, low registration)
- Payment refund process
- Contact email for disputes
```

#### Cookie Policy (/cookies)
```
- Cookie types (necessary, analytics, marketing)
- Opt-out options
```

---

## F) FUNCTIONAL REQUIREMENTS

### F.1) Form Submission & Lead Management

**Requirement**: All forms (Book, Contact, Newsletter) must capture and route leads correctly

| Scenario | Acceptance Criteria |
|----------|-------------------|
| **User submits Book Form** | 1) Lead stored in Supabase `leads` table with timestamp<br>2) Confirmation email sent (template: "Thanks for registering")<br>3) Notification to Dr. Sharma (email + optional Slack/WhatsApp via Zapier)<br>4) User redirected to thank you page<br>5) Form clears after 3 seconds |
| **User submits Newsletter** | 1) Email validated (format check)<br>2) Email stored in `newsletter_subscribers` table<br>3) Confirmation email sent with "Welcome gift" link<br>4) Added to email list (MailChimp, Zapier, or Supabase) |
| **User submits Contact Form** | 1) Similar to Book form<br>2) Subject line in notification helps Dr. Sharma prioritize |
| **Form Spam Protection** | 1) Rate limiting: max 5 submissions per IP per hour<br>2) reCAPTCHA v3 (silent, invisible to user)<br>3) Invalid email rejected before submit |
| **Admin Views Leads** | 1) Admin dashboard shows all leads (sorted by date)<br>2) Filter by service type, date range, status (New/Contacted/Booked)<br>3) Export to CSV<br>4) Mark as "responded" or "booked" |

### F.2) Content Management (CMS)

**Requirement**: Admin can update content without code

| Content Type | CRUD Operations | Acceptance Criteria |
|--------------|-----------------|-------------------|
| **Services** (Dance, Fitness, etc.) | Create, Read, Update, Delete | 1) Admin dashboard form to add/edit service<br>2) Fields: name, description, image, schedule, price, instructor<br>3) Schedule saved as recurring times (Mon 6-7 PM)<br>4) Auto-publishes or draft/review mode<br>5) Deleted service marked as archived (not removed) |
| **Events** | CRUD | 1) Add event with title, date, location, description, image<br>2) Recurring event option (e.g., Bhajan Sundays)<br>3) Capacity tracking (X spots left)<br>4) Calendar view updates immediately<br>5) Past events auto-archived |
| **Gallery** | CRUD | 1) Bulk upload (5+ images at once)<br>2) Auto-optimization (resize, format)<br>3) Alt text input<br>4) Drag-to-reorder<br>5) Assign to category/pillar |
| **Testimonials** | CRUD | 1) Add quote, author, photo, rating<br>2) Publish/draft toggle<br>3) Assign to service/pillar<br>4) Rotation on homepage (round-robin or random) |
| **Blog Posts** | CRUD | 1) Rich text editor (Markdown or WYSIWYG)<br>2) SEO fields: title, slug, meta description, keywords<br>3) Featured image<br>4) Category + tags<br>5) Publish date scheduling (post later)<br>6) Auto-save draft every 30 seconds |
| **Team Members** | CRUD | 1) Add instructor with photo, bio, specialization, social links<br>2) Assign to services<br>3) Display on relevant pages |

### F.3) Booking & Scheduling

**Requirement**: Users can reserve spots; admin sees bookings

| Feature | Acceptance Criteria |
|---------|-------------------|
| **Class Registration** | 1) User selects program + date/time<br>2) System checks availability (capacity)<br>3) If spots available, reserves immediately<br>4) Confirmation email with class details<br>5) Reminder email 24h before class |
| **Event RSVP** | 1) User clicks "Register" on event<br>2) Form captures RSVP details<br>3) Confirmation sent<br>4) Admin sees RSVP count |
| **Cancellation** | 1) User can cancel up to 48h before class<br>2) Automatic refund if class fee paid<br>3) Email confirmation of cancellation |
| **Admin View** | 1) Dashboard shows bookings by date<br>2) Click booking to see attendee details<br>3) Mark attendee as "attended" or "no-show"<br>4) Export attendee list (for class email, etc.) |
| **Waitlist (Phase 2)** | 1) If class full, offer waitlist option<br>2) Auto-notification if spot opens |

### F.4) Email Automation

**Requirement**: Transactional and marketing emails sent reliably

| Email Type | Trigger | Content | Acceptance Criteria |
|-----------|---------|---------|-------------------|
| **Registration Confirmation** | User submits Book form | Title, date, location, prep tips | Sent within 1 min, include ical attachment |
| **Class Reminder** | 24h before scheduled class | Class name, time, location, cancel link | Only sent if not cancelled |
| **Newsletter Welcome** | User subscribes | Welcome message + lead magnet (PDF) | Sent within 2 min |
| **Weekly Newsletter** | Admin trigger (or automated) | Upcoming events, blog posts, class highlights | Personalized if possible (segmented by service interest) |
| **Admin Notification** | Lead submitted | Lead details, service type, contact info | Sent to Dr. Sharma + cc team if applicable |
| **Payment Confirmation** | Payment processed (Phase 2) | Receipt, refund policy, support contact | Include invoice PDF |

**Email Service**: Use SendGrid, Brevo, or MailerLite via Zapier

### F.5) Search & Discovery

**Requirement**: Users easily find classes, events, content

| Feature | Acceptance Criteria |
|---------|-------------------|
| **Site Search** (global) | 1) Search bar in header/navigation<br>2) Searches: events, blog posts, services<br>3) Results show title + snippet + link<br>4) Instant results (as-you-type) |
| **Blog Category Filter** | 1) Sidebar or filter bar on /blog<br>2) Filter by: Dance, Fitness, Spirituality, Corporate, Wellness<br>3) Multi-select allowed<br>4) Results update without page reload |
| **Event Calendar Filter** | 1) Filter by: pillar, type, location<br>2) Date range picker<br>3) Results update dynamically |
| **Smart Suggestions** (Phase 2) | 1) Homepage suggests related service based on user's first visit<br>2) Blog post suggests relevant event or class |

### F.6) Performance & Loading

**Requirement**: Fast, smooth experience on all devices

| Metric | Target | Acceptance Criteria |
|--------|--------|-------------------|
| **Page Load Time** | < 3s (LCP) | 1) Hero section visible within 3s on 4G<br>2) Optimized images (WebP, AVIF)<br>3) Code-split (load JS as needed)<br>4) Lazy-load off-screen content |
| **Lighthouse Score** | ≥ 85 | 1) Performance: ≥ 85<br>2) Accessibility: ≥ 90<br>3) Best Practices: ≥ 90<br>4) SEO: ≥ 90 |
| **Mobile Responsiveness** | Perfect on all devices | 1) Tested on iPhone SE, iPhone 13 Pro, iPad, Android<br>2) Tablet layout (768px+) optimized<br>3) Touch targets ≥ 48px<br>4) No horizontal scroll |
| **Smooth Animations** | 60 FPS | 1) Scroll, hover, transitions smooth<br>2) No jank (dropped frames)<br>3) Reduced motion respected (prefers-reduced-motion) |

---

## G) NON-FUNCTIONAL REQUIREMENTS

### G.1) Security

| Requirement | Implementation |
|------------|-----------------|
| **HTTPS** | SSL/TLS certificate (auto-renew) |
| **Form Validation** | Client-side (instant feedback) + server-side (prevent tampering) |
| **Spam Protection** | reCAPTCHA v3 on all forms |
| **Rate Limiting** | Max 5 form submissions per IP per hour |
| **Sensitive Data** | No credit card data stored (use Stripe for PCI compliance) |
| **Admin Access** | Password + optional 2FA (Phase 2) |
| **GDPR Compliance** | Privacy policy, data deletion requests, cookie consent |
| **Backup** | Daily automatic backups (Supabase auto-backup) |

### G.2) Accessibility (WCAG 2.1 AA)

| Requirement | Acceptance Criteria |
|------------|-------------------|
| **Keyboard Navigation** | 1) All interactive elements accessible via Tab<br>2) Focus visible (outline or highlight)<br>3) Logical tab order |
| **Screen Reader** | 1) Alt text on all images<br>2) Semantic HTML (headings, landmarks)<br>3) ARIA labels where needed |
| **Color Contrast** | 1) Text: 4.5:1 ratio (normal), 3:1 (large)<br>2) Graphics: 3:1 minimum |
| **Motion** | 1) Respect `prefers-reduced-motion` media query<br>2) No auto-playing video with sound<br>3) Pause animations if user prefers |
| **Forms** | 1) Clear labels<br>2) Error messages associated with fields<br>3) Placeholder not replacing label |

### G.3) SEO

| Requirement | Implementation |
|------------|-----------------|
| **Meta Tags** | Title, description, OG tags (auto-generated per page) |
| **Sitemap** | Auto-generated sitemap.xml |
| **Robots** | robots.txt to guide crawlers |
| **Structured Data** | JSON-LD for: Organization, Event, LocalBusiness, LocalService, FAQPage |
| **Blog SEO** | Meta description, H1/H2 hierarchy, internal links, alt text |
| **Speed** | Core Web Vitals optimized (see Performance section) |
| **Mobile** | Mobile-first design, responsive |

**Google Analytics Events** (to track):
- Page views (auto)
- Form submissions (Book, Contact, Newsletter)
- CTA clicks (Register, Book Now, Explore)
- Event registrations (if using ticketing system)
- Blog post views
- Gallery lightbox opens
- FAQ accordion opens
- Scroll depth (% of page scrolled)

### G.4) Compliance & Privacy

| Item | Requirement |
|------|------------|
| **Privacy Policy** | Clear, linked on footer, GDPR-compliant |
| **Terms of Service** | Posted, easy to understand |
| **Cookie Consent** | Banner on first visit, option to reject non-essential |
| **Data Retention** | Leads kept 1 year, then deleted (configurable) |
| **Data Export** | Admin can export leads as CSV |
| **Right to Deletion** | User can request deletion of their data (via contact form) |

---

## H) CONTENT MODEL (CMS Data Structure)

### H.1) Collections & Schemas

#### 1. Services
```json
{
  "id": "uuid",
  "name": "Bollywood Dance",
  "slug": "bollywood-dance",
  "description": "Learn iconic Bollywood moves...",
  "pillar": "dance-fitness", // enum: dance-fitness, performing-arts, spirituality, corporate-events
  "image": "url_to_image",
  "duration": "60 mins",
  "level": ["Beginner", "Intermediate"], // multi-select
  "schedule": [
    { "day": "Monday", "time": "6:00 PM - 7:00 PM" },
    { "day": "Wednesday", "time": "6:00 PM - 7:00 PM" }
  ],
  "instructor": "ref_to_team_member",
  "price": 500, // or null if free
  "capacity": 20,
  "location": "Studio A, Bandra",
  "registrations": 15, // auto-calculated from leads
  "active": true,
  "createdAt": "2026-01-15",
  "updatedAt": "2026-02-01"
}
```

#### 2. Events
```json
{
  "id": "uuid",
  "name": "Bhajan Sundays",
  "slug": "bhajan-sundays",
  "description": "Weekly devotional singing...",
  "type": "Workshop", // enum: Workshop, Community, Corporate, Festival
  "pillar": "spirituality",
  "startDate": "2026-02-15",
  "startTime": "17:00",
  "endTime": "19:00",
  "location": "Studio C, Bandra",
  "image": "url",
  "agenda": [
    { "time": "17:00", "activity": "Welcome & breathing" },
    { "time": "17:15", "activity": "Bhajan singing" }
  ],
  "instructor": "ref_to_team_member",
  "capacity": 50,
  "registrations": 28,
  "price": 0, // free event
  "recurring": true,
  "recurrencePattern": "RRULE:FREQ=WEEKLY;BYDAY=SU",
  "active": true,
  "createdAt": "2026-01-01",
  "updatedAt": "2026-02-01"
}
```

#### 3. Leads
```json
{
  "id": "uuid",
  "type": "class-registration", // enum: class-registration, event-rsvp, inquiry, newsletter
  "serviceType": "dance-fitness",
  "service": "ref_to_service_or_event", // optional
  "firstName": "Priya",
  "lastName": "Singh",
  "email": "priya@example.com",
  "phone": "+91-XXXXXXXXXX",
  "ageGroup": "25-35",
  "location": "Mumbai",
  "message": "Interested in trial class",
  "preferredContact": "WhatsApp", // enum: Email, Phone, WhatsApp
  "status": "New", // enum: New, Contacted, Booked, Closed
  "notes": "Dr. Sharma follow-up notes",
  "createdAt": "2026-02-01T10:30:00Z",
  "respondedAt": null,
  "bookedAt": null
}
```

#### 4. Testimonials
```json
{
  "id": "uuid",
  "quote": "FLM changed my life...",
  "author": "Priya S.",
  "image": "url_to_photo",
  "service": "ref_to_service", // optional: link to Dance, Spirituality, etc.
  "rating": 5, // 1-5 stars
  "published": true,
  "displayOn": ["homepage", "dance-fitness-page"], // where to show
  "createdAt": "2026-01-20",
  "updatedAt": "2026-01-20"
}
```

#### 5. Gallery Items
```json
{
  "id": "uuid",
  "image": "url",
  "videoUrl": null, // optional YouTube/Vimeo URL
  "caption": "Bollywood class in action",
  "altText": "Group of dancers performing Bollywood moves",
  "pillar": "dance-fitness", // enum or null
  "category": "Class", // enum: Class, Event, Community, Performance
  "uploadedAt": "2026-01-15",
  "uploadedBy": "ref_to_admin",
  "featured": false
}
```

#### 6. Blog Posts
```json
{
  "id": "uuid",
  "title": "5 Benefits of Bhangra Dance",
  "slug": "5-benefits-bhangra-dance",
  "excerpt": "Bhangra is more than just dance...",
  "content": "# 5 Benefits of Bhangra...\n\n## 1. Cardiovascular Health...", // Markdown
  "author": "Dr. Reena Sharma",
  "authorImage": "url",
  "category": ["Dance", "Fitness"], // multi-select
  "tags": ["bhangra", "health", "community"],
  "featuredImage": "url",
  "metaDescription": "Discover the top 5 health benefits of Bhangra dance",
  "metaKeywords": "bhangra, dance, fitness, health",
  "readTime": 5, // minutes (auto-calculated)
  "published": true,
  "publishedAt": "2026-02-01T08:00:00Z",
  "updatedAt": "2026-02-01T08:00:00Z",
  "relatedPosts": ["ref_post_1", "ref_post_2"],
  "allowComments": true
}
```

#### 7. Team Members
```json
{
  "id": "uuid",
  "name": "Dr. Reena Sharma",
  "role": "Founder & Lead Instructor",
  "specialization": ["Bollywood Dance", "Performing Arts", "Spirituality"],
  "bio": "With 15+ years of experience...",
  "photo": "url",
  "socials": {
    "instagram": "@reenasharma",
    "linkedin": "reenasharma",
    "youtube": "reenasharma"
  },
  "services": ["ref_service_1", "ref_service_2"],
  "active": true,
  "displayOn": "about-page"
}
```

#### 8. Settings / Site Configuration
```json
{
  "siteName": "Fitness Life Mantra",
  "tagline": "Transform your body, mind, and soul",
  "logo": "url",
  "favicon": "url",
  "contactEmail": "contact@flm.com",
  "contactPhone": "+91-XXXXXXXXXX",
  "contactWhatsApp": "+91-XXXXXXXXXX",
  "locations": [
    { "name": "Bandra Studio", "address": "...", "city": "Mumbai" }
  ],
  "socialLinks": {
    "instagram": "fitnessmantralive",
    "youtube": "FitnessLifeMantra",
    "facebook": "fitnessmantralive",
    "linkedin": "fitness-life-mantra"
  },
  "colors": {
    "primary": "#06b6d4",
    "secondary": "#a855f7",
    "accent": "#ec4899"
  },
  "businessHours": {
    "monday": "9:00 AM - 6:00 PM",
    "sunday": "Closed"
  }
}
```

---

## I) ANALYTICS PLAN

### Events to Track (via Google Analytics 4)

| Event | Trigger | Purpose |
|-------|---------|---------|
| **page_view** | Any page load | Track traffic by page |
| **scroll_depth** | User scrolls to 25%, 50%, 75%, 100% | Engagement metric |
| **cta_click** | User clicks CTA button (Register, Book, Explore) | Conversion funnel |
| **form_submit** | User submits any form | Lead generation |
| **form_error** | Form validation error | UX issue detection |
| **service_view** | User clicks on service card | Interest metric |
| **event_registration** | User registers for event | Conversion |
| **blog_view** | User reads blog post (>2 min on page) | Content engagement |
| **gallery_open** | User opens lightbox | Portfolio engagement |
| **search** | User searches site | Keyword/intent analysis |
| **newsletter_signup** | User subscribes | List growth |
| **contact_form_submit** | User submits contact form | Inquiry source |

### Dashboards to Create

1. **Homepage Dashboard** (weekly)
   - Visitors, pageviews, bounce rate
   - Top CTAs clicked
   - Form conversions (funnel)

2. **Services Dashboard** (monthly)
   - Views per service/pillar
   - Conversion rate (view → registration)
   - Popular times/days

3. **Content Dashboard** (monthly)
   - Blog post views + engagement
   - Most popular posts
   - Scroll depth by post

4. **Lead Dashboard** (weekly)
   - New leads by service type
   - Lead source (organic, direct, etc.)
   - Response time

---

## J) INTEGRATIONS

### Required (MVP)

| Service | Purpose | Setup |
|---------|---------|-------|
| **Email Service** | Send transactional + marketing emails | SendGrid or Brevo API |
| **Payment Gateway** (Phase 2) | Process payments | Stripe API (PCI-compliant) |
| **CMS** | Manage content | Supabase (PostgreSQL) or Sanity.io |
| **Form Submission** | Capture leads | Zapier (webhook) or direct API |
| **Analytics** | Track user behavior | Google Analytics 4 |
| **Google Search Console** | Monitor SEO | Google Search Console API |

### Optional (Phase 2)

| Service | Purpose |
|---------|---------|
| **Slack** | Admin notifications for new leads |
| **WhatsApp Business API** | Send reminders, confirmations via WhatsApp |
| **Calendly** | Booking & scheduling |
| **MailChimp** | Email list management |
| **Typeform** | Advanced form builder (alternative to custom forms) |
| **Loom** | Video testimonials |
| **Hotjar** | Session recording for UX insights |

---

## K) ROLLOUT PLAN

### Phase 1: MVP (8 weeks)
**Goal**: Minimum viable product launches

**Week 1–2: Setup**
- [ ] Choose CMS (Supabase recommended for speed)
- [ ] Set up Next.js project, Tailwind CSS
- [ ] Design finalized (Figma or Webflow)
- [ ] Git repo initialized, CI/CD pipeline

**Week 2–3: Core Pages**
- [ ] Homepage built (hero, pillars, testimonials, CTA)
- [ ] Layout/navigation finalized
- [ ] Footer, basic styling

**Week 3–4: Pillar Pages**
- [ ] Dance & Fitness page
- [ ] Performing Arts page
- [ ] Spirituality page
- [ ] Corporate & Events page
- [ ] Content populated from CMS

**Week 4–5: Forms & Lead Capture**
- [ ] Book/Register form (multi-step)
- [ ] Contact form
- [ ] Newsletter signup
- [ ] Email automation (SendGrid setup)
- [ ] Lead storage (Supabase)

**Week 5–6: Gallery & Content Pages**
- [ ] Gallery page with lightbox
- [ ] About page
- [ ] Events/Calendar page (basic)
- [ ] Blog index + sample posts

**Week 6–7: Admin Dashboard**
- [ ] Admin login
- [ ] Lead management UI
- [ ] Content editor (services, gallery, testimonials)
- [ ] Basic analytics view

**Week 7–8: QA & Launch**
- [ ] Testing (functional, performance, accessibility)
- [ ] Lighthouse audit
- [ ] Mobile testing
- [ ] Security audit
- [ ] SEO audit (meta tags, sitemap, schema)
- [ ] Deploy to production
- [ ] Post-launch monitoring

**Launch Date**: End of March 2026

---

### Phase 2: Advanced Features (Q2 2026)
- [ ] Online payment integration (Stripe)
- [ ] Advanced scheduling/calendar booking
- [ ] Email marketing automation (sequences)
- [ ] Blog comment system
- [ ] Advanced admin features (user roles, scheduling posts)
- [ ] Mobile app (React Native, Phase 3)
- [ ] Customer portal (past bookings, payment history)
- [ ] AI chatbot (GPT integration)

---

## L) RISKS & MITIGATIONS

| Risk | Severity | Mitigation |
|------|----------|-----------|
| **Content not ready on time** | High | Create placeholder content early; Dr. Sharma uploads real content in parallel |
| **Poor mobile performance** | High | Performance testing from Week 3; use Next.js Image component; lazy-load content |
| **Low conversion rates** | Medium | A/B test CTA copy/placement; gather user feedback; iterate |
| **Email deliverability issues** | Medium | Use reputable email service (SendGrid); monitor bounce rates; verify DKIM/SPF |
| **Security breach / data leak** | High | Use HTTPS, 2FA, rate limiting, reCAPTCHA, regular security audits |
| **CMS downtime** | Medium | Choose reliable provider (Supabase has 99.99% uptime); automated backups |
| **Team capacity** | Medium | Start with one developer; outsource design if needed; prioritize MVP scope |

---

## M) OPEN QUESTIONS & ASSUMPTIONS

### Assumptions
1. Dr. Reena has content ready (photos, testimonials, class schedules)
2. No existing customer database to migrate (starting fresh)
3. Budget allows for managed services (Supabase, SendGrid, Stripe)
4. Website is marketing tool, not sole lead source (social media continues)
5. English-only for MVP (Hindi added later)
6. No multi-language or multi-location complexity in MVP

### Open Questions
1. **Payments**: Will classes/events be paid upfront or after trial?
2. **Live Classes**: Will there be online Zoom classes linked from site?
3. **Instructor Photos**: Can we use stock photos or must they be professional headshots?
4. **Business Hours**: What are official business hours for support?
5. **Refund Policy**: What are the refund terms (48h cancellation, etc.)?
6. **Analytics**: Any specific metrics or KPIs to track?
7. **Localization**: Plans for Hindi/regional language versions?
8. **Video Hosting**: Should videos be on YouTube, Vimeo, or embedded player?
9. **Testimonials**: Can we reach out to past students for testimonials, or are they already collected?
10. **Press/Media**: Any existing press kit or media assets?

---

## N) APPENDIX: REUSABLE SECTION LIBRARY

### Section 1: Hero Block
```json
{
  "name": "Hero Section",
  "description": "Full-width hero with background, text, and CTA",
  "configurable_fields": {
    "headline": "string",
    "subheading": "string",
    "backgroundImage": "url",
    "backgroundVideo": "url",
    "cta_primary_text": "string",
    "cta_primary_link": "string",
    "cta_secondary_text": "string",
    "cta_secondary_link": "string",
    "textAlignment": "center|left|right"
  },
  "responsive": true,
  "examples": [
    {
      "page": "Homepage",
      "headline": "Fitness Life Mantra",
      "subheading": "Transform your body, mind, and soul"
    },
    {
      "page": "Dance & Fitness",
      "headline": "Dance & Fitness",
      "subheading": "Move your body, free your mind"
    }
  ]
}
```

### Section 2: Feature Grid
```json
{
  "name": "Feature Grid (Cards)",
  "description": "Responsive grid of cards with icon, title, description, CTA",
  "configurable_fields": {
    "title": "string",
    "subtitle": "string",
    "columns": "number (2, 3, 4)",
    "cards": [
      {
        "icon": "url or emoji",
        "title": "string",
        "description": "string",
        "cta_text": "string",
        "cta_link": "string"
      }
    ]
  },
  "responsive": true,
  "examples": [
    {
      "page": "Homepage",
      "title": "Our Pillars",
      "columns": 2,
      "cards": 4
    },
    {
      "page": "Dance & Fitness",
      "title": "Programs",
      "columns": 3,
      "cards": 6
    }
  ]
}
```

### Section 3: Testimonials Carousel
```json
{
  "name": "Testimonials Carousel",
  "description": "Auto-scrolling carousel of user testimonials",
  "configurable_fields": {
    "title": "string",
    "autoScroll": "boolean",
    "scrollInterval": "number (seconds)",
    "showDots": "boolean",
    "testimonials": [
      {
        "quote": "string",
        "author": "string",
        "photo": "url",
        "rating": "number (1-5)",
        "service": "string (optional)"
      }
    ]
  },
  "responsive": true,
  "examples": [
    {
      "page": "Homepage",
      "title": "What Our Students Say",
      "autoScroll": true,
      "scrollInterval": 8
    }
  ]
}
```

### Section 4: CTA Banner
```json
{
  "name": "CTA Banner",
  "description": "Full-width call-to-action section",
  "configurable_fields": {
    "background": "gradient|color|image",
    "headline": "string",
    "description": "string",
    "cta_text": "string",
    "cta_link": "string",
    "cta_style": "primary|secondary"
  },
  "examples": [
    {
      "page": "All pillar pages",
      "headline": "Ready to Get Started?",
      "cta_text": "Register Now"
    }
  ]
}
```

### Section 5: Form Block
```json
{
  "name": "Form Section",
  "description": "Embedded form with custom fields",
  "configurable_fields": {
    "title": "string",
    "description": "string",
    "fields": [
      {
        "name": "string",
        "type": "text|email|phone|textarea|select|radio|checkbox",
        "required": "boolean",
        "label": "string"
      }
    ],
    "submitText": "string",
    "successMessage": "string",
    "redirectUrl": "string (optional)"
  },
  "examples": [
    {
      "page": "/book",
      "title": "Register for a Class",
      "fields": 8
    }
  ]
}
```

---

## Summary: Success Criteria Checklist

### Launch Checklist (Phase 1 MVP)
- [ ] All core pages built and responsive
- [ ] Forms submitting and routing leads correctly
- [ ] Email confirmations working
- [ ] Admin dashboard functional (add/edit content)
- [ ] Gallery lightbox working
- [ ] Blog posts displaying correctly
- [ ] Mobile testing complete (all screen sizes)
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] Performance audit passed (Lighthouse ≥ 85)
- [ ] SEO audit passed (meta tags, sitemap, schema)
- [ ] Security audit complete (HTTPS, form validation, reCAPTCHA)
- [ ] Analytics configured (Google Analytics 4)
- [ ] Backup/disaster recovery plan in place
- [ ] Documentation written (admin guide, content guidelines)
- [ ] Team trained on admin dashboard

### Post-Launch (First Month)
- [ ] Monitor analytics (traffic, conversions, bounce rate)
- [ ] Gather user feedback (forms, WhatsApp, DMs)
- [ ] Fix bugs/issues within 24h
- [ ] Iterate CTAs based on performance data
- [ ] Plan Phase 2 features based on learnings

---

**END OF PRD**

---

## Document Control

| Version | Author | Date | Changes |
|---------|--------|------|---------|
| 1.0 | Senior PM + UX Architect | Feb 1, 2026 | Initial draft |
| 1.1 | (Pending feedback) | TBD | Client feedback incorporated |

---

**Next Steps**:
1. Review this PRD with Dr. Reena Sharma and team
2. Validate scope and timeline
3. Identify any gaps or clarifications needed
4. Finalize design mockups
5. Kick off development (Week 1)
