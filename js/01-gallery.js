import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createMarkup = images => {
  const markup = images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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
    .join('');
  console.log(markup);
  gallery.insertAdjacentHTML('beforeend', markup);
};
console.log(galleryItems);
createMarkup(galleryItems);
