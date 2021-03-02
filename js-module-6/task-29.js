
const isAnyUserActive = users => {
  return users.some(user => user.isActive === true); 
};