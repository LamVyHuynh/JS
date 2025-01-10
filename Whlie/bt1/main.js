let n = Number(prompt("Nhập số bạn muốn đảo ngược: "));
let kq = 0;
let chiaLayDu;
while (n > 0) {
  chiaLayDu = n % 10;
  kq = kq * 10 + chiaLayDu;
  // Dùng để làm tròn xuống sau khi
  n = Math.floor(n / 10);
}

console.log("Số đảo ngược ", kq);
