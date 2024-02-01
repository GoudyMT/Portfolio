document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        
        if (details.style.display === 'block') {
            details.style.display = 'none';
            button.innerText = 'Learn More';
        } else {
            details.style.display = 'block';
            button.innerText = 'Show Less';
        }
    });
});