const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
 
    let result = 0;
    for (const product of products) {
       if ( productName === product.name)
            result = product.price * product.quantity;
        
    };
    return result;
   
};


console.log(calculateTotalPrice('Бластер') );//возвращает 0.
console.log(calculateTotalPrice('Радар') );//возвращает 5200.
console.log(calculateTotalPrice('Дроид'));// возвращает 2800.
console.log(calculateTotalPrice('Захват'));// возвращает 10800.
console.log(calculateTotalPrice('Сканер') );//возвращает 8100.