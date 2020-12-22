function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  if (password === ADMIN_PASSWORD) {
   return  'Добро пожаловать!';
  } 
     return  'Доступ запрещен, неверный пароль!';
 
};
console.log(checkPassword('mangohackzor'));// возвращает 'Доступ запрещен, неверный пароль!'.
console.log(checkPassword('polyhax') );//возвращает 'Доступ запрещен, неверный пароль!'.
console.log(checkPassword('jqueryismyjam') );//возвращает 'Добро пожаловать!'.