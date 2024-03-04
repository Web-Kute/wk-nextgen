document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    container: document.querySelector('.container'),
    sections: document.querySelectorAll('.section'),
    sectionsNoSkills: document.querySelectorAll('.noskills'),
    firstSkillItem: document.querySelector('.first-skill-item'),
    sectionSkillTitle: document.querySelector('.section__skills-title'),
    toggleMenu: document.querySelector('.togglemenu'),
    burgerMenu: document.querySelector('.burgermenu'),
    burgerMenuChildren: document.querySelector('.burgermenu').childNodes,
    menu: document.querySelectorAll('.menu'),
    arrowUp: document.querySelector('.arrow-up'),
  };

  let containerProps;
  let itemValues;
  let valTranslate;
  let marginContainer;

  function sectionWidthSize() {
    itemValues = elements.firstSkillItem.getAttribute('style');
    valTranslate = itemValues.split('translate').pop();
    marginContainer = Number(valTranslate.match(/\d+/)[0]);

    containerProps = elements.container.getBoundingClientRect();
    elements.firstSkillItem.getBoundingClientRect();

    elements.sectionSkillTitle.style.width =
      containerProps.width - marginContainer * 2 + 'px';
    elements.sectionsNoSkills.forEach((section) => {
      section.style.width = containerProps.width - marginContainer * 2 + 'px';
    });
  }
  sectionWidthSize();

  function menuShowHide(e) {
    e.stopPropagation();
    if (elements.burgerMenu.classList.contains('show')) {
      elements.burgerMenu.classList.remove('show');
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
      e.target !== elements.burgerMenu &&
      e.target !== elements.toggleMenu &&
      e.target !== elements.burgerMenuChildren
    ) {
      elements.burgerMenu.classList.add('hide');
      elements.burgerMenu.classList.remove('show');
      elements.burgerMenu.setAttribute('aria-expanded', false);
      elements.toggleMenu.classList.remove('nav-open');
    }
  }

  elements.toggleMenu.addEventListener('click', menuShowHide);

  elements.toggleMenu.addEventListener('click', () => {
    elements.toggleMenu.classList.toggle('nav-open');
  });

  function highLightItem(e) {
    elements.menu.forEach((itemMenu) => {
      elements.firstSkillItemMenu.setAttribute('aria-current', true);
      e.target.classList.add('active');
      itemMenu.classList.classList.remove('active');
    });
  }

  function navHighlighter() {
    // Get current scroll position
    let scrollY = window.scrollY;

    elements.sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop =
        current.getBoundingClientRect().top + window.scrollY - 150;
      let sectionId = current.dataset.section;
      const itemBurgergMenu = document.querySelector(
        '.burgermenu [data-id="' + sectionId + '"]',
      );

      /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    */
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        itemBurgergMenu.classList.add('active');
        itemBurgergMenu.setAttribute('aria-current', true);
      } else {
        itemBurgergMenu.classList.remove('active');
        itemBurgergMenu.setAttribute('aria-current', false);
      }
    });
  }

  elements.burgerMenu.addEventListener('click', highLightItem);
  document.addEventListener('click', closeMenu);
  window.addEventListener('scroll', navHighlighter);
  window.addEventListener('resize', sectionWidthSize);
  window.addEventListener('change', sectionWidthSize);

  elements.arrowUp.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  });

  let portrait = window.matchMedia('(orientation: portrait)');
  portrait.addEventListener('change', (e) =>
    e.matches ? location.reload() : location.reload(),
  );
});
