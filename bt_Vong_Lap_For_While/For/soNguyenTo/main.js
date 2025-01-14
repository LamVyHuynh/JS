while (true) {
  let a = Number(prompt("Nhập số a vào: "));
  if (!Number.isInteger(a) || a <= 0) {
    a = Number(prompt("Vui lòng nhập lại số > 0: "));
  } else {
    let isPrime = true;
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(a + " là số nguyên tố");
    } else {
      console.log(a + " không phải là số nguyên tố ");
    }
    let answer = prompt(
      `Bạn có muốn tiếp tục không?
       Nếu Không thì nhấn K
        Còn muốn tiếp tục thì ấn bất kỳ nút nào trên bàn phím`
    );
    if (answer.toLowerCase() === "k") {
      break;
    }
  }
}
