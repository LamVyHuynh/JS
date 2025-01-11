let n = Number(prompt("Nhập số n vào: "));
let i = 2;
let isSoNguyen = true;
while (i <= Math.sqrt(n)) {
  if (n % i === 0) {
    isSoNguyen = false;
    break;
  }
}

if (isSoNguyen) {
  console.log("%s là số nguyên tố", n);
} else {
  console.log("%s không là số nguyên tố", n);
}
