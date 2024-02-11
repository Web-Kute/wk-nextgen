const slider = tns({
  container: ".slider-about",
  loop: true,
  controls: false,
  center: true,
  items: 1,
  gutter: 30,
  slideBy: "page",
  nav: false,
  autoplay: true,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  //   controlsContainer: "#customize-controls",
//   responsive: {
//     640: {
//       items: 2,
//       gutter: 30,
//     },

//     768: {
//       items: 3,
//       gutter: 30,
//     },
//   },
});
