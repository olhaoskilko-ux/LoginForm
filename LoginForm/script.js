const showPassword = document.getElementById("showPassword");
const password = document.getElementById("password");

showPassword.addEventListener("change", function () {
    if (this.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent = "Форма успішно заповнена!";
});