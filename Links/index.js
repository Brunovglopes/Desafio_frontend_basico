
let validacaoemail = "@";
let validacaoemailcom = ".com";
const email = document.getElementById("login");


function validaremail() {
    if (email.value.length < 15) {
        error()
    } else {
        if (email.value.includes( validacaoemail) && email.value.includes( validacaoemailcom)){
            localStorage.setItem('userEmail', email.value);
            redirecionar()

        } else {
            error()
        }
    }
}
function error() {

    const texthouse = document.querySelector(".faled_text");
    if (texthouse && !email.classList.contains("faled")) {
        email.classList.add("faled");
        const textAlert = document.createElement('p');
        textAlert.textContent = "Valid email required"
        textAlert.classList.add("faled");
        texthouse.appendChild(textAlert);
    }

}
function redirecionar() {

    window.location.href = 'Links/Registration.html'

}
