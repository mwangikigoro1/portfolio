# Portfolio Customization Guide

Learn how to personalize every aspect of your portfolio to match your brand and style.

---

## Table of Contents

1. [Content Updates](#content-updates)
2. [Color & Design](#color--design)
3. [Typography](#typography)
4. [Layout Changes](#layout-changes)
5. [Adding New Sections](#adding-new-sections)
6. [Advanced Customization](#advanced-customization)

---

## Content Updates

### Personal Information

**File: `index.html` (Around line 180-190)**

```html
<!-- Update hero section with your details -->
<h1 class="hero-title">Your Name Here</h1>
<p class="hero-subtitle">Your Title Here</p>
<p class="hero-description">Your brief description</p>
```

**File: `index.html` (Contact section - Around line 500+)**

```html
<p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
<p><a href="tel:+1234567890">+1 234 567 890</a></p>
<p>Your City, Country</p>
```

### Resume Content

Update all text sections with your actual information:

- **About Section**: Rewrite professional summary (lines ~240-250)
- **Skills**: Update skill categories (lines ~260-280)
- **Experience**: Add/modify job entries (lines ~310-400)
- **Education**: Update education items (lines ~530-560)

---

## Color & Design

### Primary Colors

**File: `styles.css` (Lines 1-20)**

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --primary-dark: #1e40af;       /* Darker blue */
    --primary-light: #eff6ff;      /* Light blue bg */
    --secondary-color: #7c3aed;    /* Purple */
    --accent-color: #06b6d4;       /* Cyan */
    --text-dark: #0f172a;          /* Dark text */
    --text-light: #64748b;         /* Light text */
    --success: #10b981;            /* Green */
    --warning: #f59e0b;            /* Orange */
    --danger: #ef4444;             /* Red */
}
```

### Color Palette Ideas

**Professional Blue Theme** (Current)
```
Primary: #2563eb (Blue)
Secondary: #7c3aed (Purple)
Accent: #06b6d4 (Cyan)
```

**Tech Purple Theme**
```
Primary: #7c3aed (Purple)
Secondary: #ec4899 (Pink)
Accent: #06b6d4 (Cyan)
```

**Modern Green Theme**
```
Primary: #059669 (Green)
Secondary: #3b82f6 (Blue)
Accent: #f59e0b (Amber)
```

**Minimal Black/White**
```
Primary: #000000 (Black)
Secondary: #6b7280 (Gray)
Accent: #ffffff (White)
```

### Apply New Colors

1. Copy one of the color palettes above
2. Replace the values in `:root { }`
3. Save `styles.css`
4. Refresh your browser

---

## Typography

### Font Combinations

**Current (Recommended)**
- Headings: Playfair Display (serif, elegant)
- Body: Inter (sans-serif, modern)

**Alternative 1 - Minimalist**
- Headings: Space Mono (monospace, tech)
- Body: Open Sans (sans-serif, clean)

**Alternative 2 - Elegant**
- Headings: Merriweather (serif, traditional)
- Body: Lato (sans-serif, friendly)

**Alternative 3 - Modern**
- Headings: Poppins (sans-serif, bold)
- Body: Raleway (sans-serif, elegant)

### Update Fonts

**File: `index.html` (Lines 12-13)**

Current:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

Example - Using Poppins & Open Sans:
```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@700&display=swap" rel="stylesheet">
```

**File: `styles.css` (Lines 103-107)**

Update font families:
```css
body {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', serif;
}
```

### Font Sizes

Adjust heading sizes in `styles.css`:

```css
h1 { font-size: 3.5rem; }    /* Main title - decrease for smaller */
h2 { font-size: 2.5rem; }    /* Section titles */
h3 { font-size: 1.75rem; }   /* Subsections */
h4 { font-size: 1.25rem; }   /* Cards */
```

---

## Layout Changes

### Hero Section Height

**File: `styles.css` (Line ~380)**

```css
.hero {
    min-height: calc(100vh - 60px);  /* Change 100vh to 80vh for shorter hero */
    /* Or use: min-height: 600px; for fixed height */
}
```

### Section Padding

**File: `styles.css` (Search for section styles)**

```css
.about {
    padding: 6rem 2rem;  /* Change 6rem to 4rem for less padding */
}
```

### Grid Columns

**File: `styles.css` (Line ~460)**

```css
.about-content {
    grid-template-columns: 1fr 1fr;  /* Change to 1fr or 2fr 1fr as needed */
}

.projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    /* Change 320px to 350px for wider cards */
}
```

---

## Adding New Sections

### Add a New Section Template

1. **Add HTML in `index.html`**:

```html
<!-- Add before footer -->
<section id="awards" class="awards">
    <div class="container">
        <h2 class="section-title">Awards & Recognition</h2>
        <p class="section-subtitle">Achievements and accolades</p>
        
        <div class="awards-grid">
            <div class="award-card">
                <h3>Award Name</h3>
                <p>Award description</p>
                <span class="award-date">2024</span>
            </div>
        </div>
    </div>
</section>
```

2. **Add CSS in `styles.css`**:

```css
.awards {
    padding: 6rem 2rem;
    background: var(--bg-white);
}

.awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.award-card {
    background: var(--bg-light);
    padding: 2rem;
    border-radius: 1rem;
    border-left: 4px solid var(--primary-color);
    transition: var(--transition);
}

.award-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.award-date {
    display: block;
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-top: 1rem;
}
```

3. **Add Navigation Link in `index.html`**:

```html
<li><a href="#awards" class="nav-link">Awards</a></li>
```

---

## Advanced Customization

### Add Dark Mode

1. **Add HTML toggle** (in header):

```html
<button class="dark-mode-toggle" aria-label="Toggle dark mode">
    <span>🌙</span>
</button>
```

2. **Add CSS** in `styles.css`:

```css
body.dark-mode {
    --text-dark: #f8fafc;
    --text-light: #cbd5e1;
    --bg-white: #0f172a;
    --bg-light: #1e293b;
    --border-color: #334155;
}

.dark-mode-toggle {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}
```

### Add Animation Prefers

Respect user preferences for animations:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

### Add Loading States

```css
.loading {
    opacity: 0.5;
    pointer-events: none;
}

.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 2s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
```

### Custom Scrollbar

```css
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--bg-light);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
}
```

### Add Blur Background

```css
.blur-bg {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## Performance Optimization

### Optimize Images

```html
<!-- Use WebP with fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
</picture>
```

### Lazy Loading

```html
<!-- Add loading="lazy" to images -->
<img src="image.jpg" alt="Description" loading="lazy">
```

### Minify CSS/JS

Use online tools:
- CSS Minifier: https://minifier.org
- JS Minifier: https://javascript-minifier.com

---

## Testing Your Changes

1. **Locally (recommended)**
   - Open `index.html` in a browser
   - Use F12 Developer Tools
   - Test responsive design
   - Check console for errors

2. **Live Testing**
   - Deploy to GitHub Pages or Netlify
   - Test on different devices
   - Check performance metrics

---

## Common Customization Checklist

- [ ] Update personal information
- [ ] Change color scheme
- [ ] Update fonts
- [ ] Adjust spacing/padding
- [ ] Add/remove sections
- [ ] Update social media links
- [ ] Customize project descriptions
- [ ] Add custom domain
- [ ] Set up analytics
- [ ] Test on mobile devices
- [ ] Deploy to hosting

---

## Resources

- **Google Fonts**: https://fonts.google.com
- **Color Palette Generator**: https://coolors.co
- **CSS Tricks**: https://css-tricks.com
- **MDN Web Docs**: https://developer.mozilla.org

---

Need help? Check the README.md or DEPLOYMENT.md files for more information!
