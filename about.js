document.querySelectorAll('.journey').forEach(section => {
    const readMoreIcon = section.querySelector('.read-more');
    readMoreIcon.addEventListener('click', () => {
        const fullText = section.querySelector('.full-text');
        const introText = section.querySelector('.intro-text');

        // Toggle the display of the full text and change the icon orientation
        if (fullText.style.display === 'block') {
            fullText.style.display = 'none';
            section.classList.remove('expanded');
        } else {
            fullText.style.display = 'block';
            section.classList.add('expanded');
        }
        
        // Optionally toggle the intro text visibility
        introText.style.display = introText.style.display === 'none' ? 'block' : 'none';
    });
});