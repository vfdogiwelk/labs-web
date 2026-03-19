let overlay = document.getElementById("overlay");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let form = document.getElementById("regForm");

openBtn.addEventListener("click", function () {
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", function () {
    closeModal();
});

overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
        closeModal();
    }
});

function closeModal() {
    overlay.classList.remove("active");
    form.reset();
    clearErrors();
}

function clearErrors() {
    document.getElementById("nicknameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    let nickname = document.getElementById("nickname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let isValid = true;

    if (nickname === "") {
        document.getElementById("nicknameError").textContent = "Введіть нікнейм";
        isValid = false;
    }

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Введіть email";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Невірний формат email";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Введіть пароль";
        isValid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmError").textContent = "Підтвердіть пароль";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent = "Паролі не співпадають";
        isValid = false;
    }

    if (isValid) {
        console.log("Реєстрація успішна!");
        console.log("Нікнейм:", nickname);
        console.log("Email:", email);
        closeModal();
    }
});
