const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    let arr = [];

    for (const product of products) {
        if (product.hasOwnProperty(propName))
             arr.push(product[propName]);
    };

    return arr;
};

console.log(getAllPropValues('name'));// возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
console.log(getAllPropValues('quantity'));// возвращает [4, 3, 7, 9].
console.log(getAllPropValues('price') );//возвращает [1300, 2700, 400, 1200].
console.log(getAllPropValues('category') );//возвращает [].