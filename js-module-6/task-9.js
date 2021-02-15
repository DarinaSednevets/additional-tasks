function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    let arr = [];
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
        arr.push(numbers[i] + value) 
      } else {
          arr.push(numbers[i]);
      }
    } return arr;
    // Пиши код выше этой строки
}
  

console.log(changeEven([1, 2, 3, 4, 5], 10));// возвращает новый массив [1, 12, 3, 14, 5].
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));// возвращает новый массив [12, 18, 3, 7, 14, 16].
console.log(changeEven([17, 24, 68, 31, 42], 100) );//возвращает новый массив [17, 124, 168, 31, 142].
console.log(changeEven([44, 13, 81, 92, 36, 54], 100) );//возвращает новый массив [144, 13, 81, 192, 136, 154].