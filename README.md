# Kigoro Samson Mwangi - Professional Portfolio

A modern, elegant, and responsive portfolio website showcasing professional experience, projects, and creative work.

## Features

✨ **Elegant Design**
- Modern, professional aesthetic with smooth animations
- Responsive design that works perfectly on all devices
- Gradient accents and premium typography
- Dark-themed social cards and interactive elements

🚀 **Dynamic Content**
- GitHub projects automatically fetched and displayed
- Instagram gallery integration
- Smooth scrolling navigation with active section tracking
- Form validation and email submission

📱 **Responsive & Accessible**
- Mobile-first design approach
- WCAG compliance considerations
- Touch-friendly navigation
- Keyboard shortcuts support (Alt+H, Alt+A, Alt+E, etc.)

🎨 **Visual Appeal**
- Smooth hover effects and transitions
- Animated hero section
- Timeline layout for experience
- Beautiful skill cards and statistics

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/
    └── (images and media go here)
```

## Key Sections

### 1. Hero Section
- Eye-catching introduction with gradient text
- Call-to-action buttons
- Social media links

### 2. About Section
- Professional summary
- Core competencies overview
- Statistics cards
- Organized skill groups

### 3. Experience Timeline
- Chronological work history
- Achievement highlights for each role
- Interactive timeline visualization

### 4. Projects Showcase
- Dynamically loaded GitHub repositories
- Project descriptions and technologies
- Links to GitHub and live demos
- Technology tags

### 5. Gallery
- Embedded Instagram profile
- Social proof and creative work display

### 6. Education & Certifications
- Academic credentials
- Professional certifications
- Training and courses

### 7. Contact Section
- Contact information
- Email form with validation
- Social media links

## Features in Detail

### GitHub Integration
The portfolio automatically fetches and displays your latest public repositories from GitHub. It shows:
- Repository name and description
- Primary language and topics
- Links to GitHub and live demos
- Last update date

To customize:
1. Edit `CONFIG.githubUsername` in `script.js`
2. Update `CONFIG.projectsPerPage` to change number of displayed projects

### Instagram Integration
The gallery section displays your Instagram profile directly with an embedded feed. To set up:
1. Ensure your Instagram profile is public
2. The embed will automatically display your latest posts

### Form Submission
The contact form uses Formspree service (free tier available). To configure:
1. Update the Formspree endpoint in `handleFormSubmission()` function
2. Test the form to ensure emails are working

### Keyboard Navigation
- **Alt+H**: Jump to Home
- **Alt+A**: Jump to About
- **Alt+E**: Jump to Experience
- **Alt+P**: Jump to Projects
- **Alt+G**: Jump to Gallery
- **Alt+C**: Jump to Contact

## Customization Guide

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #06b6d4;
    /* ... other variables ... */
}
```

### Typography
The portfolio uses:
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

To change fonts, update the Google Fonts link in `index.html`

### Spacing & Layout
All spacing uses a consistent scale. Modify container padding and section margins in the CSS for a different layout feel.

## Deployment

### Deploy to GitHub Pages
1. Create a repository named `username.github.io`
2. Push all files to the repository
3. Access your portfolio at `https://username.github.io`

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command to: (leave blank - static site)
3. Set publish directory to: `.` (root)
4. Deploy

### Deploy to Vercel
1. Import your repository into Vercel
2. Use default Next.js settings (can be changed to static)
3. Deploy

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Lazy loading for images
- CSS animations use GPU acceleration
- Minimal JavaScript for fast load times
- Optimized GitHub API calls
- CDN-delivered Google Fonts

## SEO Optimization

The portfolio includes:
- Semantic HTML structure
- Meta tags for description and keywords
- Proper heading hierarchy
- Alt text for images
- Mobile-friendly viewport configuration

## Accessibility Features

- WCAG 2.1 AA compliance considerations
- Semantic HTML elements
- Proper color contrast ratios
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus states for navigation

## Contact Information

- **Email**: kigorosammwangi@gmail.com
- **Phone**: +254 718 724 046
- **Location**: Murang'a, Kenya
- **GitHub**: https://github.com/mwangikigoro1
- **Instagram**: https://www.instagram.com/mwangi_kigoro

## License

This portfolio is open source and available for personal use. Feel free to fork and customize it for your own portfolio!

## Credits

Built with:
- HTML5
- CSS3 (with modern features like Grid, Flexbox, Gradients)
- Vanilla JavaScript
- GitHub API
- Instagram Embed
- Formspree (for email)
- Google Fonts

## Tips for Best Results

1. **Update Content Regularly**: Keep your GitHub repositories and Instagram updated
2. **High-Quality Images**: Use professional photography for maximum impact
3. **Keep Descriptions Concise**: Short, impactful descriptions perform best
4. **Test on Multiple Devices**: Verify responsive design on various screen sizes
5. **Monitor Form Submissions**: Check your email regularly for contact form submissions
6. **Check Console**: Open developer console for helpful tips and links

---

Last Updated: August 2025
Portfolio Version: 1.0

For questions or suggestions, please reach out via the contact form or email!
