let n = Number(prompt("Nhập số n vào: "));
let array = [];
for (let i = 1; i <= n; i++) {
  let s = 0;
  for (let j = 1; j < i; j++) {
    if (i % j === 0) {
      s += j;
    }
  }
  if (s === i) {
    array.push(i);
  }
}
console.log(array);
