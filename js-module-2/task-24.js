function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
    return fruits.includes(fruit) ? true : false;

};

console.log(checkFruit('слива'));// возвращает true.
console.log(checkFruit('мандарин'));// возвращает false.
console.log(checkFruit('груша'));//возвращает true.
console.log(checkFruit('Груша'));//возвращает false.
console.log(checkFruit('яблоко'));//возвращает true.
