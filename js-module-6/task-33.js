// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//     return users.reduce((total, user) => total + user.friends.length, 0);
// };
// // Пиши код выше этой строки
// console.log(getTotalFriendCount);


// // const calculateTotalBalance = users => {
// //     return users.reduce((total, user) => total + user.balance, 0)
// // };



// // // Пиши код выше этой строки// Пиши код ниже этой строки
const getTotalFriendCount = users => {
    let array = [];
    users.flatMap(user => array.push(user.friends));
    array.reduce((total, friend) => total + friend.length, 0);
};
// Пиши код выше этой строки