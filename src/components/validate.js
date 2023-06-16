//Валидация форм
export const profileForm = document.forms.profile;

function showError(input, errorMessage) {
  const spanId = `error-${input.id}`;
  const errorFieldName = document.getElementById(spanId);
  errorFieldName.textContent = errorMessage;

  const inputId = `${input.id}`;
  const inputBorder = document.getElementById(inputId);
  inputBorder.style.borderBottomColor = "red";
}

function hideError(input) {
  const spanId = `error-${input.id}`;
  const errorFieldName = document.getElementById(spanId);
  errorFieldName.textContent = "";

  const inputId = `${input.id}`;
  const inputBorder = document.getElementById(inputId);
  inputBorder.style.borderBottomColor = "";
}

function checkValid(input) {
  if (input.validity.valid) {
    hideError(input);
  } else {
    showError(input, input.validationMessage);
  }
}

function checkFormValidity(submitButton) {
  if (profileForm.checkValidity()) {
    enableButton(submitButton);
  } else {
    disableButton(submitButton);
  }
}

function enableButton(submitButton) {
  submitButton.disabled = false;
}
function disableButton(submitButton) {
  submitButton.disabled = true;
}

const submitButton = document.querySelector(".popup__save-button");
const inputList = document.querySelectorAll(".popup__input");
inputList.forEach((input) => {
  input.addEventListener("input", () => {
    checkValid(input);
    checkFormValidity(submitButton);
  });
});
