const fs = require('fs');
const path = require('path');

const srcPath = 'c:/Users/kidaz/.openclaw/workspace/diana_website/index.html';
let content = fs.readFileSync(srcPath, 'utf8');

// Ensure image assets and sub-pages use absolute URLs so they work everywhere
content = content.replace(/src="\/assets\//g, 'src="https://diana.bullmight.com/assets/');
content = content.replace(/href="\/speaker-kit"/g, 'href="https://diana.bullmight.com/speaker-kit"');
content = content.replace(/href="\/privacy"/g, 'href="https://diana.bullmight.com/privacy"');
content = content.replace(/href="\/terms"/g, 'href="https://diana.bullmight.com/terms"');

// Ensure GHL's wrapper elements do not add unwanted margins or padding
const ghlReset = `
    /* GHL Builder Container Resets */
    .hl_page-preview--content, .preview-container, .c-section, .fullSection, .inner, .c-wrapper {
      padding: 0 !important;
      margin: 0 !important;
      max-width: 100% !important;
      width: 100% !important;
    }
`;

content = content.replace('/* Responsive */', ghlReset + '\n    /* Responsive */');

// Remove <!doctype html><html><head> and <body> tags if Robert pastes into Custom Code element,
// OR keep everything self-contained so GHL iframe/custom code renders cleanly.
// In GHL Custom Code elements, putting <link>, <style>, and the <div>s works directly.
const outPath = 'c:/Users/kidaz/.openclaw/workspace/diana_website/ghl_single_page_custom_code.html';
fs.writeFileSync(outPath, content, 'utf8');
console.log('Successfully created:', outPath, 'Bytes:', fs.statSync(outPath).size);
