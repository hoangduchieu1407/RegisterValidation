var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var comfirmpassword = document.querySelector("#comfirmpassword");
var btnSubmit = document.querySelector(".btn-submit");
/**
 * 1. Kiểm tra trường rỗng
 * 2. Kiểm tra username phải không chứa kí tự khoảng trắng
 * 3. Kiểm tra username phải không chứa kí tự số ở đầu
 * 4. Kiểm tra đúng định dạng email
 * 5. Kiểm tra mật khẩu trùng khớp
 * 6. Kiểm tra tính mạnh yếu của mật khẩu
 */
var userR = false;
var emailR = false;
var passR = false;
var cpassR = false;

function showError(input, message) {
  let parent = input.parentElement;
  parent.querySelector("small").innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}

function showSuccess(input, message) {
  let parent = input.parentElement;
  parent.querySelector("small").innerText = message;
  parent.classList.remove("error");
  parent.classList.add("success");
}

function showStrongPassword(input, message) {
  let parent = input.parentElement;
  parent.querySelector("small").innerText = message;
}

function checkEmptyError(input) {
  input.value = input.value.trim();
  console.log(input.value);
  if (input.value) {
    showSuccess(input, "");
    return true;
  } else {
    showError(input, "Trường này là bắt buộc!");
    return false;
  }
}

function checkEmailError(input) {
  const regexEmail =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  input.value = input.value.trim();
  let isEmail = regexEmail.test(input.value);
  if (isEmail == true) {
    showSuccess(input, " ");
  } else {
    showError(input, "Vui lòng nhập đúng định dạng email");
  }
  return isEmail;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} ký tự`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Không được vượt quá ${max} ký tự`);
    return true;
  }
  showSuccess(input, "");
  return false;
}

function checkMatchPassword(password, comfirmpassword) {
  if (password.value.trim() !== comfirmpassword.value.trim()) {
    showError(comfirmpassword, "Mật khẩu không trùng khớp");
    return false;
  }
  return true;
}

username.addEventListener("keyup", () => {
  let user = username.value.trim();
  let isExist = 0;
  let isEmpty = checkEmptyError(username);
  if (isEmpty == true) {
    Users.forEach((item, index) => {
      if (user === item.username) {
        isExist = 1;
      }
      if (user === "") {
        isExist = -1;
      }
    });
    if (isExist == 1) {
      showError(username, `User "${user}" đã tồn tại`);
    } else if (isExist == 0) {
      showSuccess(username, `User "${user}" có thể sử dụng`);
    } else {
      showSuccess(username, ``);
    }
  }
  userR = isEmpty && (isExist == 0 ? true : false);
});

email.addEventListener("keyup", () => {
  let mail = email.value.trim();
  let isExist = 0;
  let isEmpty = checkEmptyError(email);
  let isEmail = checkEmailError(email);
  if (isEmpty == true) {
    if (isEmail == true) {
      Users.forEach((item, index) => {
        if (mail === item.email) {
          isExist = 1;
        }
        if (mail === "") {
          isExist = -1;
        }
      });
      if (isExist == 1) {
        showError(email, `Email "${mail}" đã tồn tại`);
      } else if (isExist == 0) {
        showSuccess(email, `Email "${mail}" có thể sử dụng`);
      } else {
        showSuccess(email, " ");
      }
    }
  }
  emailR = isEmpty && isEmail && (isExist == 0 ? true : false);
});

password.addEventListener("keyup", () => {
  let n = password.value.length;
  let parent = password.parentElement;
  let isEmpty = checkEmptyError(password);
  let matPass = false;
  if (isEmpty == true) {
    parent.querySelector("small").classList.remove("yeu");
    parent.querySelector("small").classList.remove("trung");
    parent.querySelector("small").classList.remove("manh");
    parent.classList.remove("success");
    if (n < 7) {
      showStrongPassword(password, "Mật khẩu yếu nhớt");
      parent.querySelector("small").classList.add("yeu");
      matPass = false;
    } else if (n >= 7) {
      showStrongPassword(password, "Mật khẩu thật mạnh mẽ");
      parent.querySelector("small").classList.add("manh");
      matPass = true;
    } else if (n == undefined) {
      showStrongPassword(password, " ");
      matPass = false;
    }
  }
  passR = isEmpty && matPass;
});

comfirmpassword.addEventListener("keyup", () => {
  let parent = comfirmpassword.parentElement;
  let isEmpty = checkEmptyError(comfirmpassword);
  if (isEmpty == true) {
    var check = checkMatchPassword(password, comfirmpassword);
  }
  cpassR = isEmpty && check;
});

username.addEventListener("focus", () => {
  checkEmptyError(username);
});

email.addEventListener("focus", () => {
  checkEmptyError(email);
});

password.addEventListener("focus", () => {
  checkEmptyError(password);
});

comfirmpassword.addEventListener("focus", () => {
  checkEmptyError(comfirmpassword);
});

username.addEventListener("blur", () => {
  let user = username.value.trim();
  let isExist = 0;
  let isEmpty = checkEmptyError(username);
  if (isEmpty == true) {
    Users.forEach((item, index) => {
      if (user === item.username) {
        isExist = 1;
      }
      if (user === "") {
        isExist = -1;
      }
    });
    if (isExist == 1) {
      showError(username, `User "${user}" đã tồn tại`);
    } else if (isExist == 0) {
      showSuccess(username, `User "${user}" có thể sử dụng`);
    } else {
      showSuccess(username, ``);
    }
  }
});
