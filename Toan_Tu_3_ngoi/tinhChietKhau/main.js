let price = parseFloat(prompt("Nhập giá sản phẩm: "));
let message =
  price > 1000000 ? price * 0.8 : price >= 500000 ? price * 0.9 : price;
console.log(`Giá sau khi chiết khấu ${message}`);
