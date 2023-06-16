import "./styles/index.css";
import { createCard } from "./components/card.js";
import {
  openPopup,
  closePopup,
  popupCards,
  popupImage,
  profilePopupOpened,
} from "./components/modal.js";
import { profileForm } from "./components/validate.js";

//cards
const buttonAddCard = document.querySelector(".profile__add-button");

const inputNameCard = popupCards.querySelector(".popup__input_type_name");
const inputAboutCard = popupCards.querySelector(".popup__input_type_about");
const closeCardButton = popupCards.querySelector(".popup__close");
const cardsSaveButton = popupCards.querySelector(".popup__save-button");

const closePopupImage = popupImage.querySelector(".popup__close");

//Добавляем карочки руками

const cardForm = document.querySelector(".popup_type_cards");
const inputNameElement = cardForm.querySelector(".popup__input_type_name");
const inputAboutElement = cardForm.querySelector(".popup__input_type_about");
const saveButtonCard = cardForm.querySelector(".popup__save-button");
const cardContainer = document.querySelector(".elements");

//Авто-Добавляем карточки
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Открываем попап добавления карточки
buttonAddCard.addEventListener("click", function () {
  openPopup(popupCards);
});

//закрываем попап добавления карточки
closeCardButton.addEventListener("click", closePopup);

//Закрываем popup-фото
closePopupImage.addEventListener("click", closePopup);

//popups
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".popup__close");
const inputTypeName = document.querySelector(".popup__input_type_name");
const profileTitle = document.querySelector(".profile__title");
const inputTypeAbout = document.querySelector(".popup__input_type_about");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileSaveButton = document.querySelector(".popup__save-button");

const popupWindow = document.querySelector(".popup__content");
const popupOpened = document.querySelector(".popup_opened");

//заполняем поля
function inputProfile() {
  inputTypeName.value = profileTitle.textContent;
  inputTypeAbout.value = profileSubtitle.textContent;
  openPopup(profilePopupOpened);
}
//функция сабмита формы
function handleSubmitForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputTypeName.value;
  profileSubtitle.textContent = inputTypeAbout.value;
  profilePopupOpened.classList.toggle("popup_opened");
}
profileForm.addEventListener("submit", handleSubmitForm);
//вносим изменение через модальное окно
function submitForm(evt) {
  evt.preventDefault();
}

buttonEditProfile.addEventListener("click", inputProfile);

profileCloseButton.addEventListener("click", closePopup);

//автодобавление карточек
initialCards.forEach((item) => {
  const newCard = createCard(item);
  cardContainer.append(newCard);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  const item = {
    name: inputNameElement.value,
    link: inputAboutElement.value,
  };
  const newCard = createCard(item);
  cardContainer.prepend(newCard);
  popupCards.classList.toggle("popup_opened");
}

cardForm.addEventListener("submit", handleFormSubmit);

//////////////////////////////////

////////////////////////////////////////////////////////////////////////////
