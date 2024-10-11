/*// Игра "угадай число"
function guessNumber() {
    

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
const randomInt = getRandomIntInclusive(0, 100);  
while (true){
    let answer = Number(prompt(`Угадай число от 1 до 100`));
        if (isNaN(answer)) {
            alert (`Вы ввели НЕ число`);
            continue
            } 
        if (answer < randomInt) {
            alert (`Ваше число МЕНЬШЕ загаданного!`);
            continue
            } 
        if (answer > randomInt) {
            alert (`Ваше число БОЛЬШЕ загаданного!`);
            continue
            } 
        if (answer === randomInt)
            alert(`Вы УГАДАЛИ!`);
            break
            }
            
}
//1 задание
function returnMin(a, b = 1) {
    if (a <= b) {
       return a;
    } else {
            return b;
        }
    }
    console.log (returnMin (10, 2));
    

// 2 задание
function returnEven() {
let n = Number(prompt(`Введите число`));
if (isNaN(n)) {
    return (`Вы ввели НЕ число`);
} else {
    if (n % 2 ==0) {
        return (`Четное число`);
    } else {
        return (`Нечетное число`);
    }
}
}
alert (returnEven ());


//3.1 задание
function squaring() {
    let n = Number(prompt(`Введите число`));
    return  n ** 2;
}
alert (squaring());


//3.2 задание
function squaring() {
    let n = Number(prompt(`Введите число`));
    return  n ** 2;
}
let result = squaring();
alert (result);
    

//4 задание
function askAge() {
    let n = Number(prompt(`Сколько Вам лет`));
    if (n < 0) {
        return (`Вы ввели неправильное число`);
    } else {
        if (n >= 0 && n < 13) {
            return (`Привет, друг!`);
        } else {
            return (`Добро пожаловать!`);
        }
    }
    }
    alert (askAge());
    

    //5 задание
    function multiply() {
        let a = prompt(`Введите первое число`);
        let b = prompt(`Введите второе число`);
        if (isNaN(a) || isNaN(b)) {
            return (`Одно или оба значения не являются числом`);
        } else {
                return a * b;
            }
        }
        alert (multiply());
      

    //6 задание
    function exponentiation() {
    let n = Number(prompt(`Введите число`));
    if (isNaN(n)) {
        return (`Переданный параметр не является числом`);
    } else {
        let result = n ** 3;
        return (`${n} в кубе равняется ${result}`);
    }
}
    alert (exponentiation());
      */

    //7 задание
  function getArea() {

  }
    
