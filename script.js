                                    // task 1
function hello() {
    const name = "Луис Инасиу Лула да Силва";
    console.log("Привет, " + name + "!");
}

hello();

                                    // task 2
const h = 30;
const d = 50;
const a = Math.PI / 2;

const S = h * d  * Math.sin(a) / 2;

console.log("Площадь треугольника с радианом π/2 равна: " + S)

                                    // task 3
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomInt = getRandomInt(12, 67);
console.log("Cлучайное целое число в диапазоне от 12 до 67: " + randomInt);

                                    // task 4
const RED = Math.floor(Math.random() * 256);
const GREEN = Math.floor(Math.random() * 256);
const BLUE = Math.floor(Math.random() * 256);
const ALPHA = Math.random().toFixed(2);

let color = `rgba(${RED}, ${GREEN}, ${BLUE}, ${ALPHA})`;
console.log(color)

                                    // task 5
function getTime(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let time = getRandomInt(86400000, 2592000000);
let days = time / 86400000; 
let hours = time % 86400000 / 3600000;
let minets = time % 86400000 % 3600000 / 60000;
let seconds = time % 86400000 % 3600000 % 60000 / 1000;
let ms = time % 86400000 % 3600000 % 60000 % 1000;
console.log(days.toFixed(0) + "д " + hours.toFixed(0) + "ч " + minets.toFixed(0) + "мин " + seconds.toFixed(0) + "сек " + ms + "мс");