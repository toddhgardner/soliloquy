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
      margin: "10px 0",
      width: "100%"
    });
    $(".INLINE_AD div").css({
      position: "relative",
      top: "30px",
      textAlign: "center",
      height: "0",
      fontSize: "44px",
      fontWeight: "bold",
      color: "magenta"
    });

    return count;
  }

  var ads = [
    {
      imageUrl: "http://localhost:3000/img/cat200.jpeg",
      text: "Please pet me"
    },
    {
      imageUrl: "http://localhost:3000/img/dundee200.png",
      text: "G'Day Mate!"
    },
    {
      imageUrl: "http://localhost:3000/img/bear200.jpeg",
      text: "I AM A BEAR!"
    },
    {
      imageUrl: "http://localhost:3000/img/bacon200.jpg",
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
