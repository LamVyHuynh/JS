for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("Xuất số chẵn 0 - 10:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

console.log("Tổng các số chẵn từ 0 - 10: ");
let s = 0;
for (let i = 0; i <= 10; i += 2) {
  s += i;
}

console.log("S = ", s);
