var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var comfirmpassword = document.querySelector("#comfirmpassword");
var btnSubmit = document.querySelector(".btn-submit");

username.addEventListener("focus", () => {
  validationUsername(username);
});

username.addEventListener("keyup", () => {
  validationUsername(username);
});

username.addEventListener("blur", () => {
  validationUsername(username);
});

email.addEventListener("focus", () => {
  validationEmail(email);
});

email.addEventListener("keyup", () => {
  validationEmail(email);
});

email.addEventListener("blur", () => {
  validationEmail(email);
});

phone.addEventListener("focus", () => {
  validationPhone(phone);
});

phone.addEventListener("keyup", () => {
  validationPhone(phone);
});

phone.addEventListener("blur", () => {
  validationPhone(phone);
});

password.addEventListener("focus", () => {
  validationPassword(password);
});

password.addEventListener("keyup", () => {
  validationPassword(password);
});

password.addEventListener("blur", () => {
  validationPassword(password);
});

comfirmpassword.addEventListener("focus", () => {
  validationComfirmPassword(comfirmpassword);
});

comfirmpassword.addEventListener("keyup", () => {
  validationComfirmPassword(comfirmpassword);
});

comfirmpassword.addEventListener("blur", () => {
  validationComfirmPassword(comfirmpassword);
});
