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
