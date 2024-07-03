function validationUsername(username) {
  let nul = KiemTraTruongRong(username);
  let tontai = KiemTraNguoiDungTonTai(username);
  let dinhdang = KiemTraTenNguoiDungDungDinhDang(username);
  console.log(tontai);
  if (nul == false) {
    BaoDongDo(username, "Trường này bắt buộc");
  } else {
    if (dinhdang == true) {
      BaoDongDo(username, "Tên không được bắt đầu bằng số");
    } else {
      if (tontai == true) {
        BaoDongDo(username, "Người dùng đã tồn tại");
      } else {
        ThongBaoHoanThanh(
          username,
          `Tài khoản ${username.value} có thể sử dụng`
        );
      }
    }
  }
}

function validationEmail(email) {
  let nul = KiemTraTruongRong(email);
  let dinhdang = KiemTraEmailDungDinhDang(email);
  let tontai = KiemTraEmailTonTai(email);
  if (nul == false) {
    BaoDongDo(email, "Trường này bắt buộc");
  } else {
    if (dinhdang == false) {
      BaoDongDo(email, "Vui lòng nhập đúng định dạng email");
    } else {
      if (tontai == true) {
        BaoDongDo(email, "Email đã tồn tại");
      } else {
        ThongBaoHoanThanh(email, `Email ${email.value} có thể sử dụng`);
      }
    }
  }
}

function validationPhone(phone) {
  let nul = KiemTraTruongRong(phone);
  let dinhdang = KiemTraPhoneDungDinhDang(phone);
  if (nul == false) {
    BaoDongDo(phone, "Trường này bắt buộc");
  } else {
    if (dinhdang == false) {
      BaoDongDo(phone, "Vui lòng nhập đúng định dạng số điện thoại");
    } else {
      ThongBaoHoanThanh(phone, `Số điện thoại ${phone.value} có thể sử dụng`);
    }
  }
}

function validationPassword(password) {
  let nul = KiemTraTruongRong(password);
  let min = KiemTraDoDaiTruong(password, 8);
  let dinhdang = KiemTraDoManhMatKhau(password);
  if (nul == false) {
    BaoDongDo(password, "Trường này bắt buộc");
  } else {
    if (min == false) {
      BaoDongDo(password, "Mật khẩu phải tối thiểu 8 kí tự");
    } else {
      if (dinhdang == false) {
        BaoDongDo(
          password,
          "Mật khấu phải bao gồm ký tự chữ, chữ Hoa, ký tự số, ký tự đặc biệt"
        );
      } else {
        ThongBaoHoanThanh(password, `Mật khẩu hợp lệ`);
      }
    }
  }
}

function validationComfirmPassword(comfirmpassword) {
  let nul = KiemTraTruongRong(password);
  let trungkhop = KiemTraTrungKhopMatKhau(password, comfirmpassword);
  if (nul == false) {
    BaoDongDo(comfirmpassword, "Trường này bắt buộc");
  } else {
    if (trungkhop == false) {
      BaoDongDo(comfirmpassword, "Mật khẩu không trùng khớp nhau");
    } else {
      ThongBaoHoanThanh(comfirmpassword, ``);
    }
  }
}
