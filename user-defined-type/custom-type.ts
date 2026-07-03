

type user = {userName: string, userId: number}
let users: user[]
users = []

let users1: user
users1 = {userName: 'anis', userId: 101}

users.push(users1)

let users2: user
users2 = {userName: 'anisul', userId: 102}

users.push(users2)

let users3: user
users3 = {userName: 'saiful', userId: 103}

users.push(users3)

console.log(users);

type RequestType = "GET" | "POST"
let getRequest: RequestType
getRequest = "GET"


function requestHandler(requestType: RequestType) {
  console.log(requestType);
  
}

requestHandler("GET")