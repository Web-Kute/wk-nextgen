let magicGrid = new MagicGrid({
  container: ".container",
  animate: true,
  gutter: 30,
  static: true,
  useMin: true,
  maxColumns: 5,
  items: 8,
});

magicGrid.listen();
// reposition
magicGrid.positionItems();
