// Задание 2
// Реализовать вертикальное меню, которое "выезжает" по клику на кнопку-бургер и закрывается по клику на кнопку-крестик.
// Пример, как это должно выглядеть и работать:  https://ucarecdn.com/eef643a8-...
// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) HTML, CSS
// В разметке предусмотреть два блока: боковую панель и main.
// Боковая панель имеет фиксированное позиционирование, занимает определенную ширину (например, 250px) и 100% высоты экрана. Укажите для нее стиль overflow-x: hidden, чтобы при сворачивании панели (ширина ее будет становиться 0) все ее содержимое скрывалось.
// Задать фоновый цвет, внутри сверстать навигацию (ссылки). Кнопку закрытия разместить в правом верхнем углу панели с помощью position: absolute.
// Main расположен по центру экрана, но когда боковая панель открыта - имеет margin-left по размеру ширины боковой выезжающей панели. Внутри main разместите кнопку-бургер, которая будет открывать боковую панель, а также заголовок и какой-то контент.
// 2) JS
// Создайте переменные для обеих кнопок, для боковой панели и для main.
// Повесьте на кнопки обработчики кликов:
// - при клике на бургер должна увеличиться ширина боковой панели (с 0 до например 250px), а у main должен появится слева отступ. Сам бургер при открытии боковой панели должен исчезать.
// - при клике на крестик ширина боковой панели должна становиться равной нулю, также должен исчезать левый отступ у main и должна появляться кнопка-бургер.

const main = document.querySelector('main');
const aside = document.querySelector('aside');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

open.addEventListener('click',() => {
    main.style.marginLeft = '30%';
    aside.style.width = '30%';
    open.style.display = 'none'
});

close.addEventListener('click',() => {
    main.style.marginLeft = '1%';
    aside.style.width = '0%';
    open.style.display = 'block'
})

