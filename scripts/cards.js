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
  });

//Универсальная функция открытия попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//Универсальная функция закрытия попап
function closePopup(popup) {
  popup.classList.remove('popup_opened')
}
//Открываем попап
buttonAddCard.addEventListener("click", function (){
  openPopup(popupCards)
});

//закрываем попап
closeCardButton.addEventListener("click", function (){
  closePopup(popupCards)
});

//Лайкаем карточку
function handleLikeCard(likeButton) {
  likeButton.classList.toggle("element__like_active");
}

//открываем popup-фото
function handleOpenPhoto(cardImage, nameElement){
  openPopup(popupImage)
  bigPhoto.src = cardImage.src
  bigPhoto.alt = nameElement.textContent
  bigPhotoTitle.textContent = nameElement.textContent 
}


//Удаляем карточку
function handleDeleteCard(cardElement) {
  cardElement.remove();
}


//Создаем карточки
function createCard(item) {
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
  cardImage.addEventListener('click',  () => handleOpenPhoto(cardImage, nameElement ))

  return cardElement;
}


function handleFormSubmit(evt) {
  evt.preventDefault();
  item = {
    name: inputNameElement.value,
    link: inputAboutElement.value
  }
  const newCard = createCard(item);
  cardContainer.prepend(newCard);
  popupCards.classList.toggle("popup_opened");
}
cardForm.addEventListener("submit", handleFormSubmit);
//Закрываем popup-фото
closePopupImage.addEventListener('click', function (){
  closePopup(popupImage)
})
