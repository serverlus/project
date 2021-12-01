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
//alert(`Привет, ${user}`);//Интерполяция

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





// let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
// const film1 = prompt('Один из последних просмотренных фильмов');
// const rate = prompt('На сколько оцените его?');
// const personalMovieFilms = {
//     count: numberOfFilms,
//     movies: {
//         film1, rate,
//     },
//     actors: {},
//     genres: [],
//     privat: false
// };
// //personalMovieFilms.movies[film1] = rate;
// console.log(`Последний фильм  ${personalMovieFilms.movies.film1}, его рейтинг ${personalMovieFilms.movies.rate}`);
// console.log(personalMovieFilms);




if(4==5) {
    console.log('324');
} else {
    console.log('Error');
}
let num = 50;

// if(num < 49) {
//     console.log('Error');
// } else if(num > 100){
//     console.log('Много');
// } else {
//     console.log('OK!');
// }

(num === 50) ? console.log('OK!') : console.log('Error'); 

switch(num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;    
    default:
        console.log('В другой раз');            
}

while(num > 45) {
    console.log(num);
    num--; //поменяется только let num - const num не изменится
}

do {
    console.log('+',num);
    num++;     
}
while(num < 55);

for(let i = 1; i<8; i++) {
    if (i===6){
        //break; Прерывание
        continue;
    }
    console.log('+++',i);
    num++; 
}

/////


    
    
    // if(personalMovieFilms1.movies.film1 < 50 && personalMovieFilms1.movies.film1.length <= 0) {
    //     break;
    // } else {
    //     personalMovieFilms1.movies.film1 = prompt('Один из последних просмотренных фильмов');
    // }
    // if (personalMovieFilms1.movies.rate.length <= 0) {
    //     break;
    // } else {
    //     personalMovieFilms1.movies.rate = +prompt('На сколько оцените его?');
    // }
// }



////////

// let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
// const personalMovieFilms = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i=0; i < numberOfFilms; i++) {
//     const film1 = prompt('Один из последних просмотренных фильмов');
    
//     const rate = prompt('На сколько оцените его?');
//     //personalMovieFilms.movies[film1] = rate;
//    if(film1 != null && rate != null && film1 != '' && rate != '' & film1.length < 50) {
//     personalMovieFilms.movies[film1] = rate;
//     console.log('Done');
//    } else {
//     console.log('Error');
//     i--;
//    }
// }
// if(numberOfFilms <= 2) {
//     console.log('Меньше 3 фильмов');
// } else if(numberOfFilms >=3 && numberOfFilms <6) {
//     console.log('Меньше 6 фильмов');
// }
// console.log(personalMovieFilms);

/////////////////

let show1 = 15;
let show2 = show1 - 3;
function showFirstMessage(sho, sho1) {
    console.log(`Hello! ${sho} - ${sho1}`);
}
showFirstMessage(show1, show2);

function calc(a, b) {
    return(a + b);
}
console.log(calc(4,3));
console.log(calc(5,6));

function ret() {
   let num = 50;
   return num; 
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('hello!!');
};
logger();


const calc1 = (a1,b1) => {return a1 + b1};
console.log(calc1(3,2));

const str = 'Test';
const arr = [1, 2, 4];
console.log(arr.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

const logg = 'Hello World!';
console.log(logg.slice(6,11));

console.log(logg.substring(6,11));

console.log(logg.substr(6,4));
const num2 = 12.2;
console.log(Math.round(num2));
const test = '17.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
///////////////////////////////////////////////////////////////////////

function start () {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}
start();

const personalMovieFilms = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms() {
for(let i=0; i < numberOfFilms; i++) {
    const film1 = prompt('Один из последних просмотренных фильмов');
    
    const rate = prompt('На сколько оцените его?');
    //personalMovieFilms.movies[film1] = rate;
   if(film1 != null && rate != null && film1 != '' && rate != '' & film1.length < 50) {
    personalMovieFilms.movies[film1] = rate;
    console.log('Done');
   } else {
    console.log('Error');
    i--;
   }
}
}

rememberMyFilms();

function detectPersonalLevel() {
if(numberOfFilms <= 2) {
    console.log('Меньше 3 фильмов');
} else if(numberOfFilms >=3 && numberOfFilms <6) {
    console.log('Меньше 6 фильмов');
}
}
detectPersonalLevel();

function showMyDB(hidden) {
    // if(personalMovieFilms.privat == false) {
    //     console.log(personalMovieFilms);
    // } else {
    //     console.log('Приватная база');
    // }
    if(!hidden) {
        console.log(personalMovieFilms);
    }
}
showMyDB(personalMovieFilms.privat);
function writeYourGenres() {
    for (i=1; i<=3; i++) {
        // const genres1 = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieFilms.genres[i - 1] = genres1;
        personalMovieFilms.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
