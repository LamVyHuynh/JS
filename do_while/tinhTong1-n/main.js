let i = 1;
let s = 0;
let n = Number(prompt("Nhập số n vào: "));
do {
  s += i;
  i++;
} while (i <= n);
console.log("Tổng các số từ 1 đến %s = %s ", n, s);
