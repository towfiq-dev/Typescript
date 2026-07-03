"use strict";
let users;
users = [];
let users1;
users1 = { userName: 'anis', userId: 101 };
users.push(users1);
let users2;
users2 = { userName: 'anisul', userId: 102 };
users.push(users2);
let users3;
users3 = { userName: 'saiful', userId: 103 };
users.push(users3);
console.log(users);
let getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
