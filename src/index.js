import { Weekub } from './Weekub';
// import { customersItem } from './Customers.js';

const Masonry = require('masonry-layout');
// https://masonry.desandro.com/

document.addEventListener('DOMContentLoaded', function () {
  const weekub = new Weekub();
  const masonry = new Masonry('#container', {
    itemSelector: '.skills',
    columnWidth: 300,
    gutter: 20,
    fitWidth: true,
  });
  weekub.events();
});
