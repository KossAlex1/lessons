// Строгий режим
"use strict"

let guestFirst = `Завдання №1`;
console.log(guestFirst);

let someVar = 0;
++someVar;
if (someVar) {
	console.log(someVar);
}
//**********

let guestSecond = `Завдання №2`;
console.log(guestSecond);

for (let i = 0; i < 11 ; ++i) {
	console.log(`Пункт №: ${i}`);
}

//**********

let questThree = `Завдання №3`;
console.log(questThree);

// let result = 10 <= "10"
// console.log(typeof result)
// console.log(result

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}
console.log('нічого не потрапить');
// Крок №1
// if (false || false && true || false){}
// Крок №2
//if (false || false || false) {}

// let result = 10 <= "10"
// console.log(typeof result)
// console.log(result)

let questFour = `Завдання №4`;
console.log(questFour);

function caclAb(a,b) {
	return a /b
}
showMessage(caclAb(3, 1))
function showMessage(caclAb) {
	if (Number.isNaN(caclAb) || Math.abs(caclAb) === Infinity) {
		console.log(`Не можна ділити`)
	} else {
		const result = `Результат ділення: ${caclAb}`
		console.log(result)
	}
}

// console.log(calcAb(1, 0));
// console.log(calcAb(NaN, true));
// console.log(calcAb(3, 'ууууууу'));
// console.log(calcAb('3', 1));


// *********************************


let questFive = `Завдання №5`;
console.log(questFive);

// let usersNames = ["Олексій ", "Олекса", "Олександр", 10,"Я" ]
// console.log(usersNames.includes(10))


let usersNames = ["Олексій ", "Олекса", "Олександр", 10, "Я"]
usersNames.forEach((item) => {
	if (item === 10) {
		console.log(`${item} `)
	}
})
