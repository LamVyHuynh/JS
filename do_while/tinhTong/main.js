let n = Number(prompt("Nhập số n vào: "));
let s = 0;
let i = 1;
do {
  s += i;
  i++;
} while (i <= n);
console.log("Tổng các số từ 1 đến %s = %s ", n, s);
