

//вариант 1

//function getExtremeElements(array) {
 
 
//     const newArray = array.splice(1, (array.length - 2));
  
//     return array;

// };

// вариант 2
function getExtremeElements(array){
const first = array[0];
const last = array[array.length - 1];
const newArray = [first, last];
return newArray;
};

console.log(getExtremeElements([1, 2, 3, 4, 5]) );//возвращает [1, 5].
console.log(getExtremeElements(['Земля', 'Марс', 'Венера']) );//возвращает ['Земля', 'Венера'].
console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']) );//возвращает ['яблоко', 'банан'].

