document.addEventListener("DOMContentLoaded", function() {
 
let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")
let validEmail = false

let telephone = document.querySelector("#telephone")
let labelTelephone = document.querySelector("#labelTelephone")
let validTelephone = false

let endereço = document.querySelector("#endereço")
let labelEndereço = document.querySelector("#labelEndereço")
let validEndereço = false

let nascimento = document.querySelector("#nascimento")
let labelNascimento = document.querySelector("#labelNascimento")
let validNascimento = false

let sex = document.querySelector("#sex")
let labelSex = document.querySelector("#labelSex")
let validSex = false

let cpf = document.querySelector("#cpf")
let labelCpf = document.querySelector("#labelCpf")
let validCpf = false

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let validSenha = false

let confirmSenha = document.querySelector("#confirmSenha")
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmSenha = false

let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

let buttonCadastro = document.querySelector("#button-click-cadastro")


nome.addEventListener('keyup', () => {
    if (nome.value.length <= 3 ) {
        labelNome.style.color = 'red';
        labelNome.innerHTML = 'Nome *insira no minimo 4 caracteres'
        validNome = false
    }else{
        labelNome.style.color = 'green';
        labelNome.innerHTML = 'Nome';
        validNome = true

    }
});

email.addEventListener('keyup', () => {
    if (email.value.length <= 5 ) {
        labelEmail.style.color = 'red';
        labelEmail.innerHTML = 'Email *insira no minimo 6 caracteres'
        validEmail = false
    }else{
        labelEmail.style.color = 'green';
        labelEmail.innerHTML = 'Email';
        validEmail = true
    }
});

telephone.addEventListener('keyup', () => {
    if (telephone.value.length != 14 ) {
        labelTelephone.style.color = 'red';
        labelTelephone.innerHTML = 'telephone *insira no minimo 14 caracteres'
        validTelephone = false
    }else{
        labelTelephone.style.color = 'green';
        labelTelephone.innerHTML = 'telephone';
        validTelephone = true
    }
});

endereço.addEventListener('keyup', () => {
    if (endereço.value.length <= 6 ) {
        labelEndereço.style.color = 'red';
        labelEndereço.innerHTML = 'Endereço *insira um endereço valido'
        validEndereço = false
    }else{
        labelEndereço.style.color = 'green';
        labelEndereço.innerHTML = 'Endereço';
        validEndereço = true
    }
});

nascimento.addEventListener('keyup', () => {
    if (nascimento.value.length != 10 ) {
        labelNascimento.style.color = 'red';
        labelNascimento.innerHTML = 'Data de nascimento *insira a data corretamente'
        validNascimento = false
    }else{
        labelNascimento.style.color = 'green';
        labelNascimento.innerHTML = 'Data de nascimento'
        validNascimento = true
    }
});

sex.addEventListener('keyup', () => {
    if (sex.value.length !=1) {
        labelSex.style.color = 'red';
        labelSex.innerHTML = 'Sexualidade *insira um caractere M ou F'
        validSex = false
    }else{
        labelSex.style.color = 'green';
        labelSex.innerHTML = 'Nome';
        validSex = true
    }
});

cpf.addEventListener('keyup', () => {
    if (cpf.value.length != 14 ) {
        labelCpf.style.color = 'red';
        labelCpf.innerHTML = 'Cpf *Incorreto'
        validCpf = false
    }else{
        labelCpf.style.color = 'green';
        labelCpf.innerHTML = 'Cpf';
        validCpf = true
    }
});

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5 ) {
        labelSenha.style.color = 'red';
        labelSenha.innerHTML = 'Senha *insira no minimo 6 caracteres'
        validSenha = false
    }else{
        labelSenha.style.color = 'green';
        labelSenha.innerHTML = 'Senha';
        validSenha = true
    }
});

confirmSenha.addEventListener('keyup', () => {
    if (confirmSenha.value != senha.value || confirmSenha.value == 0 ) {
        labelConfirmSenha.style.color = 'red';
        labelConfirmSenha.innerHTML = 'Confirme a senha *senha diferentes.'
        validConfirmSenha = false
    }else{
        labelConfirmSenha.style.color = 'green';
        labelConfirmSenha.innerHTML = 'Confirme a senha.';
        validConfirmSenha = true
    }
});


let modal = document.getElementById("dialog_ok");
let modal_empty = document.getElementById('dialog_value_empty');
let modal_error = document.getElementById('dialog_not_found');
const btnClose = document.getElementById("btn_empty");
const btnCloseError = document.getElementById("btn_not_found");

buttonCadastro.addEventListener('click', () => {
    if(validNome && validEmail && validEndereço && validTelephone && validNascimento && validSex && validCpf && validSenha && validConfirmSenha){

        const dataRequest = {
            address: endereço.value,
            confirmSenha: confirmSenha.value,
            cpf: cpf.value,
            email: email.value,
            name: nome.value,
            nascimento: nascimento.value,
            senha: senha.value,
            sex: sex.value,
            telephone: telephone.value
        }

        const APIResponse = fetch('http://localhost:8080/cadastro/v1/save', {
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
                modal.showModal();
            }else if(JSON.stringify(response.status) == 400){
                modal_error.style.display = 'block'
                btnCloseError.addEventListener('click', () => {
                    modal_error.style.display = 'none'
                })
            }
        });
    }else{
        modal_empty.style.display = 'block'
    }
    btnClose.addEventListener('click', () => {
        modal_empty.style.display = 'none'
    })


});


// name, email, telephone, endereço, nascimento, sex, cpf, senha, confirmSenha
});
