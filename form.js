document.getElementById("contactForm").addEventListener("submit", function (event) {
    const form = this;

    // Impede envio automático
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();

        // Mostra mensagens de erro padrão do Bootstrap
        form.classList.add("was-validated");

        // Foca no primeiro campo inválido
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();

        return;
    }

    // Caso tudo esteja válido (NÃO ENVIA PARA SERVIDOR)
    event.preventDefault();
    document.getElementById("submitSuccessMessage").classList.remove("d-none");
});
