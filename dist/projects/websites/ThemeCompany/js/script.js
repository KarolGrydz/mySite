/*
* ----------------------------------------------------------------------------------------
Author       : Karol Grydz
Author URL   : www.kg.glogow.pl
Template Name: Theme Company
Version      : 1.0

* ----------------------------------------------------------------------------------------
*/

		/*
         * ----------------------------------------------------------------------------------------
         *  GOOGLE MAPS must be here, before IIFM!!!
         * ----------------------------------------------------------------------------------------
         */	

function initMap() {
         	var options = {
         		zoom: 12,
         		center:{lat: 51.66361, lng: 16.0845}
         	}

         	var map = new google.maps.Map(document.getElementById('map'), options);

            var marker = new google.maps.Marker({
                position: {lat: 51.66361, lng: 16.0845},
                map:map
            });
	}

(function($) {
	'use sctrict';

	jQuery(document).ready( function() {

		/*
         * ----------------------------------------------------------------------------------------
         *  SMOTH-SCROLL
         * ----------------------------------------------------------------------------------------
         */	

         $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  			if (this.hash !== "") {
    			event.preventDefault();
    			var hash = this.hash;

    			$('html, body').animate({ scrollTop: $(hash).offset().top }, 900, function(){
      				window.location.hash = hash;
      			});
    		}
  		});

	})
})(jQuery);
