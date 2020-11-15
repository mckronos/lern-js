let money = prompt("Ваш бюджет на месяц");
let time = prompt("Ведите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
let firtStupiedQustion = prompt(
  "Введите обязательную статью расходов в этом месяце",
  ""
);
let secondStupiedQustion = prompt("Во сколько это обойдется?", "");

let appDate = {
  budjet: money,
  timedata: time,
  expenses: { firtStupiedQustion: secondStupiedQustion },
  optionalExpenses: " ",
  income: [],
  savings: false,
};
let moneyForOneDay = alert(money / 30);

let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }
// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (i = 1; i < 8; i++) {
//   if (i % 4) {
//     continue;
//   }

//   console.log(i);
// }

let y = 1;
let x = (y = 2);

console.log([] + 1 + 2);
