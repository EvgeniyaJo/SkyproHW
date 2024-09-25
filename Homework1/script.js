/*//1 задание
let a = Number(10);
alert(a);
a = Number(20);
alert(a);

//2 задание
const releaseYear = (`2007 - Год выпуска 1 IPhone`);
alert(releaseYear);

//3 задание
const creatorName = (`Брендан Эйх - имя создателя JS`);
alert(creatorName);

//4 задание
let b = Number(10);
let c = Number(2);
let sum = b + c;
let dif = b - c; 
let prod = b * c;
let div = b / c;
alert(sum);
alert(dif);
alert(prod);
alert(div);

//5 задание
let d = Number(2);
let result = d ** 5;
alert(result);

//6 задание
let e = Number(9);
let f = Number(2);
let rem = e % f;
alert(rem);

//7 задание
let num = 1;
alert(num += 5);
alert(num -= 3);
alert(num *= 7);
alert(num /= 3);
alert(++num);
alert(--num);

//8 задание
let age = prompt(`Сколько Вам лет?`);
alert(age);

//9 задание
const user = {
    name: String(`Stiv`),
    age: Number(`32`),
    isAdmin: Boolean (`true`)
}
let info = prompt(`Что Вы хотите узнать о пользователе? Например, имя?`, `name`);
alert(user[info]);
info = prompt(`Что Вы хотите узнать о пользователе что-то еще? Например, возраст?`, `age`);
alert(user[info]);
info = prompt(`Вас интересует еще что-то? Например, является ли он администратором?`, `isAdmin`);
alert(user[info]);

//10 задание
let name = prompt (String(`Как Ваше имя?`));
let hello = (`Привет, ${name}!`);
alert(hello);

// дополнительное задание
let number = prompt(`Загадайте любое число?`);
let number2 = (number * 2);
alert(`Если Ваше число удвоить, то получится ${number2}`);
let number3 = (number2 + 10);
alert(`Если к полученному результату прибавить десять, то получится ${number3}`);
let  number4 = (number3 / 2);
alert(`Если полученный результат разделить на два, то получится ${number4}`);
let  results = (number4 - number);
alert(`Если из полученного результата отнять загаданное число, то получится ${results}`);
*/