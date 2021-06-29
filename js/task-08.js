const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const divRef = document.getElementById('boxes');

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const fragmentRef = document.createDocumentFragment();
  const boxInput = document.querySelector('#controls input').value;
  for (let i = 0; i < boxInput; i++) {
    const div = document.createElement('div');
    let divSize = 30 + i * 10;
    div.style.cssText = `width: ${divSize}px; height: ${divSize}px; background-color: rgba( ${randomizer()} , ${randomizer()} , ${randomizer()} ) `;
    fragmentRef.append(div);
  }
  divRef.append(fragmentRef);
}

function destroyBoxes() {
  divRef.innerHTML = '';
}

function randomizer() {
  return Math.floor(Math.random() * 255);
}