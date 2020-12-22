function calculateTotal(number) {
    let i;
    for ( i = 1; i < number; i= i + 1);
    let summ = number + i;
    return summ;


};



console.log(calculateTotal(1));// возвращает 1.
console.log(calculateTotal(3));// возвращает 6.
console.log(calculateTotal(7));// возвращает 28.
console.log(calculateTotal(18));// возвращает 171.
console.log(calculateTotal(24));// возвращает 300.
// console.log(calculateTotal() );//со случайным числом возвращает правильное значение.


