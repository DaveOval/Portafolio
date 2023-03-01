const miModulo = (()=> {
    'use strict';
    //variables
    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const btnReset = document.querySelector('#reset');
    const btnEnviar = document.querySelector('#enviar');
    const error1 = document.querySelector('.contacto__error1');
    const error2 = document.querySelector('.contacto__error2');
    const error3 = document.querySelector('.contacto__error3');
    const error4 = document.querySelector('.contacto__error4');


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
            error1.innerText = '';
        }else{
            inputName.classList.add('invalido');
            error1.innerText = 'Nombre no valido';
        }
    }
    function validarEmail(inputEmail){
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(re.test(inputEmail.value)){
            inputEmail.classList.remove('invalido');
            error2.innerText = ''
        
        }else{
            inputEmail.classList.add('invalido');
            error2.innerText = 'Email no valido';
        }
    }
    function validarAsunto(inputAsunto){
        const re = /^[a-zA-Z0-9 ]{2,300}$/;
        if(re.test(inputAsunto.value)){
            inputAsunto.classList.remove('invalido');
            error3.innerText = '';
        }else{
            inputAsunto.classList.add('invalido');
            error3.innerText = 'El asunto no puede estar vacio';
        }
    }
    function validarMensaje(inputMensaje){
        const re = /^[a-zA-Z0-9 ]{2,300}$/;
        if(re.test(inputMensaje.value)){
            inputMensaje.classList.remove('invalido');
            error4.innerText = '';
            console.log('Mensaje valido');
        }else{
            inputMensaje.classList.add('invalido');
            error4.innerText = 'Agrega un mensaje mayor de 2 hasta 300 palabras';
        }
    }
})();
