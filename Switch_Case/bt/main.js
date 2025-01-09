let choose = Number(
  prompt(`
Chọn cách tìm kiếm:
1. Tìm kiếm theo tên
2. Tìm kiếm theo tên tác giả
3. Tìm kiếm theo nhà xuất bản
4. Tìm kiếm theo tiêu đề`)
);
switch (choose) {
  case 1:
    alert("Bạn đã chọn tìm kiếm theo tên.");
    break;
  case 2:
    alert("Bạn đã chọn tìm kiếm theo tên tác giả.");
    break;
  case 3:
    alert("Bạn đã chọn tìm kiếm theo nhà xuất bản.");
    break;
  case 4:
    alert("Bạn đã chọn tìm kiếm theo tiêu đề.");
    break;
  default:
    alert("Bạn đã không chọn cách tìm kiếm.");
    break;
}
