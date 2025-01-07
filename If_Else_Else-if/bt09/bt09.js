let nam = parseInt(prompt("Nhập số năm vào: "));
if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  console.log("Năm nhuận");
} else {
  console.log("Năm không nhuận");
}
