//открывает модальное окно
const buttonEditProfile = document.querySelector(".profile__edit-button");
function openPopup() {
  const popupOpened = document.querySelector(".popup_opened");
  popupOpened.classList.remove("popup_opened");
  popupOpened.classList.add("popup");
}
buttonEditProfile.addEventListener("click", openPopup);
//закрывает модальное окно
const closePopupButton = document.querySelector(".popup__close");
function closePopup() {
  const popupClose = document.querySelector(".popup");
  popupClose.classList.remove("popup");
  popupClose.classList.add("popup_opened");
}
closePopupButton.addEventListener("click", closePopup);

//заполняем первое поле
const inputTypeName = document.querySelector(".popup__input_type_name");
const profileTitle = document.querySelector(".profile__title");
function inputName() {
  inputTypeName.value = profileTitle.textContent;
}
buttonEditProfile.addEventListener("click", inputName);

//запоняем второе поле
const inputTypeAbout = document.querySelector(".popup__input_type_about");
const profileSubtitle = document.querySelector(".profile__subtitle");
function inputAbout() {
  inputTypeAbout.value = profileSubtitle.textContent;
}
buttonEditProfile.addEventListener("click", inputAbout);
//вносим изменение через модальное окно
const saveButton = document.querySelector(".popup__save-button");
function popupSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputTypeName.value;
  profileSubtitle.textContent = inputTypeAbout.value;
  const popupClose = document.querySelector(".popup");
  popupClose.classList.remove("popup");
  popupClose.classList.add("popup_opened");
}
saveButton.addEventListener("click", popupSubmit);
