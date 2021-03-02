
const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
};

