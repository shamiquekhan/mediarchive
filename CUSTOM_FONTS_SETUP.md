# Custom Fonts Setup Instructions

## Fonts to Download

You need to download these 10 custom fonts and place them in the `public/fonts` folder:

### Required Font Files:

1. **Chatime Regular** (chatime-Regular)
2. **ROMAUNT GAOLINES** (RomauntGaolines)
3. **Against Regular** (against-Regular)
4. **PROTEST DEMO REGULAR** (ProtestDemo-Regular)
5. **SINORETA PERSONAL USE Regular** (Sinoreta-Regular)
6. **NOMARK** (Nomark)
7. **SingleGhost regular** (SingleGhost-regular)
8. **CLOUDY AURORA SERIF** (CloudyAurora-Serif)
9. **JANS DEMO** (JansDemo)
10. **BRICKTOWN** (Bricktown)

---

## Installation Steps:

### 1. Download Font Files
- Scan the QR code in the image or find these fonts online
- Download all 10 fonts in `.ttf`, `.woff`, and `.woff2` formats (if available)

### 2. Place Font Files
Copy all font files to:
```
c:\Project\mediarchieve\public\fonts\
```

### Expected file structure:
```
public/
  fonts/
    chatime-Regular.ttf
    chatime-Regular.woff
    chatime-Regular.woff2
    RomauntGaolines.ttf
    RomauntGaolines.woff
    RomauntGaolines.woff2
    against-Regular.ttf
    against-Regular.woff
    against-Regular.woff2
    ProtestDemo-Regular.ttf
    ProtestDemo-Regular.woff
    ProtestDemo-Regular.woff2
    Sinoreta-Regular.ttf
    Sinoreta-Regular.woff
    Sinoreta-Regular.woff2
    Nomark.ttf
    Nomark.woff
    Nomark.woff2
    SingleGhost-regular.ttf
    SingleGhost-regular.woff
    SingleGhost-regular.woff2
    CloudyAurora-Serif.ttf
    CloudyAurora-Serif.woff
    CloudyAurora-Serif.woff2
    JansDemo.ttf
    JansDemo.woff
    JansDemo.woff2
    Bricktown.ttf
    Bricktown.woff
    Bricktown.woff2
```

### 3. Restart Development Server
After placing the fonts, restart the server:
```bash
npm start
```

---

## Font Usage Across Website:

| Section | Font Used |
|---------|-----------|
| **Body Text / Default** | Chatime |
| **Hero Brand "MEDIARCHIVE"** | Romaunt Gaolines |
| **About Title** | Against |
| **Card Overlays** (Patient Portal, etc.) | Protest Demo |
| **"What Makes Us Special" Title** | Sinoreta |
| **Section Titles** (How It Works, Security, FAQ) | Nomark |
| **Step Card Headings** | SingleGhost |
| **Security Card Headings** | Cloudy Aurora |
| **FAQ Item Headings** | Jans Demo |
| **Footer CTA & Logo** | Bricktown |
| **Healthcare Section Heading** | Sinoreta |

---

## What's Already Configured:

✅ `@font-face` declarations added to HomePage.css
✅ All font-family references updated throughout the site
✅ Fallback fonts configured for each declaration
✅ `public/fonts` folder created

---

## Next Steps:

1. Download the 10 font files from the source (QR code in image)
2. Convert to web formats (.woff, .woff2) if only .ttf is available
3. Place in `public/fonts/` folder
4. Refresh browser - fonts will load automatically!

---

## Alternative: Use Similar Google Fonts

If you don't have access to these custom fonts, I can replace them with similar Google Fonts instead. Let me know!
