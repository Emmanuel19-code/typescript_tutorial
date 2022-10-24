"use strict";
const button = document.querySelector(".btn");
let result = document.querySelector(".result");
const passwordValue = document.querySelector(".passwordValue");
const passwordinput = document.querySelector(".passwordinput");


const getPassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+={[}]|\:;<,>.?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 10;
    let password = "";
    let i;
    for (i = 1; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
        result.innerHTML = password;
    }
};

button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
});

passwordValue === null || passwordValue === void 0 ? void 0 : passwordValue.addEventListener("click", () => {
    getPassword();
});
