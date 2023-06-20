//Валидация форм

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

function checkFormValidity(submitButton, form) {
  if (form.checkValidity()) {
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

function setEventListeners(form, settings) {
  const submitButton = form.querySelector(settings.buttonSelector);
  const inputList = form.querySelectorAll(settings.inputSelector);
  checkFormValidity(submitButton, form);
  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkValid(input);
      checkFormValidity(submitButton, form);
    });
  });
}

export function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((form) => {
    setEventListeners(form, settings);
  });
}
