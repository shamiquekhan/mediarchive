# 🚀 MediArchive - Quick Commands Reference

## 📋 Essential Commands

### **Development**
```bash
# Start development server
npm start

# Runs on http://localhost:3000
# Hot reload enabled
# Open automatically in browser
```

### **Production Build**
```bash
# Create optimized production build
npm run build

# Output: /build folder
# Minified JS & CSS
# Optimized images
# Ready for deployment
```

### **Test Production Build Locally**
```bash
# Install serve (one-time)
npm install -g serve

# Serve production build
serve -s build -l 3000

# Test at http://localhost:3000
```

### **Verify Code Quality**
```bash
# Check for errors
npm run build

# Install dependencies
npm install

# Clean install (if issues)
rm -rf node_modules package-lock.json
npm install
```

---

## 🌐 Deploy Commands

### **Vercel (Fastest - Recommended)**
```bash
# Install
npm install -g vercel

# Deploy to production
vercel --prod

# Live in 2 minutes!
```

### **Netlify**
```bash
# Install
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

### **GitHub Pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### **Firebase**
```bash
# Install
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
npm run build
firebase deploy
```

---

## 🔧 Troubleshooting Commands

### **Clear Cache & Rebuild**
```bash
# Windows
rmdir /s /q node_modules build
npm install
npm start

# Mac/Linux
rm -rf node_modules build
npm install
npm start
```

### **Fix Package Issues**
```bash
# Update all packages
npm update

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### **Git Commands**
```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/username/mediarchieve.git

# Push
git push -u origin main
```

---

## 📊 Useful Scripts

### **View Bundle Size**
```bash
# Install
npm install --save-dev source-map-explorer

# Add to package.json:
# "analyze": "source-map-explorer 'build/static/js/*.js'"

# Run
npm run build
npm run analyze
```

### **Performance Testing**
```bash
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run audit
npm run build
serve -s build &
lhci autorun --config=lighthouserc.json
```

---

## 🎯 One-Command Deploy

### **Vercel (Copy & Paste)**
```bash
npm install -g vercel && cd C:\Project\mediarchieve && vercel --prod
```

### **Netlify (Copy & Paste)**
```bash
npm install -g netlify-cli && cd C:\Project\mediarchieve && npm run build && netlify deploy --prod
```

---

## ✅ Pre-Deploy Checklist Commands

```bash
# 1. Test build
npm run build

# 2. Test production locally
serve -s build

# 3. Check for errors
npm run build --verbose

# 4. Verify dependencies
npm audit

# 5. All good? Deploy!
vercel --prod
```

---

## 📱 Testing URLs

**Development:**
- http://localhost:3000

**Production (after deploy):**
- Vercel: https://mediarchive-[id].vercel.app
- Netlify: https://mediarchive-[id].netlify.app
- Firebase: https://[project-id].web.app
- GitHub Pages: https://[username].github.io/mediarchieve

---

## 🎊 Quick Start (New Machine)

```bash
# Clone project
git clone [your-repo-url]
cd mediarchieve

# Install dependencies
npm install

# Start development
npm start

# Ready! Open http://localhost:3000
```

---

## 🔥 Emergency Commands

### **App Not Starting?**
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### **Build Failing?**
```bash
npm cache clean --force
npm install
npm run build
```

### **Port 3000 Already in Use?**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

---

## 📦 Package Management

### **Add New Package**
```bash
npm install [package-name]
```

### **Remove Package**
```bash
npm uninstall [package-name]
```

### **Update Package**
```bash
npm update [package-name]
```

### **List Installed Packages**
```bash
npm list --depth=0
```

---

## 🎯 Most Important Commands

```bash
# Development
npm start

# Production Build
npm run build

# Deploy (Vercel)
vercel --prod

# That's it! 🚀
```

---

**Save this file for quick reference!**
