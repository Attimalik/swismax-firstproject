$(document).ready(function () {
    $('.slider-div').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<span class="prev-arrow"><i class="bi bi-chevron-left"></i></span>',
      nextArrow:
        '<span class="next-arrow"><i class="bi bi-chevron-right"></i></span>',
  
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          },
        },
      ],
    });
  });
  