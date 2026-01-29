(function () {
  // år i footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobilmeny
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  const menu = document.querySelector("#menu");

  if (burger && nav && menu) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    // stäng menyn när man klickar på en länk
    menu.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A" && nav.classList.contains("nav-open")) {
        nav.classList.remove("nav-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }
})();
