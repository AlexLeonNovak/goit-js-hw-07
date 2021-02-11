const refs = {
    number: document.getElementById('control-number'),
    btnRender: document.querySelector('[data-action="render"]'),
    btnDestroy: document.querySelector('[data-action="destroy"]'),
    boxesContainer: document.getElementById('boxes')
}

const DEFAULT_SQUARE_WIDTH = 30;
let lastWidth = DEFAULT_SQUARE_WIDTH;

refs.btnRender.addEventListener('click', onButtonRenderClick)
refs.btnDestroy.addEventListener('click', onButtonDestroyClick)


function onButtonRenderClick()
{
    const numberValue = parseInt(refs.number.value);
    createBoxes(numberValue);
}

function onButtonDestroyClick()
{
    destroyBoxes();
}

function createBoxes(amount)
{
    const fragment = new DocumentFragment();
    for (let i = 0; i < amount; i++) {
        let div = document.createElement('div');
        div.style.width = div.style.height = lastWidth + 'px';
        div.style.backgroundColor = getRandomColor();
        fragment.append(div);
        lastWidth += 10;
    }
    refs.boxesContainer.append(fragment);
}

function destroyBoxes()
{
    refs.boxesContainer.textContent = '';
    lastWidth = DEFAULT_SQUARE_WIDTH;
}

function getRandomColor()
{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
