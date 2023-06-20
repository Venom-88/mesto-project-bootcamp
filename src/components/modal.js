//Универсальная функция открытия попап
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
  
  
}

//Универсальная функция закрытия попап
export function closePopup() {
  const popup = document.querySelector(".popup_opened");
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

//Закрытие попапа через Escape
export function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
export function closeOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup();
  }
}

export const popupProfile = document.querySelector(".popup");
export const popupCard = document.querySelector(".popup_type_cards");
export const popupImage = document.querySelector(".popup_type_image");


document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", closeOverlay);
});
