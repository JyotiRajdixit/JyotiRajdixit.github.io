window.addEventListener("scroll", function(event) {
  var topDistance = this.pageYOffset;
  var layers = document.querySelectorAll("[data-type='parallax']");
  for (var i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var depth = layer.getAttribute("data-depth");
    var translate3d = 'translate3d(0, ' + -(topDistance * depth) + 'px, 0)';
    layer.style['-webkit-transform'] = translate3d;
    layer.style['-moz-transform'] = translate3d;
    layer.style['-ms-transform'] = translate3d;
    layer.style['-o-transform'] = translate3d;
    layer.style.transform = translate3d;
  }
});