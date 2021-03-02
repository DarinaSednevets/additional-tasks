const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];


const eachElementInFirstIsEven = firstArray.every(num => num % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(num => num % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(num => num % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(num => num % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(num => num % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(num => num % 2 !== 0);


console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);
console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);
console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);