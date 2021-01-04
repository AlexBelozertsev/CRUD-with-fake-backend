# CRUD-with-fake-backend

- https://www.youtube.com/watch?v=WMmFT8i2BS8&feature=youtu.be&ab_channel=GoITFrontend

- Пакет json-server - https://github.com/typicode/json-server //устанавливаю,
  запускаю через npm run server, получаю адрес (имитация бекенда на офлайне)
- В package.json после установки в 'script' прописываем
- - "server": "json-server --watch db.json -p 4040 -d 300" где указываю
    json-server следить за файлом db.json на порту (-p) 4040, и с имитацией
    задержки (delay) min 300ms (cm CLI usage)
- Postman - //адрес вставляю в адресную строку (имитация работы браузера)
- Работа с приватным API
- - Create
- - - Метод POST
- - - Тело
- - - Заголовки
- - - Ответ
- - Read
- - - Метод GET
- - - Ответ
- - Update
- - - Методы PUT и PATCH
- - - Тело
- - - Заголовки
- - - Ответ
- - Delete
- - - Метод DELETE
- - - Ответ
- Цикл запрос-ответ
