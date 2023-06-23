const settings = {
  url: "https://nomoreparties.co/v1/wbf-cohort-9",
  headers: {
    authorization: "da1e77dc-43e7-4e33-8d3d-395f62412eb8",
    "Content-Type": "application/json",
  },
};

export function getInitialCards() {
  return fetch(settings.url + `${"/cards"}`, {
    headers: settings.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function getUserInfo() {
    return fetch(settings.url + `${"/users/me"}`, {
        headers: settings.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function setInitialCards(item) {
    return fetch(settings.url + `${"/cards"}`, {
        headers: settings.headers,
    method: "POST",
    body: JSON.stringify({
      name: item.name,
      link: item.link,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function setUserInfo(profileInfo) {
    return fetch(settings.url + `${"/users/me"}`, {
        headers: settings.headers,
    method: "PATCH",
    body: JSON.stringify({
      name: profileInfo.name,
      about: profileInfo.about,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function setDeleteCard(cardId) {
    return fetch(settings.url + `${"/cards/"}` + cardId, {
        headers: settings.headers,
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}


export function setDeleteLike(cardId) {
    return fetch(settings.url + `${"/cards/likes/"}` + cardId, {
        headers: settings.headers,
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function setLike(cardId) {
    return fetch(settings.url + `${"/cards/likes/"}` + cardId, {
        headers: settings.headers,
    method: "PUT",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}