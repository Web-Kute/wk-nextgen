const customGrid = document.getElementById('container');
const masonry = new Masonry(customGrid, {
  // options
  itemSelector: '.skills',
  columnWidth: 280,
  gutter: 60,
  fitWidth: true,
});
