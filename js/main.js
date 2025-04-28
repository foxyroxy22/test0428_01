$(document).ready(function () {
  //시작
  AOS.init();
  //데스크탑 depth2
  $(".gnb > li").hover(function () {
    $(this).children(".depth2").stop().slideToggle();
  });

  //모바일 메뉴 동작
  $(".ham").click(function () {
    $(".mgnb-wrap").animate({
      right: "0",
    });
  });
  $(".mgnb-close").click(function () {
    $(".mgnb-wrap").animate({
      right: "-100%",
    });
  });

  //모바일 depth2
  $(".mgnb > li").click(function () {
    if ($(this).children(".depth2").css("display") == "none") {
      $(this).children(".depth2").slideDown();
      $(this).siblings().children(".depth2").slideUp();
    } else {
      $(this).children(".depth2").slideUp();
    }
  });

  const banner_list = new Swiper(".banner-list", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
  });

  const prd_list = new Swiper(".prd-list", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 4.5,
      },
    },
  });
}); //끝
