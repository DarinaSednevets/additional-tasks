function calculateTotalPrice(order) {
  let total = 0;
    let i;
    for (let i = 0; i < order.length; i += 1){
     total += order[i];
}
 

  return total;
};

console.log(calculateTotalPrice([12, 85, 37, 4]) );//возвращает 138.
console.log(calculateTotalPrice([164, 48, 291]));// возвращает 503.
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));// возвращает 1116.
