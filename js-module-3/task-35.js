const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
    updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName)
    return this.books.splice(bookIndex, 1, newName)
    }
};
bookShelf.updateBook('Мгла', 'Хроники подземелий');//, значение свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].
console.log(bookShelf.books);

bookShelf.updateBook('Последнее королевство', 'Дюна');//, значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов'].
console.log(bookShelf.books);
// return arr.splice(this.books.indexOf(oldName), 1, newName);