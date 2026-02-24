let counter = 0;

let btn = document.getElementById("addBtn");
let container = document.getElementById("container");

let colors = ["#e8f5e9", "#e3f2fd", "#fff3e0", "#fce4ec", "#f3e5f5", "#e0f7fa"];

btn.addEventListener("click", function () {
    counter++;

    let div = document.createElement("div");
    div.textContent = "Блок #" + counter;

    div.style.backgroundColor = colors[counter % colors.length];
    div.style.padding = "15px 20px";
    div.style.borderRadius = "8px";
    div.style.marginBottom = "10px";
    div.style.fontSize = "16px";

    container.appendChild(div);
});
