// Строгий режим
"use strict"

// Приорітетність операторів
// let result = 2 + 3 * 10 / "5";
// 1.
// let result = 2 + 3 * 10 / 5;
// 2.
// let result = 2 + 30 / 5;
// 3.
// let result = 2 + 6;
// 4.
// let result = 8;
// console.log(result);

// let num = 5;
// let results = 2 + 3 * 10 / ++num;
// 1.
// let results = 2 + 3 * 10 / 6;
// 2.
// let results = 2 + 30 / 6;
// 3.
// let results = 2 + 5;
// 4.
// let results = 7;
// console.log(results);

// Оператори порівняння
// Повертають булеве значення true / false
// < > <= >=
// == != // змінюють тип даних
// === !== // НЕ змінюють тип даних
/*
let result = 12 >= 10
console.log(typeof result)
console.log(result)
*/

// let result = 5 == "5"
// 1.
// let result = 5 == 5
// 2.
// let result = true
// console.log(result)

// let result = 5 != "5"
// 1.
// let result = 5 != 5
// 2.
// let result = false
// console.log(result)

// Порівнює як воно є без зміни типу даних
// let result = 5 === "5"
// 1.
// let result = 5 === "5"
// 2.
// let result = false
// console.log(result)

/*
let result = 5 !== "5"
console.log(result)
*/

/*
let a = 5
let b = "5"
*/
// ....code...
// ....code...
/*
let result = a === b;
console.log(result);
console.log(typeof a)
console.log(a);
console.log(typeof b)
console.log(b);
*/

// Оператор присвоєння =
// let someNum = 5;

// Логічні оператори
// ! || &&

// Оператор "ні" ! (унарний)

// let result = !0
// 1. перевод типу даних в булінан
// 2. отримання результату true або false
// let result = false
// 3. зміна булєвого значення на протележне
// let result = true
/*
console.log(typeof result);
console.log(result);
*/
/*
if(!хліб){
	йдемо в магаз...
}else{
	не йдемо в магаз...
}
*/

// Оператор "або" ||
// операнд №1 || операнд №2
// 1. перевод типу даних в булінан
// 2. отримання результату
//		true або false операнда №1
// 3. якщо результат кроку 2 true, завершуємо дію
// 3.1 результатом операції буде значення операдна №1
// 	та булеве значення true
// 4. якщо результат кроку 2 false
//		отримання результату
//		true або false операнда №2
// 4.1 якщо результат кроку 4 true
// 	результатом операції буде значення операдна №2
// 	та булеве значення true
// 5. якщо результат кроку 4 false
// 	результатом операції буде значення операдна №2
// 	та булеве значення false
/*
let result = 50 || 12;
console.log(result) // Значення, яке потрапляє в змінну
console.log(Boolean(result)) // Булеве значення операції
*/

// Оператор "та" &&
// let result = 1 && ""
// 1. перевод типу даних в булінан
// 2. отримання результату
//		true або false операнда №1
// 3. якщо результат кроку 2 false, завершуємо дію
// 3.1 результатом операції буде значення операдна №1
// 	та булеве значення false
// 4. якщо результат кроку 2 true
//		отримання результату
//		true або false операнда №2
// 4.1 якщо результат кроку 4 false
//		результатом операції буде значення операдна №2
//		та булеве значення false
// 5. якщо результат кроку 2 та 4 true
//		результатом операції буде значення операдна №2
//		та булеве значення true
/*
console.log(result)
console.log(Boolean(result))
*/

// Умовне вітвлення
// Синтаксис
/*
if (умова #1) {
	// Код, який виконоється
	// тільки якщо умова #1 вертає true
} else if (умова #2) {
	// Код, який виконоється
	// тільки якщо умова #2 вертає true,
	// а умова №1 false
}else {
	// Код, який виконоється
	// тільки якщо умова #2 вертає false,
	// та умова №1 false
}
// продовження коду ...
*/
/*
let varOne = 10
let varTwo = 5
*/
// Конструкція if переводить тип даних в boolean
/*
if (varOne) { // Чи varOne true?
	// Виконуємо якщо так
	console.log("Працює!");
}
*/
/*
if (varOne > varTwo) { // Чи true (правда) що varOne більше за varTwo? 
	console.log(`${varOne} більше ніж ${varTwo}`);
} else if (varOne === 10) {// Чи true (правда) що varOne дорівнює 10? 
	console.log(`varOne дорівнює 10`);
	// Може бути безліч "else if"
} else if (varTwo === 20) {// Чи true (правда) що varTwo дорівнює 20?
	console.log(`varTwo дорівнює 20`);
} else {// Виконуємо якщо усі попередні умови повернули false
	console.log(`Все пропало...`);
}
// продовження коду ...
console.log('продовження коду ...')
*/

let varOne = "1"
let varTwo = 3
let varThree = 3
let varFour = 4

if (varTwo === 2 || varOne > 3 && varThree < 4 || varFour > 6) {
	// Код виконоється
	// тільки якщо умова вертає true
	console.log('Умова true');
}
// продовження коду ...
// console.log('продовження коду ...')

// Крок №1 (Пріорітет у операторів порівняння)
// if (false || false && true || false){}

// Крок №2 (Пріорітет у оператора &&)
//if (false || false || false) {}

// Крок №3
// if (false) {}


// Оператор умови ?
// Синтаксис
// умова ? значення якщо умова true : значення якщо умова false

/*
let someVar = 10 > 5 ? "10 більше 5" : "10 меньше 5"
console.log(someVar);
*/
// Або
/*
let someVar
if (10 > 5) {
	someVar = "10 більше 5";
} else {
	someVar = "10 меньше 5";
}
console.log(someVar);
*/

// Приклади з ?
// const userAge = 39
//const userType = userAge >= 40 ? "Старий" : "Ще побігає"
// або
/*
let userType
if (userAge >= 40) {
	userType = "Старий"
} else {
	userType = "Ще побігає"
}
console.log(userType)
*/


// Умова в результаті умови
// const userType = userAge >= 40 ? "Старий" : userAge <= 16 ? "Шмаркач" : "Ще побігає"

// Гарний приклад порівняння
/*
const item = document.querySelector('.some-slass')
const animateSpeed = +item.dataset.speed || 500
*/

// Цикл For
// Синтаксис
/*
for(початок; умова закінчення циклу; крок){
	// код виконується
	// на кожному колі циклу
}
*/
/*
let someString = "Привіт! Як справи?"
console.log(someString.length)
*/
/*
console.log(someString[0])
console.log(someString[1])
console.log(someString[2])
console.log(someString[3])
console.log(someString[4])
console.log(someString[5])
console.log(someString[6])
*/

// Вивести окремо кожен символ рядка someString
/*
for (let i = 0; i < someString.length; ++i) {
	console.log(someString[i])
}*/
// ....

// Масиви
/*
let someArray = []
console.log(typeof someArray)
console.log(someArray);
*/
/*
let someArray = [10, "Жека", true, "Привіт!"]
console.log(someArray);
console.log(someArray.length);
console.log(someArray[1]);
*/

// Чи це масив. Array.isArray(тут пишемо змінну)
/*
let someArray = []
console.log(Array.isArray(someArray))
if (Array.isArray(someArray)) {
	// якщо someArray це масив
	// працюємо...
}*/
/*
let someArray = [10, "Жека", true, "Привіт!"]
for (let i = 0; i < someArray.length; ++i) {
	if (someArray[i] > 5) {
		console.log('Це число більше 5');
	}
}
*/
/*
let someArray = [10, "Жека", true, "Привіт!"]
// Метод перебору масиву
// масив.forEach(змінна яка отримає значення елементу масива => {});
someArray.forEach((item, index) => {
	console.log(index)
	console.log(item)
})*/

// Додати елемент в масив
// push додає елемент кінець масиву

/*
let usersNames = ["Вася", "Петро", "Ілдика"]
console.log(usersNames)
usersNames.push("Жека")
console.log(usersNames)
*/

// includes Чи є елемент в масиві (пошук елемента)
/*
let usersNames = ["Вася", "Петро", "Ілдика", 20]
console.log(usersNames.includes("Петро"))
console.log(usersNames.includes(20))
*/

// якщо в масиві usersNames НЕМАЄ значення 10,
// то додати
/*
let usersNames = ["Вася", "Петро", "Ілдика", 20]
if (!usersNames.includes(10)) {
	usersNames.push(10)
}
console.log(usersNames)
*/
// або
/*
let usersNames = ["Вася", "Петро", "Ілдика", 20]
!usersNames.includes(10) ? usersNames.push(10) : null
console.log(usersNames)
*/

// З масива у рядок
/*
let usersNames = ["Вася", "Петро", "Ілдика"]
let usersNamesString = usersNames.join(', ')
console.log(typeof usersNamesString)
console.log(usersNamesString)
*/


// Об'єкти
/*
const someObject = {}
console.log(someObject);
console.log(typeof someObject);
*/
/*
const user = {
	age: 40,
	name: "Жека"
}
console.log(user)
console.log(user.age)
console.log(user.name)
*/
/*
const someStyles = {
	color: "green",
	["font-size"]: 25
}
console.log(someStyles["font-size"])
console.log(someStyles.color)

// Зміна значення елементу об'єкту
someStyles["font-size"] = 50
console.table(someStyles)
*/

// Функції
/*
Використовується для запуску
коду який повторюється,
та для використання методу функціонального
програмування (кожну дію варто помістити в окрему функцію)
*/

// Об'ява функції
// Синтаксис
/*
function ім'я(параметри){
	// тіло функції (код функції)
}
*/

/*
Назви функцій формуються за
тими ж правилами що й назви змінних

Наприклад, функції, починаючі с
"show..." зазвичай щось показують,
"get..." – повертають значення,
"calc..." – обчислення,
"create..." – щось створюють,
"check..." – щось перевіряють і повертають логічно
значення, і т.д.
*/
// Приклади імен
/*
showMessage
getOptions
calcSum
*/

// Виклик (запуск) функції
/*
showMessage()

function showMessage() {
	console.log('я текст!')
}

showMessage()
showMessage()
showMessage()
showMessage()
*/


// Параметри функції
/*
function showMessage(someText = "Текст за замовченням") {
	console.log(someText);
}

showMessage()
// .....
// .....
// .....
// .....
showMessage("Моє повідомлення")
*/
/*
const numOne = 10
const numTwo = 20

function calcSum(a = 0, b = 0) {
	console.log(a + b)
}
// calcSum(numOne)
calcSum(numOne, numTwo)
calcSum(50, 105000)
*/

// Поовернення результату
// return - повертає результат функції
/*
const numOne = 10
const numTwo = 20

function calcSum(a = 0, b = 0) {
	return a + b
}
function showMessage(someText = "Текст за замовченням") {
	console.log(someText)
}
showMessage(calcSum(numOne, numTwo))
*/

// Стрілочні функції

// Звичайна функція
/*
function someName(text) {
	console.log(text)
}
*/
// Стрілочна функція в один рядок
// let someName = (text) => console.log(text)

// Функція де більше рядків
/*
let someName = (text) => {
	console.log(text);
	// ....
	// ....
	// ....
}
*/

// Завдання
// Текст з ефектом друку
const text = "Привіт! Ще текст!"
let template = ``

function initText(text) {
	for (let i = 0; i < text.length; i++) {
		let item = text[i]
		template +=
			`<span style="${item === ' ' ? `display:inline;` : ""}animation-delay: ${i * 0.1}s">${item}</span>`
	}
}

initText(text)

// Вивід у в'юпорт
const page = document.querySelector('.page')
page.insertAdjacentHTML("beforeend", template)