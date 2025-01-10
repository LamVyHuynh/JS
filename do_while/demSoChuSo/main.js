let number = Number(prompt("Nhập số n vào: "));
let cout = 0;
do {
  number = Math.floor(number / 10);
  cout++;
} while (number > 0);
console.log("Số chữ số trong n = ", cout);
