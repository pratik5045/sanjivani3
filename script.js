var swi = new Swiper(".mys", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var sw = new Swiper(".ms", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    autoplay:true
  });