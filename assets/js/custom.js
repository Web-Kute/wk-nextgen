const container = document.querySelector(".container");
const asideNav = document.querySelector("aside");
const sections = document.querySelectorAll(".section");
const item = document.querySelector(".item");

let asideNavBox = asideNav.getBoundingClientRect();
let containerProps = container.getBoundingClientRect();
let itemProps = item.getBoundingClientRect();

const viewportWidth = window.innerWidth;
const containerWidth = viewportWidth - Math.ceil(asideNavBox.width);
const itemWidth = itemProps.width;


function sectionSize() {
  sections.forEach((section) => {
    asideNavBox = asideNav.getBoundingClientRect();
    containerProps = container.getBoundingClientRect();
    itemProps = item.getBoundingClientRect();
console.log("Width : ", containerProps.width, Math.ceil(asideNavBox.width));
    // section.setAttribute("height", (containerProps.width  - Math.ceil(asideNavBox.width)) + "px");
    section.style.width =
      (containerProps.width - (Math.ceil(asideNavBox.width) + 40) + "px");

  });
}
sectionSize();
window.addEventListener("resize", sectionSize);
console.log(itemWidth, viewportWidth / 3);

