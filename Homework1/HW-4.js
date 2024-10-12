//1 задание
for (let i = 0; i < 2; i++) {
    console.log(`Hello`);
 }
   
 //2 задание
 for (let i = 1; i < 6; i++) {
    console.log(i);
 }

//3 задание
for (let i = 7; i < 23; i++) {
    console.log(i);
 }

//4 задание
const obj = {
Коля : '200',
Вася : '300',
Петя : '400'
}
for (const key in obj) {
    console.log (key + `: ` + obj[key]);
}

//5 задание
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num ++;
    console.log (n, num)
}
console.log (`Количество циклов ${num}`);

//6 задание
let firstFriday = 4;
let allDay = 31;
for (i = firstFriday; i <= allDay; i += 7) {
    console.log (`Сегодня ${i}-е число. Необходимо подготовить отчет.`)
}

// доп.задание 1
let k = 100;
let iterations = 0;
while (k > 0){
    k -= 7;
    iterations ++;
console.log (k, iterations);
} 
console.log (`Количество циклов ${iterations}`);

// доп.задание 2

 let months = [' ', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',];
 for (let i = 1; i < months.length; i++) {
    console.log(months [i] + ` - ` + i);
  }

  // доп.задание 3
  const book = {
    Название : 'Математика 1 класс',
    Автор : 'М.И. Моро',
    "Год издания" : '1990',
    Жанр : 'Ужасы'
    }
    for (const key in book) {
        console.log (key + `: ` + book[key]);
    }
       
   // доп.задание 4
   let massiv = [100, 200, 3, 4, 65, 6, 70, 18, 98, 150,];
   let maxNum = Math.max (...massiv);
 console.log (maxNum);
