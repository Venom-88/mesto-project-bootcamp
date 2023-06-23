import "./styles/index.css";
import { createCard } from "./components/card.js";
import {
  openPopup,
  closePopup,
  popupProfile,
  popupImage,
} from "./components/modal.js";
import { enableValidation } from "./components/validate.js";

import {
  getInitialCards,
  setInitialCards,
  getUserInfo,
  setUserInfo,
} from "./components/api.js";

/* getUserInfo().then((res) => {
  profileTitle.textContent = res.name;
  profileSubtitle.textContent = res.about;
}); */

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

//функция сабмита редактирования профиля
const profileForm = document.forms.profile;

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  const profileInfo = {
    name: inputTypeName.value,
    about: inputTypeAbout.value,
  };
  setUserInfo(profileInfo).then((res) => {
    console.log(res);
    profileTitle.textContent = res.name;
    profileSubtitle.textContent = res.about;
    closePopup();
  });
}
profileForm.addEventListener("submit", handleSubmitProfileForm);

//функция сабмита добавления карточки
function handleSubmitFormCard(evt) {
  evt.preventDefault();
  const item = {
    name: inputNameElement.value,
    link: inputAboutElement.value,
  };
  setInitialCards(item).then((res) => {
    const newCard = createCard(res);
    cardContainer.prepend(newCard);
    cardForm.reset();
    closePopup();
  });
}

popupCard.addEventListener("submit", handleSubmitFormCard);
////////////////////////////////////////////////////////////////////////////////////////////////

/* getInitialCards()
  .then((res) => {
    //автодобавление карточек
    res.forEach((item) => {
      const newCard = createCard(item, userId);
      cardContainer.append(newCard);
    });
  })
  .catch((err) => {
    console.log(err);
  }); */

let userId;
const avatar = document.querySelector(".profile__avatar");

Promise.all([getInitialCards(), getUserInfo()])
  .then(([allCards, userData]) => {
    userId = userData._id;
    profileTitle.textContent = userData.name;
    profileSubtitle.textContent = userData.about;
    avatar.src = userData.avatar;

    allCards.forEach((item) => {
      
      const newCard = createCard(item, userId);
      cardContainer.append(newCard);
    });
  })
  .catch((e) => console.log(e));
