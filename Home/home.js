document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".product-image");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    images.forEach(img => imageObserver.observe(img));

    const motivationImages = document.querySelectorAll(".motivation-img");
    const motivationImgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    motivationImages.forEach(img => motivationImgObserver.observe(img));

    const motivationText = document.querySelector(".motivation-text");
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    if (motivationText) {
        textObserver.observe(motivationText);
    }

    const productsText = document.querySelector(".products-text");
    const productsTextObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    if (productsText) {
        productsTextObserver.observe(productsText);
    }

    const aboutSection = document.querySelector(".about-text");

    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 150);
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