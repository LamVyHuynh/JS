let so = Number(prompt("Nhập số vào: "));
function kiemTraSoChanLe(so) {
  if (so % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let kt = kiemTraSoChanLe(so);
if (kt) {
  console.log(so + " là số chẵn");
} else {
  console.log(so + " là số lẻ");
}
