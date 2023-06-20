import "./styles/index.css";
import { createCard } from "./components/card.js";
import {
  openPopup,
  closePopup,
  popupProfile,
  popupImage,
} from "./components/modal.js";
import { enableValidation } from "./components/validate.js";
import { initialCards } from "./components/cardsLoad.js";

const validitySettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__save-button",
};
enableValidation(validitySettings);

//cards
const buttonAddCard = document.querySelector(".profile__add-button");
const popupCard = document.querySelector(".popup_type_cards");
const buttonClosePopupCard = popupCard.querySelector(".popup__close");

const buttonClosePopupImage = popupImage.querySelector(".popup__close");

//Открываем попап добавления карточки
buttonAddCard.addEventListener("click", function () {
  openPopup(popupCard);
});

//закрываем попап добавления карточки
buttonClosePopupCard.addEventListener("click", closePopup);

//Закрываем popup-фото
buttonClosePopupImage.addEventListener("click", closePopup);

//popups
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonClosePopupProfile = document.querySelector(".popup__close");
const inputTypeName = document.querySelector(".popup__input_type_name");
const profileTitle = document.querySelector(".profile__title");
const inputTypeAbout = document.querySelector(".popup__input_type_about");
const profileSubtitle = document.querySelector(".profile__subtitle");

//заполняем поля
function autoFillProfileData() {
  inputTypeName.value = profileTitle.textContent;
  inputTypeAbout.value = profileSubtitle.textContent;
  openPopup(popupProfile);
}

//Добавляем карочки руками

const inputNameElement = popupCard.querySelector(".popup__input_type_name");
const inputAboutElement = popupCard.querySelector(".popup__input_type_about");
const cardContainer = document.querySelector(".elements");
const cardForm = popupCard.querySelector(".popup__form");

//вносим изменение через модальное окно

buttonEditProfile.addEventListener("click", autoFillProfileData);

buttonClosePopupProfile.addEventListener("click", closePopup);

//сабмит добавления карточки
function handleSubmitFormCard(evt) {
  evt.preventDefault();
  const item = {
    name: inputNameElement.value,
    link: inputAboutElement.value,
  };
  const newCard = createCard(item);
  cardContainer.prepend(newCard);
  cardForm.reset();
  closePopup();
}

popupCard.addEventListener("submit", handleSubmitFormCard);

//автодобавление карточек
initialCards.forEach((item) => {
  const newCard = createCard(item);
  cardContainer.append(newCard);
});

//функция сабмита формы
const profileForm = document.forms.profile;
function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputTypeName.value;
  profileSubtitle.textContent = inputTypeAbout.value;
  closePopup();
}
profileForm.addEventListener("submit", handleSubmitProfileForm);
