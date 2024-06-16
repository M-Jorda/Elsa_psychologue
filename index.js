// ========= HEADER ==========

const nav = document.querySelector(".nav");
const burger = document.getElementById("burger");
const banner = document.querySelector(".img");
let navOpened = false;

function openCloseNav(e) {
  if (!nav.classList.contains("activeHeader")) {
    nav.classList.add("activeHeader");
    navOpened = true;
  } else {
    nav.classList.remove("activeHeader");
    navOpened = false;
  }
}

// Si un lien est cliqué la nav se referme
document.addEventListener("click", function (e) {
  if (navOpened && !nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove("activeHeader");
    navOpened = false;
  }
});

burger.onclick = openCloseNav;

// ========= FOOTER ==========

const footer = document.querySelector(".footer");
const arrowFooter = document.querySelector(".arrows");

function openCloseFooter() {
  footer.classList.toggle("activeFooter");
  arrowFooter.classList.toggle("arrowDownFooter");
  arrowFooter.classList.toggle("arrowUpFooter");
  1199;
}

arrowFooter.onclick = openCloseFooter;

// ========= PAGES ==========

const links = document.querySelectorAll(".link");

// Lorsque un lien est cliqué remonte en haut de page
links.forEach((link) => {
  link.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    nav.classList.remove("activeHeader");
  });
});

function chargerContenu(url) {
  fetch(url) // Charger le fichier HTML externe
    .then((response) => response.text()) // Convertir la réponse en texte
    .then((html) => {
      document.querySelector("main").innerHTML = html; // Ajouter le contenu au conteneur
    })
    .catch((error) =>
      console.error("Erreur de chargement du contenu :", error)
    );
}

// ========= MEDIA-QUERIES ==========

const header = document.querySelector("header");
const navi = document.querySelector("nav");

const mediaMd = window.matchMedia("(min-width: 768px)");

function changeClassOnMd() {
  if (!mediaMd.matches) {
    nav.classList.add("position-absolute");
    navi.classList.add("d-flex", "flex-column-reverse");
    header.classList.add("fixed-bottom", "d-flex", "flex-column-reverse");
    header.classList.remove("position-absolute");
  } else {
    header.classList.remove("fixed-bottom", "d-flex", "flex-column-reverse");
    navi.classList.add("d-flex", "flex-column-reverse");
    header.classList.add("position-absolute");
    nav.classList.remove("position-absolute");
  }
}

mediaMd.addEventListener("change", changeClassOnMd);

window.onload = function () {
  chargerContenu("./htmls/home.html");
  changeClassOnMd();
};
