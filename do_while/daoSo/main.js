let n = Number(prompt("Nhập số n vào: "));
let t;
let kq = 0;
do {
  t = n % 10;
  kq = kq * 10 + t;
  n = Math.floor(n / 10);
} while (n > 0);
console.log("Số đảo ngược: %s", kq);
