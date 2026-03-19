let products = [];
let saved = localStorage.getItem("products");
if (saved) {
    products = JSON.parse(saved);
}

let openModalBtn = document.getElementById("openModal");
let closeModalBtn = document.getElementById("closeModal");
let modalOverlay = document.getElementById("modalOverlay");
let productForm = document.getElementById("productForm");
let productsList = document.getElementById("productsList");
let modalTitle = document.getElementById("modalTitle");
let editIndexInput = document.getElementById("editIndex");

openModalBtn.addEventListener("click", function () {
    editIndexInput.value = "-1";
    modalTitle.textContent = "Новий продукт";
    productForm.reset();
    modalOverlay.classList.add("active");
});

closeModalBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
    }
});

productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let product = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: Number(document.getElementById("price").value),
        discount: Number(document.getElementById("discount").value),
        category: document.getElementById("category").value,
        image: document.getElementById("image").value
    };

    let editIndex = Number(editIndexInput.value);

    if (editIndex === -1) {
        products.push(product);
    } else {
        products[editIndex] = product;
    }

    localStorage.setItem("products", JSON.stringify(products));
    modalOverlay.classList.remove("active");
    renderProducts();
});

function renderProducts() {
    productsList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        let card = createCard(products[i], i);
        productsList.appendChild(card);
    }
}

function createCard(product, index) {
    let card = document.createElement("div");
    card.className = "product-card";

    let finalPrice = product.price;
    if (product.discount > 0) {
        finalPrice = product.price - (product.price * product.discount / 100);
    }

    let discountText = "";
    if (product.discount > 0) {
        discountText = '<span class="discount">-' + product.discount + '%</span>';
    }

    card.innerHTML =
        '<img src="' + product.image + '" alt="' + product.name + '">' +
        '<div class="product-card-body">' +
            '<h3>' + product.name + '</h3>' +
            '<p class="description">' + product.description + '</p>' +
            '<span class="price">' + finalPrice.toFixed(2) + ' грн</span>' +
            discountText +
            '<br><span class="category">' + product.category + '</span>' +
            '<div class="card-buttons">' +
                '<button class="btn-edit" data-index="' + index + '">Редагувати</button>' +
                '<button class="btn-delete" data-index="' + index + '">Видалити</button>' +
            '</div>' +
        '</div>';

    let editBtn = card.querySelector(".btn-edit");
    editBtn.addEventListener("click", function () {
        let idx = Number(this.getAttribute("data-index"));
        openEditModal(idx);
    });

    let deleteBtn = card.querySelector(".btn-delete");
    deleteBtn.addEventListener("click", function () {
        let idx = Number(this.getAttribute("data-index"));
        deleteProduct(idx);
    });

    return card;
}

function openEditModal(index) {
    let product = products[index];

    editIndexInput.value = index;
    modalTitle.textContent = "Редагувати продукт";

    document.getElementById("name").value = product.name;
    document.getElementById("description").value = product.description;
    document.getElementById("price").value = product.price;
    document.getElementById("discount").value = product.discount;
    document.getElementById("category").value = product.category;
    document.getElementById("image").value = product.image;

    modalOverlay.classList.add("active");
}

function deleteProduct(index) {
    let confirmed = confirm("Ви впевнені що хочете видалити цей продукт?");
    if (confirmed) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
    }
}

renderProducts();
