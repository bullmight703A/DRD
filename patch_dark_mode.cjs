const fs = require('fs');

const path = 'c:/Users/kidaz/.openclaw/workspace/diana_website/ghl_single_page_custom_code.html';
let content = fs.readFileSync(path, 'utf8');

// Ensure image assets are absolute
content = content.replace(/src="\/assets\//g, 'src="https://diana.bullmight.com/assets/');
content = content.replace(/href="\/speaker-kit"/g, 'href="https://diana.bullmight.com/speaker-kit"');
content = content.replace(/href="\/privacy"/g, 'href="https://diana.bullmight.com/privacy"');
content = content.replace(/href="\/terms"/g, 'href="https://diana.bullmight.com/terms"');

// Comprehensive GHL override CSS
const ghlBulletproofCSS = `
    /* ======================================================= */
    /* GHL DARK MODE ENFORCEMENT & OVERRIDES                   */
    /* ======================================================= */
    html,
    body,
    #__nuxt,
    #preview-container,
    .preview-container,
    .hl_page-preview--content,
    .bgCover,
    .fullSection,
    .c-section,
    .c-wrapper,
    .inner,
    .row,
    .col,
    .c-custom-code,
    .diana-site-root {
      background: #12111A !important;
      background-color: #12111A !important;
      color: #C9C2B8 !important;
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    .hero,
    #about,
    #focus,
    #insights,
    #experience,
    #speaking,
    #books,
    .final {
      background: #12111A !important;
      background-color: #12111A !important;
    }

    .hero h1 {
      color: #F4F1EC !important;
    }

    .hero p.sub {
      color: #C9C2B8 !important;
    }

    .btn-ghost {
      border: 1.5px solid #F4F1EC !important;
      color: #F4F1EC !important;
      background: transparent !important;
    }

    .btn-ghost:hover {
      border-color: #ED1D7F !important;
      color: #ED1D7F !important;
    }

    .hero-photo {
      background: transparent !important;
    }

    .hero-photo img {
      background: transparent !important;
    }

    .advisory {
      background: #FAF6F0 !important;
      background-color: #FAF6F0 !important;
      color: #3E382F !important;
    }

    .advisory .h2, .advisory h2 {
      color: #171412 !important;
    }

    .advisory p {
      color: #3E382F !important;
    }
`;

// Insert the overrides right inside <style>
if (content.includes('/* GHL Builder Container Resets */')) {
  content = content.replace(/\/\* GHL Builder Container Resets \*\/[\s\S]*?width: 100% !important;\s*\}/, ghlBulletproofCSS);
} else {
  content = content.replace('/* Responsive */', ghlBulletproofCSS + '\n    /* Responsive */');
}

// Wrap inside diana-site-root if not already wrapped
if (!content.includes('class="diana-site-root"')) {
  content = content.replace('<body>', '<body>\n<div class="diana-site-root">');
  content = content.replace('</body>', '</div>\n</body>');
}

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated ghl_single_page_custom_code.html. Size:', fs.statSync(path).size);
