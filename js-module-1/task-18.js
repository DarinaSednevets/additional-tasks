function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  
let totalPrice = pricePerDroid * orderedQuantity;
let customerRest = customerCredits - totalPrice;

  if (customerCredits >= totalPrice) {
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerRest} кредитов`;
  } else {
    message = `Недостаточно средств на счету!`;
  };
 
  return message;
};
console.log(makeTransaction(1000, 3, 15000)); 
console.log(makeTransaction(5000, 10, 8000)); 
