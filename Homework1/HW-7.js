//1 задание
let text = `js`;
let upperText = text.toUpperCase();
console.log(upperText);

//2 задание
const words = [`function declaration`, `Function Expression`, `arrow function`, `let`, `const`,`var`, `hoisting`];
let search = `function`;
words.forEach((word) => {
    if (word.toLowerCase().startsWith(search.toLowerCase())) {
        console.log (word);
    }
});

//3 задание
let num = 32.58884;
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.round(num));

//4 задание
const arr = [52, 53, 49, 77, 21, 32,];
console.log(Math.min.apply(null,arr));
console.log(Math.max.apply(null,arr));

//5 задание
let int = Math.random() * 10;
console.log(Math.floor(int));

//6 задание
let userNum = Number(prompt(`Введите число?`));
function getRandomInt(min, max) {
    min = 0;
    max = Math.floor(userNum);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomInt = getRandomInt(0, userNum);
const getArr = [];
for (let i = 0; i < userNum / 2; i++) {
    getArr.push(getRandomInt(0, userNum));
}
console.log(getArr);


//7 задание
let userNum1 = Number(prompt(`Введите 1 число?`));
let userNum2 = Number(prompt(`Введите 2 число?`));
function getRandomIntInclusive(min, max) {

    min = Math.ceil(userNum1);
    max = Math.floor(userNum2);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomInt1 = getRandomIntInclusive(userNum1, userNum2);
console.log(randomInt1);

//8 задание
let myDate = new Date();
console.log(myDate);

//9 задание
let currentDate = new Date();
let day73 = 73 * 24 * 60 * 60 * 1000;
let forward73 = +currentDate + day73;
let searchDate = new Date(forward73);
console.log(searchDate);

//10 задание
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let curDate = new Date();
let newDate = `Дата: ` + curDate.getDate() + ` ` + months[curDate.getMonth()] + ` ` + curDate.getFullYear() + ` - это `+ days[curDate.getDay()];
let newTime = `Время: ` + curDate.getHours() + ` ` + curDate.getMinutes() + ` ` + curDate.getSeconds();
console.log(newDate, newTime);

