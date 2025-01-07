let a, b, c;
let x1, x2;
let delta;

a = parseInt(prompt("Nhập số a vào: "));
b = parseInt(prompt("Nhập số b vào: "));
c = parseInt(prompt("Nhập số c vào: "));

if (a === 0) {
  if (b === 0) {
    if (c === 0) {
      console.log("Phương trình vô số nghiệm");
    } else {
      console.log("Phương trình vô nghiệm");
    }
  } else {
    console.log("Phương trình có nghiệm x = ", -c / b);
  }
} else {
  delta = b * b - 4 * a * c;
  if (delta < 0) {
    console.log("Phương trình vô nghiệm");
  } else if (delta === 0) {
    console.log("Phương trình có nghiệm kép x1 = x2 = ", (-b / 2) * a);
  } else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(
      "Phương trình có 2 nghiệm phân biệt x1 = %s và x2 =  %s",
      x1,
      x2
    );
  }
}
