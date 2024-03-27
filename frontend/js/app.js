$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 50) {
      $(".header-bg").css('background', 'rgba(2, 70, 154, .9)');
      console.log("blue bg");
    } else {
      $(".header-bg").css('background', 'rgba(2, 70, 154, 0)');
      // console.log("red bg");
    }
  });



  $("#cmt-payer").css("opacity", .3);
  $("#step-two").css("opacity", .3);

  var switchStatus = false;

  $("#slidethis").on('change', function () {
    if ($(this).is(':checked')) {
      switchStatus = $(this).is(':checked');

      $("#cmt-payer").css("opacity", 1);
      $("#cmt-payer").css("font-weight", 700);
      $("#step-two").css("opacity", 1);
      $("#cmt-reserver").css("opacity", .3);
      $("#cmt-reserver").css("font-weight", 300);
      $("#step-one").css("opacity", .3);
      console.log("opacity agence : 1");
    }
    else {
      switchStatus = $(this).is(':checked');
      $("#cmt-reserver").css("opacity", 1);
      $("#cmt-reserver").css("font-weight", 700);
      $("#step-one").css("opacity", 1);
      $("#cmt-payer").css("opacity", .3);
      $("#cmt-payer").css("font-weight", 300);
      $("#step-two").css("opacity", .3);
      console.log("opacity step-one : .3");
    }
  });

});


jQuery(function ($) {
  $(window).scroll(function fix_element() {
    $('.change-me').css(
      $(window).scrollTop() > 35
        ? { 'width': '75px' }
        : { 'width': '120px' }
    );
    return fix_element;
  }());
});


// jQuery(function ($) {
//   $(window).scroll(function fix_element() {
//     $('.change-me').attr(
//       $(window).scrollTop() > 35
//         ? { 'src': 'assets/img/1.png' }
//         : { 'src': 'assets/img/1.png' }
//     );
//     return fix_element;
//   }());
// });


