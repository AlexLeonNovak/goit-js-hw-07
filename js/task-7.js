const refs = {
    inputRange: document.getElementById('font-size-control'),
    text: document.getElementById('text')
}

refs.inputRange.addEventListener('input', onInputRangeInput);

function onInputRangeInput(e)
{
    refs.text.style.fontSize = e.currentTarget.value + 'px';
}
