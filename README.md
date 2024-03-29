https://alexwebart.github.io/go2cinema

# Клиент и Админ панель кинотеатра 'Go2cinema'

Проект клиентской и администраторной панели кинотеатра.

Клиентская часть:\
-Просмотр предлагаемых кинотеатром сеансов\
-Выбор фильма/зала/места\
-Бронирование билета

Админ часть (**login**: admin, **password**: admin):\
-Создание зала. Конфигурация помещения, посадочных мест, цены на билет.\
-Создание карточки фильма, добавление в общий список показываемых фильмов кинотеатра\
-Создание сеанса. Привязка выбранного фильма к конкретн(ому)/ым кинозал(у)/ам на заданное время.\
-Открытие кинозала для демонстрации на клиентской части


## Технологии

1. Верстка - HTML, CSS (препроцессор scss);
1. Библиотеки - Rеact, React-Router;
1. Хранение состояния и побочных эффектов - React Context;
1. Генерация Qr-кода электронного билета - qrcode.react
1. Визуализация - gh-pages;

## Содержание

Приложение содержит следующие самостоятельные экраны (страницы):

1. Список доступных сеансов (/)
1. Выбора посадочных мест на выбранный с предыдущего роута сеанс (/hall)
1. Предварительный просмотр и бронирование сеанса (/bookong)
1. Электронный билета (/ticket)
1. Авторизация администратора (/admin/login)
1. Админ панель для управления и настройки конфигурации кинозалов, фильмов и сеансов (/admin)
1. 404 (/*)


## Cервер
[Репозиторий](https://github.com/AlexWEBArt/go2cinema-backend)

-Node.js Koa

Хостинг сервера - Render (url) - https://go2cinema-backend.onrender.com - бесплатный хостинг, подъем из спящего режима около 30 сек.
