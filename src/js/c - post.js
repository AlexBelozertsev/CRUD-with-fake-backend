const BASE_URL = 'http://localhost:4040';

const newBook = {
    "title": "Пробуждение Левиафана",
    "author": "Джеймс Кори",
    "genres": [
        "фантастика",
        "серия Пространство / Экспансия"
    ],
    "rating": 9.5
};

function addBook(book) {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(book)
    };
    return fetch(`${BASE_URL}/books`, options).then(res => res.json())
};

addBook(newBook).then(console.log).catch(err => console.log(err));
addBook({
    "title": "Обитаемый Остров",
    "author": "А. и Б. Стругацкие",
    "genres": [
        "фантастика",
        "серия Мир Полудня"
    ],
    "rating": 10
}).then(console.log).catch(err => console.log(err));