// Function Expression (khai báo tường biến)
console.log("Function Expression (khai báo tường biến)");
let cong = function (a, b) {
  return a * b;
};
console.log(cong(2, 3));

console.log("Arrow Function (hàm mũi tên)");
//  Arrow Function (hàm mũi tên)
// không cần dùng keyword return
let tinhTong = (a, b) => a + b;
console.log(tinhTong(4, 3));

console.log("Trường hợp phức tạp, cần thêm khối {}");
console.log("Function Expression (khai báo tường biến)");
let multiplyAdd = function (a, b) {
  let nhan = a * b;
  let cong = a + b;
  return nhan + cong;
};

console.log("Arrow Function (hàm mũi tên)");
let multiplyAddArrow = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};

console.log(multiplyAdd(3, 5));
console.log(multiplyAddArrow(3, 5));
