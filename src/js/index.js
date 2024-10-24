const botaoEnviar = document.querySelector('.botao-enviar')

const inputText = document.querySelectorAll('.input-text');






botaoEnviar.addEventListener('click', function(){
    inputText.forEach(inputText => {
        if (inputText.value === ""){
            inputText.classList.add('mudar-cor-negado');
            inputText.classList.remove('mudar-cor-aprovado')
            inputText.nextElementSibling.classList.add('alerta')
        } else if(inputText.value !== ""){
            inputText.classList.add('mudar-cor-aprovado');
            inputText.classList.remove('mudar-cor-negado')
            inputText.nextElementSibling.classList.remove('alerta')
        }})  
    });
