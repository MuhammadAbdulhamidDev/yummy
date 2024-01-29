function outerLoader() {
  $(function () {
    $(".outer-spin").fadeOut(2000, function () {
      $(".loading-screen").slideUp(750);
      $("body").css({ overflow: "auto" });
      $("body").animate({ scrollTop: 0 }, 0);
    });
  });
}

function innerLoader() {
  $(function () {
    $("body").css({ overflow: "auto" });
    $("body").animate({ scrollTop: 0 }, 0);
    $(".inner-loading-screen").fadeIn(1000, function () {
      $(".inner-loading-screen").fadeOut(500);
    });
  });
}

export { outerLoader, innerLoader };
