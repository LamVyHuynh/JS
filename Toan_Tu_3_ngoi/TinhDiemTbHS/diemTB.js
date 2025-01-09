let toan = parseFloat(prompt("Nhập điểm môn Toán: "));
let ly = parseFloat(prompt("Nhập điểm môn Lý: "));
let hoa = parseFloat(prompt("Nhập điểm môn Hoá: "));
let diemTB = (toan + ly + hoa) / 3;
let message =
  diemTB >= 8
    ? "Học sinh giỏi"
    : diemTB >= 6.5 && diemTB < 8
    ? "Học sinh khá"
    : diemTB >= 5 && diemTB < 6.5
    ? "Học sinh trung bình"
    : "Học sinh yếu";
console.log("Điểm trung bình: ", diemTB);
console.log(message);
