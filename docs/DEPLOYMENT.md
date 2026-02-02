# 🚀 Deployment Guide - Fitness Life Mantra

## Quick Start: Deploy to Vercel

This guide will walk you through deploying the Fitness Life Mantra website to Vercel with your domain `myfitnesslifemantra.com`.

---

## Option 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Connect to Vercel
1. Go to https://vercel.com
2. Click **"Import Project"**
3. Paste your GitHub repository URL: `https://github.com/SharmaReenaDr/FLM`
4. Click **"Import"**

### Step 2: Configure Project
- **Framework**: Next.js (should auto-detect)
- **Build Command**: `pnpm build` (should auto-detect)
- **Output Directory**: `.next` (should auto-detect)
- Click **"Deploy"**

### Step 3: Connect Domain
1. After deployment completes, go to **Settings**
2. Click **"Domains"**
3. Click **"Add Domain"**
4. Enter: `myfitnesslifemantra.com`
5. Follow DNS configuration instructions
6. Update your domain registrar's DNS records to point to Vercel

---

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
vercel
```

Follow the prompts:
- Link to GitHub account
- Select project name
- Confirm settings
- Deployment will start automatically

### Step 3: Add Domain
```bash
vercel domains add myfitnesslifemantra.com
```

---

## DNS Configuration

### If using Vercel Nameservers:
1. In Vercel Dashboard → Domains → Settings
2. Copy the 4 nameservers provided
3. Go to your domain registrar (GoDaddy, Namecheap, etc.)
4. Update the nameservers to Vercel's nameservers
5. Wait 24-48 hours for propagation

### If using CNAME:
1. In Vercel Dashboard → Domains → Settings
2. Copy the CNAME value
3. Go to your domain registrar
4. Add a CNAME record pointing to Vercel
5. SSL certificate will auto-generate (takes ~5 minutes)

---

## Verify Deployment

Once deployed, you can verify:

```bash
# Check domain is pointing to Vercel
curl -I https://myfitnesslifemantra.com

# Should return HTTP 200 with Vercel headers
```

---

## Auto-Deploy from GitHub

After initial setup, Vercel will **automatically deploy** whenever you push to `main` branch:

```bash
git add .
git commit -m "Update website"
git push origin main
# 🚀 Vercel will auto-deploy!
```

---

## Localhost Testing

Before deploying, test locally:

```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
pnpm dev
# Visit http://localhost:3000
```

---

## Environment Variables (if needed)

Create `.env.local` for local variables:

```bash
# .env.local (not committed to GitHub)
NEXT_PUBLIC_DOMAIN=myfitnesslifemantra.com
```

---

## Troubleshooting

**Q: Domain not resolving?**
- Wait 24-48 hours for DNS propagation
- Verify nameservers or CNAME are correctly set
- Check Vercel dashboard for any errors

**Q: SSL certificate not generating?**
- Ensure DNS is correctly configured
- Wait 5-10 minutes after DNS setup
- Regenerate certificate in Vercel settings if needed

**Q: Build fails?**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `pnpm build` locally to debug

---

## Summary

✅ Project is ready to deploy  
✅ GitHub remote is configured  
✅ Build passes locally  
✅ Just need to connect domain in Vercel  

**Next:** Go to https://vercel.com/import and connect your GitHub repo!

---

### Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Domain/DNS Help: Contact your domain registrar
