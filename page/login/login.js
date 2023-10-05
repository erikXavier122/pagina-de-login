document.addEventListener("DOMContentLoaded", function() {
    // email, senha

    let email = document.querySelector('#email')
    let labelEmail = document.querySelector('#labelEmail')
    let validEmail = false

    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#labelSenha')
    let validSenha = false

    let btnLogin = document.querySelector('#btn-login')


    email.addEventListener('keyup', () =>{
        if(email.value.length <= 5 || email.value.length >= 30){
            labelEmail.innerHTML = 'Email *Insira um email valido*';
            labelEmail.style.color = 'red'
            validEmail = false 
        }else{
            labelEmail.innerHTML = 'Email';
            labelEmail.style.color = 'green';
            validEmail = true    
        }
    })

    senha.addEventListener('keyup', () => {
        if (senha.value.length <= 5 || senha.value.length >= 25 ) {
            labelSenha.style.color = 'red';
            labelSenha.innerHTML = 'Senha *insira no minimo 6 caracteres'
            validSenha = false
        }else{
            labelSenha.style.color = 'green';
            labelSenha.innerHTML = 'Senha';
            validSenha = true
        }
    });

    dialogNotFound = document.querySelector('#dialog_not_found')
    btnNotFound = document.querySelector('#btn_not_found')

    dialogEmpty = document.querySelector('#dialog_value_empty')
    btnEmpty = document.querySelector('#btn_empty')

    btnLogin.addEventListener('click', () => {
        if(validEmail && validSenha){

            const dataRequest = {
                email : email.value,
                senha : senha.value
            }

            let statusCodeRequest = 0

            const APIResponse = fetch('http://localhost:8080/cadastro/v1/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataRequest)
            })
            .then(response => response.json())
            .then(response => {
                if(JSON.stringify(response.status) == 200){
                    alert('tudo ok por aqui')
                }else if(JSON.stringify(response.status) == 404){
                    dialogNotFound.style.display = 'block'
                    btnNotFound.addEventListener('click', () => {
                        dialogNotFound.style.display = 'none'
                    })
                }
            });
        }else{
            dialogEmpty.style.display = 'block'
            btnEmpty.addEventListener('click', () => {
                dialogEmpty.style.display = 'none';
            })
        }

    })


});
    