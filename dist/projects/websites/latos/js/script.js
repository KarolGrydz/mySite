/*
* ----------------------------------------------------------------------------------------
Author       : Karol Grydz
Author URL   :www.kg.glogow.pl
Template Name: Latos - Creative Personal Portfolio Template
Version      : 1.0

* ----------------------------------------------------------------------------------------
*/

(function ($) {
	'use strict';

	jQuery(document).ready( function() {

		/*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function () {
            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH-SCROLL
         * ----------------------------------------------------------------------------------------
         */

         $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

         /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND JS
         * ----------------------------------------------------------------------------------------
         */

        var headertopoption = $(window);
        var headTop = $('.header-navigation');

        headertopoption.on('scroll', function () {
            if (headertopoption.scrollTop() > 200) {
                headTop.addClass('menu-bg');
            } else {
                headTop.removeClass('menu-bg');
            }
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

         /*
         * ----------------------------------------------------------------------------------------
         *  PARTICLES JS
         * ----------------------------------------------------------------------------------------
         */

         particlesJS.load('particles-js', 'js/particles.json', function() {
            console.log('callback - particles.js config loaded');
            });

         /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFPOPUP JS
         * ----------------------------------------------------------------------------------------
         */

         var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();

        /*
         * ----------------------------------------------------------------------------------------
         *  MIXITUP JS
         * ----------------------------------------------------------------------------------------
         */

         $('.work-inner').mixItUp();

         /*
         * ----------------------------------------------------------------------------------------
         *  OWL-CAROUSEL JS FOR LOGO
         * ----------------------------------------------------------------------------------------
         */

         $(".company-logo-list").owlCarousel({
            items:5,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            navigation: false,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [980, 4],
            itemsTablet: [768, 3],
            itemsTabletSmall: false,
            itemsMobile: [479, 2],
            pagination: false,
            autoHeight: true,
         });

         /*
         * ----------------------------------------------------------------------------------------
         *  OWL-CAROUSEL JS FOR TESTIMONIAL
         * ----------------------------------------------------------------------------------------
         */

         $(".testimonial-area-list").owlCarousel({
             rtl:true,
             loop:true,
             margin:10,
             nav:true,
             autoplay:true,
             autoplayTimeout:2000,
             autoplayHoverPause:true,
             responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
         })

        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */

         new WOW().init();
         
	});
})(jQuery);