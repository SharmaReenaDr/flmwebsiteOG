#!/bin/bash

# Fitness Life Mantra - Vercel Deployment Script
# This script automates deployment to Vercel with your custom domain

echo "🚀 Fitness Life Mantra - Vercel Deployment"
echo "==========================================="
echo ""

# Step 1: Verify project is ready
echo "Step 1: Verifying project..."
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    exit 1
fi

if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

echo "✅ Project verified"
echo ""

# Step 2: Verify latest changes are committed
echo "Step 2: Checking Git status..."
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: Uncommitted changes detected"
    echo "These files have changes:"
    git status --short
    echo ""
    read -p "Continue deployment? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 1
    fi
fi

echo "✅ Git status clean"
echo ""

# Step 3: Build locally to verify
echo "Step 3: Building project..."
pnpm build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Step 4: Instructions for Vercel deployment
echo "Step 4: Vercel Deployment Instructions"
echo "======================================"
echo ""
echo "Option A: Deploy via Vercel Dashboard (EASIEST)"
echo "----------------------------------------------"
echo "1. Open: https://vercel.com/import"
echo "2. Click 'Import Project'"
echo "3. Paste GitHub URL: https://github.com/SharmaReenaDr/FLM"
echo "4. Click 'Import'"
echo "5. Click 'Deploy'"
echo "6. Wait for deployment (2-3 minutes)"
echo ""

echo "Option B: Deploy via Vercel CLI"
echo "------------------------------"
echo "1. Install Vercel CLI:"
echo "   npm install -g vercel"
echo ""
echo "2. Deploy:"
echo "   vercel --prod"
echo ""

echo "Step 5: Connect Your Domain"
echo "============================"
echo ""
echo "After deployment completes:"
echo ""
echo "A. Via Vercel Dashboard (RECOMMENDED)"
echo "   1. Go to: https://vercel.com/dashboard"
echo "   2. Select your 'FLM' project"
echo "   3. Click 'Settings' → 'Domains'"
echo "   4. Click 'Add Domain'"
echo "   5. Enter: myfitnesslifemantra.com"
echo "   6. Choose DNS option (see below)"
echo ""

echo "B. DNS Configuration"
echo "   Option 1: Use Vercel Nameservers (EASIEST)"
echo "   - Copy the 4 nameservers provided by Vercel"
echo "   - Login to your domain registrar (GoDaddy, Namecheap, etc.)"
echo "   - Replace all nameservers with Vercel's"
echo "   - Wait 24-48 hours for propagation"
echo ""

echo "   Option 2: Use CNAME (if you can't change nameservers)"
echo "   - Copy CNAME value from Vercel"
echo "   - Add CNAME record in your domain registrar"
echo "   - SSL certificate auto-generates in ~5 minutes"
echo ""

echo "Step 6: Verify Deployment"
echo "========================="
echo ""
echo "Test your domain:"
echo "  curl -I https://myfitnesslifemantra.com"
echo ""
echo "Should return HTTP 200 with Vercel headers"
echo ""

echo "========================================="
echo "✅ READY FOR DEPLOYMENT!"
echo "========================================="
echo ""
echo "Next: Follow the Vercel Dashboard steps above"
echo ""
