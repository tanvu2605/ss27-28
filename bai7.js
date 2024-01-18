function timCapSo(mang, soCanTim) {
    let capSo = [];
  
    for (let i = 0; i < mang.length; i++) {
      let soConlai = soCanTim - mang[i];
  
      if (mang.includes(soConlai) && mang.indexOf(soConlai) !== i) {
        capSo.push(mang[i]);
        capSo.push(soConlai);
        break;
      }
    }
  
    return capSo;
  }
  
  let mangSoNguyen = [2, 4, 6, 8, 10, 12, 14];
  
  let soNhap = parseInt(prompt("Nhập vào một số nguyên:"));
  
  console.log("Mảng số nguyên:", mangSoNguyen);
  console.log("Số nguyên nhập vào:", soNhap);
  console.log("Cặp số có tổng bằng số nhập vào:", timCapSo(mangSoNguyen, soNhap));