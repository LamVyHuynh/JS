let n = Number(prompt("Nhập số n vào: "));
let gt = 1;
for (let i = 1; i <= n; i++) {
  gt *= i;
}
console.log("Giai thừa của %s! = %s", n, gt);
