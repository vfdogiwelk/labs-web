// Завдання 1

// 1.1
const student = { name: "Ілля", age: 20, gender: "чоловіча" };
const { name: studentName, age: studentAge, gender: studentGender } = student;
console.log(studentName, studentAge, studentGender);

// 1.2
const car = {
    brand: "BMW",
    engine: { cylinders: 6, horsepower: 340 }
};
const { engine: { cylinders: engineCylinders, horsepower: engineHorsepower } } = car;
console.log(engineCylinders, engineHorsepower);

// 1.3
const book = { title: "Кобзар", author: "Шевченко" };
const { title: bookTitle, author: bookAuthor } = book;
console.log(bookTitle, bookAuthor);

// Завдання 2

// 2.1
const numbers = [1, 2, 3];
const [firstNumber, secondNumber, thirdNumber] = numbers;
console.log(firstNumber, secondNumber, thirdNumber);

// 2.2
const fruits = ["apple", "orange", "banana"];
const [firstFruit, ...restFruits] = fruits;
console.log(firstFruit, restFruits);

// 2.3
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// Завдання 3
function capitalizeWords(str) {
    let words = str.split(" ");
    let result = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
    return result.join(" ");
}

console.log(capitalizeWords("i like java script"));

// Завдання 4
function toCamelCase(cssProperty) {
    let parts = cssProperty.split("-");
    let result = parts[0];
    for (let i = 1; i < parts.length; i++) {
        result += parts[i][0].toUpperCase() + parts[i].slice(1);
    }
    return result;
}

console.log(toCamelCase("font-size"));
console.log(toCamelCase("background-color"));
console.log(toCamelCase("text-align"));
