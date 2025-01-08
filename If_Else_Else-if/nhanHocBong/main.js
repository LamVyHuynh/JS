let diemTB = parseFloat(prompt("Nhập điểm trung bình của bạn: "));
let diemRL = parseInt(prompt("Nhập điểm rèn luyện: "));
if (diemTB >= 8.5 && diemRL >= 8) {
  console.log("Được học bổng");
} else if (diemTB >= 6.5) {
  console.log("Không được học bổng");
} else if (diemTB < 6.5) {
  console.log("Yêu cầu cải thiện");
}
