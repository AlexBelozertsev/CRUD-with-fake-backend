const BASE_URL = 'http://localhost:4040';

function deleteBook(bookID) {
    const options = {
        method: 'DELETE'
    }
    return fetch(`${BASE_URL}/books/${bookID}`, options).then(resp =>resp.json())
};

deleteBook(13);