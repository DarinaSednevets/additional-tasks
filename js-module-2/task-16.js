function makeArray(firstArray, secondArray, maxLength) {
    let smallArray;
    let normalArray = firstArray.concat(secondArray);
    if (maxLength >= normalArray.length) {
        return normalArray;
    } else if (maxLength < normalArray.length) {
        let l = normalArray.length - maxLength;
        smallArray = normalArray.slice(0, maxLength );
        return smallArray;
    };
    return [];
};


console.log( makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3) );//возвращает ['Манго', 'Поли', 'Аякс'].
console.log( makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4) );//возвращает ['Манго', 'Поли', 'Хьюстон', 'Аякс'].
console.log( makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));// возвращает ['Манго', 'Аякс', 'Челси'].
console.log( makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2) );//возвращает ['Земля', 'Юпитер'].
console.log( makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4) );//возвращает ['Земля', 'Юпитер', 'Нептун', 'Уран'].
console.log( makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0) );//возвращает [].