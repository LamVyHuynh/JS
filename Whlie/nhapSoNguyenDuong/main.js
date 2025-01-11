let n = Number(prompt("Nhập số nguyên dương: "));
while (n <= 0) {
  n = Number(prompt("Không phải số nguyên dương. Vui lòng nhập lại:"));
}
console.log("Số nguyên dương n là: ", n);
