var loginLinkEl = document.querySelector(".container .login-link");
var formContentEl = document.querySelector(".container .form-content");
var loginEl = document.querySelector(
  ".form-content .container .login-register-link .login"
);
var registerEl = document.querySelector(
  ".form-content .container .login-register-link .register"
);
var form1El = document.querySelector(".form-content .container #form-1");
var form2El = document.querySelector(".form-content .container #form-2");
var inputs = document.querySelectorAll("input");
var warningTexts = document.querySelectorAll(".warning-text");
var loginWarningEl = document.querySelector(".login-warning");
var loginActionLinkEl = document.querySelector(
  ".form-content .container #form-1 .login-action-link"
);
var registerActionLinkEl = document.querySelector(
  ".form-content .container #form-2 .register-action-link"
);
var seePasswords = document.querySelectorAll(".see-password");
//Hết phần khai báo

formContentEl.classList.add("disappear");
loginLinkEl.addEventListener("click", function () {
  formContentEl.classList.toggle("disappear");
});

form2El.classList.add("disappear");
registerEl.classList.add("changeBackgroundColor");
registerEl.addEventListener("click", function () {
  form2El.classList.remove("disappear");
  form1El.classList.add("disappear");
  loginEl.classList.add("changeBackgroundColor");
  registerEl.classList.remove("changeBackgroundColor");
  form2El.reset();
  resetCheckValue("form-1");
});
loginEl.addEventListener("click", function () {
  form1El.classList.remove("disappear");
  form2El.classList.add("disappear");
  registerEl.classList.add("changeBackgroundColor");
  loginEl.classList.remove("changeBackgroundColor");
  form1El.reset();
  resetCheckValue("form-2");
});

loginWarningEl.classList.add("disappear");
warningTexts.forEach(function (warningTextEl) {
  warningTextEl.classList.add("disappear");
});
inputs.forEach(function (inputEl) {
  inputEl.style.border = "1px solid gray";
  inputEl.addEventListener("focusin", function () {
    inputEl.classList.add("input-background");
  });
  inputEl.addEventListener("focusout", function () {
    inputEl.classList.remove("input-background");
  });
});

function checkValue(formSelect, link) {
  var inputs = document.querySelectorAll("#" + formSelect + " input");

  inputs.forEach(function (inputEl) {
    inputEl.addEventListener("focusout", function () {
      inputs.forEach(function (inputEl) {
        var warningTextEl = inputEl.parentElement.nextElementSibling;
        if (
          inputEl.value === "" &&
          warningTextEl.classList.contains("warning-text")
        ) {
          warningTextEl.classList.remove("disappear");
        } else {
          warningTextEl.classList.add("disappear");
        }
      });
    });
  });
  link.addEventListener("click", function () {
    inputs.forEach(function (inputEl) {
      var warningTextEl = inputEl.parentElement.nextElementSibling;
      if (
        inputEl.value === "" &&
        warningTextEl.classList.contains("warning-text")
      ) {
        warningTextEl.classList.remove("disappear");
      } else {
        warningTextEl.classList.add("disappear");
      }
      if (inputEl.value) {
        loginWarningEl.classList.remove("disappear");
      }
    });
  });
}
checkValue("form-1", loginActionLinkEl);
checkValue("form-2", registerActionLinkEl);
function resetCheckValue(formSelect) {
  var inputs = document.querySelectorAll("#" + formSelect + " input");

  inputs.forEach(function (inputEl) {
    var warningTextEl = inputEl.parentElement.nextElementSibling;
    warningTextEl.classList.add("disappear");
  });
  loginWarningEl.classList.add("disappear");
}

seePasswords.forEach(function (seePasswordEl) {
  seePasswordEl.addEventListener("click", function () {
    var inputEl = this.previousElementSibling;
    if (inputEl.type === "password") {
      inputEl.type = "text";
    } else {
      inputEl.type = "password";
    }
  });
});
