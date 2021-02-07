class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User{
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  }
}



// Тесты
// Объявлен класс Admin.
// Класс Admin наследует от класса User.
// У класса Admin есть публичное статическое свойство AccessLevel.
// Обращение к Admin.AccessLevel.BASIC возвращает строку 'basic'.
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку 'superuser'.