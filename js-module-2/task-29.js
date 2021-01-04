function getEvenNumbers(start, end) {
    let newArray = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            newArray.push(i);
            
        };
        continue;
     
    };
       return newArray;
};
       
console.log(getEvenNumbers(2, 5));// возвращает [2, 4].
console.log(getEvenNumbers(3, 11));// возвращает [4, 6, 8, 10].
console.log(getEvenNumbers(6, 12) );//возвращает [6, 8, 10, 12].
console.log(getEvenNumbers(8, 8) );//возвращает [8].
console.log(getEvenNumbers(7, 7)); //возвращает [].
