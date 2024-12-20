// Cách xuất dữ liệu với biến trong js
let soA = 25;
let soB = 5;

// Cách 1:
console.log("C1: Căn bậc 2 của " + soA + " là : " + soB);

// Cách 2:
console.log("C2: Căn bậc 2 của", soA, "là:", soB);

// Cách 3:
console.log(`C3: Căn bậc 2 của ${soA} là ${soB}`);

// Cách 4:
console.log(`C4: Căn bậc 2 của %s là %s`, soA, soB);

let a = 3,
  b = 4,
  kq = a * b;

console.log("C1: So " + a + " nhan voi so " + b + " bằng " + kq);
console.log("C2: So", a, "nhan voi so", b, "bằng", kq);
console.log(`C3: So ${a} nhan voi so ${b} bằng ${kq}`);
console.log(`C4: So %s nhan voi so %s bằng %s`, a, b, kq);
