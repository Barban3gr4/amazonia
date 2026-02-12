function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Verificação inicial
reveal();

// Efeito de paralaxe suave para o texto do hero
window.addEventListener("scroll", function () {
  const heroText = document.querySelector(".hero-content");
  let scrollPosition = window.pageYOffset;
  heroText.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
  heroText.style.opacity = 1 - scrollPosition / 600;
});
