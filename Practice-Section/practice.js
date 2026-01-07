const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const preview = document.getElementById('preview');
const checkBtn = document.getElementById('checkBtn');
const challengeResults = document.getElementById('challengeResults');

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

htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);

// Initial load
updatePreview();

// Improved Challenge Checker
checkBtn.addEventListener('click', () => {
    const cssText = cssCode.value.toLowerCase();
    let results = [];

    // Challenge 1: Paragraph color
    const pColorRegex = /p\s*{[^}]*color\s*:/; // matches any 'p { ... color: ... }'
    if (pColorRegex.test(cssText)) {
        results.push('✅ Paragraph text color changed');
    } else {
        results.push('❌ Paragraph text color not changed');
    }

    // Challenge 2: Center heading
    const h1CenterRegex = /h1\s*{[^}]*text-align\s*:\s*center/;
    if (h1CenterRegex.test(cssText)) {
        results.push('✅ Heading is centered');
    } else {
        results.push('❌ Heading is not centered');
    }

    // Challenge 3: Background color
    const bgRegex = /background-color\s*:/;
    if (bgRegex.test(cssText)) {
        results.push('✅ Background color added');
    } else {
        results.push('❌ Background color not added');
    }

    challengeResults.innerHTML = results.join('<br>');
});
