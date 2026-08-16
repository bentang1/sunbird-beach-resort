/* Sunbird Beach Resort — shared site behaviour */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Mobile nav ---------------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
      document.body.classList.toggle("menu-open", !open);
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------------- Nav background on scroll ---------------- */
  var nav = document.querySelector(".site-nav");
  if (nav) {
    var transparentCapable = nav.classList.contains("is-transparent");
    var setNavState = function () {
      if (!transparentCapable) return;
      if (window.scrollY > 60) {
        nav.classList.remove("is-transparent");
      } else {
        nav.classList.add("is-transparent");
      }
    };
    setNavState();
    window.addEventListener("scroll", setNavState, { passive: true });
  }

  /* ---------------- Active nav link ---------------- */
  var currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (currentPage === "") currentPage = "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === currentPage || (currentPage === "index.html" && href === "./")) {
      a.classList.add("is-active");
    }
  });

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Scroll fade in / fade out reveals ---------------- */
  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    // No motion library, or user prefers reduced motion: show everything, no animation.
    revealEls.forEach(function (el) { el.style.opacity = 1; el.style.transform = "none"; });
  } else {
    gsap.registerPlugin(ScrollTrigger);

    revealEls.forEach(function (el, i) {
      var stagger = el.classList.contains("reveal-group");
      var targets = stagger ? el.children : el;
      gsap.set(targets, { opacity: 0, y: 28 });

      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: function () {
          gsap.to(targets, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: stagger ? 0.1 : 0 });
        },
        onLeave: function () {
          gsap.to(targets, { opacity: 0, y: -24, duration: 0.45, ease: "power1.in", stagger: stagger ? 0.06 : 0 });
        },
        onEnterBack: function () {
          gsap.to(targets, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: stagger ? 0.1 : 0 });
        },
        onLeaveBack: function () {
          gsap.to(targets, { opacity: 0, y: 24, duration: 0.45, ease: "power1.in", stagger: stagger ? 0.06 : 0 });
        }
      });
    });

    // Hero content: simple fade+rise on load, not scroll-tied.
    var heroContent = document.querySelector(".hero-content, .page-hero .container > *");
    if (heroContent && document.querySelector(".hero, .page-hero")) {
      gsap.from(".hero-content, .page-hero-anim", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.15
      });
    }
  }

  /* ---------------- Contact form (static placeholder submit) ---------------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("form-success");
      if (success) success.classList.add("is-visible");
      form.reset();
      if (success) success.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    });
  }

  /* ---------------- Gallery filter (optional, only on gallery.html) ---------------- */
  var chipRow = document.querySelector(".chip-row[data-filter]");
  if (chipRow) {
    var chips = chipRow.querySelectorAll(".chip");
    var items = document.querySelectorAll("[data-category]:not(.chip)");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        var cat = chip.getAttribute("data-category");
        items.forEach(function (item) {
          var show = cat === "all" || item.getAttribute("data-category") === cat;
          item.style.display = show ? "" : "none";
        });
      });
    });
  }
})();
