function validationUsername(username) {
  let nul = KiemTraTruongRong(username);
  let tontai = KiemTraNguoiDungTonTai(username);
  if (nul) {
    BaoDongDo(username, "Trường này bắt buộc");
  } else {
    ThongBaoHoanThanh(username, "");
  }
  if (tontai) {
    BaoDongDo(username, "Người dùng đã tồn tại");
  } else {
    ThongBaoHoanThanh(username, "Có thể sử dụng");
  }
}

function validationEmail(email) {}

function validationPhone(phone) {}

function validationPassword(password) {}

function validationComfirmPassword(comfirmpassword) {}
