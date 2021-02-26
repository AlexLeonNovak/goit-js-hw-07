const input = document.getElementById('validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(e)
{
    const target = e.currentTarget;
    if (Number(target.value.length) === Number(target.dataset.length)) {
        target.classList.add('valid');
        target.classList.remove('invalid');
    } else {
        target.classList.add('invalid');
        target.classList.remove('valid');
    }
}
