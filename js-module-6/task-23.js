
const getInactiveUsers = (users) => {
    return users.filter(user => user.isActive === false);
};
