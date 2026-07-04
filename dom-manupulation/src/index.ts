console.log('Hello World');

const userForm = document.querySelector(".user-form") as HTMLFormElement
console.log(userForm);

const userName = document.querySelector("#name") as HTMLInputElement
const userEmail = document.querySelector("#email") as HTMLInputElement
const userPassword = document.querySelector("#password") as HTMLInputElement


userForm.addEventListener("submit", (e: Event)=>{
  e.preventDefault()
  const data ={
    userName: userName.value,
    userEmail: userEmail.value,
    userPassword: userPassword.value
  }
  console.log(data);
  
})
