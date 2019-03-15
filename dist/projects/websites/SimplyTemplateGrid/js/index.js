/*
* ----------------------------------------------------------------------------------------
Author       : Karol Grydz
Author URL   : www.kg.glogow.pl
Template Name: Acme Web Solutions
Version      : 1.0

* ----------------------------------------------------------------------------------------
*/

(function() {
	'use strict';

		/*
         * ----------------------------------------------------------------------------------------
         *  SMOTH-SCROLL
         * ----------------------------------------------------------------------------------------
         */

         const button = document.querySelector('.btn');
         //const placeToScroll = button.getAttribute('href');
         //const section = document.querySelector(placeToScroll);

         button.addEventListener('click', goToHref);

         function goToHref() {
            document.querySelector('#section-b').scrollIntoView({ behavior: 'smooth' });
         };
         
              
})();