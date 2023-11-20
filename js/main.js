var mixer = mixitup('.portfolio-items');

$(function(){
  $('.count-num').rCounter({
    duration: 30
  });
});


    $(document).ready(function () {

      // dynamic navbar bg change
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $(".navbar").addClass("menu-bg")
        } else {
          $(".navbar").removeClass("menu-bg")
        }
      })

      // scrollTop in show and hide
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $(".scrollTop").fadeIn(1000)
        } else {
          $(".scrollTop").fadeOut(1000)
        }
      })


    })

  