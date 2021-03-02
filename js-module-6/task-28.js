const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(num => num % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(num => num % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(num => num % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(num => num % 2 !== 0);


const anyElementInThirdIsEven = thirdArray.some(num => num % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(num => num % 2 !== 0);


console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);
console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);
console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);