const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort();

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));