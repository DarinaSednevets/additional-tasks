//было
// Пиши код ниже этой строки

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

//стало
const calculateTotalPrice=(quantity, pricePerItem)=> {

  return quantity * pricePerItem;
}
console.log(calculateTotalPrice(5, 100) );//возвращает 500.
console.log(calculateTotalPrice(8, 60) );//возвращает 480.
console.log(calculateTotalPrice(3, 400) );//возвращает 1200.