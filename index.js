function validateForm() {
    let passwordForm = document.forms["Form"]["password"].value;
    let confirmPasswordForm = document.forms["Form"]["confirm_password"].value;

    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm_password");

    let errorMessage = document.getElementsByClassName("errorMessage");

    if (passwordForm != confirmPasswordForm) {
        password.style.borderColor = "red";
        password.style.borderRadius = "3px";
        confirmPassword.style.borderColor = "red";
        confirmPassword.style.borderRadius = "3px";
        
        errorMessage[0].classList.remove("hidden");
        
        return false;
    }
  }