const BASE_URL = 'http://localhost:4040';

function fetchBooks() {
    return fetch(`${BASE_URL}/books`).then(resp => resp.json())
};
function fetchBooksById(bookID) {
    return fetch(`${BASE_URL}/books/${bookID}`).then(resp => resp.json())
};
fetchBooks();
fetchBooksById(5);