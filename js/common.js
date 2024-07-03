/**
 * Kiểm tra trường input có rộng không
 * @param {*} input
 * @returns false nếu trường rỗng
 */
function KiemTraTruongRong(input) {
  input.value = input.value.trim();
  if (input.value) {
    return true;
  } else {
    return false;
  }
}

/**
 * Kiểm tra trường nhập vào phải có độ dài nhỏ nhất là min
 * @param {*} input
 * @param {*} min
 * @returns false nếu độ đài input nhỏ hơn min
 */

function KiemTraDoDaiTruong(input, min) {
  let lenPass = input.value.length;
  if (lenPass < min) {
    return false;
  }
  return true;
}

/**
 * Kiểm tra tên username có tồn trong mảng Users
 * @param {*} username
 * @returns true nếu em còn tồn tại
 */

function KiemTraNguoiDungTonTai(username) {
  //   username.value = username.value.trim();
  //   Users.forEach((item, index) => {
  //     if (username.value === item.username) {
  //       return true;
  //     }
  //   });
  //   return false;
  let user = username.value.trim();
  let isExist = 0;
  Users.forEach((item, index) => {
    if (user === item.username) {
      isExist = 1;
    }
  });
  if (isExist == 1) {
    return true;
  } else if (isExist == 0) {
    return false;
  }
}

/**
 * Kiểm tra tên đăng nhập kí tự đầu tiên không phải số
 * @param {*} username
 * @returns true nếu kí tự đầu tiên là số
 */

function KiemTraTenNguoiDungDungDinhDang(username) {
  username.value = username.value.trim();
  return /[0-9]/.test(username.value[0]);
}
/**
 * Kiểm tra email đúng định dạng
 * @param {*} email
 * @returns true nếu email đúng định dạng
 */
function KiemTraEmailDungDinhDang(email) {
  const regexEmail =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  email.value = email.value.trim();
  let isEmail = regexEmail.test(email.value);
  return isEmail;
}
/**
 * Kiểm tra địa chỉ email đã được đăng kí trước đó chưa
 * @param {*} email
 * @returns true nếu email đã được đăng ký rồi
 */
function KiemTraEmailTonTai(email) {
  let _email = email.value.trim();
  let isExist = 0;
  Users.forEach((item, index) => {
    if (_email === item.email) {
      isExist = 1;
    }
  });
  if (isExist == 1) {
    return true;
  } else if (isExist == 0) {
    return false;
  }
}
/**
 * Kiểm tra số phone phải có 10 chữ số
 * @param {*} phone
 * @returns true nếu phone đúng định dạng
 */
function KiemTraPhoneDungDinhDang(phone) {
  var pattern = /^[0-9]{10}$/;
  phone.value = phone.value.trim();
  if (pattern.test(phone.value)) {
    return true;
  }
  return false;
}

/**
 * Kiểm tra số điện thoại đã được đăng ký chưa
 * @param {*} phone
 * @returns return true là đã được đăng ký rồi
 */
function KiemTraPhoneDaTonTai(phone) {
  let _phone = phone.value.trim();
  let isExist = 0;
  Users.forEach((item, index) => {
    if (_phone === item.phone) {
      isExist = 1;
    }
  });
  if (isExist == 1) {
    return true;
  } else if (isExist == 0) {
    return false;
  }
}

/**
 * Kiểm tra mật khẩu phải có các ký tự Hoa, thường, ký tự số, ký tự đặc biệt
 * @param {*} password
 * @returns true nếu password đúng định dạng
 */
function KiemTraDoManhMatKhau(password) {
  password.value = password.value.trim();
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/.test(
    password.value
  );
}
/**
 * Kiểm tra password  nhập có trùng nhau không
 * @param {*} password
 * @param {*} comfirmpassword
 * @returns false nếu mật khẩu KHÔNG trùng nhau
 */
function KiemTraTrungKhopMatKhau(password, comfirmpassword) {
  if (password.value.trim() !== comfirmpassword.value.trim()) {
    return false;
  }
  return true;
}
