let a = Number(prompt("Nhập số a vào: "));
let s = 0;
let i = 0;
if (a % 2 === 0) {
  while (i <= a) {
    s += i;
    i += 2;
  }
  console.log("Tong cac so chan tu 0 den %s la: %s", a, s);
} else {
  console.log("Tôi không tính số tổng số lẻ, bye, bye");
}
