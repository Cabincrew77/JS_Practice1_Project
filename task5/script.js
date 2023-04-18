const InputText = document.querySelector('input');
const TextField = document.querySelector('#duplicateField');

InputText.addEventListener('input', () => {
    TextField.textContent = InputText.value;
})

document.querySelector('#Button').addEventListener('click',
(event) => {event.preventDefault();

    console.log(TextField.textContent);
    TextField.textContent = ""
})
