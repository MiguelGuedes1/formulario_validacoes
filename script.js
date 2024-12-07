const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

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
    const passwordValue = password.value.trim(); // Remove espaços desnecessários
    const passwordConfirmationValue = passwordConfirmation.value.trim()
    const criar_conta = document.querySelector('.conta_criada')

    let formulario_todo_correcto = true

    if (usernameValue === '' ) {
        setErrorFor(username, 'Insira um Username');
        formulario_todo_correcto = false
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Insira um Email');
        formulario_todo_correcto = false
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(email, 'Insira um Email válido');
        formulario_todo_correcto = false
    } else {
        setSuccessFor(email);
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Verifica o formato do email, ou seja , tem que ter pelo menos um @
    }
    

    if(passwordValue === ''){
        setErrorFor(password,'Por favor defina uma password')
        formulario_todo_correcto = false
    }
    else if(passwordValue.length  < 5 ){
        setErrorFor(password,'A password tem que ter no minimo 5 caracteres')
        formulario_todo_correcto = false
    }
    else {
        setSuccessFor(password);
    }

    if(passwordConfirmationValue===''){
        setErrorFor(passwordConfirmation,'Por favor confirme a password')
        formulario_todo_correcto = false
    } else if(passwordConfirmationValue != passwordValue){
        setErrorFor(passwordConfirmation,'As passwords sao diferentes')
        formulario_todo_correcto = false
    } else{
        setSuccessFor(passwordConfirmation)
    }

    if (formulario_todo_correcto) {
        // criar_conta.innerText='Conta Criada com sucesso!'    
        window.location.href = 'login_page.html'; // Redireciona para a página criada com html neste caso uma de login  
    }

    





    // Verifique outros campos aqui...
}

// Adiciona o evento ao formulário
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do submit
    checkInputs(); // Chama a função principal
});








