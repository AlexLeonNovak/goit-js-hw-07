const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output')
}

refs.input.addEventListener('input', e => {
    refs.output.textContent = e.currentTarget.value;
})
