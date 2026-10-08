# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

---

## What You Have

Your portfolio includes:

✅ **HTML5** - Semantic, well-structured markup  
✅ **CSS3** - Modern, responsive design with animations  
✅ **JavaScript** - Dynamic GitHub integration, form handling, smooth interactions  
✅ **GitHub Integration** - Auto-fetches your projects  
✅ **Instagram Embed** - Displays your creative work  
✅ **Contact Form** - Email submissions ready to go  
✅ **Mobile Responsive** - Perfect on all devices  

---

## 5-Minute Setup

### Step 1: Open in Browser (30 seconds)
```
1. Navigate to your portfolio folder
2. Double-click index.html
3. Your portfolio opens in browser! ✨
```

### Step 2: Test Everything (1 minute)
- [ ] Click navigation links - smooth scroll?
- [ ] Open GitHub projects section - loading?
- [ ] Try form submission - does it work?
- [ ] Check mobile view - responsive?

### Step 3: Update Contact Info (1 minute)
**File: `index.html`**
- Find "kigorosammwangi@gmail.com" 
- Replace with your email (appears 3 times)
- Find "+254 718 724 046"
- Replace with your phone number

### Step 4: Change Colors (1 minute)
**File: `styles.css`** (Lines 7-20)
```css
:root {
    --primary-color: #2563eb;      /* Change this blue */
    --secondary-color: #7c3aed;    /* Change this purple */
    --accent-color: #06b6d4;       /* Change this cyan */
}
```

### Step 5: Deploy (2 minutes)
**Choose one:**

**Option A: GitHub Pages** (Easiest)
```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
# Live at: https://USERNAME.github.io
```

**Option B: Netlify** (Easiest)
- Go to https://app.netlify.com/drop
- Drag and drop your folder
- Live in seconds!

**Option C: Traditional Hosting**
- Upload files via FTP to your web host
- Visit your domain
- Done!

---

## File Breakdown

```
portfolio/
├── index.html           👈 Main page - update content here
├── styles.css           👈 Design - change colors/fonts here
├── script.js            👈 Functionality - GitHub, form, animations
├── config.json          📋 Configuration reference
├── README.md            📚 Detailed documentation
├── DEPLOYMENT.md        🚀 Hosting guides
├── CUSTOMIZATION.md     🎨 Advanced customization
└── QUICK_START.md       ⚡ This file
```

---

## Customization Quick Links

| What to Change | Where | How |
|---|---|---|
| Your name & title | `index.html` Line 180 | Replace text |
| Email & phone | `index.html` Line 520+ | Replace with yours |
| Primary color | `styles.css` Line 7 | Change hex value |
| About section | `index.html` Line 240 | Update paragraph |
| Social links | `index.html` Line 185 | Update URLs |

---

## GitHub Integration

Your portfolio automatically displays your GitHub projects!

✅ Already configured for: `mwangikigoro1`

To change your GitHub username:
1. Open `script.js`
2. Find: `githubUsername: 'mwangikigoro1'`
3. Replace with your username

---

## Instagram Integration

Your portfolio automatically displays your Instagram profile!

✅ Already configured for: `mwangi_kigoro`

Make sure your Instagram is public. The embed will automatically display your latest posts.

---

## Email Form Setup

Contact form is ready to receive messages!

✅ Already configured with Formspree

To test:
1. Scroll to Contact section
2. Fill out the form
3. Submit
4. Check your email!

---

## Keyboard Shortcuts

Use these shortcuts to navigate:

| Shortcut | Action |
|----------|--------|
| Alt + H | Jump to Home |
| Alt + A | Jump to About |
| Alt + E | Jump to Experience |
| Alt + P | Jump to Projects |
| Alt + G | Jump to Gallery |
| Alt + C | Jump to Contact |

---

## Mobile Testing

Test responsive design:

1. Open portfolio in browser
2. Press `F12` (Developer Tools)
3. Click device icon (top-left)
4. Select different devices
5. Check if everything looks good

---

## Performance Tips

- Your portfolio loads FAST ⚡
- No database needed
- No server required
- Works offline
- Optimized images
- Minimal dependencies

---

## Security

✅ No passwords stored  
✅ No sensitive data collected  
✅ No cookies set (unless you add analytics)  
✅ HTTPS available on all hosting platforms  

---

## Troubleshooting

### "GitHub projects not showing"
1. Check username is correct in `script.js`
2. Ensure repositories are public
3. Open console (F12) - check for errors
4. Wait - GitHub API has rate limits

### "Form not submitting"
1. Check email is valid
2. Open console - look for errors
3. Test in different browser
4. Verify Formspree endpoint

### "Styling looks broken"
1. Hard refresh: Ctrl+Shift+R
2. Check CSS file is loaded
3. Use browser DevTools (F12)
4. Verify no conflicting CSS

### "Photos not showing"
1. Check image file path
2. Ensure proper file permissions
3. Verify image format (JPG, PNG, WebP)
4. Use absolute URLs for external images

---

## Next Steps

### Immediate (Today)
- [ ] Update your contact info
- [ ] Test in different browsers
- [ ] Check mobile view
- [ ] Deploy to hosting

### Short-term (This Week)
- [ ] Customize colors and fonts
- [ ] Add/update project descriptions
- [ ] Set up custom domain
- [ ] Promote portfolio

### Long-term (Ongoing)
- [ ] Keep GitHub active
- [ ] Update Instagram regularly
- [ ] Monitor form submissions
- [ ] Track analytics
- [ ] Update experience/projects

---

## Where to Get Help

1. **README.md** - Full documentation
2. **CUSTOMIZATION.md** - Advanced tweaks
3. **DEPLOYMENT.md** - Hosting instructions
4. **Browser Console** - Error messages (F12)
5. **Google** - General web development help

---

## Pro Tips 🎯

1. **Instagram Photos**: Use high-quality, professional photos. Consider hiring a photographer or using AI enhancement tools to perfect them.

2. **GitHub Profile**: Keep repositories updated and add meaningful descriptions. Add stars to show quality projects.

3. **Resume**: Keep this portfolio in sync with your actual resume. Update both together.

4. **Analytics**: Add Google Analytics to track visitors and improve based on data.

5. **SEO**: Submit your portfolio to Google Search Console for better visibility.

6. **Backup**: Always keep a backup of your files. Use Git for version control.

7. **Regular Updates**: Update your portfolio quarterly with new projects and achievements.

8. **Call-to-Action**: Make it easy for people to contact you. Follow up quickly.

---

## Deployment Command Reference

```bash
# Initialize git (first time only)
git init

# Add files
git add .

# Commit
git commit -m "Portfolio update"

# Push to GitHub
git push origin main

# Check status
git status

# View recent commits
git log --oneline
```

---

## Common Questions

**Q: Is it free to host?**
A: Yes! GitHub Pages, Netlify, and Vercel are all free.

**Q: Can I use my own domain?**
A: Yes! Most services support custom domains.

**Q: Do I need technical knowledge?**
A: Basic file editing. No coding required.

**Q: How often should I update?**
A: Whenever you have new projects or achievements.

**Q: Can I change the design completely?**
A: Yes! Full CSS customization available.

**Q: Will it work on mobile?**
A: 100% responsive and mobile-friendly.

**Q: Is it SEO optimized?**
A: Yes, includes meta tags and semantic HTML.

**Q: Can I add more sections?**
A: Yes, CUSTOMIZATION.md has detailed instructions.

---

## Success Checklist

- [ ] Portfolio opens locally
- [ ] All sections display correctly
- [ ] Mobile view works well
- [ ] GitHub projects load
- [ ] Instagram feed displays
- [ ] Contact form submits
- [ ] Social links work
- [ ] Colors look good
- [ ] Deployed to hosting
- [ ] Custom domain added
- [ ] Analytics set up
- [ ] Shared with others

---

## Quick Color Palettes

Copy one and paste into `styles.css`:

```css
/* Tech Blue (Current) */
--primary-color: #2563eb;
--secondary-color: #7c3aed;

/* Modern Green */
--primary-color: #059669;
--secondary-color: #3b82f6;

/* Bold Purple */
--primary-color: #a855f7;
--secondary-color: #ec4899;

/* Minimal Dark */
--primary-color: #1f2937;
--secondary-color: #6366f1;

/* Professional Navy */
--primary-color: #1e3a8a;
--secondary-color: #0369a1;
```

---

## You're All Set! 🎉

Your elegant portfolio is ready to showcase your work and talents.

### What to do now:
1. Customize with your information
2. Deploy to the web
3. Share with your network
4. Watch opportunities come in

---

**Questions?** Check the other documentation files or search for solutions online.

**Ready to go live?** See DEPLOYMENT.md for hosting instructions.

**Want advanced customization?** Check CUSTOMIZATION.md for detailed guides.

---

**Good luck! Your portfolio will impress! 🚀**
