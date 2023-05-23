document.addEventListener('DOMContentLoaded', (event) => {
    const searchForm = document.querySelector('.search');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchInput = document.querySelector('.search__input');
        const searchInputValue = searchInput.value;

        // Save the search term to local storage.
        localStorage.setItem('searchTerm', searchInputValue);

        // Redirect to the news page.
        window.location.href = './news.html';
    });
});
