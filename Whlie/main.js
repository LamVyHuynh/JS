let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let n = prompt("Nhập số nguyên n (từ 1 đến 99): ");
while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
  n = Number(prompt("Số bạn nhập không hợp lệ. Vui lòng nhập lại: "));
}
console.log("Số nguyên n là: ", n);
