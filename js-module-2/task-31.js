function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }


  
};

console.log(findNumber(2, 6, 5)); //возвращает 5.
console.log(findNumber(8, 17, 3));// возвращает 9.
console.log(findNumber(6, 9, 4));//возвращает 8.
console.log(findNumber(16, 35, 7)); //возвращает 21.