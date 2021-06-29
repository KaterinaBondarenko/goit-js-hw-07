  
const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRef.addEventListener('input', function () {
  const size = inputRef.value;
  textRef.style.fontSize = size + 'px';
});