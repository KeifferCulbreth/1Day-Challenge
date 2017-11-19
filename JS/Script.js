$(document).ready(function(){

    $("#get_to_know").click(function() {
        $('html,body').animate({
            scrollTop: $("#begin_main").offset().top
        }, 1000)
    });

    // $("#projectButton").click(function() {
    //     $('html,body').animate({
    //         scrollTop: $("#Projects").offset().top
    //     }, 1000)
    // });
   });
$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel();
});

// $(document).ready(function () {
//     var menu = $('.menu');
//         var target = $('#' +menu.attr("data-target"));
//     menu.pushpin({
//       top: target.offset().top,
//     });
// });
  //  $('.carousel').carousel('next');
  //  $('.carousel').carousel('next', 3); // Move next n times.

  //  $('.carousel').carousel('prev');
  //  $('.carousel').carousel('prev', 4); // Move prev n times.

    //$('.carousel').carousel('set', 4);

    //$('.carousel').carousel('destroy');


//collapsible
    // Open
//  $('.collapsible').collapsible('open', 0);

  // Close
  //$('.collapsible').collapsible('close', 0);
