let a = Number(prompt("Nhập số a vào:"));
let s = 0;
if (a % 2 === 0) {
  for (let i = 0; i <= a; i += 2) {
    s += i;
  }
  console.log("Tong cac so chan tu 0 den %s la: %s", a, s);
} else {
  console.log("Tôi không tính số tổng số lẻ, bye, bye");
}
