let n = Number(prompt("Nhập số n vào: "));
let gt = 1;
let s = 0;
for (let i = 1; i <= n; i++) {
  gt *= i;
  s += gt;
}
console.log(s);
