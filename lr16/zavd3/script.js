let toggleBtn = document.getElementById("toggleBtn");
let items = document.querySelectorAll(".item");
let isVisible = true;

toggleBtn.addEventListener("click", function () {
    isVisible = !isVisible;

    for (let i = 0; i < items.length; i++) {
        if (isVisible) {
            items[i].classList.remove("hidden");
        } else {
            items[i].classList.add("hidden");
        }
    }

    if (isVisible) {
        toggleBtn.textContent = "Приховати елементи";
    } else {
        toggleBtn.textContent = "Показати елементи";
    }
});
