const InputText = document.querySelector('input');
const TextField = document.querySelector('#duplicateField');
document.querySelector('#Button').addEventListener('click',
(event) => {event.preventDefault();

    TextField.textContent = InputText.value;
    console.log(TextField.textContent);
})
