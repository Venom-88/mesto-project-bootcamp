const buttonAddCard = document.querySelector(".profile__add-button");
const popupCards = document.querySelector(".popup_type_cards");
const inputNameCard = popupCards.querySelector(".popup__input_type_name");
const inputAboutCard = popupCards.querySelector(".popup__input_type_about");
const closeCardButton = popupCards.querySelector(".popup__close");
const cardsSaveButton = popupCards.querySelector(".popup__save-button");
const popupImage = document.querySelector('.popup_type_image')
const bigPhoto = popupImage.querySelector('.popup__image')
const bigPhotoTitle = popupImage.querySelector('.popup__title-image')
const closePopupImage = popupImage.querySelector('.popup__close')


//Добавляем карочки руками
const template = document
  .getElementById("cardTemplate")
  .content.querySelector(".element");
const cardForm = document.querySelector(".popup_type_cards");
const inputNameElement = cardForm.querySelector(".popup__input_type_name");
const inputAboutElement = cardForm.querySelector(".popup__input_type_about");
const nameCard = template.querySelector(".element__title");
const linkCard = template.querySelector(".element__image");
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

initialCards.forEach((item) => {
  const newCard = createCard(item);
  cardContainer.append(newCard);
  const nameElement = newCard.querySelector(".element__title");
  const aboutElement = newCard.querySelector(".element__image");
  nameElement.textContent = item.name;
  aboutElement.src = item.link;
});

//Открываем попап
function openPopupCards() {
  popupCards.classList.toggle("popup_opened");
}
buttonAddCard.addEventListener("click", openPopupCards);

//закрываем попап
function closePopupCards() {
  popupCards.classList.toggle("popup_opened");
}
closeCardButton.addEventListener("click", closePopupCards);

//Лайкаем карточку
function handleLikeCard(likeButton) {
  likeButton.classList.toggle("element__like_active");
}

//открываем popup-фото
function handleOpenPhoto(aboutElement, nameElement){
    popupImage.classList.add('popup_opened')
    bigPhoto.src = aboutElement.src
    bigPhotoTitle.textContent = nameElement.textContent 
}

//Удаляем карточку
function handleDeleteCard(cardElement) {
  cardElement.remove();
}

//Создаем карточки
function createCard(name) {
  const cardElement = template.cloneNode(true);
  const nameElement = cardElement.querySelector(".element__title");
  const aboutElement = cardElement.querySelector(".element__image");
  const delButton = cardElement.querySelector(".element__trash");
  const likeButton = cardElement.querySelector(".element__like");


  nameElement.textContent = inputNameElement.value;
  aboutElement.src = inputAboutElement.value;

  //Лайкаем карточку
  likeButton.addEventListener("click", () => handleLikeCard(likeButton));

  //Удаляем карточку
  delButton.addEventListener("click", () => handleDeleteCard(cardElement));  
  
  //Открываем popup-фото
  aboutElement.addEventListener('click', () => handleOpenPhoto(aboutElement, nameElement))


  return cardElement;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  const newCard = createCard(inputNameElement.value);
  cardContainer.prepend(newCard);
  popupCards.classList.toggle("popup_opened");
  cardForm.reset();
}

//закрываем popup-фото
function closePhoto(){
  popupImage.classList.toggle("popup_opened");
}

cardForm.addEventListener("submit", handleFormSubmit);
saveButtonCard.addEventListener("click", handleFormSubmit);
  //Закрываем popup-фото
  closePopupImage.addEventListener('click', closePhoto)
