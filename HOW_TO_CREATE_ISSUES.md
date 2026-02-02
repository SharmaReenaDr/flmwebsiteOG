# How to Create GitHub Issues - Step by Step Guide

## 🎯 Quick Start (Manual Method - Recommended)

### Step 1: Go to Your Repository Issues Page
```
https://github.com/SharmaReenaDr/flmwebsite/issues
```

### Step 2: Click "New Issue" Button

### Step 3: Copy-Paste from GITHUB_ISSUES.md
Open `GITHUB_ISSUES.md` and copy each issue's content.

---

## 📋 Example: Creating First Issue

### Title:
```
[CRITICAL] Merge Live & Localhost Versions
```

### Body:
````markdown
## Description
Merge GoDaddy live site with localhost video-based version.

## Tasks
- [ ] Merge GoDaddy live site with localhost video-based version
- [ ] Preserve domain, SEO, and working links
- [ ] Replace static backgrounds with video backgrounds
- [ ] Maintain clean routing and navigation
- [ ] Test all existing functionality

## Acceptance Criteria
- ✓ Site remains live during merge
- ✓ No broken links
- ✓ All videos load correctly
- ✓ Mobile responsiveness maintained

## Priority
🔴 Critical

## Milestone
Milestone 1: Core Infrastructure & Merge
````

### Labels:
- `critical`
- `deployment`
- `infrastructure`

### Assignee:
Assign to developer

---

## 🏷 Create Labels First

Before creating issues, set up these labels in your repository:

**Go to:** `https://github.com/SharmaReenaDr/flmwebsite/labels`

### Priority Labels:
- `critical` (Red: #d73a4a)
- `high-priority` (Orange: #ff8c00)
- `medium-priority` (Yellow: #fbca04)
- `low-priority` (Green: #0e8a16)

### Page Labels:
- `homepage` (Blue: #0075ca)
- `dance-fitness` (Blue: #0075ca)
- `acting-theatre` (Blue: #0075ca)
- `spirituality` (Blue: #0075ca)
- `community` (Blue: #0075ca)
- `about` (Blue: #0075ca)
- `products` (Blue: #0075ca)

### Type Labels:
- `video` (Purple: #7057ff)
- `content` (Light blue: #d4c5f9)
- `copy` (Light blue: #d4c5f9)
- `design` (Pink: #e99695)
- `ux` (Pink: #e99695)
- `forms` (Orange: #ff8c00)
- `payment` (Green: #0e8a16)

### Quality Labels:
- `performance` (Yellow: #fbca04)
- `seo` (Green: #0e8a16)
- `accessibility` (Green: #0e8a16)
- `testing` (Red: #d73a4a)
- `qa` (Red: #d73a4a)

### Process Labels:
- `deployment` (Orange: #ff8c00)
- `documentation` (Light gray: #d1d5da)
- `handoff` (Light gray: #d1d5da)
- `bug` (Red: #d73a4a)
- `enhancement` (Green: #a2eeef)
- `feature` (Green: #a2eeef)
- `component` (Purple: #7057ff)

---

## 📊 Create Milestones

**Go to:** `https://github.com/SharmaReenaDr/flmwebsite/milestones`

Create these 18 milestones:

1. **Milestone 1: Core Infrastructure & Merge**  
   Due: Week 1  
   Description: Merge live and localhost, optimize videos, mobile-first

2. **Milestone 2: Homepage Enhancements**  
   Due: Week 2  
   Description: Full-screen video, four pillars, What is FLM

3. **Milestone 3: Dance & Fitness Page**  
   Due: Week 2-3  
   Description: Video background, content structure, media gallery

4. **Milestone 4: Acting & Theatre Page**  
   Due: Week 3  
   Description: Performance videos, offerings, gallery

5. **Milestone 5: Spirituality Page**  
   Due: Week 3  
   Description: Calm videos, meditation content, programs

6. **Milestone 6: Community & Events Page**  
   Due: Week 3  
   Description: Event footage, services, testimonials

7. **Milestone 7: About Founder Page**  
   Due: Week 4  
   Description: Dr. Reena Sharma profile, philosophy

8. **Milestone 8: Products Page (Coming Soon)**  
   Due: Week 4  
   Description: Placeholder for future products

9. **Milestone 9: Registration & Booking System**  
   Due: Week 5  
   Description: Forms for classes, workshops, events

10. **Milestone 10: Payment Integration**  
    Due: Week 5  
    Description: Display payment options, flexible pricing

11. **Milestone 11: Shared Features & Components**  
    Due: Week 5  
    Description: Testimonials, contact info, media galleries

12. **Milestone 12: Design System & UX**  
    Due: Week 5-6  
    Description: Squarespace-inspired design, typography, animations

13. **Milestone 13: SEO & Accessibility**  
    Due: Week 6  
    Description: Meta tags, WCAG compliance, semantic HTML

14. **Milestone 14: Performance & Quality**  
    Due: Week 6  
    Description: Optimization, cross-browser testing

15. **Milestone 15: Content & Copy**  
    Due: Week 6  
    Description: Quotes, science content, transformation messaging

16. **Milestone 16: Testing & QA**  
    Due: Week 7  
    Description: Functional, content, and visual QA

17. **Milestone 17: Deployment & Launch**  
    Due: Week 7  
    Description: Pre-launch checklist, production deployment

18. **Milestone 18: Documentation & Handoff**  
    Due: Week 8  
    Description: Developer docs, content guide, training

---

## 🤖 Automated Method (Advanced)

### Requirements:
1. GitHub Personal Access Token
2. `jq` command-line tool
3. Bash shell

### Setup:

1. **Create GitHub Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scope: `repo` (full control)
   - Copy the token

2. **Install jq (if not installed):**
   ```bash
   brew install jq
   ```

3. **Set your token:**
   ```bash
   export GITHUB_TOKEN=your_token_here
   ```

4. **Run the script:**
   ```bash
   ./create_github_issues.sh
   ```

---

## 📋 Issue Creation Order (Recommended)

### Phase 1: Critical Infrastructure (Create First)
1. Issue #1 - Merge Live & Localhost
2. Issue #2 - Performance Optimization
3. Issue #3 - Mobile-First Design

### Phase 2: Homepage (Create Next)
4. Issue #4 - Homepage Video Background
5. Issue #5 - Four Pillars Section
6. Issue #6 - What is FLM Section

### Phase 3: Service Pages (Create in Batches)
7-11. Dance & Fitness (5 issues)
12-13. Acting & Theatre (2 issues)
14-16. Spirituality (3 issues)
17-19. Community & Events (3 issues)

### Phase 4: Features & Quality
20-21. About Founder (2 issues)
22. Products Page (1 issue)
23-25. Registration & Booking (3 issues)
26-27. Payment Integration (2 issues)
28-32. Shared Features (5 issues)
33-35. Design System (3 issues)
36-37. SEO & Accessibility (2 issues)
38-40. Performance & Testing (3 issues)
41-43. Content & Copy (3 issues)

### Phase 5: Launch
44-46. Testing & QA (3 issues)
47-49. Deployment (3 issues)
50-52. Documentation (3 issues)

---

## ✅ Quick Checklist

Before starting:
- [ ] Create all labels
- [ ] Create all milestones
- [ ] Assign developer to repository

While creating issues:
- [ ] Use clear, descriptive titles
- [ ] Add appropriate labels
- [ ] Assign to correct milestone
- [ ] Include acceptance criteria
- [ ] Add priority indicator

After creating issues:
- [ ] Create project board (Kanban)
- [ ] Move issues to "To Do" column
- [ ] Prioritize critical path
- [ ] Review with developer

---

## 🎯 Project Board Setup

**Go to:** `https://github.com/SharmaReenaDr/flmwebsite/projects`

### Create Board: "FLM Website Rebuild"

### Columns:
1. **📋 Backlog** - All issues not yet started
2. **🎯 To Do** - Prioritized for current/next sprint
3. **🏗 In Progress** - Currently being worked on
4. **👀 Review** - Needs CEO review
5. **✅ Done** - Completed and approved

### Add Issues to Board:
Drag issues from the backlog into appropriate columns.

---

## 📞 Need Help?

If you encounter issues:
1. Check GitHub's documentation: https://docs.github.com/en/issues
2. Review video tutorials on GitHub Issues
3. Contact developer for assistance

---

## 🎉 You're Ready!

Once issues are created:
1. ✅ Developer can see full scope
2. ✅ Progress is trackable
3. ✅ Communication is centralized
4. ✅ Timeline is clear
5. ✅ Accountability is established

**Start creating issues now!**

Visit: https://github.com/SharmaReenaDr/flmwebsite/issues/new
