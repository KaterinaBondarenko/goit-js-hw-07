const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', onInput);

function onInput(e) {
  const currentLength = e.currentTarget.value.length;
  const dataLength = Number(inputRef.dataset.length);

  function updateClass(addClass, remClass) {
    e.currentTarget.classList.remove(remClass);
    e.currentTarget.classList.add(addClass);
  }

  if (currentLength === dataLength) {
    updateClass('valid', 'invalid');
  } else {
    updateClass('invalid', 'valid');
  }
}