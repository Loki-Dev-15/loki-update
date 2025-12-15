# Loki — Premium SaaS Portfolio (Static)

This is a static HTML/CSS/JS portfolio optimized for a premium SaaS-style presentation.
It includes:

- Hero, About, Tech, Projects, Contact sections
- Animated glassmorphism UI and scroll-triggered animations
- Project case study pages (projects/)
- Resume viewer (resume.html) and downloadable PDF
- Advanced dark theme, mobile-first responsive layout, skills meter, timeline
- Simple contact form (client-side simulation)

## Local preview

1. Unzip the package and open `index.html` in your browser.
2. For best results (iframe PDF viewer), serve using a simple static server:

### Using Python (recommended)
```bash
# Python 3.x
cd loki_portfolio_premium
python -m http.server 8000
# then open http://localhost:8000 in your browser
