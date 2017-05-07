//     if (st > lastScrollTop && st > navbarHeight){
//         $('nav').removeClass('nav-down').addClass('nav-up', 450);
//     } else {
//         if(st + $(window).height() < $(document.body).height()) {
//             $('nav').removeClass('nav-up').addClass('nav-down', 450);
//
$(document).ready(function() {
  var beforeScroll = 0;
  var afterScroll;
  var $navbar = $('.navbar-wrapper');

  // current postion
  $(window).on("scroll", function(){
    afterScroll = $(this).scrollTop();

    console.log(beforeScroll, afterScroll);

    if (beforeScroll < afterScroll && afterScroll > 60) {
      // Scrolling down
      $navbar.removeClass('slideDown').addClass('slideUp');
    } else if (beforeScroll > afterScroll) {
      // Scrolling up
      $navbar.removeClass('slideUp').addClass('slideDown');
    }
    beforeScroll = afterScroll;
  });
});
