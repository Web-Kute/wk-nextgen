let magicGrid = new MagicGrid({
  container: ".container",
  animate: true,
  gutter: 20,
  static: true,
  useMin: true,
  maxColumns: 5,
  items: 10,
});

magicGrid.listen();
// reposition
magicGrid.positionItems();
