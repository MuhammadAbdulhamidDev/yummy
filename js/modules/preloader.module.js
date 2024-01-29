function outerLoader() {
  // $(function () {
  //   $(".outer-spin").fadeOut(1000, function () {
  //     $(".loading-screen").slideUp(500);
  //     $("body").css({ overflow: "auto" });
  //     $("body").animate({ scrollTop: 0 }, 0);
  //   });
  // });

  $(document).ready(function () {
    $(window).on("load", function () {
      $(".loading-screen").fadeOut("slow");
      $("body").css({ overflow: "auto" });
      $("body").animate({ scrollTop: 0 }, 0);
    });
  });
}

function innerLoader() {
  // $(function () {
  //   $("body").css({ overflow: "auto" });
  //   $("body").animate({ scrollTop: 0 }, 0);
  //   $(".inner-loading-screen").fadeIn(500, function () {
  //     $(".inner-loading-screen").fadeOut(250);
  //   });
  // });
  $(document).ready(function () {
    $(window).on("load", function () {
      $(".inner-loading-screen").fadeIn(500, function () {
        $("body").css({ overflow: "auto" });
        $("body").animate({ scrollTop: 0 }, 0);
        $(".inner-loading-screen").fadeOut(250);
      });
    });
  });
}

export { outerLoader, innerLoader };
