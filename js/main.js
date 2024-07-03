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
