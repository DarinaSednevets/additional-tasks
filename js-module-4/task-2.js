function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName,callback) {
  
  return callback(pizzaName);
}

console.log(makeMessage('Вкусная', makePizza));
console.log(makeMessage('Сырная', deliverPizza));
// Тесты
// Объявлена функция deliverPizza.
// Объявлена функция makePizza.
// Объявлена функция makeMessage.
// Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback.
// Вызов makeMessage('Роял гранд', makePizza) возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
// Вызов makeMessage('Ультрасыр', deliverPizza) возвращает строку 'Доставляем пиццу Ультрасыр.'.