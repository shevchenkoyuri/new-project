"use strict";

// Объявление переменных
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// Создание константы obj и изменение содержания в obj
// const obj = {
//     a: 10
// };
// obj.a = 20;
// console.log(obj);

// Объявление переменной внутри блока кода
// {
//     let example = 33;
//     console.log(example);
// }

// Пишем названия переменных правильно
// let vehicleBodyWidth = 5000,
//     vehicleBodyLength = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ", длина: " +vehicleBodyLength);

// Пример выражения с результатом NuN
// let number = 10;
// console.log("some string"*5);

// Пример встраивания выражений/переменных в строку
// let number = 10;
// console.log(`Значение переменной number: ${number}`);

// Пример объекта
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// console.log(obj["name"]);

// Пример массива
// let arr = ['plum.bmp', 'orange.jpg', 6, 'apple.png', [], {}];
// console.log(arr[2]);

// Пример записи вложенных объектов
// let objArr = {
//     0: "John",
//     1: 25,
//     2: false
//     abc: {
//         def: {

//         }
//     }
// };

// Пример добавления свойства в объект
// objArr.weight = 80;

// Пример обращения к свойству объекта
// console.log(objArr.weight);
// console.log(objArr['weight']);

// Пример добавления нового элемента в массив
// arr[10] = 1234;

// Вывод модального окна alert
// alert("Hello World!");

// Вывод модального окна с выбором - confirm
// let age = confirm("Вам уже есть 18?");
// console.log(age);

// Вывод модального окна с возможностью ввода prompt
// let age = prompt("Скольк Вам лет?", "");
// if (age>0) {
//     alert(`Вам ${age} лет`);
// } else {
//     alert(`Возраст указан не корректно`);
// }
// console.log(`age: ${typeof(age)}`);

// Запись в массив ответов на ряд ответов от пользователя
// const answers = []; /* создаем пустой массив */
// answers[0] = prompt("Ваше имя?", ""); /* запишем в массив ответ на вопрос 1 */
// answers[1] = prompt("Ваша фамилия?", ""); /* запишем в массив ответ на вопрос 2 */
// answers[2] = prompt("Сколько Вам лет?", ""); /* запишем в массив ответ на вопрос 3 */
// console.log(`Тип данных: ${typeof(answers)}, значение: ${answers}`);

// Конкатинация строк
// const category = "toys";
// console.log("https://domain.com/" + category);

// Интерполяция строк (появилась в ES6)
// console.log(`https://domain.com/${category}`);

// Функция проверки логина и пароля
// let userLogin = prompt("Введите Ваш логин","");
// if (userLogin == "admin") {
//     let pass = prompt("Введите Ваш пароль","");
//     if (pass == "boss" ) {
//         alert("Добро пожаловать!");
//     } else {
//         alert("Пароль не верный");
//     }
// } else if (userLogin == "" || userLogin == null) {
//     alert("Отменено");
// } else {
//     alert("Мы Вас не знаем");
// }

// Инкремент и декремент
// let incr = 10,
//     decr = 10;
// console.log(++incr);
// console.log(--decr);

// Взятие остатка
// console.log(5%2);

// Сравнение
// console.log(5*2 == 10);

// Строгое сравнение
// console.log(10 === "10");

const isChecked = true,
      isClosed = false;

console.log(isChecked && !isClosed);
