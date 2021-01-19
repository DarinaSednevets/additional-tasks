
function add(...args) {
    let numbers = [...args];
    let result = 0;
    for (let number of numbers) {
        result += number
        number++;
    }
    return result;
};




console.log(add(15, 27));//возвращает 42.
console.log(add(12, 4, 11, 48));// возвращает 75.
console.log(add(32, 6, 13, 19, 8));// возвращает 78.
console.log(add(74, 11, 62, 46, 12, 36));// возвращает 241.