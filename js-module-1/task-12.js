function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Пиши код ниже этой строки

  const totalPrice  = deliveryFee + orderedQuantity * pricePerDroid;
  const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

  // Пиши код выше этой строки
  return message;
}

console.log(makeOrderMessage(2, 100, 50)); //возвращает 'Вы заказали дроидов на сумму 250 кредитов. Доставка (50 кредитов) включена в сумму заказа.'.