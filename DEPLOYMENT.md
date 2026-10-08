# Portfolio Deployment Guide

Complete step-by-step instructions for deploying your portfolio to the web.

## Quick Start

Your portfolio is a static site (HTML, CSS, JS) that can be deployed anywhere. Choose your preferred hosting platform below.

---

## Option 1: GitHub Pages (Recommended - Free)

### Steps:

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Name it: `username.github.io` (replace `username` with your actual GitHub username)
   - Make it Public
   - Don't initialize with README
   - Click "Create repository"

2. **Push Your Files**
   ```bash
   # Initialize git in your portfolio folder (if not already done)
   cd portfolio
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial portfolio commit"
   
   # Add remote (replace USERNAME with your GitHub username)
   git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable Pages**
   - Go to your repository settings
   - Scroll to "GitHub Pages"
   - Select "Deploy from a branch"
   - Select `main` branch
   - Save

4. **Access Your Portfolio**
   - Your site will be live at: `https://USERNAME.github.io`
   - Initial deployment may take 5-10 minutes

---

## Option 2: Netlify (Free - Easiest)

### Steps:

1. **Prepare Your Files**
   - All portfolio files should be in one folder
   - No build step needed

2. **Deploy to Netlify**
   - Go to https://app.netlify.com/drop
   - Drag and drop your portfolio folder
   - Your site will be instantly live!

3. **Get a Custom Domain**
   - After deployment, click "Site settings"
   - Go to "Domain management"
   - Add your custom domain
   - Follow DNS setup instructions

---

## Option 3: Vercel (Free)

### Steps:

1. **Connect Your Repository**
   - Go to https://vercel.com/import
   - Select "Import Git Repository"
   - Paste your GitHub repository URL
   - Click "Import"

2. **Configure Settings**
   - Framework: Select "Other" (static site)
   - Root Directory: `.`
   - Click "Deploy"

3. **Access Your Site**
   - Your portfolio is now live!
   - A domain will be provided
   - Add custom domain in project settings

---

## Option 4: AWS S3 + CloudFront (More Advanced)

### Steps:

1. **Create S3 Bucket**
   - Go to AWS Management Console
   - Navigate to S3
   - Create a new bucket
   - Name it: `portfolio.yourdomain.com`
   - Unblock public access
   - Click "Create bucket"

2. **Upload Files**
   - Open your bucket
   - Click "Upload"
   - Select all portfolio files
   - Click "Upload"

3. **Enable Static Website Hosting**
   - Bucket Properties
   - Static website hosting
   - Enable it
   - Index document: `index.html`
   - Error document: `index.html`
   - Save

4. **Create CloudFront Distribution**
   - Go to CloudFront
   - Create distribution
   - Origin domain: Your S3 bucket
   - Use default settings
   - Create distribution

5. **Add Custom Domain**
   - Update Route53 DNS
   - Point domain to CloudFront

---

## Option 5: Traditional Web Hosting (With cPanel)

### Steps:

1. **Prepare Files**
   - Zip your portfolio folder

2. **Upload to Hosting**
   - Log into cPanel
   - Open File Manager
   - Navigate to `public_html`
   - Upload and extract your files

3. **Access Your Site**
   - Visit your domain
   - Portfolio is now live!

### Popular Providers:
- Bluehost: https://www.bluehost.com
- HostGator: https://www.hostgator.com
- SiteGround: https://www.siteground.com

---

## Custom Domain Setup

### Register a Domain

1. Popular registrars:
   - Namecheap: https://www.namecheap.com
   - GoDaddy: https://www.godaddy.com
   - Google Domains: https://domains.google
   - Cloudflare: https://www.cloudflare.com

2. Register your domain (examples: `kigorosamsonmwangi.com`, `kigoro-dev.com`)

### Point Domain to Hosting

After registering your domain, update nameservers:

1. **For GitHub Pages:**
   - Add CNAME file with your domain
   - Update DNS records to point to GitHub Pages

2. **For Netlify:**
   - In Netlify dashboard → Domain settings
   - Follow setup instructions
   - Update nameservers at registrar

3. **For Vercel:**
   - In Vercel dashboard → Settings → Domains
   - Add your domain
   - Update nameservers

---

## SSL Certificate (HTTPS)

Most hosting providers include free SSL certificates:

- **GitHub Pages**: Automatic
- **Netlify**: Automatic
- **Vercel**: Automatic
- **AWS S3**: Use CloudFront (free)
- **Traditional Hosting**: Usually free with control panel

No action needed for HTTPS on recommended platforms!

---

## Post-Deployment

### Testing

1. **Desktop Testing**
   - Chrome, Firefox, Safari
   - Check all links work
   - Verify form submission

2. **Mobile Testing**
   - Use Chrome DevTools device emulation
   - Test on real device if possible
   - Check responsive design

3. **Performance Testing**
   - Use Google PageSpeed Insights
   - GTmetrix for detailed analysis
   - Monitor load times

### SEO & Analytics

1. **Google Search Console**
   - https://search.google.com/search-console
   - Add your domain
   - Submit sitemap
   - Monitor search performance

2. **Analytics Setup**
   - Create Google Analytics account
   - Add tracking ID to `index.html`
   - Monitor visitor traffic

---

## Maintenance

### Regular Updates

- Update GitHub projects regularly
- Keep Instagram profile current
- Review and update experience section
- Fix any broken links

### Monitoring

- Check email form submissions regularly
- Monitor website performance
- Update contact information if needed
- Test all interactive features monthly

### Backups

- Keep local copies of all files
- Back up GitHub repository
- Export analytics data periodically

---

## Troubleshooting

### Portfolio Not Loading

1. **Check file names and paths**
   - Ensure `index.html` is in root
   - CSS and JS files referenced correctly

2. **Browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Clear cookies and cache

3. **Check hosting deployment**
   - Verify files were uploaded correctly
   - Check hosting provider dashboard

### Form Not Working

1. **Check Formspree endpoint**
   - Verify form ID is correct in `script.js`
   - Test form submission manually

2. **Enable CORS**
   - Formspree handles CORS automatically
   - No additional configuration needed

### GitHub Projects Not Showing

1. **Check API rate limits**
   - GitHub API has rate limits (60 per hour unauthenticated)
   - Wait an hour or add GitHub token in JavaScript

2. **Verify username**
   - Ensure `CONFIG.githubUsername` is correct
   - Check repositories are public

3. **Console errors**
   - Open browser console (F12)
   - Check for error messages
   - Fix any issues

---

## Performance Optimization

### Image Optimization

```bash
# Use ImageOptim (Mac) or similar tool
# Compress images before uploading
# Use WebP format when possible
```

### Caching

- Netlify and Vercel auto-cache static assets
- GitHub Pages has automatic caching
- Consider Cloudflare for additional optimization

### CDN

- Netlify: Built-in CDN
- Vercel: Built-in Edge Network
- GitHub Pages: Uses Akamai CDN

---

## Monitoring & Analytics

### Tools to Use

1. **Google Analytics**
   - Free visitor tracking
   - Detailed user behavior metrics

2. **Google PageSpeed Insights**
   - Performance monitoring
   - Core Web Vitals

3. **Uptime Monitoring**
   - Use UptimeRobot (free tier)
   - Get alerts if site goes down

---

## Common Hosting Providers Comparison

| Provider | Cost | Custom Domain | SSL | Support | Setup Time |
|----------|------|----------------|----|---------|-----------|
| GitHub Pages | Free | Yes | Free | Community | 5 min |
| Netlify | Free | Yes | Free | Good | 2 min |
| Vercel | Free | Yes | Free | Good | 5 min |
| AWS S3 | $0.023/GB | Yes | Free | Extensive | 30 min |
| Bluehost | $2.95/mo | Yes | Free | 24/7 | 15 min |
| HostGator | $2.75/mo | Yes | Free | 24/7 | 15 min |

---

## Next Steps

1. Choose a hosting platform
2. Deploy your portfolio
3. Set up a custom domain
4. Configure analytics
5. Share your portfolio!

---

## Support & Resources

- **GitHub Documentation**: https://docs.github.com/en/pages
- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **Web Development Best Practices**: https://web.dev

---

**Ready to go live? Pick a platform and deploy! 🚀**
