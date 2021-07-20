//--------------------
// Getting DOM Elements
//--------------------
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
//--------------------
// Functions
//--------------------

// function for error
function showError(input, message) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control error";
  const small = formcontrol.querySelector("small");
  small.innerText = message;
}
// function for successful submission
function showSuccess(input) {
  formcontrol = input.parentElement;
  formcontrol.className = "form-control success";
}
// function to check input
function checkInput(inputArray) {
  inputArray.forEach((input) => {
    if (input.value === "") {
      showError(input, `${getInputName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// function to check validity of Email
function validateEmail(email) {
  if (email.value !== "") {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email.value).toLowerCase())) {
      showSuccess(email);
    } else {
      showError(email, "Email is not valid");
    }
  }
}
// function to get the input Name with first letter capital
function getInputName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// function to check the lenght of input
function checkLength(input, min, max) {
  if (input.value.length >= min && input.value.length <= max) {
    showSuccess(input);
  } else {
    showError(
      input,
      `${getInputName(
        input
      )} length should be between ${min} to ${max} characters`
    );
  }
}
// fuction to check password matching
function passwordMatch(pass1, pass2) {
  if (pass1.value !== pass2.value) {
    showError(pass1, "");
    showError(pass2, "Passwords do not match");
  }
}

//--------------------
// Event Listners
//--------------------
document.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput([username, email, password, password2]);
  validateEmail(email);
  checkLength(username, 3, 10);
  checkLength(password, 5, 10);
  passwordMatch(password, password2);
});
