document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const sections = document.querySelectorAll(".section");
  const sectionsNoSkills = document.querySelectorAll(".noskills");
  const item = document.querySelector(".item1");
  const sectionSkillTitle = document.querySelector(".section__skills-title");
  const toggleMenu = document.querySelector(".togglemenu");
  const burgerMenu = document.querySelector(".burgermenu");
  const burgerMenuChildren = document.querySelector(".burgermenu").childNodes;
  const menu = document.querySelectorAll(".menu");

  let containerProps;
  let itemProps;
  let itemValues;
  let valTranslate;
  let marginContainer;

  function sectionSize() {
    itemValues = item.getAttribute("style");
    valTranslate = itemValues.split("translate").pop();
    marginContainer = Number(valTranslate.match(/\d+/)[0]);

    containerProps = container.getBoundingClientRect();
    itemProps = item.getBoundingClientRect();

    sectionSkillTitle.style.width =
      containerProps.width - marginContainer * 2 + "px";
    sectionsNoSkills.forEach((section) => {
      section.style.width = containerProps.width - marginContainer * 2 + "px";
    });
  }
  sectionSize();

  function menuShowHide(e) {
    e.stopPropagation();
    if (burgerMenu.classList.contains("show")) {
      burgerMenu.classList.remove("show");
      burgerMenu.classList.add("hide");
      toggleMenu.setAttribute("aria-expanded", false);
    } else {
      burgerMenu.classList.remove("hide");
      burgerMenu.classList.add("show");
      toggleMenu.setAttribute("aria-expanded", true);
    }
  }

  function closeMenu(e) {
    if (
      e.target !== burgerMenu &&
      e.target !== toggleMenu &&
      e.target !== burgerMenuChildren
    ) {
      burgerMenu.classList.add("hide");
      burgerMenu.classList.remove("show", "nav-open");
      toggleMenu.setAttribute("aria-expanded", false);
    }
    e.stopPropagation();
  }

  toggleMenu.addEventListener("click", menuShowHide);

  toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("nav-open");
  });

  function highLightItem(e) {
    menu.forEach((item) => {
      item.setAttribute("aria-current", true);
      item.classList.remove("active");
      e.target.classList.add("active");
    });
  }

  burgerMenu.addEventListener("click", highLightItem);

  function navHighlighter() {
    // Get current scroll position
    let scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;

      const sectionTop =
        current.getBoundingClientRect().top + window.scrollY - 150;

      let sectionId = current.dataset.section;
      const navItem = document.querySelector(
        '.burgermenu [data-id="' + sectionId + '"]'
      );
      const linkNav = document.querySelector(".burgermenu__item");
      /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    */
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem.classList.add("active");
        navItem.setAttribute("aria-current", true);
      } else {
        navItem.classList.remove("active");
        navItem.setAttribute("aria-current", false);
      }
    });
  }
  document.addEventListener("click", closeMenu);
  window.addEventListener("scroll", navHighlighter);
  window.addEventListener("resize", sectionSize);
});
