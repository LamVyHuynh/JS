let n = Number(prompt("Nhập số n vào: "));
let i = 1;
let s = 0;
while (i <= n) {
  s += i;
  i++;
}
console.log("Tổng các chữ số từ 1 đến %s = %s", n, s);
