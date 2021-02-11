const refs = {
    value: document.getElementById('value'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    btnDecrement: document.querySelector('[data-action="decrement"]'),
};

refs.btnDecrement.addEventListener('click', onButtonDecrementClick);
refs.btnIncrement.addEventListener('click', onButtonIncrementClick);

function onButtonDecrementClick()
{
    const counterValue = parseInt(refs.value.textContent);
    refs.value.textContent = counterValue - 1;
}

function onButtonIncrementClick()
{
    const counterValue = parseInt(refs.value.textContent);
    refs.value.textContent = counterValue + 1;
}
