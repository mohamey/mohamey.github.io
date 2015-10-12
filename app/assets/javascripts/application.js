// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery.scrollTo
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap.min

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