# 📌 PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Fitness Life Mantra – Conscious Wellness Website

**Developer / VS Code Implementation Version**

---

## 1. PRODUCT SUMMARY

**Product Name:** Fitness Life Mantra
**Type:** Interactive Conscious Wellness Website
**Primary Goal:**
Create an immersive, calm, high-energy, visually rich website that integrates **fitness through dance, spirituality, and acting/theatre** into one cohesive conscious wellness platform.

The website must feel **alive**, **flowing**, and **emotionally grounding** from the first second.

---

## 2. CORE UX PRINCIPLES (NON-NEGOTIABLE)

* Homepage must be **full screen (100vh)**
* **No scrolling required on homepage**
* Motion should feel like **flowing water / floating energy**
* Use **subtle animation**, not aggressive
* Design style:

  * Dark luxury
  * Glassmorphism
  * 3D depth
  * Soft glow
* Website must feel:

  * Calm
  * Energizing
  * Spiritual
  * Premium
  * Modern

---

## 3. GLOBAL DESIGN REQUIREMENTS

### 3.1 Background System

* Full-page animated background
* Visual concept: **floating water / slow flowing energy**
* Acceptable methods:

  * Looping background video
  * CSS animation
  * Canvas/WebGL (optional)
* Background must:

  * Never distract from text
  * Have dark overlay for readability
  * Continue smoothly across pages

---

### 3.2 Typography

* Large, elegant headings
* White or off-white text
* Subtle glow on main titles
* No cluttered fonts

---

### 3.3 Layout

* Centered content
* Large spacing
* Minimal text per screen
* Glass-style cards for content blocks

---

## 4. NAVIGATION (TOP BAR)

### 4.1 Navigation Style

* Sticky top navigation
* Center-aligned menu items
* Pill-style buttons
* Glassmorphism background
* Hover:

  * Slight lift
  * Glow
  * Smooth transition

### 4.2 Navigation Items (Exact Order)

```
Home
Dance & Fitness
Acting & Theatre
Spirituality
Community & Events
Products
Register / Book
```

⚠️ Do NOT use a generic "Services" tab.

---

## 5. HOMEPAGE (NO SCROLL PAGE)

### 5.1 Homepage Structure

**Full Screen (100vh)** layout divided visually into:

1. Brand Identity
2. Headline
3. Three Pillars (Primary CTA)

---

### 5.2 Brand Identity Section

* Display logo prominently (center or top-center)
* Logo effect:

  * Soft glow
  * Slight shimmer or shine
* Logo text:
  **Fitness Life Mantra**

---

### 5.3 Headline Text (Exact Intent)

Main Title:

```
Fitness Life Mantra
```

Subtitle:

```
Conscious Wellness Movement with Purpose
```

Supporting Line:

```
You are at the right place.
```

---

## 6. THE THREE CORE PILLARS (HOMEPAGE)

All three pillars must be **visible immediately** on homepage without scrolling.

Each pillar:

* Large clickable section
* Video or animated background
* Minimal text
* Clear emotional identity

---

### 6.1 PILLAR 1: DANCE & FITNESS

**Homepage Tile**

* Background: energetic dance / movement visuals
* Title: `Dance & Fitness`

#### On Click → `/dance-fitness`

##### Page Requirements:

* Floating water background continues
* Registration CTA visible immediately

##### Content Includes:

* Dance-based fitness workouts
* Folk dance styles
* Bollywood
* Contemporary
* Freestyle

##### Scientific Explanation Section:

Explain clearly that this is **science-backed movement**, including:

* Improves balance
* Enhances brain–body coordination
* Supports mental health
* Builds strength and confidence
* Helps individuals become their best version

##### Media:

* Embedded videos of previous sessions
* Photo gallery
* Smooth transitions

---

### 6.2 PILLAR 2: SPIRITUALITY

**Homepage Tile**

* Background: calm water, meditation, bhajan visuals
* Title: `Spirituality`

#### On Click → `/spirituality`

##### Page Requirements:

* Calm animated background
* Focus on inner stillness

##### Content Includes:

* Bhajan
* Bhajan clubbing
* Meditation
* Inner practices

##### Media:

* Bhajan session videos
* Group meditation photos
* Calm, slow animations

---

### 6.3 PILLAR 3: ACTING & THEATRE

**Homepage Tile**

* Background: stage lights, performance visuals
* Title: `Acting & Theatre`

#### On Click → `/acting-theatre`

##### Content Includes:

* Skits
* Mime
* Musical theatre
* Performance art
* Creative expression workshops

##### Purpose:

* Build confidence
* Emotional expression
* Voice and body awareness
* Storytelling skills

---

## 7. COMMUNITY & EVENTS

### Route:

`/community-events`

### Features:

* Upcoming events list
* Past events gallery
* Bookable workshops
* Visual-first layout
* Community-centric tone

---

## 8. PRODUCTS

### Route:

`/products`

### Requirements:

* Clean grid layout
* Minimal distraction
* Product storytelling aligned with wellness
* Easy checkout flow (future-ready)

---

## 9. REGISTRATION / BOOKING

### Requirements:

* Floating form UI
* Simple fields
* Minimal friction
* Background motion continues
* Mobile-friendly

---

## 10. FOUNDER SECTION

### Placement:

* Can be a section or dedicated page

### Content:

**Meet Dr. Reena Sharma**

* Founder of Fitness Life Mantra
* Researcher + Creative Performer
* Integrates:

  * Science
  * Movement
  * Theatre
  * Spirituality
* Based in the USA
* Vision: conscious living through integrated practices

---

## 11. TECH & IMPLEMENTATION NOTES (FOR VS CODE)

* Prefer modular components
* Reusable background wrapper
* Smooth transitions (CSS or JS)
* Optimize video loading
* Mobile responsiveness mandatory
* Accessibility: contrast, keyboard navigation

---

## 12. SUCCESS METRICS

* User feels calm within 3 seconds
* User understands all 3 pillars instantly
* Registration is intuitive
* Visual identity feels premium and memorable

---

### ✅ END OF PRD
