import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery'); // Поиск элементов
const imageMarkup = addImagesMarkup(galleryItems); // переменная для разметки

galleryEl.insertAdjacentHTML('beforeend', imageMarkup); //Создание разметки
galleryEl.addEventListener('click', onOpenModal);

function addImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const image = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${image}" width="800" height="600">
`);

  instance.show();
}
