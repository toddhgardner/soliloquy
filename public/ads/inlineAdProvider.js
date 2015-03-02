window.INLINE_ADS = function (options) {

  var container = $(options.container);
  var interval = setInterval(function () {
    if (container.outerHeight() > options.frequency) {
      clearInterval(interval);
      var count = weaveAds();
      if (_.isFunction(options.done)) {
        options.done(count);
      }
    }
  }, 100);

  function weaveAds() {
    var height = 0;
    var count = 0;
    container.children().each(function (i, el) {
      height += el.offsetHeight;
      if (height > options.frequency) {
        $(el).after("<div class='INLINE_AD'><a href='#'>"+getAdContent(el.offsetWidth)+"</a></div>");
        height = 0;
        count++;
      }
    });
    $(".INLINE_AD img").css({
      margin: "10px 0"
    });
    $(".INLINE_AD div").css({
      position: "relative",
      top: "30px",
      textAlign: "center",
      height: "0",
      fontSize: "44px",
      fontWeight: "bold",
      color: "red"

    });

    return count;
  }

  var ads = [
    {
      imageUrl: "http://placekitten.com/g/%WIDTH%/200",
      text: "Please pet me"
    },
    {
      imageUrl: "http://place-hoff.com/%WIDTH%/200",
      text: "Quit Hassle'n me!"
    },
    {
      imageUrl: "http://placebear.com/g/%WIDTH%/200",
      text: "I AM A BEAR!"
    },
    {
      imageUrl: "http://baconmockup.com/%WIDTH%/300",
      text: "Eat more bacon"
    },
  ];
  function getAdContent(width) {
    var nwidth = Math.ceil(width / 100) * 100;
    var ad = ads[Math.floor(Math.random() * ads.length)];
    var url = ad.imageUrl.replace("%WIDTH%",nwidth);
    return "<div>"+ad.text+"</div><img src='"+url+"' height='200' width='"+width+"'/>";
  }


};
