// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// };


// const messages = order(composeMessage);

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
};


const messages = orders.map((element, index) => composeMessage.call(element, index + 1));


console.log(messages);


// Тесты
// Объявлена переменная orders.
// Значение переменной orders это исходный массив объектов-заказов.
// Объявлена функция composeMessage(position).
// У функции composeMessage объявлен один параметр position.
// В теле функции composeMessage используется this.

// Объявлена переменная messages.
// Переменной messages с помощью метода map присваивают значение -
//     массив, создаваемый вызовом функции composeMessage.
// Значение this при вызове функции переопределяется с помощью метода call.
// Значение переменной messages это массив
// ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.',
//     'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.',
//     'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].

