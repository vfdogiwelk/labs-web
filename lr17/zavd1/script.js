let blocks = document.querySelectorAll('.block');

for (let i = 0; i < blocks.length; i++) {
    let btn = document.createElement('button');
    btn.textContent = '\u00d7';
    btn.className = 'delete-btn';
    blocks[i].appendChild(btn);

    btn.addEventListener('click', function () {
        this.parentElement.remove();
    });
}
