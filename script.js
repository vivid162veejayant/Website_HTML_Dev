const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const preview = document.getElementById('preview');

function updatePreview() {
    const combined = `
        <html>
            <head>
                <style>${cssCode.value}</style>
            </head>
            <body>
                ${htmlCode.value}
            </body>
        </html>
    `;
    preview.srcdoc = combined;
}

// Update preview when user types
htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);

// Initial load
updatePreview();
