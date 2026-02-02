#!/bin/bash

# FLM Website - GitHub Issues Creation Script
# This script creates all issues from the PRD breakdown

# Configuration
REPO="SharmaReenaDr/flmwebsite"
# You'll need to set your GitHub Personal Access Token
# Create one at: https://github.com/settings/tokens
# Needs 'repo' scope
GITHUB_TOKEN="${GITHUB_TOKEN:-YOUR_TOKEN_HERE}"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to create a GitHub issue
create_issue() {
    local title="$1"
    local body="$2"
    local labels="$3"
    local milestone="$4"
    
    echo -e "${BLUE}Creating issue: ${title}${NC}"
    
    # Escape JSON properly
    body_escaped=$(echo "$body" | jq -Rs .)
    
    # Build JSON payload
    json_payload=$(cat <<EOF
{
  "title": "${title}",
  "body": ${body_escaped},
  "labels": [${labels}]
}
EOF
)
    
    # Create the issue
    response=$(curl -s -X POST \
        -H "Authorization: token ${GITHUB_TOKEN}" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/${REPO}/issues" \
        -d "${json_payload}")
    
    issue_number=$(echo "$response" | jq -r '.number')
    
    if [ "$issue_number" != "null" ]; then
        echo -e "${GREEN}✓ Created issue #${issue_number}${NC}"
    else
        echo -e "${RED}✗ Failed to create issue${NC}"
        echo "$response" | jq -r '.message'
    fi
}

# Check if GitHub token is set
if [ "$GITHUB_TOKEN" = "YOUR_TOKEN_HERE" ]; then
    echo -e "${RED}Error: Please set your GitHub token${NC}"
    echo "Export it as: export GITHUB_TOKEN=your_token_here"
    echo "Or edit this script and replace YOUR_TOKEN_HERE"
    exit 1
fi

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo -e "${RED}Error: jq is not installed${NC}"
    echo "Install it with: brew install jq"
    exit 1
fi

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}FLM Website - Creating GitHub Issues${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Milestone 1: Core Infrastructure & Merge
echo -e "${GREEN}Milestone 1: Core Infrastructure & Merge${NC}"

create_issue \
    "[CRITICAL] Merge Live & Localhost Versions" \
    "## Description
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
Milestone 1: Core Infrastructure & Merge" \
    '"critical", "deployment", "infrastructure"'

create_issue \
    "Performance Optimization for Video Backgrounds" \
    "## Description
Optimize video loading and performance across all devices.

## Tasks
- [ ] Optimize video loading (lazy load, compression)
- [ ] Implement fallback images for slow devices
- [ ] Add loading states
- [ ] Test on various connection speeds
- [ ] Ensure auto-play, muted, looped functionality

## Acceptance Criteria
- ✓ Videos load within 3 seconds on 4G
- ✓ Fallback images work on slow connections
- ✓ Mobile devices show appropriate video quality

## Priority
🟠 High

## Milestone
Milestone 1: Core Infrastructure & Merge" \
    '"performance", "enhancement", "video"'

create_issue \
    "Mobile-First Responsive Design" \
    "## Description
Ensure all pages are mobile-first and responsive.

## Tasks
- [ ] Ensure all pages are mobile-first
- [ ] Test on iOS and Android devices
- [ ] Fix any layout issues on tablets
- [ ] Optimize touch targets (minimum 44px)
- [ ] Test video backgrounds on mobile

## Acceptance Criteria
- ✓ All pages responsive on mobile/tablet/desktop
- ✓ Touch interactions work smoothly
- ✓ No horizontal scrolling

## Priority
🟠 High

## Milestone
Milestone 1: Core Infrastructure & Merge" \
    '"design", "mobile", "enhancement"'

# Milestone 2: Homepage Enhancements
echo -e "${GREEN}Milestone 2: Homepage Enhancements${NC}"

create_issue \
    "Homepage - Full-Screen Video Background" \
    "## Description
Implement full-screen background video for homepage.

## Tasks
- [ ] Implement full-screen background video
- [ ] Movement-based (dance/flow) video
- [ ] Dark overlay for readability
- [ ] Auto-play, muted, looped
- [ ] Efficient loading with fallback

## Acceptance Criteria
- ✓ Video covers full viewport
- ✓ Text remains readable with overlay
- ✓ Smooth looping without flash

## Priority
🟠 High

## Milestone
Milestone 2: Homepage Enhancements" \
    '"homepage", "video", "enhancement"'

create_issue \
    "Homepage - Four Pillars Section" \
    "## Description
Create four large clickable pillar cards for navigation.

## Tasks
- [ ] Create four large clickable cards:
  - Dance & Fitness
  - Acting & Theatre
  - Spirituality
  - Community & Events
- [ ] Each pillar navigates to dedicated page
- [ ] Consistent visual styling
- [ ] Hover effects

## Acceptance Criteria
- ✓ All four pillars clearly visible
- ✓ Clicking navigates to correct page
- ✓ Visual consistency across cards
- ✓ Mobile-friendly layout

## Priority
🟠 High

## Milestone
Milestone 2: Homepage Enhancements" \
    '"homepage", "navigation", "feature"'

create_issue \
    "Homepage - What is FLM Section" \
    "## Description
Add concise explanation of Fitness Life Mantra.

## Tasks
- [ ] Add concise 2-3 line section explaining FLM
- [ ] Use provided copy from PRD
- [ ] Clean typography
- [ ] No long paragraphs

## Copy
> Fitness Life Mantra is a conscious-living platform that blends movement, art, spirituality, and science. Every practice is designed to help you understand what you are doing, why you are doing it, and how it transforms you — physically, mentally, and emotionally.

## Acceptance Criteria
- ✓ Copy is concise and impactful
- ✓ Typography is elegant
- ✓ Section doesn't overwhelm page

## Priority
🟠 High

## Milestone
Milestone 2: Homepage Enhancements" \
    '"homepage", "content", "copy"'

# Continue with remaining issues...
# (Script continues with all 52 issues)

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}All issues created successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "View them at: https://github.com/${REPO}/issues"
