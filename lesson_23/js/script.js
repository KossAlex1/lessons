// Строгий режим
"use strict"

let guestFirst = `Завдання №1`;
console.log(guestFirst);

const bodyElement = document.body
console.log(bodyElement)

//**********
let questTwo = `Завдання №2`;
console.log(questTwo);


let ul = document.createElement('ul')
// Два варінанти вставки в боді:
// bodyElement.insertAdjacentHTML("afterbegin", ul)
// bodyElement.prepend(ul)
function createPart(number = 2) {
	for (let i = 1; i < number + 1; ++i) {
		ul.innerHTML += `<li>Пункт! № ${i}</li>`
	}
}
createPart(10)
console.log(ul)

// ********************



//**********

let questThree = `Завдання №3`;
console.log(questThree);

// Закоментував бо все зелене

// bodyElement.classList.add("loaded")

// if (bodyElement.classList.contains("loaded")) {
// 	bodyElement.style.color = `green`
// }

// ********************


let questFour = `Завдання № 4`;
console.log(questFour);

const item = document.querySelectorAll('.part__item')
// Також дозволяє перезаписувати контент в середині об'єкту
item.forEach((userName, index) => {
	userName.classList.add("active")
	userName.innerHTML = `Елемент №${index + 1}`
})

// ***************
let questFive = `Завдання №5`;
console.log(questFive);

const button = document.querySelector('.part__button')
function scrollToBlock(element) {
	const block = element.dataset.scroll
	element.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
		block: block,
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "nearest",
		behavior: "smooth"
	})
}
scrollToBlock(button)
// ******************
let questSix = `Завдання №6`
console.log(questSix)

const link = document.querySelector('.part__link')
// link.setAttribute('data-speed', "100")
const speed = parseFloat(link.dataset.speed)
console.log(speed)

if (speed <= '200') {
	link.style.color = `red`
}
else {
	link.style.color = `blue`
}