let a = Number(prompt("Nhập bảng cửu chương: "));
function inBangCuuChuong(a) {
  for (let i = 1; i <= 10; i++) {
    console.log(a + " x " + i + " = " + a * i);
  }
}

inBangCuuChuong(a);
