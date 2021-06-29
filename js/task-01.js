const categoriesRef = document.querySelectorAll('.item');
console.log('В списке ' + categoriesRef.length + ' категории');

const categoriesListRef = document.querySelector('#categories').children;

for (let item of categoriesListRef) {
  let itemCategory = item.firstElementChild.textContent;
  let itemLength = item.lastElementChild.children.length;

  console.log(`В категории ${itemCategory} ${itemLength} элементов`);
}