import { openPopup, popupImage } from "./modal.js";

const template = document
  .getElementById("cardTemplate")
  .content.querySelector(".element");

//Создаем карточки
export function createCard(item) {
  const cardElement = template.cloneNode(true);
  const nameElement = cardElement.querySelector(".element__title");
  const cardImage = cardElement.querySelector(".element__image");
  const delButton = cardElement.querySelector(".element__trash");
  const likeButton = cardElement.querySelector(".element__like");

  nameElement.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  //Лайкаем карточку
  likeButton.addEventListener("click", () => handleLikeCard(likeButton));

  //Удаляем карточку
  delButton.addEventListener("click", () => handleDeleteCard(cardElement));
  //Открываем popup-фото
  cardImage.addEventListener("click", () =>
    handleOpenPhoto(cardImage, nameElement)
  );

  return cardElement;
}

//Лайкаем карточку
function handleLikeCard(likeButton) {
  likeButton.classList.toggle("element__like_active");
}
//Удаляем карточку
function handleDeleteCard(cardElement) {
  cardElement.remove();
}

//открываем popup-фото
function handleOpenPhoto(cardImage, nameElement) {
  openPopup(popupImage);
  const bigPhoto = popupImage.querySelector(".popup__image");
  const bigPhotoTitle = popupImage.querySelector(".popup__title-image");
  bigPhoto.src = cardImage.src;
  bigPhoto.alt = nameElement.textContent;
  bigPhotoTitle.textContent = nameElement.textContent;
}
