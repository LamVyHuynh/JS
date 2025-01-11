let n = Number(prompt("Nhập số n vào: "));
let i = 2;
let isPrime = true;
while (n <= 1) {
  n = Number(prompt("Bạn nhập sai.Nhập lại số n vào: "));
}

do {
  if (n % i === 0 && i !== n) {
    isPrime = false;
    break;
  }
  i++;
} while (i <= Math.sqrt(n));
if (isPrime) {
  console.log(`${n} là số nguyên tố`);
} else {
  console.log(`${n} không phải số nguyên tố`);
}
