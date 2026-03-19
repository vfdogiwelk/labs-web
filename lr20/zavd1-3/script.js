// Завдання 1
function validateCard(number) {
    let regex = /^[45]\d{15}$/;
    return regex.test(number);
}

console.log("4532015112830366:", validateCard("4532015112830366"));
console.log("5425233430109903:", validateCard("5425233430109903"));
console.log("1234567890123456:", validateCard("1234567890123456"));
console.log("453201511283:", validateCard("453201511283"));
console.log("45320151128303661:", validateCard("45320151128303661"));
console.log("4532abcd11283036:", validateCard("4532abcd11283036"));

// Завдання 2
function checkEmail(email) {
    let parts = email.split("@");
    if (parts.length !== 2) return false;

    let local = parts[0];
    let domain = parts[1];

    let localRegex = /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/;
    if (!localRegex.test(local)) return false;
    if (/--/.test(local)) return false;

    let domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9_-]*\.[a-zA-Z]{2,}$/;
    if (!domainRegex.test(domain)) return false;
    if (/--/.test(domain)) return false;

    return true;
}

console.log("my_mail@gmail.com:", checkEmail("my_mail@gmail.com"));
console.log("#my_mail@gmail.com:", checkEmail("#my_mail@gmail.com"));
console.log("my_ma--il@gmail.com:", checkEmail("my_ma--il@gmail.com"));
console.log("user@example.com:", checkEmail("user@example.com"));
console.log("_user@mail.com:", checkEmail("_user@mail.com"));
console.log("-user@mail.com:", checkEmail("-user@mail.com"));

// Завдання 3
function isValidURL(url) {
    let regex = /^(https?|ftp):\/\/.+$/;
    return regex.test(url);
}

let url1 = "https://www.example.com";
let url2 = "ftp://fileserver/documents";
let url3 = "invalid-url";
let url4 = "http://example.com";
console.log(isValidURL(url1));
console.log(isValidURL(url2));
console.log(isValidURL(url3));
console.log(isValidURL(url4));
