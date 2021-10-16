import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createMarkup = images => {
  return images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join('');
};
const markup = createMarkup(galleryItems);
const addMarkup = markup => {
  gallery.insertAdjacentHTML('beforeend', markup);
};
addMarkup(markup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
const onClick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  } else {
    lightbox.open();
  }
};
gallery.addEventListener('click', onClick);
