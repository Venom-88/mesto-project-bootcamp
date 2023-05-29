//открывает модальное окно
const buttonEditProfile = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close");
const inputTypeName = document.querySelector(".popup__input_type_name");
const profileTitle = document.querySelector(".profile__title");
const inputTypeAbout = document.querySelector(".popup__input_type_about");
const profileSubtitle = document.querySelector(".profile__subtitle");
const saveButton = document.querySelector(".popup__save-button");
const popupOpened = document.querySelector(".popup");

function openPopup() {
  popupOpened.classList.toggle("popup_opened");
}

//закрывает модальное окно
function closePopup() {
  popupOpened.classList.toggle("popup_opened");
}

//заполняем первое поле
function inputName() {
  inputTypeName.value = profileTitle.textContent;
}

//запоняем второе поле
function inputAbout() {
  inputTypeAbout.value = profileSubtitle.textContent;
}

//вносим изменение через модальное окно
function popupSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputTypeName.value;
  profileSubtitle.textContent = inputTypeAbout.value;
  popupOpened.classList.toggle("popup_opened");
  
}

buttonEditProfile.addEventListener("click", inputAbout);
buttonEditProfile.addEventListener("click", inputName);
closePopupButton.addEventListener("click", closePopup);
buttonEditProfile.addEventListener("click", openPopup);
saveButton.addEventListener("click", popupSubmit);
