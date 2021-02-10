const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const fragment = new DocumentFragment();
for (const ingredient of ingredients) {
    let li = document.createElement('li');
    li.append(ingredient);
    /** Or else: */
    //li.innerText = ingredient;
    fragment.append(li);
}

const ingredientsDOM = document.getElementById('ingredients');
ingredientsDOM.append(fragment);
