const title = "Project";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 11;
const rollback = 10;
const fullPrice = 1000000;
const adaptive = true;

console.log (typeof title);
console.log (typeof fullPrice);
console.log (typeof adaptive);
console.log (screens.length);
console.log ("Стоимость верстки экранов" + " " + screenPrice + " $");
console.log ("Стоимость разработки сайта" + " " + fullPrice + " рублей");
console.log (screens.toLowerCase().split(", "));

let percent = "Процент отката посреднику за работу" + " " + fullPrice * (rollback / 100) + " рублей";

console.log (percent);






