import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery'); // Поиск элементов
const imageMarkup = addImagesMarkup(galleryItems); // переменная для разметки

galleryEl.insertAdjacentHTML('beforeend', imageMarkup);

function addImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img
       class="gallery__image"
      src="${preview}"
       alt="${description}" />
    </a>`;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

gallery.on('show.simplelightbox');
