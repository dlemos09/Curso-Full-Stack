function cadastrarEmail(event) {
    event.preventDefault();
    const txtEmail = document.getElementById("txtEmail").value;
    const msgFeedback = document.getElementById("feedback");
    msgFeedback.innerHTML = `O email ${txtEmail} foi cadastrado com sucesso.`;
}

// function editarEmail(event) {
//     event.preventDefault();
//     txtEmail.disabled = false
//     txtEmail.focus()
// }

// function disableEmail() {
//     txtEmail.disabledEmail = true
// }
