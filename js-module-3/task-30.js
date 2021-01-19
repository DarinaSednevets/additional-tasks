// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки

//   // Пиши код выше этой строки
// }
// Было



// стало
function makeTask(data) {
const {category = 'Общее', priority = 'Обычный',text,completed = false} = data;
  return {category, priority, text, completed};

};

console.log(makeTask({}));// возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));// возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));// возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));// возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
console.log(makeTask({ text: 'Купить хлеб' }));// возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.