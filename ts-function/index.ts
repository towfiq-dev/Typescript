//console.log("Hello");
let userInfo1 : () => void;
let userInfo2 : (name: string) => void;

userInfo1 = ()=>{
  console.log('Anisul Islam is 32 years old');
}

userInfo2 = (name: string)=>{
  console.log(`${name} is 32 years old`);
}

userInfo1()
userInfo2("Anisul Islam")