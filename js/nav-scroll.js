// Hide Header on on scroll down
$(document).ready(function() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('nav').outerHeight();

  $(document.body).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 150);

  // if($(window.location.hash).length > 0){
  //   $('html, body').animate({ scrollTop: $(window.location.hash).offset().top}, 1000);
  // }

  function hasScrolled() {
    var st = $(window).scrollTop();
    // var st = $('#outer').scrollTop();
    console.log(this)

    // Change background color / add class / remove class
    // if (st > 500) {
    //   $('nav').addClass('header-blue', 300);
    // } else {
    //   $('nav').removeClass('header-blue', 300);
    // }

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      console.log("scroll down");
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up', 450);
    } else {
        console.log("scroll up");
        // Scroll Up
        if(st + $(window).height() < $(document.body).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down', 450);
        }
    }
    lastScrollTop = st;
  }
});
