const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output')
}

const DEFAULT_OUTPUT_NAME = refs.output.textContent;

refs.input.addEventListener('input', e => {
    refs.output.textContent = e.currentTarget.value.length ?
        e.currentTarget.value :
        DEFAULT_OUTPUT_NAME;
})
