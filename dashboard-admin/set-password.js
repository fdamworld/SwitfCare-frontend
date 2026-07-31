const form = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");

const strengthText = document.getElementById("strengthText");
const strengthFill = document.getElementById("strengthFill");


function toggleVisibility(input, icon) {
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

togglePassword.addEventListener("click", () => {
    toggleVisibility(passwordInput, togglePassword);
});

toggleConfirm.addEventListener("click", () => {
    toggleVisibility(confirmInput, toggleConfirm);
});


passwordInput.addEventListener("input", checkStrength);

function checkStrength() {
    const password = passwordInput.value;
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    strengthFill.className = "strength-fill";
    strengthText.className = "";

    switch (score) {
        case 0:
        case 1:
            strengthText.textContent = "Weak";
            strengthText.style.color = "#ea580c";
            strengthFill.style.width = "25%";
            strengthFill.style.background = "#ea580c";
            break;

        case 2:
            strengthText.textContent = "Fair";
            strengthText.style.color = "#f59e0b";
            strengthFill.style.width = "50%";
            strengthFill.style.background = "#f59e0b";
            break;

        case 3:
            strengthText.textContent = "Good";
            strengthText.style.color = "#2563eb";
            strengthFill.style.width = "75%";
            strengthFill.style.background = "#2563eb";
            break;

        case 4:
            strengthText.textContent = "Strong";
            strengthText.style.color = "#16a34a";
            strengthFill.style.width = "100%";
            strengthFill.style.background = "#16a34a";
            break;
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = passwordInput.value.trim();
    const confirmPassword = confirmInput.value.trim();

    if (!password || !confirmPassword) {
        alert("Please fill in both password fields.");
        return;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const hasMinLength = password.length >= 8;

    if (!hasMinLength || !hasUppercase || !hasNumber || !hasSpecial) {
        alert(
            "Password must contain:\\n\\n" +
            "• At least 8 characters\\n" +
            "• One uppercase letter\\n" +
            "• One number\\n" +
            "• One special character"
        );
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        confirmInput.focus();
        return;
    }

    alert("Password set successfully!");
    window.location.href = "access-granted.html";
});
