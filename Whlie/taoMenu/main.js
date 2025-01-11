let n = prompt("Nhập số n vào: ");
while (n !== "1" || n !== "2" || n !== "3" || n !== "4") {
  if (n === "1") {
    let a = Number(prompt("Nhập số a vào: "));
    let b = Number(prompt("Nhập số b vào: "));
    let tong = a + b;
    console.log("%s + %s = %s", a, b, tong);
    break;
  } else if (n === "2") {
    let a = Number(prompt("Nhập số a vào: "));
    let b = Number(prompt("Nhập số b vào: "));
    let hieu = a - b;
    console.log("%s - %s = %s", a, b, hieu);
    break;
  } else if (n === "3") {
    let a = Number(prompt("Nhập số a vào: "));
    let b = Number(prompt("Nhập số b vào: "));
    let tich = a * b;
    console.log("%s * %s = %s", a, b, tich);
    break;
  } else {
    console.log("Thoát khỏi chương trình");
    break;
  }
}
