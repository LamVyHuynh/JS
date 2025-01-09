let diemSo = parseInt(prompt("Nhập số điểm vào:"));
let message =
  diemSo >= 90
    ? "Xuất sắc"
    : diemSo > 75
    ? "Giỏi"
    : diemSo >= 50
    ? "Trung bình"
    : "Yếu";
console.log(message);
