document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.journey').forEach(journey => {
        const sectionTitle = journey.querySelector('.section-title');
        const fullText = journey.querySelector('.full-text');
        const readMoreIcon = journey.querySelector('.read-more');

        // Function to toggle the expansion of the section
        function toggleSection() {
            if (fullText.style.display === 'block' || journey.classList.contains('expanded')) {
                fullText.style.display = 'none';
                readMoreIcon.classList.remove('rotated'); // Remove the class to rotate the icon back
                journey.classList.remove('expanded');
            } else {
                fullText.style.display = 'block';
                readMoreIcon.classList.add('rotated'); // Add a class to rotate the icon
                journey.classList.add('expanded');
            }
        }

        // Event listener for the section title
        sectionTitle.addEventListener('click', toggleSection);

        // Event listener for the read-more icon
        readMoreIcon.addEventListener('click', toggleSection);
    });
});