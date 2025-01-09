let number = parseInt(prompt("Nhập số number 1: "));
let message = number > 0 ? "Số dương" : "Số âm";
console.log("Number 1 là", message);

let number2 = parseInt(prompt("Nhập số number 2: "));
let message2 = number2 % 2 === 0 ? "Số chắn" : "Số lẻ";
console.log("Number 2 là", message2);
