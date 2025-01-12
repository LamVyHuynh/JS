let n = Number(prompt("Nhập số n vào: "));
for (let i = 1; i <= n; i++) {
  let s = 0;
  // Tính tổng ước số = ?
  for (let j = 1; j < i; j++) {
    if (i % j === 0) {
      s += j;
    }
  }
  // So sánh tổng ước số === s ?
  if (s === i) {
    console.log(i);
  }
}
