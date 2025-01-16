let a = Number(prompt("Nhập số thứ a: "));
let b = Number(prompt("Nhập số thứ b: "));
function tinhTong(a, b) {
  return a + b;
}

let kq = tinhTong(a, b);
console.log("Tổng 2 số %s + %s = %s", a, b, kq);
