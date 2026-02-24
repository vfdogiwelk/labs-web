let textBlock = document.getElementById("textBlock");
let editBtn = document.getElementById("editBtn");

editBtn.addEventListener("click", function () {
    let newText = prompt("Введіть новий текст:");

    if (newText !== null && newText.trim() !== "") {
        textBlock.textContent = newText;
    }
});
