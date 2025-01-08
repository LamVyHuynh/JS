let a = parseFloat(prompt("Nhập số a vào: "));
let b = parseFloat(prompt("Nhập số b vào: "));
let phepToan = prompt("Nhập phép toán vào: ");
let tong = a + b;
let tru = a - b;
let nhan = a * b;
let chia = a / b;
if (phepToan === "+") {
  console.log("%s + %s = %s", a, b, tong);
}
if (phepToan === "-") {
  console.log("%s - %s = %s", a, b, tru);
}
if (phepToan === "*") {
  console.log("%s * %s = %s", a, b, nhan);
}
if (phepToan === "/") {
  console.log("%s / %s = %s", a, b, chia);
}
