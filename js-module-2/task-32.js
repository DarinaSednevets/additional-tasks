function includes(array, value) {
    let na = [];
    for (let item of array) {
        if (item === value)
            return true;
        item++;
    }

    return false;

};


console.log (includes([1, 2, 3, 4, 5], 3));// возвращает true.
console.log (includes([1, 2, 3, 4, 5], 17));// возвращает false.
console.log (includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер') );//возвращает true.
console.log (includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));// возвращает false.
console.log (includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));// возвращает true.
console.log (includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));// возвращает false.