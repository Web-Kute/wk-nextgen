const fullName = document.getElementById("fullname");
const email = document.getElementById("emailuser");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const errorMessage = document.querySelector(".msg-error");

// let hasFocus = (elem) => elem === document.activeElement;
// let isFocused = document.activeElement === fullName;

/**
 * 
 * @param {string} myString
 * @returns 
 */
function hasNumber(myString) {
  return /\d/.test(myString);
}
 
function showHideValid(elem) {
  elem.nextElementSibling.classList.replace("show", "hide");
  elem.nextElementSibling.nextElementSibling.classList.replace("hide", "show");
}

function showHideNotValid(elem) {
  elem.nextElementSibling.classList.replace("hide", "show");
  elem.nextElementSibling.nextElementSibling.classList.replace("show", "hide");
}

let isValid = false;

function isValidFullName() {
  if (
    fullName.value !== "" &&
    fullName.value.length >= 4 &&
    !hasNumber(fullName.value)
  ) {
    fullName.style.textTransform = "capitalize";
    showHideValid(fullName);
    isValid = true;
  } else {
    showHideNotValid(fullName);
  }
}

function isValidEmail() {
  const checkEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value !== "" && email.value.match(checkEmail)) {
    showHideValid(email);
    isValid = true;
  } else {
    showHideNotValid(email);
  }
}

function isValidMessage() {
  if (message !== "" && message.value.length > 60) {
    errorMessage.classList.replace("show", "hide");
    isValid = true;
  } else {
    message.focus();
    errorMessage.classList.replace("hide", "show");
    errorMessage.innerText =
      "Votre message doit comporté au moins 60 caractères !";
  }
}

fullName.addEventListener("focus", () => {
  isValidFullName();
});
fullName.addEventListener("blur", () => {
  fullName.nextElementSibling.classList.replace("show", "hide");
});

email.addEventListener("focus", () => {
  isValidEmail();
});
email.addEventListener("blur", () => {
  email.nextElementSibling.classList.replace("show", "hide");
});

message.addEventListener("focus", () => {
  isValidMessage();
});
message.addEventListener("blur", () => {
  errorMessage.classList.replace("show", "hide");
});

function debounced(delay, fn) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

const nameForm = debounced(200, isValidFullName);
fullName.addEventListener("input", nameForm);

const emailForm = debounced(200, isValidEmail);
email.addEventListener("input", emailForm);

const messageForm = debounced(100, isValidMessage);
message.addEventListener("input", messageForm);
