// Function to collapse all books
    function collapseAllBooks() {
        document.querySelectorAll('.book.expanded').forEach(expandedBook => {
            expandedBook.classList.remove('expanded');
        });
    }
    
    // Event listener for each book click
    document.querySelectorAll('.book').forEach(book => {
        book.addEventListener('click', () => {
            // If the clicked book is already expanded, collapse it
            if(book.classList.contains('expanded')) {
                book.classList.remove('expanded');
            } else {
                // Collapse all books and expand the clicked one
                collapseAllBooks();
                book.classList.add('expanded');
            }
        });
    });