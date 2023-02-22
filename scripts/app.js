//variables
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const btnReset = document.querySelector('#reset');

//contador para validar el correo
let contador = 0;

//escuchadores para la funcion
inputName.addEventListener('blur', () => {
    validarName(inputName);
});
inputEmail.addEventListener('blur', () => {
    validarEmail(inputEmail);
});
inputAsunto.addEventListener('blur', () => {
    validarAsunto(inputAsunto);
});
inputMensaje.addEventListener('blur', () => {
    validarMensaje(inputMensaje);
    validarFormulario();
});
btnReset.addEventListener('click', () => {
    inputName.classList.remove('invalido');
    inputEmail.classList.remove('invalido');
    inputAsunto.classList.remove('invalido');
    inputMensaje.classList.remove('invalido');
    contador = 0;
});

//funciones
function validarName(inputName){
    const re = /^[a-zA-Z ]{2,50}$/;
    if(re.test(inputName.value)){
        inputName.classList.remove('invalido');
        console.log('Nombre valido');
        contador++;
        console.log(contador);
    }else{
        inputName.classList.add('invalido');
        console.log('Nombre invalido');
    }
}
function validarEmail(inputEmail){
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(re.test(inputEmail.value)){
        inputEmail.classList.remove('invalido');
        console.log('Email valido');
        contador++;
        console.log(contador);
    }else{
        inputEmail.classList.add('invalido');
        console.log('Email invalido');
    }
}
function validarAsunto(inputAsunto){
    const re = /^[a-zA-Z0-9 ]{2,300}$/;
    if(re.test(inputAsunto.value)){
        inputAsunto.classList.remove('invalido');
        console.log('Asunto valido');
        contador++;
        console.log(contador);
    }else{
        inputAsunto.classList.add('invalido');
        console.log('Asunto invalido');
    }
}
function validarMensaje(inputMensaje){
    const re = /^[a-zA-Z0-9 ]{2,300}$/;
    if(re.test(inputMensaje.value)){
        inputMensaje.classList.remove('invalido');
        console.log('Mensaje valido');
        contador++;
        console.log(contador);
    }else{
        inputMensaje.classList.add('invalido');
        console.log('Mensaje invalido');
    }
}

