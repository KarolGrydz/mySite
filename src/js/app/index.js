import {
  menuBtn,
  websiteItems,
  gameItems,
  allItems,
  jsItems,
  reactItems,
  angularItems,
  wpItems,
  projects
} from '../constants/variables';
import { toggleMenu } from '../utils/navbar.js';
import { getData } from '../services/getData.js';
import TypeWriter from '../utils/letters.js';
import { createItem } from '../utils/work.js';
import { createPreload } from '../utils/preload';
import Isotope from 'isotope-layout';

//Button for menu
menuBtn.addEventListener('click', toggleMenu);

//Show projects
window.onload = () => {
  //Letters
  if (document.querySelector('.txt-type')) {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

  // Projects API
  if (document.getElementById('work')) {
    //Preloader
    document.getElementById('work').style.visibility = 'hidden';
    document.querySelector('#work').appendChild(createPreload());
    const preload = document.querySelector('.preload');
    preload.classList.add('show-preloader');

    //Get data
    const data = getData();

    //Create shuffle
    const iso = new Isotope(projects);

    setTimeout(() => {
      data.then(res => {
        res.projects.forEach(elem => projects.appendChild(createItem(elem)));

        const items = projects.querySelectorAll('div.item');
        iso.insert(items);
      });
      document.getElementById('work').style.visibility = 'visible';
      preload.classList.remove('show-preloader');
    }, 2000);

    //Show the diffrent items
    allItems.addEventListener('click', () => iso.arrange({ filter: '*' }));
    websiteItems.addEventListener('click', () =>
      iso.arrange({ filter: '.website' })
    );
    gameItems.addEventListener('click', () => iso.arrange({ filter: '.game' }));
    jsItems.addEventListener('click', () =>
      iso.arrange({ filter: '.javascript' })
    );
    reactItems.addEventListener('click', () =>
      iso.arrange({ filter: '.react' })
    );
    angularItems.addEventListener('click', () =>
      iso.arrange({ filter: '.angular' })
    );
    wpItems.addEventListener('click', () =>
      iso.arrange({ filter: '.wordpress' })
    );
  }
};
