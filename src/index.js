import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const el = {
    selectInput: document.querySelector('.breed-select'),
    containerCatInfo: document.querySelector('.cat-info'),
};
el.selectInput.addEventListener('change', handlerSelect);

fetchBreeds()
    .then(data => {
        createOptions(data);
    })
    .catch(error => {
        console.log(error);
    });

function createOptions(arrCats) {
    el.selectInput.innerHTML = arrCats
        .map(({ id, name }) => `<option value=${id}>${name}</option>`)
        .join('');
}

function createCard(selectedCat) {
    // el.selectInput.innerHTML = arrCats
    //     .map(({ id, name }) => `<option value=${id}>${name}</option>`)
    //     .join('');
    console.log(selectedCat);
}

function handlerSelect() {
    fetchCatByBreed()
        .then(data => {
            createCard(data);
        })
        .catch(error => {
            console.log(error);
        });
}
