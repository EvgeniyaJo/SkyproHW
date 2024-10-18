//1 задание
const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
    if (num[i] == 10)
        break;
    console.log(num[i]);
}

//2 задание
const num1 = [1, 5, 4, 10, 0, 3];
let findFour = num1.indexOf(4);
console.log(findFour);

//3 задание
const num3 = [1, 3, 5, 10, 20];
let numJoin = num3.join (` `);
console.log(numJoin);

// 4 задание
const arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let a = 0; a < 3; a++) {
        arr[i].push(1);
    }
}
console.log(arr);

//5 задание
let arr1 = [1, 1, 1,];
let addArr1 = arr1.push(2, 2, 2);
console.log(arr1);

//6 задание
let arr2 = [9, 8, 7, `a`, 6, 5];
let sortArr2 = arr2.sort();
let filterArr2 = arr2.filter(i => typeof i == "number");
console.log(arr2);

//7 задание
let arr3 = [9, 8, 7, 6, 5];
let guessNum = Number(prompt(`Введите число?`));
let result = arr3.includes(guessNum);
if (result == true) {
    alert(`Угадал`);
} else {
    alert(`Не угадал`);
}

//8 задание
let text = `abcdef`;
let splitText = text.split(``);
let reverseText = splitText.reverse();
let joinText = reverseText.join(``);
console.log(joinText);

//9 задание
let arr4 = [[1, 2, 3], [4, 5, 6]];
arr4 = arr4.flat();
console.log(arr4);

//10 задание
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let res = []
for (let i = 0; i < arr6.length - 1; i++) {
res = arr6[i] + arr6 [i + 1];
console.log(res);
}

//11 задание
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
const mapArr7 = arr7.map(i => i ** 2);
console.log (mapArr7);

//12 задание
const words = [`жокс`, `трихолог`, `рентгенография`, `псевдореминисценция`, `шпалоподбивочный`,];
const mapWords = words.map(i => i.length);
console.log (mapWords);

//13 задание
const arr8 = [1, -2, 3, 4, -5, 6, 7, 8, -9, 10,];
const filterArr8 = arr8.filter(i => i >= 0);
console.log (filterArr8);

//14 задание
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
const getArr = [];
for (let i = 0; i < 10; i++) {
    getArr.push(getRandomInt(1, 10));
}
console.log(getArr);
const filterGetArr = getArr.filter(i => i % 2 ==0);
console.log(filterGetArr);

//15 задание
function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
const getArr2 = [];
for (let i = 0; i < 6; i++) {
    getArr2.push(getRandomInt2(1, 10));
}
console.log(getArr2);
let reduseGetArr2 = getArr2.reduce((a, b) => a + b) / getArr2.length;
console.log(reduseGetArr2);

