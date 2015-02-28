jQuery(function () {

  var statusList = $("#statuses");
  statusList.on("change", function () {

    var def = 0;
    statusList.find("li").each(function (index, el) {
      def = def + el.offsetHeight;
      if (def >= 150) {
        $(el).after("<div>an add</div>");
        def = 0;
      }
      console.log(arguments);
    });

  });

});