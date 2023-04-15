document.querySelector('#LinkText').addEventListener('click',
(event) => {event.preventDefault();

const LinkTextUpdate = prompt('Введите текст здесь');
const LinkFound = document.querySelector('a');
LinkFound.textContent = LinkTextUpdate;
})