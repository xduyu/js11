// const name = prompt("Введите ваше имя", "Нет")
// const message2 = prompt("Введите ваше сообщение")

// const showMessage = (username = "Нет имени", message = "Текст не добавлен") => {
//     console.log(`${username}: ${message}`)
// }

// showMessage(`${name}`, `${message2}`)

// function writeValue(...a) { // ...a Каждый элемент
//     console.log("Зачения: " + a);
// }

// writeValue("str", 1, 2, 3, 4)

// Области видемости

// let nan = 20;

// console.log(1);
// console.log(2);
// console.log(3);

// // Блочный образ видемости

// if (56 < 100) {
//     let str = "fasdfas";
//     console.log(true)
//     console.log(nan)
// } else {
//     console.log(false)
// }

// for (let i = 1; i < 5; i++) {
//     console.log(i)
//     console.log(str)
// }

// // Функциональный образ видемости

// function hello() {
//     console.log("hello?");
// }

// let city = "Тюмень";
// console.log(city)

// console.log(nan)
// hello()
// console.log(nan)


// for (let days = 0; days <= 5; days++) {
//     console.log(days)
// }

// Обычный

// function dateDays() {
//     for (let days = 0; days <= 5; days++) {
//         console.log(days)
//     }
// }

// dateDays()


// Рекурсия

// days = 0;

// function countDays() {
//     days++;
//     console.log(days)
//     if (days >= 5) return
//     countDays()
// }

// countDays()


// function calculator(num1, num2, op) {
//     switch (op) {
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 - num2;
//             break;
//         case "*":
//             return num1 * num2
//             break;
//         case "/":
//             return num1 / num2
//             break
//         default:
//             return ("Не понятно");
//             break
//     }
// }

// console.log(calculator(3, 3, "*"))

function printSurname(data) {
    let arr = data.split(` `)
    let arrchange = [];
    for (el of arr) {
        arrchange.push(el[0])
    }
    return arrchange.join(".")
}

const res = printSurname("")
console.log(res)

