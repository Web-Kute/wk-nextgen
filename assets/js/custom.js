const asideNav = document.querySelector("aside");
const asideNavBox = asideNav.getBoundingClientRect();
const viewportWidth = window.innerWidth;
const container = document.querySelector(".container");
const containerWidth = viewportWidth - Math.ceil(asideNavBox.width);
console.log("Width : ", containerWidth);
