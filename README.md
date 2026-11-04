# 🌐 Dr. Diana B. Allen — Executive Authority Platform & Codebase

Official repository for **Dr. Diana B. Allen's** high-impact executive authority website, speaker kit, and leadership platform.

- **Live Production URL:** [https://diana.bullmight.com](https://diana.bullmight.com)
- **Alternate Subdomains:** `dr.bullmight.com` | `drallen.bullmight.com`
- **Target Custom Domains:** `allenleadershipsolutions.com` | `dianaballen.com`

---

## 📁 Repository Structure

```
├── index.html                                 # Primary Executive Authority Landing Page
├── speaker-kit.html                           # Keynote Dossier, Media Kit & Speaker Bio
├── privacy.html                               # Legal Defensibility & Privacy Policy
├── terms.html                                 # Terms of Service
├── terminal.html                              # Interactive AI Terminal / Console
├── assets/                                    # Optimized transparent feathered headshots
│   ├── headshot-black-feathered.png
│   └── portrait-emerald-feathered.png
├── DR_DIANA_ALLEN_WEBSITE_AI_MASTER_GUIDE.md  # Detailed AI Prompting & Editing Guide
└── CENTURION_ECOSYSTEM_ARCHITECTURE_DIANA_AI.md # Full Infrastructure & Deployment Guide
```

---

## 🎨 Design System Tokens

Built with pure semantic HTML5, CSS custom properties, and zero heavy frameworks for sub-200ms load times:

```css
:root {
  --bg: #12111A;          /* Obsidian Void (Background) */
  --card: #1A1824;        /* Elevated Slate Card */
  --ink: #F4F1EC;         /* Soft Off-White (Headings) */
  --body: #C9C2B8;        /* Warm Stone Grey (Body Copy) */
  --muted: #948C9E;       /* Muted Lavender Grey (Subtext) */
  --line: #2A2735;        /* Subtle Border Rule */
  --pink: #ED1D7F;        /* Signature Executive Magenta (Primary CTAs) */
  --pink-hover: #c91568;  /* Deep Magenta (Hover State) */
  --purple: #B48CD9;      /* Accent Lavender */
}
```

---

## 🚀 Deployment & Collaboration Workflow

### For Genie & AI / Developer Collaborators:
1. **Clone or Fork:** Clone this repository or fork it to your GitHub account:
   ```bash
   git clone https://github.com/bullmight703A/DRD.git
   ```
2. **Branch & Fix:** Create a feature branch (e.g. `feature/mailing-list-cta`):
   ```bash
   git checkout -b feature/mailing-list-cta
   ```
3. **Pull Request:** Open a Pull Request into `main`. 
4. **Live Deployment:**
   - Once merged to `main`, changes are pulled into the production host running `diana-router` behind Cloudflare Tunnel at `diana.bullmight.com`.
   - Alternatively, this repository can be linked directly to **Cloudflare Pages**, **Vercel**, or imported into **GoHighLevel (GHL)** as a custom funnel/website component.

---

## 📬 "Get Notified" Mailing List Integration

In `index.html` (under `#books`), the "Get Notified" button for *Beyond the Controls* is currently set to:
```html
<a class="btn btn-primary" href="mailto:diana@dianaballen.com?subject=Beyond%20the%20Controls%20journal">Get Notified</a>
```

### Recommended Integration Options:
- **Option 1 (Direct Form / Modal):** Replace the link with an inline email capture form or a pop-up modal submitting to Dr. Diana's CRM / ESP (GoHighLevel, Mailchimp, Substack, ConvertKit, etc.).
- **Option 2 (Centurion Webhook):** POST email submissions to an ingestion endpoint (`POST https://diana.bullmight.com/api/subscribe`) to automatically record subscriber interest and alert Dr. Diana.
