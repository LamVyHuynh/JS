// Tính tống 2 số: CÁCH LÀM THÔNG THƯỜNG
// a. 7,5
// let a = 7;
// let b = 5;

// let tong = a + b;
// console.log("Tổng 2 số %s + %s = %s", a, b, tong);

// // a. 9,6
// let c = 9;
// let d = 6;

// let tong1 = c + d;
// console.log("Tổng 2 số %s + %s = %s", c, d, tong1);

// // a. 10,5
// let e = 10;
// let f = 5;

// let tong2 = e + f;
// console.log("Tổng 2 số %s + %s = %s", e, f, tong2);

// CÁCH LÀM CÓ DÙNG HÀM(FUNCTION)
// let tenNguoiDung = prompt("Nhập tên của bạn vào: ");
// function xinChao(ten) {
//   console.log("Xin chào %s đến với bình nguyên vô tận", ten);
// }
// xinChao(tenNguoiDung);
function tinhTong(a, b) {
  return a + b;
}
let tong = tinhTong(7, 5);
console.log("Tổng 2 số %s + %s = %s", 7, 5, tong);

let tong1 = tinhTong(9, 6);
console.log("Tổng 2 số %s + %s = %s", 9, 6, tong1);

let tong2 = tinhTong(10, 5);
console.log("Tổng 2 số %s + %s = %s", 10, 5, tong2);

let diemToan = 8.5;
let diemHoa = 10;
let tongDiem = tinhTong(diemToan, diemHoa);
console.log(tongDiem);

// Khai báo giá trị mặc định cho hàm
function tong3(a = 6, b = 10) {
  return a + b;
}

// 10 sẽ ăn vào a
let tong4 = tong3(10);
console.log(tong4);
