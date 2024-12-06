const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation"')

// Define funções auxiliares primeiro
function setErrorFor(input, message) {
    const formControl = input.parentElement; // Pega o elemento pai com a classe form-control
    const small = formControl.querySelector('small'); // Seleciona a tag <small>
    formControl.className = 'form-control error'; // Adiciona a classe error
    small.innerText = message; // Define a mensagem de erro
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // Pega o elemento pai com a classe form-control
    formControl.className = 'form-control success'; // Adiciona a classe success
}

// Função principal: lógica para verificar os inputs
function checkInputs() {
    const usernameValue = username.value.trim(); // Remove espaços desnecessários
    const emailValue = email.value.trim(); // Remove espaços desnecessários

    if (usernameValue === '' ) {
        setErrorFor(username, 'Insira um Username');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '' ) {
        setErrorFor(email, 'Insira um Email');
    } else {
        setSuccessFor(email);
    }





    // Verifique outros campos aqui...
}

// Adiciona o evento ao formulário
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do submit
    checkInputs(); // Chama a função principal
});








