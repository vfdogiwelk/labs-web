// Завдання 1

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Car.prototype.displayInfo = function () {
    console.log('Авто: ' + this.brand + ' ' + this.model + ', ' + this.year + ' рік');
};

Car.prototype.drive = function () {
    console.log(this.brand + ' ' + this.model + ' - рух розпочато');
};

let car1 = new Car('Toyota', 'Camry', 2020);
let car2 = new Car('BMW', 'X5', 2022);
let car3 = new Car('Honda', 'Civic', 2019);

car1.displayInfo();
car1.drive();
car2.displayInfo();
car2.drive();
car3.displayInfo();
car3.drive();


// Завдання 2

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        console.log(this.name + ' (' + this.age + ' років, оцінка: ' + this.grade + ') навчається');
    }
}

let student1 = new Student('Іванина Ілля', 20, 95);
let student2 = new Student('Петренко Олег', 21, 88);
let student3 = new Student('Коваленко Марія', 19, 92);

student1.study();
student2.study();
student3.study();


// Завдання 3

class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

let circle = new Circle('червоний', 5);
let rect = new Rectangle('синій', 4, 7);

console.log('Коло: колір - ' + circle.color + ', площа = ' + circle.area().toFixed(2));
console.log('Прямокутник: колір - ' + rect.color + ', площа = ' + rect.area());
