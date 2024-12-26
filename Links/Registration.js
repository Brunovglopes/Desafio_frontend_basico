const emailspace = document.getElementById("id_email");
const storedEmail = localStorage.getItem('userEmail');

if (storedEmail) {
    const text = document.createElement("p");
    text.textContent = storedEmail;
    text.classList.add("spam")
    emailspace.appendChild(text)
} else {
    
}

function back() {
    window.location.href = '../index.html'
}