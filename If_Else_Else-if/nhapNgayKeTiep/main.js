let ngay = parseInt(prompt("Nhập số ngày vào: "));
let thang = parseInt(prompt("Nhập số tháng vào: "));
let nam = parseInt(prompt("Nhập số năm vào: "));
console.log("Ngày ban đầu: %s/%s/%s", ngay, thang, nam);
switch (thang) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
    if (ngay >= 1 && ngay < 31) {
      ngay++;
    } else {
      thang++;
      ngay = 1;
    }
    break;
  case 12:
    ngay = 1;
    thang = 1;
    nam++;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    if (ngay >= 1 && ngay < 30) {
      ngay++;
    } else {
      thang++;
      ngay = 1;
    }
    break;
  case 2:
    if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
      if (ngay >= 1 && ngay < 29) {
        ngay++;
      } else {
        thang++;
        ngay = 1;
      }
    } else {
      if (ngay >= 1 && ngay < 28) {
        ngay++;
      } else {
        thang++;
        ngay = 1;
      }
    }
}
console.log("%s/%s/%s", ngay, thang, nam);
