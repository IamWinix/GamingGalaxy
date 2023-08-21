document.addEventListener('mousemove', function(e) {
  var animation = document.querySelector('.animation');
  animation.style.left = e.pageX + 'px';
  animation.style.top = e.pageY + 'px';
});
