// chỉ có phép + mới số ép thành chuỗi
let a = 1;
let b = "1";
console.log("Ép thành chuỗi của phép + = ", a + b);
console.log("Kiểu ép thành chuỗi của phép + là ", typeof (a + b));

// còn các phép tính khác(-, *, /, %) thì chuỗi ép thành kiểu số
let c = 5;
let d = "2";
console.log("Ép vào phép - = ", c - d);
console.log("Kiểu ép vào phép - la ", typeof (c - d));

console.log("Ép vào phép * = ", c * d);
console.log("Kiểu ép vào phép * la ", typeof (c * d));

console.log("Ép vào phép / = ", c / d);
console.log("Kiểu ép vào phép / la ", typeof (c / d));

// Nếu có phép tính giữa các kiểu số trước phép tính + chuỗi thì nó sẽ tính lần lượt phép tính số trc sau đó + thêm chuỗi dô nữa là xong

// Tổng hợp các phép tính
console.log("Tổng hợp các phép tính = ", 10 - 5 * "1");

console.log("10" - 4 + 3 - 1 + "1");
