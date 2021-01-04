function calculateTotalPrice(order) {
  let total = 0;


for (let prise of order){
  total += prise
  prise++;
  }


  return total;
};

console.log(calculateTotalPrice([12, 85, 37, 4]));// возвращает 138.
console.log(calculateTotalPrice([164, 48, 291]));// возвращает 503.
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//возвращает 1116.
console.log(calculateTotalPrice([]));// возвращает 0.