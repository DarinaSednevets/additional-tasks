function checkForName(fullName, name) {
 const result = fullName.includes(name) ;
  return result;
};
console.log(checkForName('Егор Колбасов', 'Егор') );//возвращает true.
console.log(checkForName('Егор Колбасов', 'егор') );//возвращает false.
console.log(checkForName('Егор Колбасов', 'егОр'));// возвращает false.
console.log(checkForName('Егор Колбасов', 'Женя'));// возвращает false.
console.log(checkForName('Вадим Некрасов', 'Вадим'));// возвращает true.
console.log(checkForName('Вадим Некрасов', 'вадим') );//возвращает false.
console.log(checkForName('Вадим Некрасов', 'Дима') );//возвращает false.