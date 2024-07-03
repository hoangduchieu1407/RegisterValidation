var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var comfirmpassword = document.querySelector("#comfirmpassword");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  listInput.forEach((input, index) => {
    input.value = input.value.trim();
    if (!input.value) {
      showError(input, "Trường này là bắt buộc!");
    } else {
      showSuccess(input);
    }
  });
}

function checkEmailError(input) {
  const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);
  if (!isEmailError) {
    showSuccess(input);
  } else {
    showError(input, "Vui lòng nhập đúng định dạng email");
  }
  return isEmailError;
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
  showSuccess(input);
  return false;
}

function checkMatchPassword(password, comfirmpassword) {
  if (password.value !== comfirmpassword) {
    showError(comfirmpassword, "Mật khẩu không trùng khớp");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    comfirmpassword,
  ]);
  let isEmailError = checkEmailError(email);
  let isUsernameLengErr = checkLengthError(username);
  let isEmailLengErr = checkLengthError(email);
  let isPasswordLengErr = checkLengthError(password);
  let isConfirmPasswordLengErr = checkLengthError(comfirmpassword);
});
