function getCommonElements(array1, array2) {
    let ar = [];
   
    for (let number of array1) {
        if (array2.includes(number)) {
            ar.push(number);
            number++;
        }
    }
        return ar;
    };




console.log(getCommonElements([1, 2, 3], [2, 4]));// возвращает [2].
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));// возвращает [1, 2].
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) );//возвращает [12, 27, 3].
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));// возвращает [10, 30, 40].
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));// возвращает [].