let thang = parseInt(prompt("Nhập vào số tháng: "));
if (thang === 1 || thang === 2 || thang === 3) {
  console.log("Tháng này thuộc Quý 1");
} else if (thang === 4 || thang === 5 || thang === 6) {
  console.log("Tháng này thuộc Quý 2");
} else if (thang === 7 || thang === 8 || thang === 9) {
  console.log("Tháng này thuộc Quý 3");
} else if (thang === 12) {
  console.log("Tháng này thuộc Quý 4");
} else {
  console.log("Nhập lỗi!!! Hãy nhập lại");
}
