//1 задание
let password = `122345qwerty`;
let password2 = (prompt (`Введите пароль`));
alert (password===password2 ? `Пароль введен верно` : `Пароль введен неверно`);

//2 задание
let c = Number(prompt(`введите число от 1 до 10`));
alert (c>=0 && c<=10 ? `Верно` : `Неверно`);

//3 задание
let d = Number(prompt(`Введите первое число?`));
let e = Number(prompt(`Введите второе число?`));
alert (d>100 || e>100 ? `Верно` : `Неверно`);

//4 задание
let a = '2';
let b = '3';
alert(Number (a) + Number (b));

//5 задание
var monthNumber = prompt(`Введите номер месяца в году для определния сезона?`);
switch (monthNumber) {
    case '1':
        alert('Зима');
        break;
    case '2':
        alert('Зима');
        break;
    case '3':
        alert('Весна');
        break;
    case '4':
        alert('Весна');
        break;
    case '5':
        alert('Весна');
        break;
    case '6':
        alert('Лето');
        break;
    case '7':
        alert('Лето');
        break;
    case '8':
        alert('Лето');
        break;
    case '9':
        alert('Осень');
        break;
    case '10':
        alert('Осень');
        break;
    case '11':
        alert('Осень');
        break;
    case '12':
        alert('Зима');
        break;

    default:
        alert('В году всего 12 месяцев');
        break;
}

// доп.задание 1
let num = Number(prompt (`Введите любое число`));
if (isNaN(num)) {
    alert (`Вы ввели НЕ число!`);
} else if (num % 2 === 0) {
    alert (`ЧЕТНОЕ число`)
} else {
    alert (`НЕЧЕТНОЕ число`);
}

// доп.задание 2
var clientOS =prompt(`Укажите OS Вашего телефона? IOs - 0; Android - 1`);
switch (clientOS) {
    case '0':
        alert('Установите версию приложения для IOs по ссылке');
        break;
    case '1':
        alert('Установите версию приложения для Android по ссылке');
        break;
        default:
        alert('Вы ввели некоректные данные');
        break;
}
   
// доп.задание 3
var clientOS1 =prompt(`Укажите OS Вашего телефона? IOs - 0; Android - 1`);
let clientDeviceYear =prompt(`Укажите год выпуска Вашего телефона?`);
    switch (clientOS1) {
        case  `0`:
            if (clientDeviceYear < 2015) {
                alert(`Установите ОБЛЕГЧЕННУЮ версию приложения для IOs по ссылке`);  
            } else {
                alert(`Установите версию приложения для IOs по ссылке`);
            }
            break;
        case  `1`:
            if (clientDeviceYear < 2015) {
                alert(`Установите ОБЛЕГЧЕННУЮ версию приложения для Android по ссылке`);  
            } else {
               alert(`Установите версию приложения для Android по ссылке`);
            }
            break;
        default:
        alert('Вы ввели некоректные данные');
        break;
    }