# 🚀 COMMAND REFERENCE - Deploy to myfitnesslifemantra.com

## Copy & Paste Ready Commands

---

## Setup (One-Time Only)

### Install Vercel CLI
```bash
npm install -g vercel
```

---

## Deploy Your Website

### Option 1: Quick Deploy (RECOMMENDED)
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
vercel --prod
```

### Option 2: Interactive Deploy
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
vercel
# Follow prompts
# At the end, it asks if you want to deploy to production
# Say yes
```

### Option 3: Connect Domain Immediately
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
vercel --prod && vercel domains add myfitnesslifemantra.com
```

---

## Add Your Domain to Vercel

### Add Domain
```bash
vercel domains add myfitnesslifemantra.com
```

### List Your Domains
```bash
vercel domains list
```

### Remove Domain
```bash
vercel domains remove myfitnesslifemantra.com
```

---

## DNS Configuration

### Check if Domain is Live
```bash
curl -I https://myfitnesslifemantra.com
```

### Check DNS Resolution
```bash
nslookup myfitnesslifemantra.com
# or
dig myfitnesslifemantra.com
```

### Check SSL Certificate Status
```bash
openssl s_client -connect myfitnesslifemantra.com:443 -servername myfitnesslifemantra.com
```

---

## Local Development (Before Deployment)

### Start Dev Server
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
pnpm dev
# Visit http://localhost:3000
```

### Build for Production (Test)
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
pnpm build
```

### Preview Production Build Locally
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
pnpm build
pnpm start
# Visit http://localhost:3000
```

---

## Git Commands

### Check Status
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
git status
```

### Commit Changes
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
git add .
git commit -m "Update website"
git push origin main
# Vercel auto-deploys!
```

### View Deployment History
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
git log --oneline -10
```

---

## Vercel Dashboard Commands

### Open Vercel Dashboard
```bash
open https://vercel.com/dashboard
```

### View Deployment Logs
```bash
# After deploying:
vercel logs
# or check: https://vercel.com/dashboard/[project-name]/logs
```

### Redeploy Latest Commit
```bash
vercel --prod
# This redeploys the latest from GitHub
```

---

## Environment Variables (If Needed)

### Set Environment Variable
```bash
vercel env add NEXT_PUBLIC_DOMAIN
# It will prompt for value
```

### List Environment Variables
```bash
vercel env list
```

### Remove Environment Variable
```bash
vercel env rm NEXT_PUBLIC_DOMAIN
```

---

## Troubleshooting Commands

### Clear Vercel Cache
```bash
vercel deploy --force
```

### Rebuild on Vercel
```bash
vercel --prod --force
```

### Check Project Config
```bash
cat vercel.json
cat package.json
cat tsconfig.json
```

### Verify Build Steps
```bash
cd /Users/reenasharma/Downloads/Magic_Ai_AY
pnpm install
pnpm build
# If either fails, deployment will fail too
```

---

## DNS Provider Specific

### GoDaddy
```
1. Login to godaddy.com
2. Go to "My Products"
3. Find your domain
4. Click "DNS" or "Manage DNS"
5. Update nameservers or add CNAME
```

### Namecheap
```
1. Login to namecheap.com
2. Go to "Domain List"
3. Find your domain
4. Click "Manage"
5. Go to "Nameservers" or "Advanced DNS"
6. Update accordingly
```

### Other Registrars
```
1. Login to your registrar
2. Find "DNS", "Nameservers", or "Advanced DNS"
3. Copy values from Vercel dashboard
4. Paste into registrar
5. Save
```

---

## Timeline Reference

### Using Nameservers
```
Deploy:          2-3 minutes
Add Domain:      1 minute
Update DNS:      5 minutes (at registrar)
Propagation:     24-48 hours ⏱️
Total:           ~24-48 hours
```

### Using CNAME
```
Deploy:          2-3 minutes
Add Domain:      1 minute
Update DNS:      5 minutes (at registrar)
SSL Generation:  5-10 minutes
Total:           ~15 minutes ⚡
```

---

## Quick Checklist

```bash
# 1. Verify locally
pnpm build  # ✅ Should complete
pnpm dev    # ✅ Should run on localhost:3000

# 2. Check git
git status  # ✅ Should be clean

# 3. Deploy
npm install -g vercel  # ✅ One time
vercel --prod  # ✅ Deploy

# 4. Add domain
vercel domains add myfitnesslifemantra.com  # ✅ Add

# 5. Update DNS (at your registrar)
# Copy nameservers or CNAME from Vercel  # ✅ Update

# 6. Verify
curl -I https://myfitnesslifemantra.com  # ✅ Should return 200

# 🎉 Done!
```

---

## Most Important Commands

1. **Deploy:**
   ```bash
   vercel --prod
   ```

2. **Add Domain:**
   ```bash
   vercel domains add myfitnesslifemantra.com
   ```

3. **Verify:**
   ```bash
   curl -I https://myfitnesslifemantra.com
   ```

---

## Remember

✅ Vercel is **free**
✅ SSL is **free** (auto-generated)
✅ CDN is **free**
✅ Auto-deploys from GitHub **free**
✅ 24/7 uptime **guaranteed**

Just run `vercel --prod` and you're done! 🚀

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **This Project:** https://github.com/SharmaReenaDr/FLM

**Ready to deploy? Start with:**
```bash
vercel --prod
```
