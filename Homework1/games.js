function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
// Игра "угадай число"
function guessNumber() {
    
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

  //Игра "простая арифметика"
  function simpleMath() {
  
    const randomInt1 = getRandomIntInclusive(0, 100);
    const randomInt2 = getRandomIntInclusive(0, 100);
    
    const signs = [`+`, `-`, `*`, `/`];
    const randomIndex = Math.floor(Math.random() * (signs.length));
    let randomSigns =signs[randomIndex];
    function getResult() {
    let result;
    let task;
    switch (randomSigns) {
      case `+` :
        task = (`${randomInt1} + ${randomInt2}`);
        result = randomInt1 + randomInt2;
            break;
      case `-` :
        task = (`${randomInt1} - ${randomInt2}`);
        result = randomInt1 - randomInt2;
            break;
      case `*` :
        task = (`${randomInt1} * ${randomInt2}`);
        result = randomInt1 * randomInt2;
           break;
      case `/` :
        if (randomInt1 < randomInt2 || randomInt2 == 0) {
          task =(`${randomInt2} / ${randomInt1} (ответ округлять до сотых)`);
          result = (randomInt2 / randomInt1).toFixed(2);
        } else {
          task = (`${randomInt1} / ${randomInt2} (ответ округлять до сотых)`);
          result = (randomInt1 / randomInt2).toFixed(2);
        }
          break;
        default:
        alert( "Нет таких значений" );
    }
   
    let userAnswear = prompt(`Решите задачу? \n ${task}`);
    if (userAnswear == null) {
      alert (`Вы хотите выйти?`);
    }
    else if (userAnswear == result){
          alert (`Вы решили задачу верно!`);
      }
      else{
        alert (`Вы решили задачу НЕверно!`);
      }
    }
  
    getResult();
    }





/*let userAnswear = Number(prompt(`Решите задачу? \n ${result}`));
if (userAnswear === result) {
    alert (`Вы решили задачу верно!`);
    } 
    else {
        alert (`Вы решили задачу НЕверно!`);
    }

  

  if (randomSigns === `+`) {
    task = (`${randomInt1} + ${randomInt2}`);
}
if (randomSigns === `-`) {
    task = (`${randomInt1} - ${randomInt2}`);
}
if (randomSigns === `*`) {
   task = (`${randomInt1} * ${randomInt2}`);
}
if (randomSigns === `/`) {
    task = (`${randomInt1} / ${randomInt2}`);
}

function getRes() {
let result;
let task;
switch (randomSigns) {
  case `+` :
    task = (`${randomInt1} + ${randomInt2}`);
    result = prompt(`Решите задачу? \n ${task}`);
        break;
  case `-` :
    task = (`${randomInt1} - ${randomInt2}`);
    result = prompt(`Решите задачу? \n ${task}`);
        break;
  case `*` :
    task = (`${randomInt1} * ${randomInt2}`);
    result = prompt(`Решите задачу? \n ${task}`);
       break;
  case `/` :
    result = task = (`${randomInt1} / ${randomInt2}`);
    prompt(`Решите задачу? \n ${task}`);
      break;
    default:
    alert( "Нет таких значений" );
}
if (result === task) {
  alert (`Вы решили задачу верно!`);
  } 
  else {
      alert (`Вы решили задачу НЕверно!`);
  }
}
}
  



  */