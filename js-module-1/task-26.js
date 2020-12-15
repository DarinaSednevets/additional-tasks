function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
 
message = password === ADMIN_PASSWORD ? 'Доступ разрешен': 'Доступ запрещён, неверный пароль!'
  
  return message;
};

console.log(checkPassword('jqueryismyjam')); 
console.log(checkPassword('angul4r1sl1f3')); 
console.log(checkPassword('r3actsux'));