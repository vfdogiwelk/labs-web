class Button {
    constructor(text, border, color, background) {
        this.text = text;
        this.border = border;
        this.color = color;
        this.background = background;
    }

    render(container) {
        let btn = document.createElement('button');
        btn.textContent = this.text;
        btn.style.border = this.border;
        btn.style.color = this.color;
        btn.style.backgroundColor = this.background;
        btn.style.padding = '12px 24px';
        btn.style.fontSize = '16px';
        btn.style.cursor = 'pointer';

        let text = this.text;
        let bg = this.background;
        btn.addEventListener('click', function () {
            console.log('Кнопка ' + text + ' натиснута. Колір кнопки - ' + bg);
        });

        container.appendChild(btn);
        return btn;
    }
}

class RoundedButton extends Button {
    constructor(text, border, color, background, borderRadius) {
        super(text, border, color, background);
        this.borderRadius = borderRadius;
    }

    render(container) {
        let btn = super.render(container);
        btn.style.borderRadius = this.borderRadius;
        return btn;
    }

    dropShadow(btn) {
        btn.addEventListener('mouseenter', function () {
            btn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        });
        btn.addEventListener('mouseleave', function () {
            btn.style.boxShadow = 'none';
        });
    }
}

let buttonsContainer = document.querySelector('#buttons-container');
let roundedContainer = document.querySelector('#rounded-container');

let btn1 = new Button('Зберегти', '2px solid #333', '#fff', '#333');
let btn2 = new Button('Скасувати', '2px solid #e74c3c', '#fff', '#e74c3c');
let btn3 = new Button('Інформація', '2px solid #3498db', '#fff', '#3498db');

btn1.render(buttonsContainer);
btn2.render(buttonsContainer);
btn3.render(buttonsContainer);

let rbtn1 = new RoundedButton('Підтвердити', '2px solid #27ae60', '#fff', '#27ae60', '20px');
let rbtn2 = new RoundedButton('Видалити', '2px solid #e67e22', '#fff', '#e67e22', '20px');
let rbtn3 = new RoundedButton('Налаштування', '2px solid #8e44ad', '#fff', '#8e44ad', '20px');

let rEl1 = rbtn1.render(roundedContainer);
let rEl2 = rbtn2.render(roundedContainer);
let rEl3 = rbtn3.render(roundedContainer);

rbtn1.dropShadow(rEl1);
rbtn2.dropShadow(rEl2);
rbtn3.dropShadow(rEl3);
