/* ============================================================
   SÉLUNE — interactions (JavaScript natif, sans dépendance)
   · Menu mobile accessible (aria-expanded, Échap)
   · Ombre de l'en-tête au défilement
   · Apparition des sections au scroll (IntersectionObserver)
   · FAQ en accordéon exclusif (éléments <details> natifs)
   · Année courante dans le pied de page
   ============================================================ */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- En-tête collant ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var majHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    majHeader();
    window.addEventListener("scroll", majHeader, { passive: true });
  }

  /* ---------- Navigation mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu-principal");

  if (toggle && nav) {
    var fermerMenu = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      var ouvert = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(ouvert));
    });

    // Le choix d'un lien referme le menu
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) fermerMenu();
    });

    // Touche Échap : ferme et rend la main au bouton
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        fermerMenu();
        toggle.focus();
      }
    });

    // Un clic hors du menu le referme également
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !e.target.closest(".site-header")) {
        fermerMenu();
      }
    });
  }

  /* ---------- Apparition progressive des sections ---------- */
  var elements = document.querySelectorAll(".reveal");

  if (!elements.length) {
    /* rien à faire */
  } else if (!reduit && "IntersectionObserver" in window) {
    var observateur = new IntersectionObserver(
      function (entrees, obs) {
        entrees.forEach(function (entree) {
          if (entree.isIntersecting) {
            entree.target.classList.add("is-visible");
            obs.unobserve(entree.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach(function (el) { observateur.observe(el); });
  } else {
    elements.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- FAQ : une seule réponse ouverte à la fois ---------- */
  var questions = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));

  questions.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      questions.forEach(function (autre) {
        if (autre !== item) autre.open = false;
      });
    });
  });

  /* ---------- Année courante ---------- */
  var annee = document.getElementById("annee");
  if (annee) annee.textContent = String(new Date().getFullYear());
})();
