// Строгий режим
"use strict"

// WINDOW

// Отримання ширини вікна браузера (в'юпорта)
/*
const windowWidth = window.innerWidth;
console.log(windowWidth);
*/
// Отримання висоти вікна браузера (в'юпорта)
/*
let windowHeight = window.innerHeight;
console.log(windowHeight);
*/
/*
if (windowWidth >= 768) {
	// якісь дії
}*/

// BOM
// Navigator

// Дані про браузер
// console.log(navigator.userAgent);

// Який в нас браузер
/*
if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром')
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox')
}
*/
/*
// Інформація про систему
console.log(navigator.userAgentData)
// Мобілка?
console.log(navigator.userAgentData.mobile)
// Платформа
console.log(navigator.userAgentData.platform)
*/

// Location
// Адресний рядок браузера
/*
console.log(location)
console.log(location.href)
console.log(location.hash)

const cleanHash = location.hash.replace("#", "")
console.log(cleanHash);

if (cleanHash === "popup") {
	// ....
}
*/

// Перенаправлення користувача
// location.href += 'practice.html'

// Alert
// alert('Повідомлення')

// Сonfirm
/*
const confirmAnswer = confirm("Запитання")
console.log(confirmAnswer)

if (confirmAnswer) {
	//якщо так
} else {
	//якщо ні
}
*/
// confirmAnswer ? якщо так : якщо ні

//Prompt
/*
let promptAnswer = prompt("Запитання");
console.log(promptAnswer);
*/
/*
if (promptAnswer === null) {
	console.log('Юзер натиснув cancel')
} else if (promptAnswer) {
	console.log(`Відповідь користувача: ${promptAnswer}`)
} else {
	console.log(`Користувач не надав відповідь`)
}
*/

// Document Object Model (DOM)
// Об'ектна модель документу

// Навігація по документу
// До тегу html
/*
const htmlElement = document.documentElement
console.log(htmlElement)
*/

// До тегу head
/*
const headElement = document.head
console.log(headElement);
*/

// До тегу body
/*
const bodyElement = document.body
console.log(bodyElement)
*/

// Перший та останній дочірній елемент
/*
const bodyElement = document.body
const firstChild = bodyElement.firstElementChild
const lastChild = bodyElement.lastElementChild
console.log(firstChild)
console.log(lastChild)
*/
/*
// Усі дочірні елементи (Колекція)
const bodyElement = document.body
// Колекція дочірніх елементів
const childNodes = bodyElement.children
*/
/*
for (let index = 0; index < childNodes.length; index++) {
	console.log(childNodes[index])
}
*/

// For ... of метод перебору для колекцій
/*
for (let childNode of childNodes) {
	console.log(childNode)
}*/

// Навігація до батьківських
// та сусідніх елементів
/*
const bodyElement = document.body
const previousSibling = bodyElement.previousElementSibling
const nextSibling = bodyElement.nextElementSibling
console.log(previousSibling)
console.log(nextSibling)
*/

// !!! Найчастіше використовується !!!
// Пошук та отримання довільного елементу

// Оримання одного першого знайденого об'єкту
/*
const liElement = document.querySelector("li")
console.log(liElement)

// Чи щось знайдено?
if (liElement) {
	// тоді працюємо...
}*/


// Оримання списку (статична колекція)
// знайдених об'єктів
/*
const liElements = document.querySelectorAll("li")
console.log(liElements)

// Чи щось знайдено?
if (liElements.length) {
	// тоді працюємо...
	liElements.forEach((item, index) => {
		console.log(item);
	});
}*/


// Селектор класів
// !!! Обов'язково використовуємо крапку для імені класу
/*
const liElements = document.querySelectorAll("li.list__item")
console.log(liElements);
*/

// Уточнення пошуку
// const liElements = document.querySelectorAll('.list__item.active')

// Усі об'єкти які мають в назві класу __item
/*
const liElements = document.querySelectorAll('[class*="__item"]')
console.log(liElements)
*/

// Селектор ID
/*
const someElement = document.querySelector('#some-id')
console.log(someElement)
*/

// Отримання батьківського об'єкту
/*
const listElement = document.querySelector('.list')
const parentElement = listElement.parentElement
console.log(parentElement)
*/

// Closest
// (Перевірка наявності батьківського об'єкту)
// ! Шукає не тільки батьківський об'єкт
// а й перевіряє чи є вказаний селектор у самого об'єкту
/*
const listItem = document.querySelector('.list__item')
const parentElement = listItem.closest('.active')
console.log(parentElement)
*/

// Зміна документу
// const listItems = document.querySelectorAll('.list__item')

// innerHTML - дає змогу отримати те що всередені об'єкту
// включно з тегами.
// Також дозволяє перезаписувати контент в середені об'єкту
/*
listItems.forEach((listItem, index) => {
	//console.log(listItem.innerHTML)
	//listItem.innerHTML = `<span>Привіт! №${index}</span>`
})
*/

// textContent дає змогу отримати текст всередені об'єкту.
// Також дозволяє перезаписувати текст в середені об'єкту
/*
listItems.forEach(listItem => {
	//console.log(listItem.textContent)
	//listItem.textContent = '<span>Привіт!</span>'
})
*/

// Створення об'єктів
/*
let newElement = document.createElement('div')
newElement.innerHTML = `<span>Привіт!</span>`
console.log(newElement)

const page = document.querySelector('.page')
*/
// Вставка створеного об'єкту
// Перед
//page.before(newElement)
// Після
// page.after(newElement)
// Всередену на початок
// page.prepend(newElement)
// Всередену в кінець
// page.append(newElement)

// insertAdjacentHTML/Text/Element
/*
const page = document.querySelector('.page')

let template = `<div class="block">`
if (page) {
	template += `<span>Сторінка існує!</span>`
}
template += `</div>`

console.log(template)
*/

// page.insertAdjacentHTML("beforeend", template)
// page.insertAdjacentText("afterend", template)
// page.insertAdjacentElement("beforeend", newElement)

/*
"beforebegin" – вставити html безпосередньо перед wrapper,
"afterbegin" – вставити html на початок wrapper,
"beforeend" – вставити html в кінець wrapper,
"afterend" – вставити html безпосередньо після wrapper.
*/
/*
page.insertAdjacentHTML("beforeend",
	`<div class="about">...</div>`
)
*/

// Перенесення елементу
/*
const list = document.querySelector('.list')
const header = document.querySelector('.header')
header.insertAdjacentElement('beforeend', list)
*/

// Клонування елементу
// cloneNode() - клонує сам об'єкт
// coneNode(true) - клонує об'єкт з вмістом

// const page = document.querySelector('.page')
// const clonePage = page.cloneNode()
// const clonePage = page.cloneNode(true)
// console.log(clonePage)

// Видалення об'єкту
/*
const list = document.querySelector('.list')
list.remove()
*/

// Стилі та класи
// className classList

// className - перезапис класу
/*
const list = document.querySelector('.list')
list.className = 'some-class'
*/

// const list = document.querySelector('.list')
// classList - метод роботи з класами
// !!! НЕ використовуємо крапку для імені класу
// list.classList.add('red')
// list.classList.remove('active')
// list.classList.toggle('active')
// list.classList.contains('active')
/*
if (list.classList.contains('active')) {
	console.log('Клас є!')
}
*/

// Управління стилями
// style
// const list = document.querySelector('.list')
/*
list.style.paddingTop = `50px`
list.style.fontSize = `50px`
list.style.backgroundColor = `red`
list.style.color = `black`
*/

// Перезапис стілів на вказані
/*
list.style.cssText = `
		padding-top: 20px;
		background-color: #794f45;
		font-size: 30px;
`*/

// Отримання стилю (його значення)
// getComputedStyle
//const list = document.querySelector('.list')
//const listStyle = getComputedStyle(list)
//const listStyleFontSize = listStyle.fontSize
//const listStyleFontSize = parseFloat(listStyle.fontSize)

//console.log(listStyleFontSize)

// Робота з атрибутами
/*
const list = document.querySelector('.list')
//Перевіряємо наявність атрибута.
list.hasAttribute('name')
//console.log(list.hasAttribute('class'))
//Получаємо значення атрибута.
list.getAttribute('name')
//console.log(list.getAttribute('class'))
//Установлюємо значення атрибута.
list.setAttribute('name', 'value')
// list.setAttribute('title', "Підказка")
//Удаляємо атрибут.
list.removeAttribute('name')
// list.removeAttribute('class')
*/

// DATA атирибути
// Завжди буде повертатись рядок
// Унарний оператор + переведе рядок в число
// Краще використовувати parseFloat
/*
const list = document.querySelector('.list')
const speed = parseFloat(list.dataset.speed) || 500
const direction = list.dataset.direction || "left"
const scrollSpeed = +list.dataset.scrollSpeed || 100

if (list.hasAttribute('data-scroll-animate')) {

} else {

}

if (direction === 'left') {

} else {

}*/


// Корисні властивості
// const list = document.querySelector('.list')

/*
// Отримання імені тегу
console.log(list.tagName)

if (list === "UL"){

}*/

// Атрибут hidden
// list.hidden = true


// Розміри та кординати

// Розміри вікна браузера (з полосами прокрутки)
// об'єкт window
/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);
*/
// Розміри вікна браузера (без прокрутки)
// об'єкт body
// clientWidth clientHeight
/*
const mainElement = document.body;
const windowClientWidth = mainElement.clientWidth;
const windowClientHeight = mainElement.clientHeight;
console.log(windowClientWidth);
console.log(windowClientHeight);
*/

// Кількість прокручений пікселів
// об'єкт window
/*
const windowScrollTop = window.scrollY
const windowScrollLeft = window.scrollX
console.log(windowScrollTop)
console.log(windowScrollLeft)
*/

// window.scrollTo({ options })
// прокрутка на вказані кординати
/*
window.scrollTo({
	top: 1000,
	left: 0,
	behavior: "smooth" // Safari не працює
})*/


// elem.scrollIntoView();
// Проктурка до об'єкту
/*
const list = document.querySelector('.list')
function scrollToBlock(element) {
	const block = element.dataset.scroll;
	element.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
		block: block,
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}
scrollToBlock(list);
*/

// Позиція об'єкта
// offsetLeft та offsetTop
// offsetParent - батьківський об'єкт
// (transform, або position absolute, relative, fixed чи sticky)
// відносно якого рахується кординати
/*
const list = document.querySelector('.list')
const listLeftPos = list.offsetLeft
const listTopPos = list.offsetTop

console.log(listLeftPos);
console.log(listTopPos);
*/

// Кординати відносно вікна браузера
// getBoundingClientRect
/*
const list = document.querySelector('.list')
console.log(list.getBoundingClientRect().top)
console.log(list.getBoundingClientRect().left)
*/

// Загальні розміри елемента (без зовнішніх відступів)
// offsetWidth и offsetHeight
/*
const list = document.querySelector('.list')
console.log(list.offsetWidth)
console.log(list.offsetHeight)
*/
/*
// Intersection Observer API
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/

/*
NodeList, HTMLCollection, Array

const list = document.querySelector('.list')
const listItems = document.querySelectorAll('.list__item')
// const listItems = list.children
list.insertAdjacentHTML('beforeend', `<li class="list__item">6</li>`)

// Перевід колекції в масив
const listItemsArray = Array.from(listItems)
console.log(listItemsArray)
*/






