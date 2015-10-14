$(document).ready(function() {

        		$('.profile-img').fadeIn(1500);
        		$('.profile-caption').fadeIn(3000);

        		$("#about-button").click(function() {
        			$('html, body').scrollTo(document.getElementById('About-Me'), 1000);
				});

				$("#experience-button").click(function() {
        			$('html, body').scrollTo(document.getElementById('experience'), 1000);
				});

				$("#skills-button").click(function() {
        			$('html, body').scrollTo(document.getElementById('skills'), 1000);
				});

				$("#contact-button").click(function() {
        			$('html, body').scrollTo(document.getElementById('contact'), 1000);
				});

				$("#landing-button").click(function() {
        			$('html, body').scrollTo(document.getElementById('landing-banner'), 1000);
				});

				$("#git-icon").click(function() {
					window.open('http://www.google.ie', '_blank');	
				})

				$('.lazy').slick({
  					lazyLoad: 'ondemand',
					slidesToShow: 3,
					slidesToScroll: 1
				});
        	});

        	$(".git-icon").on("click", function() {
        		window.open('www.google.ie', '_blank');
        	});