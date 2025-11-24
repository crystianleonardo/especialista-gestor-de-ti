document.getElementById("contactForm").addEventListener("submit", function (event) {
    const form = this;

    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();

        form.classList.add("was-validated");

        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();

        return;
    }

    event.preventDefault();
    document.getElementById("submitSuccessMessage").classList.remove("d-none");
});
