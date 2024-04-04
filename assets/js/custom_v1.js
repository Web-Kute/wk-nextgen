document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    container: document.querySelector('.container'),
    sections: document.querySelectorAll('.section'),
    sectionsNoSkills: document.querySelectorAll('.noskills'),
    firstSkillItem: document.querySelector('.first-skill-item'),
    sectionSkillTitle: document.querySelector('.section__skills-title'),
    toggleMenu: document.querySelector('.togglemenu'),
    burgerMenu: document.querySelector('.burgermenu'),
    arrowUp: document.querySelector('.arrow-up'),
  };

  function sectionWidthSize() {
    const itemValues = elements.firstSkillItem.getAttribute('style');
    const valuesTranslate = itemValues.split('translate').pop();
    const marginContainer = Number(valuesTranslate.match(/\d+/)[0]);
    const containerProps = elements.container.getBoundingClientRect();
    const sectionWidth = `${containerProps.width - marginContainer * 2}px`;
    elements.sectionSkillTitle.style.width = sectionWidth;
    elements.sectionsNoSkills.forEach((section) => {
      section.style.width = sectionWidth;
    });
  }
  sectionWidthSize();

  function menuShowHide(e) {
    e.stopPropagation();
    if (elements.burgerMenu.classList.contains('show')) {
      elements.burgerMenu.classList.toggle('show');
      elements.burgerMenu.classList.add('hide');
      elements.toggleMenu.setAttribute('aria-expanded', false);
    } else {
      elements.burgerMenu.classList.add('show');
      elements.burgerMenu.classList.remove('hide');
      elements.toggleMenu.setAttribute('aria-expanded', true);
    }
  }

  function closeMenu(e) {
    e.stopPropagation();
    if (
      !e.target.classList.contains('burgermenu__list') &&
      e.target !== elements.burgerMenu
    ) {
      elements.burgerMenu.classList.add('hide');
      elements.burgerMenu.classList.remove('show');
      elements.burgerMenu.setAttribute('aria-expanded', false);
      elements.toggleMenu.classList.remove('nav-open');
    }
  }

  function navHighlighter() {
    // Get current scroll position
    let scrollY = window.scrollY;
    elements.sections.forEach((current) => {
      const sectionTop = current.getBoundingClientRect().top + scrollY - 150;
      const itemBurgerMenu = document.querySelector(
        `.burgermenu [data-id="${current.dataset.section}"`,
      );
      /* If current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it */
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + current.offsetHeight
      ) {
        itemBurgerMenu.classList.add('active');
        itemBurgerMenu.setAttribute('aria-current', true);
      } else {
        itemBurgerMenu.classList.remove('active');
        itemBurgerMenu.setAttribute('aria-current', false);
      }
    });
  }

  document.addEventListener('click', closeMenu);
  window.addEventListener('scroll', navHighlighter);
  window.addEventListener('resize', sectionWidthSize);
  window.addEventListener('change', sectionWidthSize);
  elements.toggleMenu.addEventListener('click', menuShowHide);
  elements.toggleMenu.addEventListener('click', () =>
    elements.toggleMenu.classList.toggle('nav-open'),
  );
  elements.arrowUp.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  });

  const portrait = window.matchMedia('(orientation: portrait)');
  portrait.addEventListener('change', (e) =>
    e.matches ? location.reload() : location.reload(),
  );
});
