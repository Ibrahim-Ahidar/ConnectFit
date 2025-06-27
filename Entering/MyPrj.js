
document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    document.getElementById("card-home"),
    document.getElementById("card-training"),
    document.getElementById("card-products"),
    document.getElementById("card-about")
  ];

  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  const dumbbell = document.getElementById("dumbbell");

  let currentCard = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none";
    });
  }

  function rotateDumbbell(direction) {
    dumbbell.classList.remove("rotate-left", "rotate-right");
    void dumbbell.offsetWidth;
    if (direction === "left") {
      dumbbell.classList.add("rotate-left");
    } else {
      dumbbell.classList.add("rotate-right");
    }
  }

  leftArrow.addEventListener("click", () => {
    rotateDumbbell("left");
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    showCard(currentCard);
  });

  rightArrow.addEventListener("click", () => {
    rotateDumbbell("right");
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
  });

  showCard(currentCard);
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
