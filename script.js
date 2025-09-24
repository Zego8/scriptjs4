function getName() {
    let name;
    do {
        name = prompt("Введите своё имя");
    } while (name === "" || name === null);
    return name;
}

function getYearOfBirth() {
    let borndata;
    do {
        borndata = prompt("Введите год рождения");
    } while (borndata === "" || isNaN(borndata));
    return Number(borndata);
}

function getCurrentYear() {
    let currentYear;
    do {
        currentYear = prompt("Введите нынешний год");
    } while (currentYear === "" || isNaN(currentYear));
    return Number(currentYear);
}

function calculateAge(currentYear, birthYear) {
    return currentYear - birthYear;
}

function main() {
    const name = getName();
    const borndata = getYearOfBirth();
    const currentYear = getCurrentYear();
    const age = calculateAge(currentYear, borndata);
    alert(`${name} ваш возраст: ${age}`);
}

main();



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