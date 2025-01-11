let n = prompt("Nhập số n vào: ");
console.log("1. Tính tổng hai số");
console.log("2. Tính hiệu hai số");
console.log("3. Tính tích hai số");
console.log("4. Thoất");
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
    let hieu = a + b;
    console.log(`Hiệu ${a} + ${b} = ${hieu}`);
    break;
  } else if (n === "3") {
    let a = Number(prompt("Nhập số a: "));
    let b = Number(prompt("Nhập số b: "));
    let tich = a + b;
    console.log(`Tích ${a} + ${b} = ${tich}`);
    break;
  }
} while (n !== "4");
