import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divRef = document.querySelector(".gallery");

const createImgEl = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
  </div>
    `;
  })
  .join("");

divRef.insertAdjacentHTML("beforeend", createImgEl);

divRef.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
        <img src=${e.target.dataset.source} width="800" height="600">
    `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onKeydownEacape);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onKeydownEacape);
      },
    }
  );
  instance.show();

  function onKeydownEacape(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}