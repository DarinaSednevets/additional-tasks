const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  for (const product of products) {
    if (product.name === productName)
   return product.price;
    
  };
  
  return null;
};


console.log( getProductPrice('Радар') );//возвращает 1300.
console.log( getProductPrice('Захват') );//возвращает 1200.
console.log( getProductPrice('Сканер') );//возвращает 2700.
console.log( getProductPrice('Дроид') );//возвращает 400