import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imageMarkup = addImagesMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageMarkup);

function addImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href=""${original}"">
      <img
       class="gallery__image"
      src="${preview}"
       alt="${description}" />
    </a>`;
    })
    .join('');
}

// const lightbox = new SimpleLightbox('.gallery a');
// lightbox.on('show.simplelightbox', function (event) {
//   // do something…
// });
