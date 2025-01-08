let gio = parseInt(prompt("Nhập số giờ vào: "));
let phut = parseInt(prompt("Nhập số phúт vào: "));

if (gio >= 1 && gio <= 12) {
  console.log(gio + ":" + phut + " AM");
} else if (gio > 12 && gio <= 24) {
  console.log(gio - 12 + ":" + phut + " PM");
}
