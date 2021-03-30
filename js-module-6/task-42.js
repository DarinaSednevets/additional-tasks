// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
    return [...users].sort((a, b) => a.friends.length - b.friends.length)
        .map(item => item.name);

};
// Пиши код выше этой строки