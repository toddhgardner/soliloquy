jQuery(function ($) {

  var defaults = {
    key: "",
    container: "",
    count: 10,
    refresh: 1000,
    onRefresh: function () {}
  };

  var options = _.extend({}, defaults, window.SIDEBAR_ADS);

  var container = $(options.container);
  var i;

  for (i=0; i<options.count; i++) {
    (function sidebarAdLoopClosure () {
      container.append("<div id='SIDEBAR_ADS_"+i+"'></div>");
      var adContainer = container.find("#SIDEBAR_ADS_"+i+"");
      var ad = getRandomAds();
      placeAd(ad, adContainer);
      setInterval(function () {
        adContainer.html("");
        var ad = getRandomAds();
        placeAd(ad, adContainer);
        if (_.isFunction(options.onRefresh)) {
          options.onRefresh();
        }
      }, options.refresh);
    })();
    setTimeout(function () {
      throw new Error("Zero Impact Error");
    });
  }

  function placeAd(ad, el) {
    $.ajax({
      method: "GET",
      url: ad.url,
      success: function placeAdSuccess(text) {
        el.append(text);
        el.find("a").on("click", function () {
          // todo find something interesting
          console.info("ad was clicked");
        });
      }
    });
  }


  function getRandomAds() {
    var ads = [
      {
        url: "/ads/right/ad1.html"
      },
      {
        url: "/ads/right/ad2.html"
      },
      {
        url: "/ads/right/ad3.html"
      }
    ];
    return ads[Math.floor(Math.random() * ads.length)];
  }

});