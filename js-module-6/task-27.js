
const isEveryUserActive = (users) => {
    return users.every(user => user.isActive === true);
};
