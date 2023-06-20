//Валидация форм

function showError(input, errorMessage) {
  console.log("222222222");
  const spanId = `error-${input.id}`;
  const errorFieldName = document.getElementById(spanId);
  errorFieldName.textContent = errorMessage;

  const inputId = `${input.id}`;
  const inputBorder = document.getElementById(inputId);
  inputBorder.style.borderBottomColor = "red";
}

function hideError(input) {
  console.log("222222222");
  const spanId = `error-${input.id}`;
  const errorFieldName = document.getElementById(spanId);
  errorFieldName.textContent = "";

  const inputId = `${input.id}`;
  const inputBorder = document.getElementById(inputId);
  inputBorder.style.borderBottomColor = "";
}

function checkValid(input) {
  console.log("222222222");
  if (input.validity.valid) {
    hideError(input);
  } else {
    showError(input, input.validationMessage);
  }
}

function checkFormValidity(submitButton, form) {
  if (form.checkValidity()) {
    console.log("222222222");
    enableButton(submitButton);
  } else {
    console.log("222222222");
    disableButton(submitButton);
  }
}

function enableButton(submitButton) {
  console.log("222222222");
  submitButton.disabled = false;
}
function disableButton(submitButton) {
  console.log("222222222");
  submitButton.disabled = true;
}

function setEventListeners(form, settings) {
  console.log("222222222");
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
    console.log("11111");
  });
}
