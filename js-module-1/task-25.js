function checkStorage(available, ordered) {
let message; 
message = ordered <= available ? 'Заказ оформлен, с вами свяжется менеджер' :  'На складе недостаточно товаров!';
return message;
};

console.log(checkStorage(100, 50)); 
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20)); 
console.log(checkStorage(200, 150)); 
console.log(checkStorage(150, 180)); 