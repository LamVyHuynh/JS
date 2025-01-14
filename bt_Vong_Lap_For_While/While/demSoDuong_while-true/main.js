let a = Number(prompt("Nhập số a vào: "));
let cout = 0;
while (true) {
  if (a < 0) {
    break;
  }
  cout++;
  a = Number(prompt("Nhập số a vào:"));
}
console.log("Tổng số dương đã nhập " + cout);
