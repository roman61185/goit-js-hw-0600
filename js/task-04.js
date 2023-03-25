const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {

    onCounter.increment();
    counterValue.textContent = onCounter.value;
});

incrementBtn.addEventListener('click', () => {

    onCounter.decrement();
    counterValue.textContent = onCounter.value;
});

const onCounter = {
    value: 0,
    increment() {
        this.value -= 1;
    },
    decrement() {
        this.value += 1;
    },
};

