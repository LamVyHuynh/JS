// // Toán tử AND(&&), OR(||), NOT(!)
// let a = 4;
// // Kiểm tra điều kiện a > 0 và nhỏ hơn 10 không?
// console.log(a > 0 && a < 10);
// let b = -10;
// // Kiểm tra điều kiện b > -1 hoặc lớn hơn 10 không?
// console.log(b > -1 && b > 10);

// let c = 5;
// console.log(!(c < 0));

// BT 04 - 06
// bt04 - tinh dien tich va chu vi hinh tron
// var PI = Math.PI;
// var a = Number(prompt("Nhập vào bán kính r đường tròn: "));
// var cv = 2 * PI * a;
// console.log("Chu vi đường tròn: CV =", cv);
// var dt = PI * a * a;
// console.log("Dien tich hinh tron: DT =", dt);

// bt05 - Tính chu vi và diện tích hình chữ nhật
// Hàm prompt khi nhập vào nó chỉ ở dạng chuỗi mà thoi CẦN PHẢI ÉP VỀ KIỂU SỐ
// var d = parseInt(prompt("Nhập chiều dài hình chữ nhật: "));
// var r = parseInt(prompt("Nhập chiều rộng hình chữ nhật: "));
// var cvHcn = (d + r) * 2;
// console.log("Chu vi hình chữ nhật: cvHcn =", cvHcn);
// var dtHcn = d * r;
// console.log("Diện tích hình chữ nhật: DtHcn = ", dtHcn);

// bt06 - Tính điểm trung bình môn Toán, Anh, Văn - làm tròn dtb đến 2 chữ số
var toan = parseFloat(prompt("Nhập điểm Toán: "));
var anh = parseFloat(prompt("Nhập điểm Anh: "));
var van = parseFloat(prompt("Nhập điểm Văn: "));
var dtb = (toan + anh + van) / 3;
console.log("Điem trung binh mon Toan, Anh, Van: ", dtb.toFixed(2));
