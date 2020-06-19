
		$(document).ready(function() {
			$('.header__slider').slick({
				dots : true,
				slidesToShow: 1,
				infinite: true,
				arrows: false,
				autoplay: true,
  				autoplaySpeed: 3000,
			});

			$('.section-slider').slick({
				dots : true,
				slidesToShow: 3,
				infinite: true,
				arrows: true,
				autoplay: true,
  				autoplaySpeed: 2500,
			});
		})
	