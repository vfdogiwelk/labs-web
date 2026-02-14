// Завдання 1
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1);
console.log(typeof res1);

let res2 = true + "" + y;
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = undefined + y;
console.log(res4);
console.log(typeof res4);

// Завдання 2
let num = +prompt("Введіть число:");

if (!isNaN(num)) {
    if (num > 0 && num % 2 === 0) {
        console.log("Число " + num + " - парне і додатне");
    } else {
        console.log("Число " + num + " - не парне або не додатне");
    }

    if (num % 7 === 0) {
        console.log("Число " + num + " ділиться на 7");
    } else {
        console.log("Число " + num + " не ділиться на 7");
    }
} else {
    console.log("Введено некоректне значення");
}

// Завдання 3
let age = +prompt("Введіть ваш вік:");

if (age >= 18) {
    console.log("Ви досягли повнолітнього віку");
} else {
    console.log("Ви ще надто молоді");
}

// Завдання 4
let a = +prompt("Введіть сторону a:");
let b = +prompt("Введіть сторону b:");
let c = +prompt("Введіть сторону c:");

if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log("Площа трикутника: " + area.toFixed(3));

    let sides = [a, b, c].sort(function(x, y) { return x - y; });
    if (Math.abs(sides[2] * sides[2] - sides[0] * sides[0] - sides[1] * sides[1]) < 0.001) {
        console.log("Це прямокутний трикутник");
    } else {
        console.log("Це не прямокутний трикутник");
    }
} else {
    console.log("Incorrect data");
}

// Завдання 5
let hour = new Date().getHours();
console.log("Поточна година: " + hour);

let greeting1;
if (hour >= 23 || hour < 5) {
    greeting1 = "Доброї ночі";
} else if (hour >= 5 && hour < 11) {
    greeting1 = "Доброго ранку";
} else if (hour >= 11 && hour < 17) {
    greeting1 = "Доброго дня";
} else {
    greeting1 = "Доброго вечора";
}
console.log("if/else: " + greeting1);

let greeting2;
switch (true) {
    case (hour >= 23 || hour < 5):
        greeting2 = "Доброї ночі";
        break;
    case (hour >= 5 && hour < 11):
        greeting2 = "Доброго ранку";
        break;
    case (hour >= 11 && hour < 17):
        greeting2 = "Доброго дня";
        break;
    case (hour >= 17 && hour < 23):
        greeting2 = "Доброго вечора";
        break;
}
console.log("switch: " + greeting2);
