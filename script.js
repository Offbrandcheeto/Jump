'use strict';

const character = document.getElementById('character');

function jump() {
  if (character.classList !== 'animate') {
    character.classList.add('animate');
  }
  setTimeout(() => {
    character.classList.remove('animate');
  }, 500);
}

document.addEventListener('keydown', ready);

function ready(e) {
  let key = e.key;
  if (key === ' ') {
    jump();
  }
}
