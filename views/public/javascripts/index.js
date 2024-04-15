$(document).ready(function () {
  $(window).scroll(function () {
    if ($("nav").offset().top > 100) {
      $("nav").addClass("navbar-shrink");
    } else {
      $("nav").removeClass("navbar-shrink");
    }
  });

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
