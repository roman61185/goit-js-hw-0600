const form = document.querySelector('.login-form');
// console.log(form);


form.addEventListener('submit', handledSubmit);


function handledSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;


    if (email.value === "" || password.value === "") {
        return console.log('alert');
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
};





