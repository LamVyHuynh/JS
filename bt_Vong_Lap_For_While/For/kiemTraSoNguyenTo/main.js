while (true) {
  // b1: Nhập số nguyên a vào
  let a = Number(prompt("Nhập số a vào: "));
  // b2: Kiểm tra số a có phải là số nguyên không?
  while (!Number.isInteger(a) || a <= 0) {
    a = Number(prompt("Nhập lại số a vào: "));
  }

  // b3: Kiểm tra a là số nguyên tố
  let isPrime = true;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      isPrime = false;
      break;
    }
  }
  // b4 Hiển thị kết quả
  if (isPrime) {
    alert(a + " là số nguyên tố", a);
  } else {
    alert(a + " không phải số nguyên tố", a);
  }
  // b5: Hoi nguoi dung co muon tiep tuc khong?
  let answer = prompt(
    `Bạn có muốn tiêp tục không? 
     Nhập no nếu bạn không muốn tiếp tục.
     còn tiếp tục thì bấm bất kỳ phím nào `
  );
  if (answer.toLowerCase() === "no") {
    break;
  }
}
