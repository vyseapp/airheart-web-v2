const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Update all image src paths
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

fs.writeFileSync(htmlPath, html);
console.log('Image paths updated.');