let n = Number(prompt("Nhập số n vào:"));
let s = 0;

if (n !== 3) {
  for (let i = 0; i <= n; i++) {
    if (i === 3) {
      continue;
    }
    s += i;
  }
  console.log("Tong cac so le tu 0 den %s la: %s", n, s);
}
