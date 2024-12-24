// Hàm Number(value) - chuyển sang giá trị số
var numberS = "123";
var numberN = Number(numberS);
console.log(numberS, typeof numberS);
console.log(numberN, typeof numberN);

// Nếu không chuyển về Number được thì ra NaN (Not a Number), Kiểu dữ liệu Number
var a = "agg";
var Numbera = Number(a);
console.log(Numbera, typeof Numbera);

// let k = Number(prompt("Nhập vào một số: "));
// console.log(k);

// Hàm isNaN - Hàm kiểm tra có thể chuyển sang số được k hay kiểm tra có phải là số hay không?
// Nếu không chuyển được sang Number --> true
// Nếu chuyển được sang Number --> false

let f = 1223;
console.log(isNaN(f)); // Là số
let k = "ag";
console.log(isNaN(k)); // Không là số

let t = Number(true);
console.log(t);
console.log(typeof t);
console.log(isNaN(t));

let n = Number(null);
console.log(n);
console.log(typeof n);
console.log(isNaN(n));

let u = Number(undefined);
console.log(u);
console.log(typeof u);
console.log(isNaN(u));

let trong = Number("");
console.log(trong);
console.log(typeof trong);
console.log(isNaN(trong));

// Hàm Number.isNaN - Kiểm tra xem giá trị nó có chính xác ra giá trị NaN hay không
// Nếu chính xác --> true
// Nếu không chính xác --> false
var nan = Number.isNaN(NaN);
console.log(nan);

var i = Number.isNaN(123);
console.log(i);

console.log(Number.isNaN(0 / 0));
console.log(Number.NaN);
console.log(Number.isNaN({}));
