document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 150);
    });
});
function openContact() {
    document.getElementById("contactModal").classList.add("show");
}

function closeContact() {
    document.getElementById("contactModal").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.querySelector(".contact-btn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openContact();
        });
    }

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 150);
    });
});
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        setTimeout(() => {
            menu.style.display = "none";
        }, 300);
    } else {
        menu.style.display = "flex";
        setTimeout(() => {
            menu.classList.add("show");
        }, 10);
    }
}
