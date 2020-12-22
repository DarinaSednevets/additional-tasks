function makeStringFromArray(array, delimeter) {
  let string = array.join(delimeter);
  return string;
};

console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ') );//возвращает 'Манго спешит на поезд'.
console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], ''));// возвращает 'Манго'.
console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_'));// возвращает 'лучшее_за_неделю'.