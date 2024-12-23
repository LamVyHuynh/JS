// let a = 99;
// let b = 99;
// let c = 99;
// let d = 99;
// a++; // a = a + 1 -> 100
// b--; // b = b - 1  -> 98
// --c; // c = c + 1 -> 100
// ++d; // d = d - 1 -> 98
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("c = ", c);
// console.log("d = ", d);

// Thứ tự ưu tiên của Prefix, Postfix
// 1. Tính Prefix(++a, --a)
// 2. Các phép toán còn lại
// 3. Gán giá trị cho biến bên trái dấu =
// 4. Tính Postfix(a++, a--)
let x = 10;
let y = 20;
let k = x++ - --y + 5;

console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`Kết quả K = ${k}`);
