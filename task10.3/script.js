// Задание 3
// Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.
// Образец - devby.io, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...
// Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон всей строки, включая кнопку, меняется на белый.
// Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.
// ПОДСКАЗКИ. Вы можете изначально сверстать открытое меню, при этом кнопка "крестик" будет расположена в точности на месте кнопки "бургер". Скрыть выпадающий блок с помощью CSS. При открытии меню кнопка "бургер" будет исчезать, при закрытии - появляться.

const menu = document.querySelector('div');
const main = document.querySelector("main");
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const inp = document.querySelector("input");

open.addEventListener('click',() => {
    menu.style.display = 'flex';
    open.style.color = 'white';
    close.style.display = 'block';
});
close.addEventListener('click',() => {
    menu.style.display = 'none';
    open.style.color = '#000';
    close.style.display = 'none';
});
inp.addEventListener('focusin',() => inp.style.background = '#fff');
inp.addEventListener('focusout',() => inp.style.background = 'rgb(230, 230, 230)');