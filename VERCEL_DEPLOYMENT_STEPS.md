# 🚀 Vercel Deployment Guide for MediArchive

## Prerequisites
- GitHub account
- Vercel account (free tier works perfectly)
- Git installed on your computer

---

## Step 1: Push Code to GitHub

### Option A: Using Git Command Line

```bash
# Navigate to project directory
cd C:\Project\mediarchieve

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - MediArchive with routing"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/mediarchive.git
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Desktop
1. Open GitHub Desktop
2. Add the `C:\Project\mediarchieve` folder
3. Commit all changes
4. Publish to GitHub

---

## Step 2: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Go to** [vercel.com](https://vercel.com)
2. **Sign in** with your GitHub account
3. Click **"Add New Project"**
4. **Import** your `mediarchive` repository
5. Vercel will auto-detect it's a Create React App
6. **Configure Build Settings:**
   - Framework Preset: `Create React App`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `build` (auto-detected)
   - Install Command: `npm install` (auto-detected)
7. Click **"Deploy"**

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## Step 3: Verify Deployment

After deployment completes:

1. **Check your deployment URL** (e.g., `mediarchive-xyz.vercel.app`)
2. **Test all routes:**
   - `https://your-app.vercel.app/` → Home page
   - `https://your-app.vercel.app/login/patient` → Patient login
   - `https://your-app.vercel.app/login/doctor` → Doctor login
   - `https://your-app.vercel.app/patient/dashboard` → Patient dashboard
   - `https://your-app.vercel.app/doctor/dashboard` → Doctor dashboard

---

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

---

## Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Example: `mediarchive.yourdomain.com`

---

## Environment Variables (If Needed)

If you add backend API keys later:

1. Go to **Project Settings** → **Environment Variables**
2. Add variables like:
   - `REACT_APP_API_URL`
   - `REACT_APP_FIREBASE_KEY`
3. Redeploy for changes to take effect

---

## Troubleshooting

### Issue: 404 on refresh
✅ **Fixed** - The `vercel.json` already has rewrites configured

### Issue: Images not loading
- Ensure images are in `/public` folder
- Use `/image.jpg` not `./image.jpg`
- ✅ Already configured correctly

### Issue: CSS not loading
- Clear cache and hard reload (Ctrl+Shift+R)
- Check build logs for errors

---

## Build Commands Summary

```json
{
  "build": "npm run build",
  "output": "build",
  "install": "npm install"
}
```

---

## Live Example URLs

After deployment, your app will be available at:
- **Production**: `https://mediarchive-[random].vercel.app`
- **You can rename** in Vercel dashboard settings

---

## Current Project Status ✅

- ✅ React Router configured
- ✅ All navigation links working
- ✅ Patient/Doctor login flows connected
- ✅ Dashboards with logout functionality
- ✅ Vercel configuration file ready
- ✅ Homepage buttons linked to login pages
- ✅ Responsive design maintained

---

## Quick Deploy Checklist

- [ ] Push code to GitHub
- [ ] Connect Vercel to GitHub repo
- [ ] Deploy (automatic)
- [ ] Test all routes
- [ ] Share live URL! 🎉

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs)
