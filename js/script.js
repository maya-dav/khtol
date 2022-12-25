$(window).scroll(function(){

  var scrolling = $(this).scrollTop()

  if(scrolling > 140){
    $(".menu-bg").addClass("bg")
  }else{
    $(".menu-bg").removeClass("bg")
  }
   
})

$('.home_text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  nextArrow:".left",
  prevArrow:".right",
});

$('.slick_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding:"0px",
  vertical: true,
  nextArrow: ".next",
  prevArrow: ".prev",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:"0px",
        // infinite: true,
        // dots: true
      }
    },
  ]
});


$('.rrrrslid').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding:"0px",
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:"0px",
      }
    },
  ]
});
//testimonial part


$('.slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-img',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:"0px",
      }
    },
  ]
});
$('.slider-img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-text',
  vertical:true,
  centerMode: true,
  centerPadding:"0px",
  nextArrow:".up_arrow",
  prevArrow:".down_arrow",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:"0px",
        vertical:false,
      }
    },
  ]

});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});