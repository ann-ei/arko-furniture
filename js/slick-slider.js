window.addEventListener("resize", function() {
  if (window.innerWidth <= 768) {
    $('.slider').slick('unslick');
    sliderIsLive = false;
  }
  else {
    if (sliderIsLive) {
      $('.slider').slick();
      sliderIsLive = true;
    }
  }
});

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		autoplay:true,
		speed: 500,
		responsive: [
          {
            breakpoint: 1439,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            
              settings: "unslick",
            
          }
        ]
		
	});
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});