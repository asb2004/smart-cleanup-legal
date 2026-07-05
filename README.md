# Smart Cleanup — Website & Legal

Landing page and legal documents for **Smart Cleanup – Storage Saver** (iOS).
The website is Apple Human Interface inspired and built with **only** HTML5, CSS3, and
vanilla JavaScript — no frameworks, no build step.

App Store: <https://apps.apple.com/app/id6758055419>

---

## 📁 Structure

```
.
├── index.html               # Landing page
├── privacy-policy.html      # Privacy Policy (web version)
├── terms-of-service.html    # Terms & Conditions (web version)
│
├── privacy-policy.md        # Privacy Policy (source, used in-app)
├── terms-of-service.md      # Terms & Conditions (source, used in-app)
├── app-ads.txt              # AdMob authorized sellers
│
├── css/style.css            # All styles (organized by section)
├── js/script.js             # Mobile nav, scroll reveal, footer year
│
├── assets/
│   ├── icons/               # app-icon.jpg, favicon.jpg
│   ├── images/
│   └── screenshots/
│
└── README.md
```

> The `.md` files are the source of truth referenced inside the app and are kept as-is.
> The `.html` versions mirror the same content for the public website.

## 🚀 Run Locally

No server needed — just open `index.html` in a browser.
Optional local server: `python3 -m http.server` then visit <http://localhost:8000>.

## 🌐 GitHub Pages

To publish the site: repo **Settings → Pages → Deploy from a branch → `main` / root**.
The site will be served at `https://asb2004.github.io/smart-cleanup-legal/`.

## 🎨 Design

Palette: `#FFFFFF`, `#F5F5F7`, `#1D1D1F`, `#6E6E73`, primary `#007AFF`.
Rounded corners, soft shadows, generous white space, smooth scrolling, subtle
scroll-reveal animations (respects `prefers-reduced-motion`). Fully responsive.

## 📄 License

© 2026 Smart Cleanup. All rights reserved.
