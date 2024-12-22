// // Nhập vào số a
// let numberA = prompt("Nhập vào số a: ");
// console.log(numberA);
// console.log(typeof numberA);
// // thực hiện tính toán khi chưa ép kiểu dữ liệu
let numberB = 4;
// let kq = numberA + numberB;
// console.log(`Kết quả của phép tính a + b = ${kq}`);
// console.log(typeof kq);

// // Các phép tính khác
// let hieu = numberA - numberB;
// console.log(`kết quả phép trừ a-b = ${hieu}`);
// console.log(typeof hieu);

// let tich = numberA * numberB;
// console.log(`kết quả phép tích a*b = ${tich}`);
// console.log(typeof tich);

// let chia = numberA / numberB;
// console.log(`kết quả phép chia a/b = ${chia}`);
// console.log(typeof chia);

// let chiaLayDu = numberA % numberB;
// console.log(`Kết quả của phép chia lấy dư a%b = ${chiaLayDu}`);
// console.log(typeof chiaLayDu);

// ép kiểu dữ liệu sang int khi dùng promt
let numberC = prompt("Nhập vào số C:");
// console.log(numberC);
// console.log(typeof numberC);
console.log(parseInt(numberC + 1));
console.log(typeof parseInt(numberC));

// hoặc dùng hàm Number để ép sang kiểu dữ liệu number
let numberD = Number(prompt("Nhập vào số D:"));
console.log(numberD);
console.log(typeof numberD);
