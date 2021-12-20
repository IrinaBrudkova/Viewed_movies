/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ],
};
const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    inputIn = document.querySelector(".adding__input"),
    btn = document.querySelector("button"),
    newFilm = inputIn.value,
    checkBox = document.querySelector('input[type = "checkbox"]'),
    films = document.querySelectorAll(".promo__interactive-item"),
    deleteFilm = document.querySelectorAll(".delete");

console.log(films);

function checkFavoriteFilm() {
    if (checkBox.checked) {
        console.log(checkBox.checked);
        console.log("Добавляем любимый фильм.");
    }
}

function numerateFilms() {
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `<li class="promo__interactive-item">
        ${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;
    }); // добавить фильмы из movieDB, добавить нумерацию
}

function veryLongStringCheck() {
    let longString = inputIn.value;
    if (longString.length > 21) {
        longString = longString.substr(0, 21);
        movieDB.movies.push(`${longString} ...`);
    } else {
        movieDB.movies.push(inputIn.value.toUpperCase()); // добавить фильм в ммассив
    }
}

adv.forEach((item) => {
    item.remove();
}); // удалить все рекламные блоки со страницы

genre.textContent = "драма"; // Изменить жанр фильма, поменять "комедия" на "драма"

poster.style.backgroundImage = 'url("img/bg.jpg ")'; //Изменить задний фон постера

function myFilms(event) {
    event.preventDefault(); //остановить стандартное поведение браузера
    veryLongStringCheck(); //проверяем на длину и записываем в массив
    movieDB.movies.sort(); // отсортировать список фильмов по алфавиту
    movieList.innerHTML = ""; // очистить список с просмотренными фильмами
    numerateFilms(); // пронумеровать фильмы по порядку
    checkFavoriteFilm(); // поставили галочку?
    inputIn.value = "";
}

btn.addEventListener("click", myFilms);