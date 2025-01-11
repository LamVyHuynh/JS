function giaiThua(n) {
  if (n == 0) {
    return 1;
  }
  return n * giaiThua(n - 1);
}

let n = Number(prompt("Nhập số n vào: "));
let kq = giaiThua(n);
console.log("Số %s! = %s", n, kq);
