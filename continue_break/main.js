console.log("break: Dùng để dừng 1 vòng lặp");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
  if (i === 5) {
    break;
  }
}
console.log("continue: Dùng để bỏ qua 1 giá trị trong vòng lặp");
for (let j = 1; j <= 10; j++) {
  if (j % 2 !== 0) {
    continue;
  }
  console.log(j);
}
