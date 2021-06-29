const inputRef = document.getElementById('name-input');
const outputRef = document.getElementById('name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(e) {
  e.currentTarget.value === ''
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = e.currentTarget.value);
}