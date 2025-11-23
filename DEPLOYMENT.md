# Deployment Guide - G3NERALOLA Portfolio

This guide will help you deploy your photography portfolio to production.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and offers the best performance.

### Step 1: Prepare Your Repository

1. Create a new GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. Add Environment Variables:
   - Click "Environment Variables"
   - Add:
     ```
     GMAIL_USER = your-email@gmail.com
     GMAIL_APP_PASSWORD = your-16-character-app-password
     ```

6. Click "Deploy"

### Step 3: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate provisioning (~24 hours)

---

## 🌐 Alternative Deployment Options

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Add environment variables in Site settings → Environment variables
7. Deploy

### Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login and deploy:
```bash
railway login
railway init
railway up
```

3. Add environment variables:
```bash
railway variables set GMAIL_USER=your-email@gmail.com
railway variables set GMAIL_APP_PASSWORD=your-app-password
```

### DigitalOcean App Platform

1. Push code to GitHub
2. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
3. Click "Create App"
4. Connect GitHub repository
5. Configure:
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
6. Add environment variables
7. Deploy

---

## 🔐 Environment Variables Setup

### Gmail App Password Generation

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Navigate to Security → 2-Step Verification
3. Scroll to "App passwords"
4. Select "Mail" and generate password
5. Copy the 16-character password
6. Add to your deployment platform

### Required Variables

```env
GMAIL_USER=adeolaomogbolahan48@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All images are optimized and loading correctly
- [ ] Contact form tested locally
- [ ] Gmail credentials are correct
- [ ] All links work (Instagram, WhatsApp, email)
- [ ] Dark mode works properly
- [ ] Mobile responsive on all pages
- [ ] No console errors in browser
- [ ] Environment variables are set
- [ ] Build completes successfully (`npm run build`)

---

## 🧪 Testing Production Build Locally

Before deploying, test the production build:

```bash
# Build the application
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) and test:
- All pages load correctly
- Contact form sends emails
- Theme toggle works
- Images display properly
- Mobile responsive works

---

## 🔍 Troubleshooting

### Build Fails

**Issue**: Build process fails during deployment

**Solution**:
1. Check build logs for errors
2. Run `npm run build` locally to reproduce
3. Fix any TypeScript or linting errors
4. Ensure all dependencies are in `package.json`

### Email Not Sending

**Issue**: Contact form doesn't send emails in production

**Solution**:
1. Verify environment variables are set correctly
2. Check Gmail app password is valid
3. Ensure 2-Step Verification is enabled on Google account
4. Check deployment logs for SMTP errors

### Images Not Loading

**Issue**: Portfolio images don't display

**Solution**:
1. Check image URLs are accessible
2. Verify Next.js Image configuration in `next.config.ts`
3. Add image domains to `remotePatterns` if needed

### Dark Mode Not Working

**Issue**: Theme toggle doesn't switch modes

**Solution**:
1. Verify `suppressHydrationWarning` is on `<html>` tag
2. Check browser localStorage is not blocked
3. Clear browser cache and cookies

---

## 📊 Post-Deployment

### Monitor Performance

1. **Vercel Analytics** (if using Vercel)
   - Enable in Project Settings → Analytics
   - Monitor real user metrics

2. **Google PageSpeed Insights**
   - Test at [pagespeed.web.dev](https://pagespeed.web.dev)
   - Aim for 90+ score

3. **Lighthouse Audit**
   - Run in Chrome DevTools
   - Check Performance, Accessibility, SEO

### SEO Setup

1. **Google Search Console**
   - Add your site
   - Submit sitemap: `yourdomain.com/sitemap.xml`

2. **Social Media Meta Tags**
   - Already configured in `layout.tsx`
   - Test with [metatags.io](https://metatags.io)

### Monitoring

Set up uptime monitoring:
- [UptimeRobot](https://uptimerobot.com) (free)
- [StatusCake](https://www.statuscake.com) (free)
- Vercel built-in monitoring

---

## 🔄 Continuous Deployment

Once deployed, any push to your main branch will automatically trigger a new deployment:

```bash
# Make changes
git add .
git commit -m "Update portfolio images"
git push origin main

# Automatic deployment triggered!
```

---

## 🆘 Support

If you encounter issues:

1. Check deployment platform logs
2. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
4. Contact developer: adeolaomogbolahan48@gmail.com

---

## 🎉 Your Site is Live!

Once deployed, share your portfolio:
- Update Instagram bio with website link
- Share on WhatsApp status
- Add to business cards
- Update email signature

**Remember**: Keep your environment variables secure and never commit them to Git!
