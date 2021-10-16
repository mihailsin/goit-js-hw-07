import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createMarkup = images => {
  return images
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
};
const markup = createMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);

const onPress = e => {
  if (e.key === 'Escape') {
    basicLightbox.close();
  }
};
const onClick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  } else {
    basicLightbox.create(`<img src="${e.target.dataset.source}">`).show();
  }
};

gallery.addEventListener('click', onClick);
document.addEventListener('keydown', onPress);
