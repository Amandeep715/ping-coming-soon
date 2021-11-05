const email = document.getElementById("email");
const button = document.getElementById("notify-btn");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

button.addEventListener("click", () => {
    if(!email.value.match(regex)) {
        email.classList.add("invalid");
        email.setAttribute("placeholder", "example@email/com");
        email.nextElementSibling.setAttribute("aria-hidden", "false");
    } else {
        email.classList.remove("invalid");
        email.nextElementSibling.setAttribute("aria-hidden", "true");
    }
})