let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof b);
console.log("Giá trị của b: ", b);

// 8 giá trị falsy khi chuyển sang bool sẽ là false
// false, 0, -0, 0n, "", NaN, null, undefined
console.log(typeof 0n);
let c = Boolean(false);
console.log(c);
console.log(typeof c);

let salary;
console.log(salary);
if (salary) {
  console.log("Salary is defined");
} else {
  console.log("Salary is undefined");
}
