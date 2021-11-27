'use sctrict';
let number = 5;
const leftBorderWidht = 1;

console.log(name);
var name = 'Ivan';// var - переменная может объявляться везде

console.log(1);
console.log(number);

{
    var result = 50; //let не отобразится вне блока, а var отобразится
}

console.log(result);
let number1 = 4.6;
console.log(4/0);
//promt - вопрос   +promt - вопрос с типом переменной на вход number
//confirm - подтверждение
//typeof(result) - тип переменной result
const answers = [];
//answers[0] = prompt('Как Ваше имя?');
//answers[1] = prompt('Как Ваше фамилия?');
//answers[2] = prompt('Сколько Вам лет?');

document.write(answers);
const category = 'toys';
console.log(`https://someurl.com/${category}`);//Интерполяция
const user = 'Igor';
alert(`Привет, ${user}`);//Интерполяция

console.log(4 + +"5" + ' object'); //+ перед аргументом - унарный плюс

let incr = 10,
    decr = 10;
incr++;
decr--;
console.log(incr); //Инкримент
console.log(decr); //Декремент
const isChecked = true,
      isClose= false;
console.log(isChecked && !isClose);
console.log(isChecked || isClose);      
console.log('4+2*2===8',4+2*2 === 8);