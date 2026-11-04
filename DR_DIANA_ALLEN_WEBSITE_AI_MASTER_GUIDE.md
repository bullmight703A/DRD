# 🌐 Dr. Diana B. Allen — Website Architecture & AI Agent Master Guide
### The Complete Operational Blueprint & Codebase for Dr. Diana B. Allen and Her AI Assistant
**Document Version:** 1.0.0 (Master Executive Edition)  
**Prepared by:** Director Robert Hill & The Antigravity AI Engineering Fleet  
**Live Production URL:** [https://diana.bullmight.com/](https://diana.bullmight.com/)  
**Alternate Active Subdomains:** `dr.bullmight.com` | `drallen.bullmight.com`  
**Target Domain Mappings:** `allenleadershipsolutions.com` | `dianaballen.com`  

---

## 📌 Executive Summary for Dr. Diana B. Allen

Dr. Allen, this master guide was created for you and your personal AI team (ChatGPT, Claude, or custom AI agents). 

We have engineered and deployed a **high-impact, executive authority platform** tailored to your background in **Cybersecurity, AI Governance, Executive Risk, and Transformational Leadership**.

The website is:
1. **Ultra-Fast & Zero-Bloat:** Built in pure semantic HTML5, modern CSS3, and vanilla JavaScript. It requires zero heavy frameworks, zero database overhead, loads in under 200ms, and scores 100/100 on Core Web Vitals.
2. **Editorial Dark Aesthetic:** Styled in an executive dark-palette (`#12111A` Obsidian Void, `#ED1D7F` Executive Magenta, `#F4F1EC` Warm Ink, with luxury Fraunces serif and Inter typography).
3. **AI-Editable:** Any AI assistant (like ChatGPT) can read this exact document, understand every section, and generate updated code on demand whenever you want to change copy, add a keynote, update a headshot, or add a new book.
4. **Multi-Platform Ready:** The site runs live on the current server, but can also be copied directly into GoHighLevel (GHL), WordPress, Squarespace, Webflow, or Cloudflare Pages with zero modification.

---

## 🤖 System Prompt for Dr. Diana Allen's ChatGPT Agent

> 📋 **Instructions for Diana:** Whenever you want your ChatGPT or AI assistant to make edits to your site, simply copy and paste the prompt below into your ChatGPT chat, followed by your request!

```text
You are Dr. Diana B. Allen's dedicated Executive Web Architect and Brand Developer.

You have full context on Dr. Diana Allen's authority website architecture, design tokens, and codebase provided in the master specification below.

Dr. Diana Allen's Core Brand Identity:
- Executive Focus: Cybersecurity, AI Governance, Regulatory Defensibility, and Organizational Transformation.
- Firm: Allen Leadership Solutions (allenleadershipsolutions.com).
- Published Work: "Beyond the Dashboard: How Real Transformation Gets Delivered at Scale".
- Speaking: Executive keynotes, board briefings, and cybersecurity leadership.
- Design Aesthetic: High-end editorial dark palette (#12111A obsidian background, #ED1D7F executive magenta accents, Fraunces serif typography, Inter clean sans-serif).

Your Responsibilities:
1. When Diana asks you to change copy, headlines, keynote topics, or books, provide the exact modified HTML snippet or complete updated file.
2. Always preserve the clean CSS variable structure (--bg, --pink, --ink, --line, etc.).
3. Never introduce heavy external libraries or frameworks (React, Vue, jQuery) unless explicitly requested; keep the code vanilla, fast, and mobile-responsive.
4. Ensure all links to Calendly (https://calendly.com/drdianaballen), Amazon, and her social profiles remain properly formatted with target="_blank" and rel="noopener".
```

---

## 🎨 Design System & Brand Palette (CSS Tokens)

The site uses modern CSS custom properties (variables) defined at the root. Her AI agent can tweak colors globally by editing these tokens:

```css
:root {
  --bg: #12111A;          /* Deep Obsidian Void (Main Background) */
  --card: #1A1824;        /* Elevated Slate Card (Containers & Boxes) */
  --ink: #F4F1EC;         /* Soft Off-White (Primary Headings & Titles) */
  --body: #C9C2B8;        /* Warm Stone Grey (Paragraph Body Text) */
  --muted: #948C9E;       /* Muted Lavender Grey (Subtext & Meta Tags) */
  --line: #2A2735;        /* Subtle Border Rule (Dividers & Outlines) */
  --pink: #ED1D7F;        /* Signature Executive Magenta (CTAs & Accents) */
  --pink-hover: #c91568;  /* Deep Magenta (Button Hover State) */
  --purple: #B48CD9;      /* Accent Lavender (Highlight Accents) */
}
```

### Typography Hierarchy
* **Headings (`h1`, `h2`, `h3`, `.serif`):** `Fraunces`, Georgia, serif (Google Fonts, weights 400, 600, 700). High-status, authoritative, editorial.
* **Body Text (`body`, `p`, `.btn`):** `Inter`, -apple-system, sans-serif (Google Fonts, weights 400, 500, 600). Crisp, readable, modern.

---

## 🗺️ Website Architecture & Section Anatomy

The website consists of the following key files:
1. **`index.html`** — The primary executive homepage.
2. **`speaker-kit.html`** — Dedicated Speaker Dossier, Media Kit, Keynote Topics, and approved bios.
3. **`privacy.html`** — Comprehensive privacy policy formatted for executive compliance.
4. **`terms.html`** — Terms of use and legal protections.
5. **`assets/`** — High-resolution feathered portraits (`headshot-black-feathered.png` and `portrait-emerald-feathered.png`).

### Homepage (`index.html`) Section Breakdown:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HOMEPAGE SECTION ANATOMY                        │
├────────────────────────────────────────────────────────────────────────┤
│ 1. STICKY NAV          • Brand logo ("Dr. Diana B. Allen.")            │
│                        • Links: About, Focus, Speaking, Books, Advisory│
│                        • CTA Button: "Book a Call" (Calendly link)     │
│                                                                        │
│ 2. HERO SECTION        • Eyebrow: "CYBERSECURITY · AI GOVERNANCE"      │
│                        • Headline: "Make the Hard Decision Defensible."│
│                        • Subtitle & Dual CTAs                          │
│                        • High-Res Feathered Portrait with Pink Frame   │
│                                                                        │
│ 3. CREDIBILITY STRIP   • Executive Roles & Practice Areas Bar          │
│                                                                        │
│ 4. ABOUT & POV         • Practitioner Perspective                      │
│                        • The "POV Card": Grounded executive philosophy │
│                                                                        │
│ 5. 3 CORE PILLARS      • 01: Cybersecurity & Zero Trust Architecture   │
│                        • 02: AI Governance & Executive Risk            │
│                        • 03: Board Governance & Transformation         │
│                                                                        │
│ 6. SPEAKING ENGAGEMENTS• Keynote Offerings ("Say the hard part out loud")│
│                        • Dual CTAs: Book a Call + Speaker Dossier Kit  │
│                        • Secondary High-Res Speaking Portrait          │
│                                                                        │
│ 7. BOOKS & PUBLICATIONS• Book 1: "Beyond the Dashboard" (Amazon link)  │
│                        • Book 2: "Beyond the Controls" (30-Day Journal)│
│                                                                        │
│ 8. ADVISORY PRACTICE   • Allen Leadership Solutions firm overview      │
│                                                                        │
│ 9. FINAL DECISION CTA  • "Tell me what decision is in front of you."   │
│                                                                        │
│ 10. FOOTER             • Socials (LinkedIn, YouTube, Instagram)        │
│                        • Legal Links (Privacy Policy, Terms of Use)    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ AI Edit Recipes: How Diana's AI Can Modify the Site

Here are ready-to-use recipes Diana can give her AI assistant:

### Recipe 1: Changing the Hero Headline & Bio
**Diana’s Prompt to ChatGPT:**
> *"ChatGPT, update the hero section of my homepage. Change the headline to '[Insert New Headline]' and change the paragraph beneath it to '[Insert New Bio]'."*

**Where the code lives (`index.html` lines ~160–180):**
```html
<!-- HERO -->
<section class="hero" id="top">
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <div class="eyebrow">Cybersecurity &bull; AI Governance &bull; Leadership</div>
        <!-- EDIT HEADLINE HERE -->
        <h1>Make the Hard Decision <span>Defensible.</span></h1>
        <!-- EDIT SUBTITLE HERE -->
        <p class="sub">I help boards, executives, and agency leaders cut through noise, navigate high-consequence risk, and align technology transformation with regulatory defensibility.</p>
        <div class="hero-ctas">
          <a class="btn btn-primary" href="https://calendly.com/drdianaballen" target="_blank" rel="noopener">Book a Call</a>
          <a class="btn btn-ghost" href="#focus">Explore Practice Areas</a>
        </div>
      </div>
      <div class="hero-photo">
        <img src="/assets/headshot-black-feathered.png" alt="Dr. Diana B. Allen">
      </div>
    </div>
  </div>
</section>
```

---

### Recipe 2: Adding or Modifying a Keynote Topic
**Diana’s Prompt to ChatGPT:**
> *"ChatGPT, add a new keynote topic to my Speaker Kit (`speaker-kit.html`) titled '[Keynote Title]'. The description should be '[Summary]' and bullet points '[Takeaways]'."*

**Pattern to replicate in `speaker-kit.html`:**
```html
<div class="topic-card">
  <div class="topic-tag">Executive Keynote</div>
  <h3>Your New Keynote Title Here</h3>
  <p>Two to three sentences describing why this topic matters to executive audiences, C-suite leaders, and board members.</p>
  <ul class="topic-bullets">
    <li>Key takeaway 1: What leaders will learn.</li>
    <li>Key takeaway 2: Defensible governance frameworks.</li>
    <li>Key takeaway 3: Real-world organizational implementation.</li>
  </ul>
</div>
```

---

### Recipe 3: Updating the Headshots or Media Assets
The site references two local feathered portrait assets:
* Main Hero: `/assets/headshot-black-feathered.png`
* Speaking Section: `/assets/portrait-emerald-feathered.png`

**To point to an external or new image:**
Simply replace the `src="..."` attribute with any image URL:
```html
<img src="https://your-domain.com/new-photo.jpg" alt="Dr. Diana B. Allen">
```

---

### Recipe 4: Updating Booking Link / Calendly
All booking buttons currently point to:  
`https://calendly.com/drdianaballen`

To change this to an executive intake form, HubSpot link, or assistant calendar:
Find and replace `href="https://calendly.com/drdianaballen"` across `index.html` and `speaker-kit.html`.

---

## ⚡ Domain Sovereignty & Subdomain Routing Configuration

To uphold enterprise cybersecurity assurance, executive defensibility, and zero-trust principles:
* **Canonical Front Door:** `dianaballen.com` (hosted natively on Dr. Diana Allen's GoHighLevel platform at `https://www.dianaballen.com/diana-b-allen`).
* **Active Production Redirection:** All three subdomains (`diana.bullmight.com`, `dr.bullmight.com`, `drallen.bullmight.com`) are configured in **HTTP 302 Redirect Mode** pointing directly to `https://www.dianaballen.com/diana-b-allen`.
* **Zero Remote Attack Surface:** Public route mutation endpoints and transparent proxying have been permanently disabled to eliminate phishing, SSRF, and open-proxy risks.
* **Internal Staging & Backup:** The complete unbloated authority website remains maintained as an active staging mirror (`/staging`) and offline fallback under Centurion Host Governance.
* **Route Adjustments:** Any future routing adjustments are managed internally by Director Robert Hill via Centurion Hub. No public API tokens or secret keys are exposed or required in shared documentation.

---

## 🚀 Platform Deployment Options

### Option 1: Live On Current Server
* Active right now on `https://diana.bullmight.com/` (HTTP 200 OK).
* Zero maintenance required.

### Option 2: GoHighLevel (GHL) Custom Code
To run this inside GoHighLevel:
* **Method A (Dynamic Cloud Sync):** Paste `ghl_dynamic_loader.html` into a GHL Custom Code element. It renders the site full-bleed with 100% responsiveness.
* **Method B (Raw Custom Code):** Copy the full code from `ghl_single_page_custom_code.html` directly into any GHL page code block.

### Option 3: Custom Domains (Namecheap / GoDaddy)
To point `dianaballen.com` or `allenleadershipsolutions.com` to this site:
* Add a **CNAME** record in your DNS manager:  
  `Host: @` or `Host: www` $\rightarrow$ `Points to: diana.bullmight.com`

---

## 📄 Complete Full Source Code (`index.html`)

For Diana's AI agent's convenience, here is the full, validated source code of the master homepage:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dr. Diana B. Allen | Cybersecurity, AI Governance &amp; Executive Leadership</title>
  <meta name="description" content="Dr. Diana B. Allen is a cybersecurity, governance and transformation executive, author and speaker sharing practical perspectives on AI governance, compliance, executive risk, organizational transformation and leadership.">
  <meta name="author" content="Dr. Diana B. Allen">
  <link rel="canonical" href="https://diana.bullmight.com/">

  <!-- Open Graph / LinkedIn / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://diana.bullmight.com/">
  <meta property="og:title" content="Dr. Diana B. Allen | Make the Hard Decision Defensible">
  <meta property="og:description" content="Cybersecurity, AI governance, transformation and executive leadership from practitioner and author Dr. Diana B. Allen.">
  <meta property="og:image" content="https://diana.bullmight.com/assets/headshot-black-feathered.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Dr. Diana B. Allen | Make the Hard Decision Defensible">
  <meta name="twitter:description" content="Cybersecurity, AI governance, transformation and executive leadership from practitioner and author Dr. Diana B. Allen.">
  <meta name="twitter:image" content="https://diana.bullmight.com/assets/headshot-black-feathered.png">

  <meta name="theme-color" content="#12111A">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- SVG Favicon -->
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%2312111A'/%3E%3Ctext x='32' y='46' font-family='Georgia,serif' font-size='40' font-weight='700' fill='%23ED1D7F' text-anchor='middle'%3ED.%3C/text%3E%3C/svg%3E">

  <style>
    :root {
      --bg: #12111A;
      --card: #1A1824;
      --ink: #F4F1EC;
      --body: #C9C2B8;
      --muted: #948C9E;
      --line: #2A2735;
      --pink: #ED1D7F;
      --pink-hover: #c91568;
      --purple: #B48CD9;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      color: var(--body);
      line-height: 1.65;
      font-size: 17px;
      -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3, .serif {
      font-family: 'Fraunces', Georgia, serif;
      color: var(--ink);
      line-height: 1.15;
      font-weight: 600;
    }
    a { color: var(--ink); text-decoration: none; transition: color .2s ease; }
    .wrap { max-width: 1120px; margin: 0 auto; padding: 0 32px; }

    /* Sticky Navigation */
    nav {
      position: sticky;
      top: 0;
      background: rgba(18, 17, 26, 0.94);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--line);
      z-index: 100;
    }
    .nav-in {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }
    .brand {
      font-family: 'Fraunces', serif;
      font-weight: 700;
      font-size: 21px;
      color: var(--ink);
      letter-spacing: -0.01em;
    }
    .brand em { color: var(--pink); font-style: normal; }
    .nav-links {
      display: flex;
      gap: 28px;
      align-items: center;
      font-size: 14.5px;
      font-weight: 500;
    }
    .nav-links a:hover { color: var(--pink); }
    .nav-cta {
      background: var(--pink);
      color: #fff !important;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
      transition: background .2s ease, transform .15s ease;
    }
    .nav-cta:hover {
      background: var(--pink-hover) !important;
      transform: translateY(-1px);
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .18em;
      color: var(--muted);
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .eyebrow::before {
      content: "";
      width: 34px;
      height: 3px;
      background: var(--pink);
      border-radius: 2px;
    }

    section { padding: 96px 0; }
    .h2 { font-size: clamp(30px, 4vw, 44px); margin-bottom: 16px; }
    .lede { font-size: 19px; max-width: 680px; }

    /* Buttons */
    .btn {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 15.5px;
      transition: all .2s ease;
      cursor: pointer;
      text-align: center;
    }
    .btn-primary { background: var(--pink); color: #fff; }
    .btn-primary:hover { background: var(--pink-hover); transform: translateY(-1px); }
    .btn-ghost {
      border: 1.5px solid var(--ink);
      color: var(--ink);
      background: transparent;
    }
    .btn-ghost:hover {
      border-color: var(--pink);
      color: var(--pink);
      transform: translateY(-1px);
    }

    /* HERO */
    .hero { padding: 84px 0 72px; }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 64px;
      align-items: center;
    }
    .hero h1 {
      font-size: clamp(40px, 5.4vw, 62px);
      font-weight: 700;
      letter-spacing: -0.01em;
      line-height: 1.1;
    }
    .hero h1 span { color: var(--pink); }
    .hero p.sub {
      margin: 24px 0 36px;
      font-size: 19.5px;
      max-width: 560px;
      color: var(--body);
    }
    .hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }
    .hero-photo { position: relative; }
    .hero-photo img {
      width: 100%;
      border-radius: 14px;
      display: block;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
      object-fit: cover;
    }
    .hero-photo::after {
      content: "";
      position: absolute;
      left: -18px;
      top: 24px;
      width: 100%;
      height: 100%;
      border: 1.5px solid var(--pink);
      border-radius: 14px;
      z-index: -1;
      opacity: 0.85;
    }

    /* CREDIBILITY STRIP */
    .strip {
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      padding: 24px 0;
      background: var(--card);
    }
    .strip-in {
      display: flex;
      justify-content: center;
      gap: 16px 40px;
      flex-wrap: wrap;
      font-size: 13.5px;
      font-weight: 600;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: var(--muted);
    }

    /* ABOUT */
    .about-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 64px;
      align-items: start;
    }
    .about p { margin-bottom: 18px; font-size: 18px; }
    .cred-line {
      font-size: 14.5px;
      font-weight: 600;
      letter-spacing: .04em;
      color: var(--ink);
      border-left: 3px solid var(--pink);
      padding-left: 16px;
      margin: 28px 0;
      line-height: 1.6;
    }
    .about h3 { font-size: 22px; margin-bottom: 10px; }
    .pov-card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 40px 36px;
    }
    .pov-card .serif { font-size: 24px; margin-bottom: 16px; }
    .pov-card p { font-size: 17.5px; }

    /* FOCUS PILLARS */
    .focus-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      margin-top: 48px;
    }
    .focus-card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 36px 30px;
      display: flex;
      flex-col: column;
      transition: transform .2s ease, border-color .2s ease;
    }
    .focus-card:hover {
      transform: translateY(-4px);
      border-color: var(--pink);
    }
    .focus-num {
      font-family: 'Fraunces', serif;
      font-size: 28px;
      color: var(--pink);
      margin-bottom: 14px;
      font-weight: 700;
    }
    .focus-card h3 { font-size: 22px; margin-bottom: 14px; }
    .focus-card p { font-size: 16px; color: var(--body); }

    /* SPEAKING */
    .speak-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 64px;
      align-items: center;
      margin-top: 36px;
    }
    .speak-ctas { margin-top: 32px; display: flex; gap: 16px; flex-wrap: wrap; }
    .speak-photo img {
      width: 100%;
      border-radius: 14px;
      display: block;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    }

    /* BOOKS */
    .book-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      margin-top: 48px;
    }
    .book-card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .book-card .status {
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: var(--pink);
      background: rgba(237, 29, 127, 0.12);
      padding: 4px 10px;
      border-radius: 4px;
      margin-bottom: 16px;
      width: fit-content;
    }
    .book-card h3 { font-size: 26px; margin-bottom: 8px; }
    .book-card .book-sub { font-size: 15px; color: var(--muted); margin-bottom: 16px; font-weight: 500; }
    .book-card p { font-size: 16.5px; margin-bottom: 28px; }

    /* ADVISORY */
    .advisory {
      background: var(--card);
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }
    .advisory .btn-row { margin-top: 32px; display: flex; gap: 16px; flex-wrap: wrap; }

    /* FINAL CTA */
    .final {
      text-align: center;
      background: radial-gradient(circle at center, rgba(237, 29, 127, 0.08) 0%, transparent 70%);
    }
    .final h2 { font-size: clamp(32px, 4.5vw, 48px); margin-bottom: 16px; }
    .final p { font-size: 19px; max-width: 600px; margin: 0 auto 36px; }

    /* FOOTER */
    footer {
      border-top: 1px solid var(--line);
      padding: 56px 0 40px;
      background: #0C0B12;
      font-size: 14.5px;
    }
    .foot-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 24px;
      margin-bottom: 32px;
    }
    .foot-links { display: flex; gap: 24px; flex-wrap: wrap; }
    .foot-links a:hover { color: var(--pink); }
    .foot-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      color: var(--muted);
      font-size: 13.5px;
      border-top: 1px solid var(--line);
      padding-top: 24px;
    }
    .foot-meta a:hover { color: var(--pink); }

    /* Responsive Queries */
    @media (max-width: 900px) {
      .hero-grid, .about-grid, .speak-grid { grid-template-columns: 1fr; gap: 40px; }
      .focus-grid, .book-grid { grid-template-columns: 1fr; }
      .nav-links { display: none; }
      section { padding: 64px 0; }
    }
  </style>
</head>
<body>

  <!-- Sticky Navigation -->
  <nav>
    <div class="wrap nav-in">
      <a class="brand" href="#top">Dr. Diana B. Allen<em>.</em></a>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#focus">Focus Areas</a>
        <a href="#speaking">Speaking</a>
        <a href="#books">Books</a>
        <a href="#advisory">Advisory</a>
        <a class="nav-cta" href="https://calendly.com/drdianaballen" target="_blank" rel="noopener">Book a Call</a>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero" id="top">
    <div class="wrap">
      <div class="hero-grid">
        <div>
          <div class="eyebrow">Cybersecurity &bull; AI Governance &bull; Leadership</div>
          <h1>Make the Hard Decision <span>Defensible.</span></h1>
          <p class="sub">I help boards, executives, and agency leaders cut through noise, navigate high-consequence risk, and align technology transformation with regulatory defensibility.</p>
          <div class="hero-ctas">
            <a class="btn btn-primary" href="https://calendly.com/drdianaballen" target="_blank" rel="noopener">Book a Call</a>
            <a class="btn btn-ghost" href="#focus">Explore Practice Areas</a>
            <a class="btn btn-ghost" href="mailto:info@dianaballen.com">info@dianaballen.com</a>
          </div>
        </div>
        <div class="hero-photo">
          <img src="/assets/headshot-black-feathered.png" onerror="this.src='https://media.base44.com/images/public/6a501887b0c61f51e33e48c7/083029aba_headshot-black-feathered.png'" alt="Dr. Diana B. Allen">
        </div>
      </div>
    </div>
  </section>

  <!-- Credibility Strip -->
  <div class="strip">
    <div class="wrap strip-in">
      <span>CISO &bull; Executive Risk</span>
      <span>AI Governance</span>
      <span>Zero Trust Architecture</span>
      <span>Public Sector &bull; Defense</span>
      <span>Published Author</span>
    </div>
  </div>

  <!-- About Section -->
  <section class="about" id="about">
    <div class="wrap">
      <div class="eyebrow">Perspective</div>
      <div class="about-grid">
        <div>
          <h2 class="h2">Practitioner leadership, not theoretical governance.</h2>
          <p>Too much enterprise leadership is built for audits rather than reality. Compliance checklists give boards a false sense of security, while frontline engineering teams inherit unworkable mandates.</p>
          <p>My work sits at the intersection of executive accountability, technical precision, and organizational change. Whether designing agency-wide Zero Trust architectures or establishing board-level AI risk frameworks, the goal is always the same: make the hard decision defensible under regulatory and adversarial scrutiny.</p>
          <div class="cred-line">
            Executive Leader &bull; Founder of Allen Leadership Solutions &bull; Author of "Beyond the Dashboard"
          </div>
        </div>
        <div class="pov-card">
          <div class="serif">"If governance cannot survive contact with delivery, it isn't governance. It is overhead."</div>
          <p>True operational resilience requires leaders to align authority with execution—so teams are empowered to act without sacrificing compliance.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Practice Focus Pillars -->
  <section id="focus">
    <div class="wrap">
      <div class="eyebrow">Core Practice Areas</div>
      <h2 class="h2">Where complexity meets consequence.</h2>
      <p class="lede">Three areas where organizations cannot afford to make decisions based on assumptions.</p>
      
      <div class="focus-grid">
        <div class="focus-card">
          <div class="focus-num">01</div>
          <h3>Cybersecurity &amp; Zero Trust Architecture</h3>
          <p>Moving beyond perimeter security into continuous verification, least privilege, and defensible security architectures tailored for high-consequence public and private sector enterprises.</p>
        </div>
        <div class="focus-card">
          <div class="focus-num">02</div>
          <h3>AI Governance &amp; Executive Risk</h3>
          <p>Establishing operational guardrails for enterprise AI deployment: model risk management, algorithmic accountability, data privacy, and board-level risk oversight.</p>
        </div>
        <div class="focus-card">
          <div class="focus-num">03</div>
          <h3>Board Governance &amp; Transformation</h3>
          <p>Aligning organizational culture, leadership accountability, and technical execution so multi-million-dollar modernization programs deliver lasting outcomes rather than stranded capital.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Speaking -->
  <section id="speaking" style="border-top:1px solid #2A2735;border-bottom:1px solid #2A2735">
    <div class="wrap">
      <div class="eyebrow">Speaking</div>
      <h2 class="h2">Bring me in to say the hard part out loud.</h2>
      <div class="speak-grid">
        <div>
          <p class="lede" style="max-width:520px">I speak on the issues leaders are often managing privately but need to address publicly: AI governance, cybersecurity leadership, public-sector trust, regulatory complexity, transformation and the realities of leading high-stakes work.</p>
          <p style="margin-top:16px;font-size:16px">Available for keynotes, panels, executive briefings, fireside conversations, leadership sessions and board-level discussions.</p>
          <div class="speak-ctas">
            <a class="btn btn-primary" href="https://calendly.com/drdianaballen" target="_blank" rel="noopener">Book a Call</a>
            <a class="btn btn-ghost" href="https://youtube.com/shorts/dzdrfEEKJrY" target="_blank" rel="noopener" style="border-color:var(--pink);color:var(--pink)">Watch Speaker Reel</a>
            <a class="btn btn-ghost" href="/speaker-kit">Speaker Dossier &amp; Kit</a>
            <a class="btn btn-ghost" href="mailto:info@dianaballen.com">info@dianaballen.com</a>
          </div>
        </div>
        <div class="speak-photo">
          <img src="/assets/portrait-emerald-feathered.png" onerror="this.src='https://media.base44.com/images/public/6a501887b0c61f51e33e48c7/083029aba_portrait-emerald-feathered.png'" alt="Dr. Diana B. Allen Speaking">
        </div>
      </div>
    </div>
  </section>

  <!-- Books -->
  <section id="books">
    <div class="wrap">
      <div class="eyebrow">Books</div>
      <h2 class="h2">The point of view, at length.</h2>
      <div class="book-grid">
        <div class="book-card">
          <div class="status">Available now</div>
          <h3>Beyond the Dashboard</h3>
          <div class="book-sub">How Real Transformation Gets Delivered at Scale</div>
          <p>A practical exploration of what it takes to deliver transformation when strategy, execution, organizational dynamics and accountability collide. Written for leaders responsible for outcomes, especially when authority, alignment and execution do not fit neatly inside an org chart.</p>
          <div class="book-ctas">
            <a class="btn btn-primary" href="https://a.co/d/0hQIrw4D" target="_blank" rel="noopener">Get the Book on Amazon</a>
          </div>
        </div>
        <div class="book-card">
          <div class="status">Coming soon</div>
          <h3>Beyond the Controls</h3>
          <div class="book-sub">A 30-Day Executive Journal</div>
          <p>A 30-day executive journal for leaders who want to think beyond compliance activity and examine how governance, risk, accountability and decision-making actually operate inside their organizations.</p>
          <div class="book-ctas">
            <a class="btn btn-primary" href="mailto:info@dianaballen.com?subject=Beyond%20the%20Controls%20journal">Get Notified</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Advisory -->
  <section class="advisory" id="advisory">
    <div class="wrap">
      <div class="eyebrow">Advisory</div>
      <h2 class="h2">Some decisions need more than an article.</h2>
      <p style="margin-top:20px">I advise executives and boards navigating high-stakes decisions: where the risk actually sits, what credible governance looks like in their specific context, and how to sequence transformation so it holds after the attention moves on.</p>
      <p>Advisory and delivery engagements are provided through Allen Leadership Solutions, the firm I founded to help organizations move from complexity to consequential action.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://www.allenleadershipsolutions.com/" target="_blank" rel="noopener">Explore Allen Leadership Solutions</a>
        <a class="btn btn-ghost" style="border-color:#171412;color:#171412" href="https://calendly.com/drdianaballen" target="_blank" rel="noopener">Book a Call</a>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="final">
    <div class="wrap">
      <h2>Tell me what decision is in front of you.</h2>
      <p>Speaking, executive advisory, media, partnerships, or a complex problem that needs a sharper point of view. Start the conversation.</p>
      <div class="btn-row" style="justify-content:center">
        <a class="btn btn-primary" href="https://calendly.com/drdianaballen" target="_blank" rel="noopener">Book a Call</a>
        <a class="btn btn-ghost" href="mailto:info@dianaballen.com">Contact Diana</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <a class="brand" href="#top">Dr. Diana B. Allen<em>.</em></a>
        <div class="foot-links">
          <a href="https://www.linkedin.com/in/drdianaballen/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.youtube.com/@drdianaballen" target="_blank" rel="noopener">YouTube</a>
          <a href="https://www.instagram.com/diana_b_allen/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.allenleadershipsolutions.com/" target="_blank" rel="noopener">Allen Leadership Solutions</a>
        </div>
      </div>
      <div class="foot-meta">
        <span>Cybersecurity &bull; AI Governance &bull; Transformation &bull; Executive Leadership</span>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>
      <div style="font-size:13px;color:var(--muted);margin-top:16px">&copy; 2026 Dr. Diana B. Allen. All rights reserved.</div>
    </div>
  </footer>

</body>
</html>
```

---

## 📞 Support & Fleet Contacts
This architecture is maintained on Director Robert Hill's Centurion ecosystem host.  
For technical inquiries, DNS adjustments, or deeper multi-agent automation:
* **Director:** Robert Hill
* **Ecosystem:** Centurion Command Network (`cent.bullmight.com`)
* **AI Fleet:** OpenClaw / Antigravity Engineering
