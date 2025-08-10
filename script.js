const confirmedPassword = document.getElementById('confirm-password');
const password = document.getElementById('password');
const form = document.querySelector('.signup-form');
const inputs = document.querySelectorAll('.input');
const confirmPasswordMessage = document.querySelector('.confirm-password-error');

const confirmPassword = ()=>{
    let original = password.value.trim();
    let confirmed = confirmedPassword.value.trim();
    if (original !== confirmed) {
        return false;
    } else {
        return true;
    }
}

form.addEventListener("submit", (e)=>{
    let isFormValid = true;
    if (confirmPassword() === false) {
        isFormValid = false;
        confirmPasswordMessage.style.display = 'block';
    } else {
        confirmPasswordMessage.style.display = 'none';
    }

    inputs.forEach((input)=>{
        const errorMsg = input.nextElementSibling; 
        if (!input.checkValidity()) {
            isFormValid = false;
            errorMsg.style.display = 'block';
        } else {
            errorMsg.style.display = 'none';
        }
    })

    if (isFormValid === false) {
        e.preventDefault();
    }
})

confirmedPassword.addEventListener('input', ()=>{
    if (confirmPassword() === false) {
        confirmPasswordMessage.style.display = 'block';
    } else {
        confirmPasswordMessage.style.display = 'none';
    }
    })