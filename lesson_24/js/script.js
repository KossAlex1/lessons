// Строгий режим
"use strict"

let guestFirst = `Завдання №1`;
console.log(guestFirst);

const items = document.querySelectorAll('.first__item')

items.forEach((item) =>
	item.addEventListener('click', () => item.classList.toggle('active'))
)


//**********
let questTwo = `Завдання №2`;
console.log(questTwo);

window.addEventListener("load", bodyLoaded)
function bodyLoaded() {
	// to body
	document.body.classList.add('loaded')
}



// ********************



//**********

let questThree = `Завдання №3`;
console.log(questThree);


const header = document.querySelector('header')
const footer = document.querySelector('footer')

if (footer && header) {
	header.addEventListener('mouseover', changeColor)
	function changeColor() {
		footer.style.backgroundColor = 'red'
		footer.style.border = '5px solid green'
	}

	header.addEventListener('mouseleave', anotherColor)
	function anotherColor() {
		footer.style.backgroundColor = 'blue'
		footer.style.border = 'none'
	}
}


// ********************


let questFour = `Завдання № 4`;
console.log(questFour);

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	// Відсоток від розміру об'єкту.
	// При появі якого спрацьовує подія
	// Де 0 це будь яка поява
	// 100 це повна поява об'кта в в'юпорті
	threshold: 1,
}

const elementItem = document.querySelector(".four__item")
const number = document.querySelector(".four__number")
//при observer .four__items анімується .four__item і міняється швидкістьінтервалу
const callback = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			elementItem.classList.add('animate')
		
			let i = 0
			let timer = setInterval(() => {
				i === 10 ? clearInterval(timer) : ++i
				number.innerHTML = ` ${i}`
			}, speed)
		}
	})
}
// встановелення швидкості через дата атрибут
const speed = number.dataset.speed

const observer = new IntersectionObserver(callback, options)

// observer батьківського елементу (врапера)
const target = document.querySelector(".four__items")
observer.observe(target)


