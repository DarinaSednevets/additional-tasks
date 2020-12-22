const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];

const firstTwoEls =fruits.slice(0, 2) ;
const nonExtremeEls =fruits.slice(1, fruits.length - 1) ;
const lastThreeEls = fruits.slice(-3);


console.log(fruits);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);
