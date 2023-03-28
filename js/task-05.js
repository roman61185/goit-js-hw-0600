const input = document.querySelector('#name-input');
const newNameInput = document.querySelector('#name-output');


input.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.preventDefault();
    newNameInput.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        newNameInput.textContent = 'Anonimous'
    }

};
