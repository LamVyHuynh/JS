let n = Number(prompt("Nhập số n vào: "));
let i = 1;
let kq = 1;
do {
  kq *= i;
  i++;
} while (i <= n);
console.log("Số %s! = %s", n, kq);
