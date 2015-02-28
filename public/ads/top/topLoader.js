jQuery(function ($) {

  var x = $('body').prepend("<div id='TOP_AD_CONTAINER' style='overflow-x:hidden'></div>");
  var container = $("#TOP_AD_CONTAINER");
  $.ajax({
    method: "GET",
    url: "/ads/top/text.html",
    success: function (text) {
      container.html(text);
      setTimeout(function () {
        container.find(".top-ad-wrap").addClass("reveal");
        setTimeout(function () {
          container.find(".top-ad-wrap").removeClass("reveal");
        }, 10000);
      }, 2000);
    }
  });

});