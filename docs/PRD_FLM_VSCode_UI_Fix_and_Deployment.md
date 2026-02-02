# 📌 PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Fitness Life Mantra – UI Fix, Background Animation & Deployment

**VS Code / GitHub / Live Deployment Version**

---

## 1. CONTEXT & CURRENT STATE

- The Fitness Life Mantra website already exists in VS Code
- Domain already purchased and active: `myfitnesslifemantra.com`
- All website files, content, and routing already exist locally
- Current issues:
  - Top navigation bar items are misaligned
  - Navigation tabs are not visually centered or consistent
  - Background is static black and lacks emotional depth
- Immediate requirement:
  - Fix UI
  - Add animated background
  - Connect project to GitHub
  - Run on localhost
  - Deploy live immediately

---

## 2. PRIMARY OBJECTIVES

### UI / UX
1. Fix top navigation bar alignment
2. Make navigation visually balanced, centered, and premium
3. Add animated flowing-water background
4. Integrate Nataraj image as background (symbolic + spiritual)
5. Maintain black/dark theme while adding motion and depth

### Technical
6. Connect VS Code project to GitHub
7. Enable localhost development
8. Publish changes to live domain

---

## 3. TOP NAVIGATION BAR – REQUIRED FIXES

### 3.1 Problem
- Menu items are not aligned properly
- Tabs do not coincide on the same baseline
- Spacing is inconsistent
- Looks unprofessional and visually unstable

### 3.2 Required Solution

**Layout**
- Navigation must be horizontally centered
- All tabs must sit on the same baseline
- Equal spacing between tabs
- Use flexbox or grid, not manual margins

**Visual Style**
- Pill-style tabs
- Glassmorphism background for navbar
- Subtle glow on hover
- Active tab highlighted clearly

**Technical Requirements**
- Use `<nav>` semantic tag
- One single container controlling alignment
- No absolute positioning for tabs
- Must be responsive (desktop + mobile)

---

## 4. BACKGROUND SYSTEM (CRITICAL REQUIREMENT)

### 4.1 Base Color
- Base background remains black / very dark
- Dark navy gradients allowed

### 4.2 Animated Flowing Water Effect

The background must feel:
- Like water flowing
- Calm, slow, meditative
- Continuous animation (loop)

Acceptable Implementations:
- CSS animation (gradient movement)
- Canvas animation
- WebGL shader (optional)
- Lightweight looping video

⚠️ **Animation must be subtle, not distracting.**

### 4.3 Nataraj Background Image

**Image Usage:**
- Background image of Nataraj (Shiva as Cosmic Dancer)
- Image must be:
  - Low opacity
  - Blended into background
  - Symbolic, not overpowering

**Layering Order:**
1. Black base layer
2. Nataraj image (centered or slightly offset)
3. Flowing water animation overlay
4. Dark gradient overlay for readability
5. Content layer

---

## 5. HOMEPAGE REQUIREMENTS (WITH NEW BACKGROUND)
- Homepage remains 100vh
- No scrolling required
- Logo + title visible immediately
- Three pillars still visible
- Background animation + Nataraj visible but subtle

---

## 6. TECHNICAL SETUP – VS CODE

### 6.1 Local Development

Developer must ensure:
- Project runs on localhost
- Commands documented (example):

```bash
npm install
npm run dev
```

or equivalent (depending on stack)

- Hot reload enabled
- Errors logged clearly

---

## 7. GITHUB INTEGRATION (MANDATORY)

### 7.1 GitHub Setup

Steps developer must follow:
1. Initialize Git in existing VS Code project
2. Create a GitHub repository
3. Connect local project to GitHub remote
4. Push all current code

Example workflow:

```bash
git init
git add .
git commit -m "Initial commit - Fitness Life Mantra website"
git branch -M main
git remote add origin <github-repo-url>
git push -u origin main
```

---

## 8. LIVE DEPLOYMENT

### 8.1 Deployment Requirements
- Website must be deployable directly from GitHub
- Domain `myfitnesslifemantra.com` must point to deployed site
- SSL enabled
- Fast load time

### 8.2 Acceptable Hosting Options
- GitHub Pages
- Vercel
- Netlify
- Existing hosting (if already linked)

Developer must:
- Configure build settings
- Connect domain
- Verify DNS
- Ensure site reflects latest GitHub commit

---

## 9. NON-NEGOTIABLE DESIGN RULES
- No clutter
- No misaligned UI
- No harsh animations
- No generic templates
- Website must feel:
  - Conscious
  - Spiritual
  - Modern
  - Calm
  - Premium

---

## 10. SUCCESS CRITERIA
- Navigation tabs perfectly aligned
- Background visibly animated and calming
- Nataraj image subtly present
- Website runs on localhost without errors
- Changes pushed to GitHub
- Website live on domain

---

## 11. FINAL NOTE TO DEVELOPER / VS CODE AI

This website is not just a UI project.
It is a conscious wellness movement.
Every animation, alignment, and transition must feel intentional, calm, and alive.

---

### ✅ END OF PRD (VS CODE IMPLEMENTATION VERSION)
