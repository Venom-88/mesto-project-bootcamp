import { openPopup, popupImage } from "./modal.js";
import { setDeleteCard, setLike, setDeleteLike } from "./api.js";

const template = document
  .getElementById("cardTemplate")
  .content.querySelector(".element");

//Создаем карточки
export function createCard(item, userId) {
  const cardElement = template.cloneNode(true);
  const nameElement = cardElement.querySelector(".element__title");
  const cardImage = cardElement.querySelector(".element__image");
  const delButton = cardElement.querySelector(".element__trash");
  const likeButton = cardElement.querySelector(".element__like");
  const likeNumber = cardElement.querySelector(".element__like-number");
  let cardLikes = item.likes;

  

  if (item.owner._id === userId) {
    delButton.addEventListener("click", () => {
      const cardId = item._id;
      setDeleteCard(cardId)
        .then(() => {
          cardElement.remove();
        })
        .catch((e) => console.log(e));
    });
  } else {
    delButton.remove();
  }

  likeNumber.textContent = item.likes.length;
  nameElement.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  //Лайкаем карточку
  function handleLikeCard(likeButton) {
    const cardId = item._id;
    
    const queryMethod = isLiked(cardLikes) ? setDeleteLike(cardId) : setLike(cardId); //api
    queryMethod.then((res) => {
      updateLikes(res.likes).catch((e) => console.log(e));
    });
  }

  //Лайкаем карточку
  likeButton.addEventListener("click", () => handleLikeCard(likeButton));

  //Открываем popup-фото
  cardImage.addEventListener("click", () =>
    handleOpenPhoto(cardImage, nameElement)
  );

  return cardElement;
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

function isLiked(likesArray, userId) { 
  return likesArray.some((item) => item._id === userId);  
}

function updateLikes(likesArray) {
 
  cardLikes = likesArray;
  likeButton.classList.toggle("element__like_active", isLiked(cardLikes));
  likeNumber.textContent = item.likes.length;
}
