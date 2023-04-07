let urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let xhr = new XMLHttpRequest();

xhr.onload = function () {
    let character = JSON.parse(this.response);
    const characterRow = document.getElementById('character-row');

    // Переименновываем title
    const title = document.getElementsByTagName('title')[0]
    title.innerText += character.name

    // Создаем текстовые поля внутри карточки
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerText = character.name;
    const status = document.createElement('h6');
    status.classList.add("card-title-mini");
    status.innerText = 'Status:';
    const statusText = document.createElement('p');
    statusText.classList.add("card-text");
    statusText.innerText = character.status;
    const species = document.createElement('h6');
    species.classList.add("card-title-mini");
    species.innerText = 'Species:';
    const speciesText = document.createElement('p');
    speciesText.classList.add("card-text");
    speciesText.innerText = character.species;
    const gender = document.createElement('h6');
    gender.classList.add("card-title-mini");
    gender.innerText = 'Gender:';
    const genderText = document.createElement('p');
    genderText.classList.add("card-text");
    genderText.innerText = character.gender;
    const origin = document.createElement('h6');
    origin.classList.add("card-title-mini");
    origin.innerText = 'Origin:';
    const originText = document.createElement('p');
    originText.classList.add("card-text");
    originText.innerText = character.origin.name;
    const location = document.createElement('h6');
    location.classList.add("card-title-mini");
    location.innerText = 'Location:';
    const locationText = document.createElement('p');
    locationText.classList.add("card-text");
    locationText.innerText = character.location.name;
    const button = document.createElement('a');
    button.classList.add('btn', 'btn-secondary');
    button.href = 'index.html';
    button.innerText = 'Home';

    // Создаем контейнер для текстовых блоков и добавляем внего блоки
    const divTexts = document.createElement('div');
    divTexts.classList.add('card-character-text');
    divTexts.append(h5, status, statusText, species, speciesText, gender, genderText, origin, originText, location, locationText, button);

    // Добавляем этот блок в разметку бутстрап и создаем еще один блок с картинкой
    const divTextsBootstrap = document.createElement('div');
    divTextsBootstrap.classList.add('col-6');
    divTextsBootstrap.append(divTexts);

    const image = document.createElement('img');
    image.src = character.image;
    image.classList.add('character-card-image');
    image.alt = character.name
    const divImageBootstrap = document.createElement('div');
    divImageBootstrap.classList.add('col-6');
    divImageBootstrap.append(image);

    // Добавляем полученные два блока в ряд row
    characterRow.append(divImageBootstrap, divTextsBootstrap);
}

xhr.open('GET', `https://rickandmortyapi.com/api/character/${id}`);
xhr.send();



















