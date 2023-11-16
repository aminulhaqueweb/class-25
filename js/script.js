// ============================================== popular_destination slider=========================
$('.popular_destination_cards').slick({
    slidesToShow: 5,
    slidesToScroll:5,
    autoplay: true,
    autoplaySpeed: 100,
    arrows: false,
    centerMode:true,

  });

  // ============================== travel_counter ==========================
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
});
$('.testimonial_text_slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  arrows: false,

});
var swiper = new Swiper(".destination_card", {
  pagination: {
    el: ".destination_card",
  },
});

