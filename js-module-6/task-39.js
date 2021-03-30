// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
    return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
// Пиши код выше этой строки