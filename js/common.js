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
  username.value = username.value.trim();
  Users.forEach((item, index) => {
    if (username.value === item.username) {
      return true;
    }
  });
  return false;
}

function KiemTraTenNguoiDungDungDinhDang(username) {
  username.value = username.value.trim();
  return /[0-9]/.test(username.value[0]);
}

function KiemTraEmailDungDinhDang(email) {
  const regexEmail =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  email.value = email.value.trim();
  let isEmail = regexEmail.test(email.value);
  return isEmail;
}

function KiemTraEmailTonTai(email) {
  email.value = email.value.trim();
  Users.forEach((item, index) => {
    if (email.value === item.email) {
      return true;
    }
  });
  return false;
}

function KiemTraPhoneDungDinhDang(phone) {
  var pattern = /^[0-9]{10}$/;
  phone.value = phone.value.trim();
  if (pattern.test(phone.value)) {
    return true;
  }
  return false;
}

function KiemTraDoManhMatKhau(password) {
  password.value = password.value.trim();
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/.test(
    password.value
  );
}

function KiemTraTrungKhopMatKhau(password, comfirmpassword) {
  if (password.value.trim() !== comfirmpassword.value.trim()) {
    return false;
  }
  return true;
}
