document.getElementById('button-submit').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const emailPart = emailInput.value;
    const passInput = document.getElementById('pass-input');
    const passPart = passInput.value;
    if (emailPart == 'masbha7629@gmail.com' && passPart == "mejbha") {
        window.location.href = "bank.html";
    }
})