

const nameInput = document.getElementById("validation-input");
nameInput.addEventListener("blur", onInputBlur);
const amounLetters = Number(nameInput.dataset.length);
function onInputBlur() {
    if (nameInput.value.length === amounLetters) {
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
    } else {
        nameInput.classList.remove("valid");
        nameInput.classList.add("invalid");
    }
}








