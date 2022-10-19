const usernameInput = document.getElementById("username-input");
const usernameError = document.getElementById("username-error");

const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

const signupForm = document.getElementById("signup-form");
const submissionError = document.getElementById("submission-error");

const infoButton = document.getElementById("extra-info");
const getInfo = document.getElementById("get-info");

usernameInput.addEventListener("blur", (event) => {
  if (event.target.value.length >= 3) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    usernameError.innerText = "";
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    usernameError.innerText = "Username must be at least 3 characters";
  }
});

emailInput.addEventListener("blur", (event) => {
  if (
    event.target.value.includes("@") &&
    (event.target.value.endsWith(".co.uk") ||
      event.target.value.endsWith(".com"))
  ) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    emailError.innerText = "";
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    emailError.innerText = "Invalid email address";
  }
});

signupForm.addEventListener("submit", (event) => {
  const inputs = [...document.getElementsByClassName("signup-input")];
  const areValid = inputs.every((input) => input.classList.contains("valid"));

  if (!areValid) {
    event.preventDefault();
    submissionError.innerText = "Please enter valid details to gain access";
  }
});

infoButton.addEventListener("click", (event) => {
  getInfo.innerText = "This track is at the Nike headquarters in Oregon, USA";
});
