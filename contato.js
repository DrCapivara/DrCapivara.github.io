var formulario = document.querySelector('form');

formulario.onsubmit = function () {
    if (!document.querySelector("input[type='text']").value) {
        alert("Preenche o nome ae, meu bom");
        return false;
    }

    if (!document.querySelector("input[type='email']").value) {
        alert("Preenche o email ae, meu bom");
        return false;
    }

    if (!document.querySelector("input[type='mensagem']").value) {
        alert("Preenche a mensagem ae, meu bom");
        return false;
    }

    alert("Aoo, valeu parcero ");
}