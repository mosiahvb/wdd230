document.addEventListener("DOMContentLoaded", function() {
    const password1 = document.querySelector("#password");
    const password2 = document.querySelector("#confirmPassword");
    const message = document.querySelector("#formmessage");

    password2.addEventListener("blur", checkPasswords);

    function checkPasswords() {
        if (password1.value !== password2.value) {
            message.textContent = "❗Passwords do not match!";
            message.style.visibility = "visible";
            password1.value = "";
            password2.value = "";
            password1.focus();
        } else {
            message.style.visibility = "hidden";
        }
    }
});