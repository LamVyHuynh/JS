let a = Number(prompt("Nhập số a vào: "));
let b = Number(prompt("Nhập số b vào: "));
let c = Number(prompt("Nhập số c vào: "));

function ptBac2(a, b, c) {
  if (a === 0) {
    if (b === 0) {
      if (c === 0) {
        console.log("Phương trình vô số nghiệm");
      } else {
        console.log("Phương trình vô nghiệm");
      }
    } else {
      let x = -c / b;
      console.log("Phương trình cô nghiệm x = ", x);
    }
  } else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      console.log("Phương trình vô nghiệm");
    } else if (delta === 0) {
      let x1 = (x2 = -b / (2 * a));
      console.log("Phương trình cô nghiệm x1 = x2 = ", x1);
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      console.log("Phương trình cô nghiệm x1 = ", x1);
      console.log("Phương trình cô nghiệm x2 = ", x2);
    }
  }
}
ptBac2(a, b, c);
