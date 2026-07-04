interface IUser {
  id: number;
  name: string;
  age: number
}

let users: IUser [] = []

let user1:IUser={
  id: 1,
  name: "Saiful Islam",
  age: 18
}

let user2: IUser={
  id: 2,
  name: "Towfiqul Islam",
  age: 22
}

users.push(user1);
users.push(user2);

console.log(users);

const printUserInfo = (user:IUser)=>{
  console.log(`name: ${user.name}, id: ${user.id}, age: ${user.age}`);
  
}

users.forEach(user => printUserInfo(user))