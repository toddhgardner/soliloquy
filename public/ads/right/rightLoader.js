jQuery(function ($) {

  $('body').append("<div id='RIGHT_AD_CONTAINER'</div>");
  var container = $("#RIGHT_AD_CONTAINER");
  $.ajax({
    method: "GET",
    url: "/ads/right/text.html",
    success: function (text) {
      container.html(text);

      $(window).on("scroll", function () {
        container.find(".right-ad-wrap").css({ top: window.pageYOffset + 50 });
      });

    }
  });

});