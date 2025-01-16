let a = Number(prompt("Nhập số a vào: "));
let b = Number(prompt("Nhập số b vào: "));
let c = Number(prompt("Nhập số c vào: "));
function max(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
let soLN = max(a, b, c);
console.log("Số lớn nhất trong 3 số %s, %s, %s = %s", a, b, c, soLN);
