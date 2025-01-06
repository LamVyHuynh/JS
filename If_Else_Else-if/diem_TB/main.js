let diemtb = parseFloat(prompt("Nhập điểm tb của bạn vào: "));

// if (diem >= 5.0) {
//   console.log("Bạn thi đỗ");
// } else {
//   console.log("Bạn đã trượt");
// }

// if, else-if, else
if (diemtb >= 8 && diemtb <= 10) {
  console.log("Học sinh giỏi");
} else if (diemtb >= 6.5 && diemtb < 8) {
  console.log("Học sinh khá");
} else if (diemtb >= 5 && diemtb < 6.5) {
  console.log("Học sinh trung bình");
} else if (diemtb >= 0 && diemtb < 5) {
  console.log("Học sinh yếu");
} else {
  console.log("Bạn nhập điểm tào lao");
}
