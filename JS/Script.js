
//carousel
    $(document).ready(function(){
     $('.carousel').carousel();
    });

    $('.carousel').carousel('next');
    $('.carousel').carousel('next', 3); // Move next n times.

    $('.carousel').carousel('prev');
    $('.carousel').carousel('prev', 4); // Move prev n times.

    $('.carousel').carousel('set', 4);

    $('.carousel').carousel('destroy');

    $('.carousel.carousel-slider').carousel({fullWidth: true});

//collapsible
    // Open
  $('.collapsible').collapsible('open', 0);

  // Close
  $('.collapsible').collapsible('close', 0);
