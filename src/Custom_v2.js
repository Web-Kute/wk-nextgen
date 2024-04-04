export class Weekub {
  constructor() {
    this.registerElements();
    this.sectionWidthSize();
    this.navHighlighter();
    this.screenOrientation();
  }
  registerElements() {
    this.elements = {
      container: document.querySelector('.container'),
      sections: document.querySelectorAll('.section'),
      sectionsNoSkills: document.querySelectorAll('.noskills'),
      firstSkillItem: document.querySelector('.first-skill-item'),
      sectionSkillTitle: document.querySelector('.section__skills-title'),
      toggleMenu: document.querySelector('.togglemenu'),
      burgerMenu: document.querySelector('.burgermenu'),
      burgerMenuList: document.querySelectorAll('.burgermenu__list'),
      arrowUp: document.querySelector('.arrow-up'),
    };
  }
  events() {
    document.addEventListener('click', this.closeMenu.bind(this));
    window.addEventListener('scroll', this.navHighlighter.bind(this));
    window.addEventListener('resize', this.sectionWidthSize.bind(this));
    window.addEventListener('change', this.sectionWidthSize.bind(this));
    this.elements.toggleMenu.addEventListener(
      'click',
      this.showHideMenu.bind(this)
    );
    this.elements.arrowUp.addEventListener('click', () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });
  }
  sectionWidthSize() {
    const itemValues = this.elements.firstSkillItem.getAttribute('style');
    const valuesTranslate = itemValues.split('translate').pop();
    const marginContainer = Number(valuesTranslate.match(/\d+/)[0]);
    const containerProps = this.elements.container.getBoundingClientRect();
    const sectionWidth = `${containerProps.width - marginContainer * 2}px`;
    this.elements.sectionSkillTitle.style.width = sectionWidth;
    this.elements.sectionsNoSkills.forEach((section) => {
      section.style.width = sectionWidth;
    });
  }
  showHideMenu(event) {
    event.stopPropagation();
    this.elements.toggleMenu.classList.toggle('nav-open');
    if (this.elements.burgerMenu.classList.contains('show')) {
      this.elements.burgerMenu.classList.remove('show');
      this.elements.burgerMenu.classList.add('hide');
      this.elements.toggleMenu.setAttribute('aria-expanded', false);
    } else {
      this.elements.burgerMenu.classList.add('show');
      this.elements.burgerMenu.classList.remove('hide');
      this.elements.toggleMenu.setAttribute('aria-expanded', true);
    }
  }
  closeMenu(event) {
    event.stopPropagation();
    if (event.target !== this.elements.burgerMenu &&
      !event.target.classList.contains('burgermenu__list')) {
      this.elements.burgerMenu.classList.add('hide');
      this.elements.burgerMenu.classList.remove('show');
      this.elements.burgerMenu.setAttribute('aria-expanded', false);
      this.elements.toggleMenu.classList.remove('nav-open');
    }
  }
  navHighlighter() {
    // Get current scroll position
    let scrollY = window.scrollY;
    this.elements.sections.forEach((current) => {
      const sectionTop = current.getBoundingClientRect().top + scrollY - 150;
      const itemBurgergMenu = document.querySelector(
        `.burgermenu [data-id="${current.dataset.section}"`
      );
      /* If current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it */
      if (scrollY > sectionTop && scrollY <= sectionTop + current.offsetHeight) {
        itemBurgergMenu.classList.add('active');
        itemBurgergMenu.setAttribute('aria-current', true);
      } else {
        itemBurgergMenu.classList.remove('active');
        itemBurgergMenu.setAttribute('aria-current', false);
      }
    });
  }
  screenOrientation() {
    const portrait = window.matchMedia('(orientation: portrait)');
    portrait.addEventListener('change', (e) => e.matches ? location.reload() : location.reload()
    );
  }
}
