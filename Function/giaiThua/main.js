let a = Number(prompt("Nhập số a vao: "));
function giaiThua(a) {
  if (a === 0 || a === 1) {
    return 1;
  }
  return a * giaiThua(a - 1);
}
console.log(giaiThua(a));
