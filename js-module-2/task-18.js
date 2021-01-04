function calculateTotal(number) {
let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
    };
  return sum;
};
console.log(calculateTotal(1));// возвращает 1.
console.log(calculateTotal(3));// возвращает 6.
console.log(calculateTotal(7));// возвращает 28.
console.log(calculateTotal(18));// возвращает 171.
console.log(calculateTotal(24));// возвращает 300.



