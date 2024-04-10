import { Weekub } from './Weekub';
// import { customersItem } from './Customers.js';

const Masonry = require('masonry-layout');
// https://masonry.desandro.com/

document.addEventListener('DOMContentLoaded', function () {
  const weekub = new Weekub();
  const masonry = new Masonry('#skills-container', {
    itemSelector: '.skills',
    columnWidth: '.grid-sizer',
    gutter: 20,
    // fitWidth: true,
    percentPosition: true,
  });
  weekub.events();
});
