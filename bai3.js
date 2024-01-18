function demSoKyTu(chuoi) {
    let dem = 0;
  
    for (let i = 0; i < chuoi.length; i++) {
      if (chuoi[i] !== " ") {
        dem++;
      }
    }
  
    return dem;
  }
  
  let chuoiKhaiBao = "Đây là một chuỗi bất kỳ với các ký tự và khoảng trắng.";
  
  console.log("Chuỗi khai báo:", chuoiKhaiBao);
  console.log(
    "Số ký tự trong chuỗi (không tính ký tự trống):",
    demSoKyTu(chuoiKhaiBao)
  );