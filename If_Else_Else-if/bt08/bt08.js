let m = parseFloat(prompt("Nhập chiều cao (m): "));
let kg = parseFloat(prompt("Nhập cân nặng (kg): "));

let bmi = kg / (m * m);
console.log("Bạn có chiều cao là %s m", m);
console.log("Bạn có cân nặng là %s kg", kg);
console.log("Chỉ số BMI của bạn là: ", bmi);

if (bmi >= 35) {
  console.log("Thân hình quá béo");
} else if (bmi < 35 && bmi >= 30) {
  console.log("Thân hình béo");
} else if (bmi < 30 && bmi >= 25) {
  console.log("Thân hình hơi béo");
} else if (bmi < 25 && bmi >= 18.5) {
  console.log("Thân hình bình thường");
} else if (bmi < 18.5 && bmi >= 16) {
  console.log("Thân hình hơi gầy");
} else if (bmi < 16 && bmi >= 15) {
  console.log("Thân hình gầy");
} else {
  console.log("Thân hình quá gầy");
}
