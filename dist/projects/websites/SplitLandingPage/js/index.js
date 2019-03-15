/*
* ----------------------------------------------------------------------------------------
Author       : Tanvir Rahman Hridoy
Author URL   :www.hridoy.me
Template Name: Latos - Creative Personal Portfolio Template
Version      : 1.0

* ----------------------------------------------------------------------------------------
*/

		/*
         * ----------------------------------------------------------------------------------------
         *  DEFINE VARIABLES
         * ----------------------------------------------------------------------------------------
         */

			const left = document.querySelector('.left');
			const right = document.querySelector('.right');
			const container = document.querySelector('.container');

		/*
		 * ----------------------------------------------------------------------------------------
         *  SLIDE EFFECT
         * ----------------------------------------------------------------------------------------
         */

			left.addEventListener('mouseenter', () =>  container.classList.add('hover-left') );
			left.addEventListener('mouseleave', () =>  container.classList.remove('hover-left') );
			right.addEventListener('mouseenter', () => container.classList.add('hover-right') );
			right.addEventListener('mouseleave', () => container.classList.remove('hover-right') );

			