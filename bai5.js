function locChuoiTrongMang(mang, chuoi) {
    let ketQuaLoc = [];
  
    for (let i = 0; i < mang.length; i++) {
      if (mang[i].includes(chuoi)) {
        ketQuaLoc.push(mang[i]);
      }
    }
  
    return ketQuaLoc;
  }
  
  let mangChuoi = ["apple", "banana", "kiwi", "grape", "watermelon", "orange"];
  
  let chuoiNhap = prompt("Nhập vào một chuỗi:");
  
  console.log("Mảng chuỗi:", mangChuoi);
  console.log("Chuỗi đã nhập:", chuoiNhap);
  console.log(
    "Các phần tử có chứa chuỗi trong mảng:",
    locChuoiTrongMang(mangChuoi, chuoiNhap)
  );