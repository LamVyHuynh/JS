let nguoi = prompt("Chọn (Búa, Kéo, Bao): ");
let may;
const list = ["Búa", "Kéo", "Bao"];
function randomMay() {
  const soNgauNhien = Math.floor(Math.random() * list.length);
  return list[soNgauNhien];
}

may = randomMay();
console.log("Người chọn: ", nguoi);
console.log("Máy chọn: ", may);
if (nguoi === "Bao") {
  if (may === "Bao") {
    console.log("Hoà nhau");
  } else if (may === "Kéo") {
    console.log("Máy thắng");
  } else {
    console.log("Người thắng");
  }
} else if (nguoi === "Kéo") {
  if (may === "Bao") {
    console.log("Máy thắng");
  } else if (may === "Kéo") {
    console.log("Hoà nhau");
  } else {
    console.log("Người thắng");
  }
} else {
  if (may === "Bao") {
    console.log("Máy thắng");
  } else if (may === "Kéo") {
    console.log("Người thắng");
  } else {
    console.log("Hoà nhau");
  }
}
