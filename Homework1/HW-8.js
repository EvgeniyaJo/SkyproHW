//1 задание
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log (people.sort((a, b) => a.age - b.age));
 

//2 задание
 function filter(array, ruleFunction) {
    const result = [];
    for (i = 0; i < array.length; i++){
        if (ruleFunction(array[i])){
        result.push(array[i]);
         }
    }
    return result;
}
    function isPositive(num) {
       return num > 0;
        }
    console.log(filter([3, -4, 1, 9], isPositive));
  
   function isMale(person) {
   return person.gender === 'male';
    }
    const people1 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    console.log(filter(people1, isMale));
 
 
//3 задание
    let timeID = setInterval(() => {
        console.log (Date());
    }, 3000);
    setTimeout(() => { clearInterval(timeID); console.log('30 секунд прошло'); }, 30000);


//4 задание
function delayForSecond(callback) {
  setTimeout (callback, 1000);

}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})


//5 задание
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond (() => sayHi(`Глеб`));