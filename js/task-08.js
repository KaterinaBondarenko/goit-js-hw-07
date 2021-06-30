// const renderBtn = document.querySelector('[data-action="render"]');
// const destroyBtn = document.querySelector('[data-action="destroy"]');
// const divRef = document.getElementById('boxes');

// renderBtn.addEventListener('click', createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//   const fragmentRef = document.createDocumentFragment();
//   const boxInput = document.querySelector('#controls input').value;
//   for (let i = 0; i < boxInput; i++) {
//     const div = document.createElement('div');
//     let divSize = 30 + i * 10;
//     div.style.cssText = `width: ${divSize}px; height: ${divSize}px; background-color: rgba( ${randomizer()} , ${randomizer()} , ${randomizer()} ) `;
//     fragmentRef.append(div);
//   }
//   divRef.append(fragmentRef);
// }

// function destroyBoxes() {
//   divRef.innerHTML = '';
// }

// function randomizer() {
//   return Math.floor(Math.random() * 255);
// }

const btnCreate = document.querySelector('[data-action="render"]');
const btnDelete = document.querySelector('[data-action="destroy"]');
const typeInput = document.querySelector('input');
const getBoxes = document.querySelector('#boxes');

function createBoxes() {
  const amount = typeInput.value;
  const items = [];
  for (let i = 1; i <= amount; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.backgroundColor = randomColor();
    createDiv.style.width = i * 10 + 20 + 'px';
    createDiv.style.height = i * 10 + 20 + 'px';
    items.push(createDiv);
  }
  getBoxes.append(...items);
  console.log(getBoxes);
}

const destroyBoxes = () => {
  getBoxes.remove();
};

btnCreate.addEventListener('click', createBoxes);
btnDelete.addEventListener('click', destroyBoxes);

function randomColor() {
  const color =
    'rgb(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ')';
  return color;
}