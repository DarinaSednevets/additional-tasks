const bookShelf = {

  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },

  removeBook(bookName){
    return `Удаляем книгу ${bookName}`;
    },
 updateBook(oldName, newName){
     return `Обновляем книгу ${oldName} на ${newName}` ;
     },
  
};

// Значение переменной bookShelf это объект.
// Значение свойства bookShelf.getBooks это метод объекта.
console.log(bookShelf.getBooks());// возвращает строку 'Возвращаем все книги'.
// Значение свойства bookShelf.addBook это метод объекта.
console.log(bookShelf.addBook('Мгла') );//возвращает строку 'Добавляем книгу Мгла'.
// Значение свойства bookShelf.removeBook это метод объекта.
console.log(bookShelf.removeBook('Красный закат'));// возвращает строку 'Удаляем книгу Красный закат'.
// Значение свойства bookShelf.updateBook это метод объекта.
console.log(bookShelf.updateBook('Пески Дюны', 'Дюна') );//возвращает строку 'Обновляем книгу Пески Дюны на Дюна'.