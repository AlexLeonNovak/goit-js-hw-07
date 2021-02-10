const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`В списке ${categoriesItems.length} категории.`);

categoriesItems.forEach(item => {
    const title = item.querySelector('h2');
    const subcategoryItems = item.querySelectorAll('ul li');

    console.log('Категория:', title.innerText);
    console.log('Количество элементов:', subcategoryItems.length);
});
