let n = prompt("Nhập số n vào: ");

do {
  if (n === "1") {
    let a = Number(prompt("Nhập số a: "));
    let b = Number(prompt("Nhập số b: "));
    let tong = a + b;
    console.log(`Tổng ${a} + ${b} = ${tong}`);
    break;
  } else if (n === "2") {
    let a = Number(prompt("Nhập số a: "));
    let b = Number(prompt("Nhập số b: "));
    let hieu = a - b;
    console.log(`Hiệu ${a} - ${b} = ${hieu}`);
    break;
  } else if (n === "3") {
    let a = Number(prompt("Nhập số a: "));
    let b = Number(prompt("Nhập số b: "));
    let tich = a * b;
    console.log(`Tích ${a} * ${b} = ${tich}`);
    break;
  } else {
    console.log("Thoát khỏi chương trình");
    break;
  }
} while (n !== "1" || n !== "2" || n !== "3" || n !== "4");
