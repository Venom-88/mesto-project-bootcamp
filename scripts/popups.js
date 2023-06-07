
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".popup__close");
const inputTypeName = document.querySelector(".popup__input_type_name");
const profileTitle = document.querySelector(".profile__title");
const inputTypeAbout = document.querySelector(".popup__input_type_about");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileSaveButton = document.querySelector(".popup__save-button");
const profilePopupOpened = document.querySelector(".popup");

//открывает модальное окно
function openPopup() {
  profilePopupOpened.classList.toggle("popup_opened");
}

//закрывает модальное окно
function closePopup() {
  profilePopupOpened.classList.toggle("popup_opened");
}

//заполняем поля
function inputProfile() {
  inputTypeName.value = profileTitle.textContent;
  inputTypeAbout.value = profileSubtitle.textContent;
  openPopup(profilePopupOpened)
}

//вносим изменение через модальное окно
function submittingPopup(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputTypeName.value;
  profileSubtitle.textContent = inputTypeAbout.value;
  profilePopupOpened.classList.toggle("popup_opened");
  
}

buttonEditProfile.addEventListener("click", inputProfile);

profileCloseButton.addEventListener("click", closePopup);

profileSaveButton.addEventListener("click", submittingPopup);

