let soKm = parseFloat(prompt("Nhập số km vào: "));
let tienTaxi;
if (soKm <= 1) {
  tienTaxi = soKm * 10000;
} else if (soKm > 1 && soKm <= 5) {
  tienTaxi = soKm * 9000;
} else {
  tienTaxi = soKm * 8000;
}

console.log("Tiền Taxi sau khi đi %s km là %s", soKm, tienTaxi);
