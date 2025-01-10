let soCanDoan = 5;
let doanSo = Number(prompt("Nhập số bạn muốn đoán vào:"));
while (doanSo !== soCanDoan) {
  doanSo = Number(prompt("Số bản đoán không đúng. Vui lý nhập lại: "));
}
console.log("Chính xác");
