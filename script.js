document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");
    const errorMessages = document.querySelectorAll(".error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Função para verificar se o campo está vazio
        function isEmpty(value) {
            return value.trim() === "";
        }

        // Validar o campo Nome
        if (isEmpty(nomeInput.value)) {
            errorMessages[0].textContent = "O campo Nome é obrigatório.";
        } else {
            errorMessages[0].textContent = "";
        }

        if (isEmpty(emailInput.value)) {
            errorMessages[1].textContent = "O campo E-mail é obrigatório.";
        } else {
            errorMessages[1].textContent = "";
        }

        if (isEmpty(telefoneInput.value)) {
            errorMessages[2].textContent = "O campo Telefone é obrigatório.";
        } else {
            errorMessages[2].textContent = "";
        }

        if (!isEmpty(nomeInput.value) && !isEmpty(emailInput.value) && !isEmpty(telefoneInput.value)) {
            alert("Formulário enviado com sucesso!");
        }
    });

    const formControlElements = document.querySelectorAll(".form-control");
    formControlElements.forEach(function (element) {
        element.addEventListener("focus", function () {
            this.classList.add("input-focus");
        });

        element.addEventListener("blur", function () {
            this.classList.remove("input-focus");
        });
    });
});
