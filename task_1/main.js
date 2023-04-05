


const container = document.getElementById('container');
const button = document.getElementById('add-item-btn');

button.addEventListener('click', function () {
    // Создаем модальное окно
    const modalDiv = document.createElement('div');
    modalDiv.id = 'modal'
    modalDiv.classList.add('modal');

    // Добавляем в модальное окно текст и кнопку закрыть
    const text = document.createElement('p');
    text.innerText = 'У вас два варианта: \n 1) Нажмите кнопку закрыть \n 2) Дождитесь окончания 5 секунд';
    const buttonClose = document.createElement('button');
    buttonClose.innerText = 'Закрыть';
    buttonClose.id = 'button_close';
    buttonClose.classList.add('button-close');
    modalDiv.appendChild(text);
    modalDiv.append(buttonClose);
    container.appendChild(modalDiv);

    // Делаем затемнение body
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('background-dark');

    // Постановка таймера на 5 секунд до закрытия
    setTimeout(function () {
            modalDiv.remove();
            body.classList.remove('background-dark');
        }, 5000
    );

    //Удаление сообщения при нажатии на кнопку закрыть
    buttonClose.addEventListener('click', function () {
        modalDiv.remove();
        body.classList.remove('background-dark');
    })
})
