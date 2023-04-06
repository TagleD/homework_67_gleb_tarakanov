let xhr = new XMLHttpRequest();

xhr.onload = function () {

    let data = JSON.parse(this.response);

    // Создаем карточки на основе полученных объектов
    const rowCards = document.getElementById("row-cards");
    for (let character of data) {

        // Создаем текстовые поля внутри карточки
        const h5 = document.createElement('h5')
        h5.classList.add('card-title');
        h5.innerText = character.name;
        // const a = document.createElement()
        const status = document.createElement('p');
        status.classList.add("status");
        status.innerText = character.status + ' - ' + character.species;
        const lastLocationTitle = document.createElement('h6');
        lastLocationTitle.classList.add("card-title-mini");
        lastLocationTitle.innerText = 'Last known location:';
        const lastLocationText = document.createElement('p')
        lastLocationText.classList.add('card-text');
        lastLocationText.innerText = character.location.name;
        const firstLocationTitle = document.createElement('h6');
        firstLocationTitle.classList.add("card-title-mini");
        firstLocationTitle.innerText = 'First seen in:';
        const firstLocationText = document.createElement('p')
        firstLocationText.classList.add('card-text');
        firstLocationText.innerText = character.location.name;

        // Создаем контейнер для текстовых блоков и добавляем внего блоки
        const divTexts = document.createElement('div');
        divTexts.classList.add('card-body');
        divTexts.append(h5, status, lastLocationTitle, lastLocationText, firstLocationTitle, firstLocationText);

        // Добавляем этот блок в разметку бутстрап и создаем еще один блок с картинкой
        const divTextsBootstrap = document.createElement('div');
        divTextsBootstrap.classList.add('col-md-7');
        divTextsBootstrap.append(divTexts);

        const image = document.createElement('img');
        image.src = character.image;
        image.classList.add('rounded-start', 'card-image');
        image.alt = character.name
        const divImageBootstrap = document.createElement('div');
        divImageBootstrap.classList.add('col-md-5');
        divImageBootstrap.append(image);

        // Создаем карточку, ряд и доавляем в него блоки
        const row = document.createElement('div');
        row.classList.add('row', 'g-0');
        row.append(divImageBootstrap, divTextsBootstrap);
        const card = document.createElement('div');
        card.classList.add('card', 'text-bg-dark', 'col-6');
        card.append(row);

        // Добавляем нашу карточку в нашу изначальную верстку
        rowCards.append(card);
    }
}

xhr.open('GET', 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8');
xhr.send();


















