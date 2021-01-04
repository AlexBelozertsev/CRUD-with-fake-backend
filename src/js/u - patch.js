const BASE_URL = 'http://localhost:4040';

function updateBookById(update, ID) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(update)
    };
    return fetch(`${BASE_URL}/books/${ID}`, options)
        .then(resp => resp.json())
        .then(console.log)
};

updateBookById({ title: "Пожар Сиболлы", rating: 8.7 }, 9);
updateBookById({ title: 'Спектр', author: 'С. Лукьяненко', genres: ['серия Ответ Миру Полудня'] }, 12);