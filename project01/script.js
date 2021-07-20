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
function getInputName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
document.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput([username, email, password, password2]);
});
