const input = document.querySelector('#name-input');
const newNameInput = document.querySelector('#name-output');


input.addEventListener('input', onInputChange);

function onInputChange(event) {




    newNameInput.textContent = event.currentTarget.value;

};
