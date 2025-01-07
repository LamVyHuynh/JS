let thang = parseInt(prompt("Nhập số tháng vào: "));
let nam;

if (thang >= 1 && thang <= 12) {
  if (
    thang === 1 ||
    thang === 3 ||
    thang === 5 ||
    thang === 7 ||
    thang === 8 ||
    thang === 10 ||
    thang === 12
  ) {
    console.log("Tháng có 31 ngày");
  } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    console.log("Tháng có 30 ngày");
  } else {
    nam = parseInt(prompt("Nhập số năm vào: "));
    if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
      console.log("Tháng này có 29 ngày");
    } else {
      console.log("Tháng này có 28 ngày");
    }
  }
} else {
  console.log("Nhập không hợp lệ!!! Vui lòng nhập lại.");
}
