let thang = parseInt(prompt("Nhập số tháng vào: "));
if (thang >= 1 && thang <= 3) {
  console.log("Tháng này thuộc mùa Xuân");
} else if (thang >= 4 && thang <= 6) {
  console.log("Tháng này thuộc mùa Hạ");
} else if (thang >= 7 && thang <= 9) {
  console.log("Tháng này thuộc mùa Thu");
} else if (thang >= 10 && thang <= 12) {
  console.log("Tháng này thuộc mùa Đông");
} else {
  console.log("Nhập sai!!! Xin vui lòng nhập lại");
}
