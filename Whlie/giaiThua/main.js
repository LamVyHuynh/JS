let n = Number(prompt("Nhập số n vào: "));
let i = 1;
let gt = 1;
while (i <= n) {
  gt *= i;
  i++;
}
console.log("Số %s! = %s", n, gt);
