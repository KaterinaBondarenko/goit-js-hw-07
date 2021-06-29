const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resultRef = document.getElementById('value');
let counerValue = 0;

decrementBtn.addEventListener('click', () => {
  resultRef.textContent = --counerValue;
});

incrementBtn.addEventListener('click', () => {
  resultRef.textContent = ++counerValue;
});