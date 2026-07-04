"use strict";
let users = [];
let user1 = {
    id: 1,
    name: "Saiful Islam",
    age: 18
};
let user2 = {
    id: 2,
    name: "Towfiqul Islam",
    age: 22
};
users.push(user1);
users.push(user2);
console.log(users);
const printUserInfo = (user) => {
    console.log(`name: ${user.name}, id: ${user.id}, age: ${user.age}`);
};
users.forEach(user => printUserInfo(user));
