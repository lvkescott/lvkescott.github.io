document.addEventListener('DOMContentLoaded', function() {
    const introText = "Luke Scott";
    const descriptionText = "I am a Quality Assurance and Automation Tester.\n\nTechnlogies I'm into at the moment:\n- Playwright\n- OpenAI\n\nFeel free to reach out using my contact links below!";
    
    typeWriterEffect('intro', introText, 0, function() {
        typeWriterEffect('description', descriptionText, 0);
    });
});

function typeWriterEffect(elementId, text, i, callback) {
    if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        setTimeout(function() {
            typeWriterEffect(elementId, text, i + 1, callback);
        }, 50);
    } else if (callback) {
        callback();
    }
}
