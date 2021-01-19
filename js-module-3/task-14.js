// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys){
//     if (key.hasOwnProperty){
//       propCount = Object.keys(object).length;
//       };
//     };

//   return propCount;
//   // Пиши код выше этой строки
// };

function countProps(object) {

      return Object.keys(object).length;
 
}

console.log(countProps({}) );//возвращает 0.
console.log(countProps({ name: 'Mango', age: 2 }));// возвращает 2.
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));// возвращает 3.
