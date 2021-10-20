var formulario = document.querySelector('#login__form');

const userData = (event) => event.target.value;

function handleKeyUp(event) {
  console.log(event.target.value);
}

formulario = addEventListener('change', handleKeyUp);
