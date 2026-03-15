let products = [];

let openModalBtn = document.getElementById('openModal');
let closeModalBtn = document.getElementById('closeModal');
let modalOverlay = document.getElementById('modalOverlay');
let productForm = document.getElementById('productForm');

function openModal() {
    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
    productForm.reset();
    clearErrors();
}

function clearErrors() {
    let errors = document.querySelectorAll('.error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].textContent = '';
    }
    let invalids = document.querySelectorAll('.invalid');
    for (let i = 0; i < invalids.length; i++) {
        invalids[i].classList.remove('invalid');
    }
}

function showError(fieldId, message) {
    let field = document.getElementById(fieldId);
    let errorSpan = document.getElementById(fieldId + 'Error');
    field.classList.add('invalid');
    errorSpan.textContent = message;
}

function validateForm() {
    clearErrors();
    let isValid = true;

    let name = document.getElementById('name').value.trim();
    let description = document.getElementById('description').value.trim();
    let price = document.getElementById('price').value;
    let discount = document.getElementById('discount').value;
    let category = document.getElementById('category').value;
    let image = document.getElementById('image').value.trim();

    if (name === '') {
        showError('name', 'Назва обовязкова');
        isValid = false;
    }

    if (description === '') {
        showError('description', 'Опис обовязковий');
        isValid = false;
    }

    if (price === '' || Number(price) < 0) {
        showError('price', 'Введіть коректну ціну');
        isValid = false;
    }

    if (discount === '' || Number(discount) < 0) {
        showError('discount', 'Введіть коректну знижку');
        isValid = false;
    }

    if (category === '') {
        showError('category', 'Оберіть категорію');
        isValid = false;
    }

    if (image === '') {
        showError('image', 'Введіть URL зображення');
        isValid = false;
    }

    return isValid;
}

function addProduct() {
    let name = document.getElementById('name').value.trim();
    let description = document.getElementById('description').value.trim();
    let price = Number(document.getElementById('price').value);
    let discount = Number(document.getElementById('discount').value);
    let category = document.getElementById('category').value;
    let image = document.getElementById('image').value.trim();

    let product = {
        id: Date.now(),
        name: name,
        description: description,
        price: price,
        discount: discount,
        category: category,
        image: image
    };

    products.push(product);
    console.log('Products array:', products);
}

openModalBtn.addEventListener('click', function () {
    openModal();
});

closeModalBtn.addEventListener('click', function () {
    closeModal();
});

modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

productForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {
        addProduct();
        closeModal();
    }
});
