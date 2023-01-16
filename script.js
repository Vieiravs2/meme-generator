const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeImageContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const readyMemes = document.getElementById('memes-prontos');

textInput.oninput = () => {
  memeText.innerHTML = textInput.value;
};

memeInsert.onchange = () => {
  const [file] = memeInsert.files;
  if (file) {
    memeImage.src = URL.createObjectURL(file);
  }
};

fireButton.addEventListener('click', () => {
  memeImageContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  memeImageContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  memeImageContainer.style.border = '6px groove green';
});

readyMemes.addEventListener('click', (event) => {
  memeImage.src = event.target.src;
});