import { galleryItems } from "./gallery-items.js";

const listRef = document.querySelector(".gallery");
listRef.addEventListener("click", onImgClick);

const createImgEl = ({ preview, original, description }) => {
  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
};

const elements = galleryItems.map(createImgEl).join("");
listRef.insertAdjacentHTML("beforeend", elements);

function onImgClick(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    let lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  }
}
