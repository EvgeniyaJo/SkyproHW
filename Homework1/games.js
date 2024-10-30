function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
// 1 Игра "угадай число"
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


  //2 Игра "простая арифметика"
  function simpleMath() {
  
    const randomInt1 = getRandomIntInclusive(1, 100);
    const randomInt2 = getRandomIntInclusive(1, 100);
    
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
        if (randomInt1 < randomInt2) {
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
        alert (`Вы решили задачу НЕверно! \nПравильный ответ "${result}"`);
      }
    }
  
    getResult();
    }


//3 Игра "переверни текст"
function reverseText() {
let userText = prompt(`Введите слово, чтобы я перевернул`);
let lowerUserText = userText.toLowerCase();
let reversUserText = lowerUserText.split('').reverse().join('');
if (!isNaN(userText)){
      alert (`Вы ввели НЕ текстовое значение!`);
  }
  else{
    alert (reversUserText);
  }
}


//4 Игра "викторина"
function simpleQuiz() {
  const quiz = [
    { question: `Какой цвет неба?`,
      options: [`1. Красный`, `2. Синий`, `3. Зеленый`],
      correctAnswer: 2, 
    },
    { question: `Сколько дней в неделе?`,
      options: [`1. Шесть`, `2. Семь`, `3. Восемь`],
      correctAnswer: 2,
    },
    { question: `Сколько у человека пальцев на одной руке?`,
      options: [`1. Четыре`, `2. Пять`, `3. Шесть`],
      correctAnswer: 2,
    },
    { question: `Сколько зубов у человека?`,
      options: [`1. Тридцать два`, `2. Сорок`, `3. Двадцать`],
      correctAnswer: 1,
    }
  ]
  
  let num = 0;
  for (let i = 0; i < quiz.length; i++){
    let quizQuest = Number(prompt(`Выберите верный вариант ответа? \n${quiz[i].question} \n${quiz[i].options}`));
    if (isNaN(quizQuest)){
      alert (`Вы ввели некорректное значение!`);
    } else if (quizQuest == quiz[i][`correctAnswer`]){
      num++;
      alert(`Вы ответили верно`);
  } else{
      alert(`Вы ответили неверно`)
    }
  }
  alert(`Всего верных ответов: ${num}`);
}


//5 Игра "камень, ножницы, бумага"
function RockPaperScissors() {

const options = [`камень`, `ножницы`, `бумага`,];
const randomIndex = Math.floor(Math.random() * (options.length));
let randomOptions = options[randomIndex];
console.log (randomOptions);
let userChoice = (prompt(`Давай сыграем в "Камень Ножницы Бумага"? \nНапиши "камень", "ножницы" или "бумага".`)).toLowerCase();
  
const printResult = (userChoice, randomOptions) => {

if ((userChoice === 'камень' && randomOptions === 'ножницы') || 
(userChoice === 'ножницы' && randomOptions === 'бумага') ||
(userChoice === 'бумага' && randomOptions === 'камень')) {
  return `Вы выиграли. Выбор компьютера "${randomOptions}"`;
}
if (userChoice === randomOptions) {
  return `Ничья. Выбор компьютера "${randomOptions}"`;
}
if (!options.includes(userChoice)){
  return `Вы ввели неверное значение`;
}
return `Вы проиграли. Выбор компьютера "${randomOptions}"`;
}
alert(printResult(userChoice, randomOptions));
}
