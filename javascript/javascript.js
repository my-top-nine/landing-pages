
window.addEventListener('scroll', function(e) {
    console.log('Scrolled!');
  }
);

$(function(){

  $(".tilt-card").tilt({
    maxTilt: 15,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    glare: true,
    maxGlare: 0.2,
    scale: 1
  });

})









