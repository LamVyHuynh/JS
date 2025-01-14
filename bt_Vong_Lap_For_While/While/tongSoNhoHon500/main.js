let i = 1;
let s = 0;
while (i <= 100) {
  if (s <= 500) {
    s += i;
    i++;
  } else {
    break;
  }
}
console.log(s);
