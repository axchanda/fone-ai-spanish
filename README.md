# Fone AI — Landing Page

Production-ready landing page for Fone AI built with **React 18 + Vite + Tailwind CSS** and a **PHP** form handler.

## ✨ Features

- Fully responsive (mobile, tablet, desktop)
- React Router with Home + Thank You pages
- PHP form handler with email notification
- Lead logging fallback (`api/logs/submissions.log`)
- Smooth scroll, animated reveals, accessible markup
- SEO-friendly meta tags, semantic HTML
- Production-optimized Vite build

## 📁 Folder Structure

```
foneai/
├── api/
│   └── submit.php           # PHP form handler (FROM: hello@getnos.io → TO: sriethiraj@getnos.io)
├── public/
│   ├── .htaccess            # Apache config (SPA routing + security)
│   └── favicon.svg
├── src/
│   ├── components/          # All landing-page sections
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MarketShift.jsx
│   │   ├── DIYTrap.jsx
│   │   ├── Testimonials.jsx
│   │   ├── WhatYouGet.jsx
│   │   ├── RecurringRevenue.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Outcomes.jsx
│   │   ├── Comparison.jsx
│   │   ├── RevenueExpansion.jsx
│   │   ├── Infrastructure.jsx
│   │   ├── ProviderStories.jsx
│   │   ├── DemoForm.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── ThankYou.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

> **Note:** during development, requests to `/api/*` are proxied to `http://localhost:8000` (see `vite.config.js`). To test the PHP form locally, run PHP's built-in server in a second terminal:
>
> ```bash
> php -S localhost:8000
> ```

### 3. Build for production

```bash
npm run build
```

The optimized output appears in `dist/`.

## 📤 Deployment (cPanel / shared hosting / VPS)

1. Run `npm run build`.
2. Upload the **contents** of `dist/` to your web root (e.g. `public_html/`).
3. Copy the `api/` folder into the same web root → `public_html/api/`.
4. Make sure PHP `mail()` is enabled on the server.
5. Confirm `.htaccess` is uploaded and `mod_rewrite` is on.

Final server layout:
```
public_html/
├── index.html
├── assets/
├── favicon.svg
├── .htaccess
└── api/
    └── submit.php
```

## ✉️ Email Configuration

Edit `api/submit.php`:

```php
$MAIL_FROM = 'hello@getnos.io';        // Sender address
$MAIL_TO   = 'sriethiraj@getnos.io';   // Receives demo requests
```

The handler:
- Validates required fields & email format
- Sends a styled HTML + plain-text email
- Logs every submission to `api/logs/submissions.log`
- Sets `Reply-To` to the lead's email so you can reply directly
- Includes a honeypot field (`website`) for spam protection
- Returns JSON `{ success, message }` to the React frontend

On successful submission, the user is redirected to `/thank-you`.

## 🎨 Customization

- **Colors:** edit `tailwind.config.js` → `theme.extend.colors.brand`
- **Fonts:** swap the Google Fonts link in `index.html` and update `tailwind.config.js`
- **Copy:** all section copy lives inside the individual component files in `src/components/`

## 📄 License

© 2026 Fone AI. All rights reserved.
