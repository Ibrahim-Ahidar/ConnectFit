document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const productSections = document.querySelectorAll(".products-grid");
  const productCards = document.querySelectorAll(".product-card");
  const paymentModal = document.getElementById("paymentModal");
  const closeBtn = document.querySelector(".close-btn");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      productSections.forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("active");
      });

      const targetId = button.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      targetSection.classList.remove("hidden");

      setTimeout(() => {
        targetSection.classList.add("active");
      }, 10);
    });
  });

  const defaultSection = document.getElementById("supplements");
  defaultSection.classList.remove("hidden");
  setTimeout(() => {
    defaultSection.classList.add("active");
  }, 10);
  tabButtons[0].classList.add("active");

  function openModal() {
    paymentModal.classList.add("show");
  }

  function closeModal() {
    paymentModal.classList.remove("show");
  }

  productCards.forEach(card => {
    card.addEventListener("click", openModal);
  });

  closeBtn.addEventListener("click", closeModal);


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