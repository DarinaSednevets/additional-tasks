function makeMessage (name, price) {
 
   const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
 
  return message;
};



console.log(makeMessage('Радар', 6150));
console.log(makeMessage('Сканер', 3500));
console.log(makeMessage('Реактор', 8000));
console.log(makeMessage('Двигатель', 4070)); 