function createArrayOfNumbers(min, max) {

  //   const numbers = [];
  // let i;
  // numbers.push(min);
  // for (i = min + 1; i < max; i++){
  //   numbers.push(i);
  // };
  // numbers.push(max);
  
  // return numbers;

  const numbers = [];
  
  let i;

  for (i = min; i <= max; i++) {
    numbers.push(i);
  };



  return numbers;

};
console.log(createArrayOfNumbers(1, 3) );//возвращает [1, 2, 3].
console.log(createArrayOfNumbers(14, 17));// возвращает [14, 15, 16, 17].
console.log(createArrayOfNumbers(29, 34) );//возвращает [29, 30, 31, 32, 33, 34].

