function validationUsername(username) {
  let nul = KiemTraTruongRong(username);
  let tontai = KiemTraNguoiDungTonTai(username);
  let dinhdang = KiemTraTenNguoiDungDungDinhDang(username);
  let output = false;
  if (nul == false) {
    BaoDongDo(username, "Trường này bắt buộc");
    output = false;
  } else {
    if (dinhdang == true) {
      BaoDongDo(username, "Tên không được bắt đầu bằng số");
      output = false;
    } else {
      if (tontai == true) {
        BaoDongDo(username, `Người dùng ${username.value} đã tồn tại`);
        output = false;
      } else {
        ThongBaoHoanThanh(
          username,
          `Tài khoản ${username.value} có thể sử dụng`
        );
        output = true;
      }
    }
  }
  return output;
}

function validationEmail(email) {
  let nul = KiemTraTruongRong(email);
  let dinhdang = KiemTraEmailDungDinhDang(email);
  let tontai = KiemTraEmailTonTai(email);
  let output = false;
  if (nul == false) {
    BaoDongDo(email, "Trường này bắt buộc");
    output = false;
  } else {
    if (dinhdang == false) {
      BaoDongDo(email, "Vui lòng nhập đúng định dạng email");
      output = false;
    } else {
      if (tontai == true) {
        BaoDongDo(email, "Email đã được đăng ký bởi tài khoản khác");
        output = false;
      } else {
        ThongBaoHoanThanh(email, `Email ${email.value} có thể sử dụng`);
        output = true;
      }
    }
  }
  return output;
}

function validationPhone(phone) {
  let nul = KiemTraTruongRong(phone);
  let dinhdang = KiemTraPhoneDungDinhDang(phone);
  let tontai = KiemTraPhoneDaTonTai(phone);
  output = false;
  if (nul == false) {
    BaoDongDo(phone, "Trường này bắt buộc");
    output = false;
  } else {
    if (dinhdang == false) {
      BaoDongDo(phone, "Vui lòng nhập đúng định dạng số điện thoại");
      output = false;
    } else if (tontai == true) {
      BaoDongDo(phone, "Số điện thoại đã được đăng ký bởi tài khoản khác!");
      output = false;
    } else {
      ThongBaoHoanThanh(phone, `Số điện thoại ${phone.value} có thể sử dụng`);
      output = true;
    }
  }
  return output;
}

function validationPassword(password) {
  let nul = KiemTraTruongRong(password);
  let min = KiemTraDoDaiTruong(password, 8);
  let dinhdang = KiemTraDoManhMatKhau(password);
  let output = false;
  if (nul == false) {
    BaoDongDo(password, "Trường này bắt buộc");
    output = false;
  } else {
    if (min == false) {
      BaoDongDo(password, "Mật khẩu phải tối thiểu 8 kí tự");
      output = false;
    } else {
      if (dinhdang == false) {
        BaoDongDo(
          password,
          "Mật khấu phải bao gồm ký tự chữ, chữ Hoa, ký tự số, ký tự đặc biệt"
        );
        output = false;
      } else {
        ThongBaoHoanThanh(password, `Mật khẩu hợp lệ`);
        output = true;
      }
    }
  }
  return output;
}

function validationComfirmPassword(comfirmpassword) {
  let nul = KiemTraTruongRong(comfirmpassword);
  let trungkhop = KiemTraTrungKhopMatKhau(password, comfirmpassword);
  let output = false;
  if (nul == false) {
    BaoDongDo(comfirmpassword, "Trường này bắt buộc");
    output = false;
  } else {
    if (trungkhop == false) {
      BaoDongDo(comfirmpassword, "Mật khẩu không trùng khớp nhau");
      output = false;
    } else {
      ThongBaoHoanThanh(comfirmpassword, ``);
      output = true;
    }
  }
  return output;
}
