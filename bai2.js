function timPhanTuCoDoDaiLonNhat(arr) {
    if (arr.length === 0) {
      return "Mảng trống.";
    }
  
    let phanTuLonNhat = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > phanTuLonNhat.length) {
        phanTuLonNhat = arr[i];
      }
    }
  
    return phanTuLonNhat;
  }
  
  let mangChuoi = ["apple", "banana", "kiwi", "grape", "watermelon", "orange"];
  
  console.log("Mảng chuỗi:", mangChuoi);
  console.log("Phần tử có độ dài lớn nhất:", timPhanTuCoDoDaiLonNhat(mangChuoi));