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
  

    //7 задание
    function getArea() {
        let area = Math.PI * this.radius ** 2;
        return (`Площадь круга составляет ${area} см`);
}
    function getPerimeter() {
        let perimeter = 2 * Math.PI * this.radius;
        return (`Периметр круга составляет ${perimeter} см`);
}
    const circle1 = {
        radius : 2,
        getArea : getArea,
        getPerimeter : getPerimeter,
}

    const circle2 = {
        radius : 5,
        getArea : getArea,
        getPerimeter : getPerimeter,
    }
    alert (circle1.getArea());
    alert (circle2.getArea());
    alert (circle1.getPerimeter());
    alert (circle2.getPerimeter());