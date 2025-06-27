document.addEventListener("DOMContentLoaded", function () {
  const trainingCards = document.querySelectorAll(".training-card");
  const paymentModal = document.getElementById("paymentModal");
  const closeBtn = document.querySelector(".close-btn");
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  trainingCards.forEach(card => observer.observe(card));

  if (paymentModal && closeBtn) {
    function openModal() {
       paymentModal.classList.add("show");
      document.activeElement.blur();
    }

    function closeModal() {
      paymentModal.classList.remove("show");
    }

    trainingCards.forEach(card => {
      card.addEventListener("click", openModal);
    });

    closeBtn.addEventListener("click", closeModal);
  }

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
