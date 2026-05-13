const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

console.log('Original size:', html.length);

// Update image src paths
html = html.replace(/src="([^"]*)"/g, (match, src) => {
    // Skip absolute URLs and data URIs
    if (src.startsWith('http') || src.startsWith('//') || src.startsWith('data:')) {
        return match;
    }
    // Already has path prefix?
    if (src.startsWith('/Airheart IT/')) {
        return match;
    }
    // Add prefix
    const newSrc = `/Airheart IT/${src}`;
    console.log(`Updated: ${src} -> ${newSrc}`);
    return `src="${newSrc}"`;
});

// Update mailto links to contact.html
html = html.replace(/href="mailto:[^"]*"/g, 'href="contact.html"');

// Update Contact Form CTA
html = html.replace(/href="https:\/\/airheart-it-contact-form\.vercel\.app"/g, 'href="contact.html"');

fs.writeFileSync(htmlPath, html);
console.log('Fixed image paths and contact links.');