function vietHoaChuCaiDau(chuoi) {
    let mangTu = chuoi.split(" ");
  
    for (let i = 0; i < mangTu.length; i++) {
      mangTu[i] = mangTu[i].charAt(0).toUpperCase() + mangTu[i].slice(1);
    }
  
    return mangTu.join(" ");
  }
  
  let chuoiKhaiBao = "day la mot chuoi bat ky";
  
  console.log("Chuỗi khai báo:", chuoiKhaiBao);
  console.log(
    "Chuỗi sau khi viết hoa chữ cái đầu:",
    vietHoaChuCaiDau(chuoiKhaiBao)
  );