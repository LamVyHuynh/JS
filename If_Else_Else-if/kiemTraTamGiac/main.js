let a = parseInt(prompt("Nhập cạnh a vào: "));
let b = parseInt(prompt("Nhập cạnh b vào: "));
let c = parseInt(prompt("Nhập cạnh c vào: "));

if (a + b > c && b + c > a && a + c > b) {
  if (a * a + b * b === c * c) {
    console.log("Tam giác Vuông");
  } else if (a === b && b === c && a === c) {
    console.log("Tam giác Đều");
  } else if (a === b || b === c || c === a) {
    console.log("Tam giác Cân");
  } else {
    console.log("Tam giác Thường");
  }
}
