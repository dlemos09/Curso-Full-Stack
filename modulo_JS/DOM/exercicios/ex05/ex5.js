(function () {
    'use strict';

    const formCadastro = document.getElementById("formCadastro");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    const errorNome = document.getElementById("errorNome");
    const errorEmail = document.getElementById("errorEmail");
    const errorSenha = document.getElementById("errorSenha");
    const errorConfirmarSenha = document.getElementById("errorConfirmarSenha");
    const successMessage = document.getElementById("successMessage");

    // Função de validação de email
    function validarEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Limpa as mensagens de erro e os estilos de erro
    function limparErros() {
        errorNome.textContent = '';
        errorEmail.textContent = '';
        errorSenha.textContent = '';
        errorConfirmarSenha.textContent = '';
        nome.classList.remove("error");
        email.classList.remove("error");
        senha.classList.remove("error");
        confirmarSenha.classList.remove("error");
    }

    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário

        let formValido = true;
        limparErros(); // Limpa erros anteriores
        successMessage.textContent = ''; // Limpa a mensagem de sucesso

        // Validação do campo Nome
        if (!nome.value.trim()) {
            errorNome.textContent = "O campo Nome é obrigatório.";
            nome.classList.add("error");
            formValido = false;
        }

        // Validação do campo Email
        if (!email.value.trim()) {
            errorEmail.textContent = "O campo Email é obrigatório.";
            email.classList.add("error");
            formValido = false;
        } else if (!validarEmail(email.value)) {
            errorEmail.textContent = "Digite um email válido.";
            email.classList.add("error");
            formValido = false;
        }

        // Validação do campo Senha
        if (!senha.value.trim()) {
            errorSenha.textContent = "O campo Senha é obrigatório.";
            senha.classList.add("error");
            formValido = false;
        } else if (senha.value.length < 6) {
            errorSenha.textContent = "A senha deve ter no mínimo 6 caracteres.";
            senha.classList.add("error");
            formValido = false;
        }

        // Validação do campo Confirmar Senha
        if (confirmarSenha.value !== senha.value) {
            errorConfirmarSenha.textContent = "As senhas não coincidem.";
            confirmarSenha.classList.add("error");
            formValido = false;
        }

        // Se o formulário for válido, exibe a mensagem de sucesso
        if (formValido) {
            successMessage.textContent = "Cadastro realizado com sucesso!";
            successMessage.classList.add("success");
            formCadastro.reset(); // Limpa o formulário após sucesso
        }
    });
})();
