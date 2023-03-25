const sizeFont = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');


// const textSizeFont = textSize.textContent;
// console.log(textSizeFont);


sizeFont.addEventListener('input', minMax);


function minMax(event) {
    const fontChange = sizeFont.value;
    //const fontText = fontChange.textContent;
    textSize.style.fontSize = fontChange + 'px';
    //console.log(fontChange);
}
