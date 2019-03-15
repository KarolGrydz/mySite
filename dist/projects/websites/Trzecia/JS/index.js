//Global variables
var rwdForGames = $('.games').width();
var projectsHided = true;
var gamesHided = true;
var contactHided = true;

function smoothScrolling() {
	//Smooth scroling
	$('a[href*="#"]:not([href="#"])').click(function() {
  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    	var target = $(this.hash);
    		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    		if (target.length) {
     	 		$('html, body').animate({
    	    	scrollTop: target.offset().top
    	  		}, 1000);
    	  		return false;
    		}
  		}
	});	
}

function navBar() {
	$('.nav').smartmenus({
    	showFunction: function($ul, complete) {
      		$ul.slideDown(250, complete);
   	 	},
    	hideFunction: function($ul, complete) {
    	 	$ul.slideUp(250, complete); 
    	}
 	});
}

function showingTitleProject() {
	$('#projects').mousemove(function() {
		$('.title_project').show().textillate({ in: {effect: 'fadeInUp', delay: '200' } });
			$('.first_img').show().addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {	//first animation
				$('.second_img').show().addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {	//second animation
					$('.third_img').show().addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
						$('.fourth_img').show().addClass('animated fadeInUp');
					});	//third animation
				});	//end of second animation
			});	//end of first animation
		})
}

function showingGames() {
	$(' #games ').mousemove(function() {
		$('.title_games').textillate({ initialDelay: 500, in: { effect: 'fadeIn', delay: '100', shuffle: 'true' } });
		$('.prolog').show().textillate({ in: {effect: 'fadeIn', delay: '15', shuffle: 'true' } });
		$('.first_game_1, .first_game_2, .first_game_3, .first_game_4').textillate({ in: {effect: 'fadeIn', delay: '15', shuffle: 'true' } });
		$('.second_game_1, .second_game_2, .second_game_3, .second_game_4, .second_game_5').textillate({ in: {effect: 'fadeIn', delay: '15', shuffle: 'true' } });
		$('.first_game').show().addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.second_game').show().addClass('animated flash'); 
		});
	});
	(rwdForGames > 768) ? $('.prolog_text_game').show() : $('.prolog_phones, .text_for_phones').show();
}

function showingContact() {
	$(' #contact ').mousemove(function() {
		$('.title_contact').show().textillate({ in: { effect: 'flash', delay: '100' } });
		$('.email, .patreon, .freelancer, .github, .linkedln').show().addClass('animated lightSpeedIn');
	})
}

function startOfPreloader() {
	$(window).load(function() { // czekamy, aż załaduje się cała strona
	$('#status').fadeOut(); // efekt zanikania animowanej grafiki
	$('#preloader').delay(350).fadeOut('slow'); // efekt zanikania warstwy zakrywającej stronę
	$('body').delay(350).css({'overflow':'visible'}); // dopóki nasz div#preloader jest widoczny nie ma możliwości przewijania strony
	$(' .first_img, .second_img, .third_img, .fourth_img, .first_game, .second_game, .title_project, .word_split, .title_contact, .email, .patreon, .freelancer, .github, .linkedln, .prolog_text_game, .first_game_text, .second_game_text, first_game_1, .first_game_2, .first_game_3, .first_game_4, .prolog, .prolog_phones').hide();
	$('.to_animate').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('.word_split').show().addClass('animated fadeInLeft');
		});		
	});
}

function projectsInfo() {
	$('.first_img').hover( function() {
		$('.first_img_text').textillate({ minDisplayTime: 50, in: {effect: 'fadeIn', delayScale: 0.5} });
	});

	$('.second_img').hover( function() {
		$('.second_img_text').textillate({ minDisplayTime: 50, in: {effect: 'fadeIn', delayScale: 0.5} });
	});

	$('.third_img').hover( function() {
		$('.third_img_text').textillate({ minDisplayTime: 50, in: {effect: 'fadeIn', delayScale: 0.5} });
	});

	$('.fourth_img').hover( function() {
		$('.fourth_img_text').textillate({ minDisplayTime: 50, in: {effect: 'fadeIn', delayScale: 0.5} });
	});
}

function gamesInfo() {
	$('.first_game').mouseenter( function() {
			$('.prolog_text_game').hide();
			$('.second_game_text').hide();
			$('.first_game_text').show();
			$('.first_game_1, .first_game_2, .first_game_3, .first_game_4').show().textillate('start');
		});

		$('.second_game').mouseenter( function() {
			$('.prolog_text_game').hide();
			$('.first_game_text').hide();
			$('.second_game_text').show();
			$('.second_game_1, .second_game_2, .second_game_3, .second_game_4, .second_game_5').show().textillate('start');
		});

		$('.first_game, .second_game').mouseleave( function() {
			$('.first_game_text, .first_game_1, .first_game_2, .first_game_3, .first_game_4').hide();
			$('.second_game_text, .second_game_1, .second_game_2, .second_game_3, .second_game_4, .second_game_5').hide();
			$('.prolog_text_game').show();
			$('.prolog').show().textillate('start');
		});
}

function gamesForPhone() {
	$('.first_game').click( function() {
			document.getElementById("game1").click();
	})
	$('.second_game').click( function() {
			document.getElementById("game2").click();
	})
}

(function($) {
	//start of preload at the begging when site is loading
    startOfPreloader();
    smoothScrolling();
	navBar();
    //for projects
	if (projectsHided) {
		projectsHided = false;
		showingTitleProject();
	}
	// for games
	if (gamesHided) {
		gamesHided = false;
		showingGames();
	}
	//for contact
	if (contactHided) {
		contactHided = false;
		showingContact();
	}
	//Projects info that show on hover
	projectsInfo();
	//Games info that shows on hover
	(rwdForGames > 768) ? gamesInfo() : gamesForPhone(); 
}) (jQuery)

