

const switchButton = document.querySelector('.change-color');


const spanColor = document.querySelector('.color');

console.log(spanColor);
console.log(switchButton);


// клик
switchButton.addEventListener('click', () => {
  const funGetColor = getRandomHexColor();
  document.body.style.backgroundColor = funGetColor;
  spanColor.textContent = funGetColor;

});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// const funGetColor = getRandomHexColor();




// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);
