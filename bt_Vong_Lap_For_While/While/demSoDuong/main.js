let a = Number(prompt("Nhập vào số a: "));
let count = 0;
while (a !== 0) {
  if (a < 0) {
    break;
  }
  count++;
  a = Number(prompt("Nhập số a: "));
}
console.log("Số lượng số dương " + count);
