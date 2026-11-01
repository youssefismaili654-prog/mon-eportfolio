
// Gestion du mode sombre
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀️";
  } else {
    themeButton.textContent = "🌙";
  }
});

// Gestion du menu sur téléphone
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("open");
});

// Fermer le menu après avoir choisi une rubrique
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
  });
});
