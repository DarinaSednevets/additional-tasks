function countProps(object) {
     return Object.keys(object).length
//   let propCount = 0;
//   // Пиши код ниже этой строки
// for ( const key in object) 
//   if ( object.hasOwnProperty(key)){
//       propCount = object.length;
//       };
//   // Пиши код выше этой строки
//   return propCount;
};

console.log(countProps({}));// возвращает 0.
console.log(countProps({ name: 'Mango', age: 2 }));// возвращает 2.
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));// возвращает 3.
