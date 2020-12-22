function slugify(title) {
    return  title.toLowerCase().split(' ').join('-');
    
    
};

console.log(slugify('Массивы для новичков') );//возвращает 'массивы-для-новичков'.
console.log(slugify('Английский для разработчика') );//возвращает 'английский-для-разработчика'.
console.log(slugify('Десять секретов JavaScript') );//возвращает 'десять-секретов-javascript'.
console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ') );//возвращает 'как-стать-junior-разработчиком-за-две-недели'.