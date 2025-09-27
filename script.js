const name = prompt("Введите ваше имя:");
const birthYear = (prompt("Введите год рождения"));
const currentYear = (prompt("Введите нынешний год"));


function getAgeMessage(name, birthYear, currentYear) {
  const age = currentYear - birthYear;
  return `${name}, Ваш возраст ${age}`;
}

alert(getAgeMessage(name, birthYear, currentYear));


function randomizer (min = 1, max = 100) {
return Math.floor(Math.random() * (max + 1 - min) + min);
}

var amountExamples = +prompt("введите кол-во примеров");
for (i = 0; i < amountExamples; i++) {
var num1 = randomizer();
var num2 = randomizer();
let symbol = randomizer(1, 4);
let example = 0;

if (symbol == 1) {
    example = num1 + num2
    symbol = '+'
}else if (symbol == 2) {
    example = num1 - num2
    symbol = '-'
}else if (symbol == 3) {
    example = num1 * num2
    symbol = '*'
}else if (symbol == 4) {
    example = num1 / num2
    symbol = '/'
}else {
    alert("Ошибка")
    break;
}
let answer = +prompt(num1 + symbol + num2 + "= ?")

let message =
 example == answer 
 ? ` Правильно  ${answer} `  
 : ` Неправильно  ${answer}  правильный ответ  ${example} `;
alert(message);

}