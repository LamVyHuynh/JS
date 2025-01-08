let Score = parseFloat(prompt("Nhập điểm số tín dụng: "));
let nam = parseInt(prompt("Nhập số năm vào: "));

if (Score >= 80 && nam >= 5) {
  console.log("Hạng A");
} else if (Score >= 60 && nam >= 2) {
  console.log("Hạng B");
} else if (Score >= 40) {
  console.log("Hạng C");
} else if (Score < 40) {
  console.log("Không được vay vốn");
} else {
  console.log("Bạn đã nhập sai!Vui lòng nhập lại");
}
