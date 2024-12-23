// Các toán tử so sánh: !=, <, >, <=, >=, ===, !==, ==.
// === và ==
// == thì bằng nhau,không quan tâm đến kiểu dữ liệu
// === thì bằng nhau và quan tâm đến kiểu dữ liệu
// != và !==
// !=
// !==

let a = 1;
let b = 3;
let c = "3";

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Các phép so sánh thông thường
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
// Không chú trọng đến kiểu dữ liệu của biến
console.log("!=", c != b);
console.log("==", c == b);

// Có chú trọng đến kiểu dữ liệu của biến
console.log("===", c === b);
console.log("!==", c !== b);
