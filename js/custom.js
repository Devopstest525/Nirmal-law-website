$(".hero-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    dots: false,
    nav: false
  });

$('.testimonial-wrap.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
	autoplayHoverPause: true,
	mouseDrag: true,
    center: false,
	dots: true,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        }
    }
})