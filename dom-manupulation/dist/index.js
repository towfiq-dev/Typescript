console.log('Hello World');
const userForm = document.querySelector(".user-form");
console.log(userForm);
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value
    };
    console.log(data);
});
export {};
//# sourceMappingURL=index.js.map