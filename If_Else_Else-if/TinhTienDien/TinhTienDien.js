let soDien = parseFloat(prompt("Nhập số điện: "));
let tienDien;
if (soDien <= 50) {
  tienDien = soDien * 1.678;
} else if (soDien >= 51 && soDien <= 100) {
  tienDien = soDien * 1.734;
} else if (soDien >= 101 && soDien < 200) {
  tienDien = soDien * 2.014;
} else if (soDien === 200) {
  tienDien = soDien * 2.563;
}
console.log(
  "Tien dien thang nay voi số điện dùng là %s thì tiền là %s",
  soDien,
  tienDien
);
