

const switchButton = document.querySelector('.change-color');


const spanColor = document.querySelector('.color');

console.log(spanColor);
console.log(switchButton);


// клик
switchButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}
