let number = 2;
switch (number % 2) {
  case 0:
    console.log("Số chẵn");
    break;
  case 1:
    console.log("Số lẻ");
    break;
  default:
    console.log("Không phải số");
    break;
}

// Switch - Case biến thể
let thang = parseInt(prompt("Nhập số tháng vào: "));
switch (thang) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tháng có 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tháng có 30 ngày");
    break;
  case 2:
    let nam = parseInt(prompt("Nhập số năm vào: "));
    if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
      console.log("Tháng có 29 ngày");
    } else {
      console.log("Tháng có 28 ngày");
    }
    break;
  default:
    console.log("Vượt quá số tháng trong năm");
}
