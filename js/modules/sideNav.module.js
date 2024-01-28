export function openSideNav() {
  $(".side-nav-menu").animate(
    {
      left: 0,
    },
    500
  );

  $(".open-close-icon").removeClass("fa-align-justify");
  $(".open-close-icon").addClass("fa-x");

  for (let i = 0; i < 6; i++) {
    $(".nav-links li")
      .eq(i)
      .animate(
        {
          top: 0,
        },
        (i + 5) * 100
      );
  }
}

export function closeSideNav() {
  let boxWidth = $(".side-nav-menu .nav-tab").outerWidth();
  $(".side-nav-menu").animate(
    {
      left: -boxWidth,
    },
    500
  );

  $(".open-close-icon").addClass("fa-align-justify");
  $(".open-close-icon").removeClass("fa-x");

  $(".nav-links li").animate(
    {
      top: 400,
    },
    500
  );
}

export function sideNav() {
  $(".side-nav-menu i.open-close-icon").on("click", () => {
    if ($(".side-nav-menu").css("left") == "0px") {
      closeSideNav();
    } else {
      openSideNav();
    }
  });
}
