$(document).ready(function() {

	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();

			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 700);
		}
	});

	$(window).on('load', function() {
		setTimeout(function() {
			$(window).scrollTop(0);
		});
	});
});
