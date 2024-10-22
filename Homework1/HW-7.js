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

/*//6 задание
let userNum = Number(prompt(`Введите число?`));
function getRandomInt() {
    Math.random() * userNum; 
    console.log( Math.random() * userNum);
}
const newArr = [];
    for (let i = 0; i < randomInt / 2; i++) {
      newArr.push(getRandomInt(0, randomInt));
  }
  
 
console.log(newArr);*/

//7 задание
let userNum1 = Number(prompt(`Введите 1 число?`));
let userNum2 = Number(prompt(`Введите 2 число?`));
function getRandomIntInclusive(min, max) {

    min = Math.ceil(userNum1);
    max = Math.floor(userNum2);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomInt = getRandomIntInclusive(userNum1, userNum2);
console.log(randomInt);

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
