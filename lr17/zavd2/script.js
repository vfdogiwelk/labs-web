let burger = document.querySelector('#burger');
let nav = document.querySelector('#nav');

burger.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.toggle('open');
});

document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && e.target !== burger) {
        nav.classList.remove('open');
    }
});
