function nhan(a, b) {
  return a * b;
}

function cong(a, b) {
  return a + b;
}

function congNhan(num1, num2, num3) {
  let Tong = cong(num1, num2);
  let Nhan = nhan(Tong, num3);
  return Nhan;
}
console.log(congNhan(2, 3, 4));
