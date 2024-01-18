function demSoLanXuatHien(chuoi, kyTu) {
    let dem = 0;
  
    for (let i = 0; i < chuoi.length; i++) {
      if (chuoi[i] === kyTu) {
        dem++;
      }
    }
  
    return dem;
  }
  
  let chuoiNhap = prompt("Nhập vào một chuỗi:");
  let kyTuNhap = prompt("Nhập vào một ký tự:");
  
  console.log("Chuỗi đã nhập:", chuoiNhap);
  console.log("Ký tự đã nhập:", kyTuNhap);
  console.log(
    "Số lần xuất hiện của ký tự trong chuỗi:",
    demSoLanXuatHien(chuoiNhap, kyTuNhap)
  );
  