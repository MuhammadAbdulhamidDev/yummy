export default function preloader() {
  $(function () {
    $(".loading-screen").fadeIn(3000);
    $(".loading-screen").fadeOut(300, function () {
      $("body").css({ overflow: "auto" });
      $("body").animate({ scrollTop: 0 }, 0);
    });
  });
}
