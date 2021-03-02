
const getActiveUsers = (users) => {
    return users.filter(user => user.isActive === true);
};

