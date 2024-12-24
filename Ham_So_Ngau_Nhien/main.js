// Hàm Math.random()
// 1. Random trong khoảng [0 - 1)
let ng = Math.random();
console.log(`Số ngẫu nhiên khoảng 0 đến sát 1 = ${ng}`);

// 2. Random trong khoaảng LỚN HƠN 1
let ng1 = Math.random() * 10;
console.log(`Số ngẫu nhiên khoảng LỚN HƠN 1 = ${ng1}`);

// 3. Random SỐ NGUYÊN - ẾP VỀ SỐ NGUYÊN
let soNguyen = parseInt(Math.random() * 10);
console.log(`Số ngẫu nhiên khoảng LỚN HƠN 1 = ${soNguyen}`);

// 3. Random 0 đến sát 30
let soNguyen30 = parseInt(Math.random() * 30);
console.log(`Số ngẫu nhiên 0 đến sát 30 = ${soNguyen30}`);

// 3. Random 10 đến sát 30
let soNguyen10_30 = parseInt(Math.random() * 21) + 10;
console.log(`Số ngẫu nhiên 0 đến sát 30 = ${soNguyen10_30}`);
