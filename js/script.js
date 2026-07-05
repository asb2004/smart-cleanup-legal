/* ============================================================
   Smart Cleanup — Vanilla JavaScript
   Minimal, dependency-free.
     1. Mobile navigation toggle
     2. Reveal-on-scroll animations
     3. Auto-update footer year
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. MOBILE NAVIGATION TOGGLE ---------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is tapped (mobile)
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- 2. REVEAL-ON-SCROLL ANIMATIONS ---------- */
  var revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealItems.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    // Fallback: reveal everything immediately
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  /* ---------- 3. AUTO-UPDATE FOOTER YEAR ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
