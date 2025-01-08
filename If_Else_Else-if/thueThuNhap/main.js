let thuNhap = parseFloat(prompt("Nhập số thu nhập: "));
if (thuNhap <= 5) {
  console.log("Miễn thuế");
} else if (thuNhap > 5 && thuNhap <= 15) {
  console.log("Thuế 10%, tiền thuế sẽ là %s", 0.1 * thuNhap);
} else if (thuNhap > 15 && thuNhap <= 30) {
  console.log("Thuế 20%, tiền thuế sẽ là %s", 0.2 * thuNhap);
} else {
  console.log("Thuế 30%, tiền thuế sẽ là %s", 0.3 * thuNhap);
}
