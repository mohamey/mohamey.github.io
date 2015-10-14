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
        			$('html, body').scrollTop(1000);
				});
});
