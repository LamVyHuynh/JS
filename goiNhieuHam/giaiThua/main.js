let a = Number(prompt("Nhập số a vào: "));
function giaiThua(a) {
  let kq = 1;
  for (let i = 1; i <= a; i++) {
    kq *= i;
  }
  return kq;
}

let kQGiaiThua = giaiThua(a);
console.log("Số %s! = %s", a, kQGiaiThua);

console.log("Dùng while");
let b = Number(prompt("Nhập số b vào: "));
function giaiThua1(b) {
  let i = 1;
  let kq = 1;
  while (i <= b) {
    kq *= i;
    i++;
  }
  return kq;
}

let kQGiaiThua1 = giaiThua1(b);
console.log("Số %s! = %s", b, kQGiaiThua1);
