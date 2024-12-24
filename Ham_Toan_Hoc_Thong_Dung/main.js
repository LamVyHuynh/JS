// Các hàm thông dụng
// 1. Hàm căn bậc 2 `Math.sqrt(x)`
let x = 4;
console.log(`Căn bậc 2 của  ${x} là ${Math.sqrt(x)}`);

// 2. Hàm mũ `Math.pow(base, expoment)`

let a = 2;
let b = 3;
console.log(`${a} mũ ${b} =  ${Math.pow(a, b)}`);

// 3. Hàm lấy trị tuyệt đối `Math.abs(x)`
let c = -3;
console.log(`Trị tuyệt đối của số ${c} là ${Math.abs(c)}`);

// 4. Hàm làm tròn số `Math.ceil(x)`= làm tròn lên, ``Math.floor(x)`= làm tròn xuống
let d = 4.5;
console.log("Làm tròn lên số 4.5 = ", Math.ceil(d));
console.log(`Làm tròn xuốn số ${d} = ${Math.floor(d)}`);

// 5 Hàm làm tròn `Math.round(x)`, nếu phần lẻ 0.5 thì làm tròn thành 1 còn nhỏ hơn 0.5 thì thành 0
let e = 4.5;
console.log(`làm tròn số ${e} = ${Math.round(e)}`);
let f = 4.4;
console.log("Làm tròn số 4.4 = ", Math.round(f));

// 6. Hàm làm tròn chữ số phần đơn vị
let g = 3.141647561;
console.log(`Làm tròn ${g} ở 2 chữ số = ${g.toFixed(2)}`);
console.log(typeof g.toFixed(2)); // toFixed sẽ là kiểu String cần phải ép về kiểu số
console.log(
  "Làm tròn số rồi ép về kiểu số luôn = ",
  Number(g.toFixed(2)),
  typeof Number(g.toFixed(2))
);

// 7. Hàm tìm GTNN(min) và GTLN(max)
let h = 4;
let i = 6;
let j = 2;

console.log(`GTNN cua ${h}, ${i}, ${j} là: ${Math.min(h, i, j)}`);
console.log(`GTLN cua ${h}, ${i}, ${j} là: ${Math.max(h, i, j)}`);
