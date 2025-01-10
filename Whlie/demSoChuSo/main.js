let n = Number(prompt("Nhập số n vào: "));
let cout = 0;
while (n > 0) {
  n = Math.floor(n / 10);
  cout++;
}
console.log("Số chữ số trong n = ", cout);
