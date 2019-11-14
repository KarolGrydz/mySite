import {
  menuBtn,
  websiteItems,
  gameItems,
  allItems,
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
const data = getData();
const arrData = [];
const arrGames = [];
const arrWebsites = [];

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
    document.querySelector('#work').appendChild(createPreload());
    const preload = document.querySelector('.preload');
    preload.classList.add('show-preloader');
    let iso = new Isotope(projects);
    setTimeout(() => {
      data.then(res => {
        res.websites.forEach(elem => {
          projects.appendChild(createItem(elem, 'website'));
        }),
          res.games.forEach(elem => {
            projects.appendChild(createItem(elem, 'game'));
          });
        const items = projects.querySelectorAll('div.item');
        iso.insert(items);
      });
      preload.classList.remove('show-preloader');
    }, 2000);
    // fetchData();
    console.log(arrData);
    //Show the diffrent items
    allItems.addEventListener('click', e => {
      console.log(iso);
      iso.arrange({ filter: '*' });
    });
    websiteItems.addEventListener('click', () =>
      iso.arrange({ filter: '.website' })
    );
    gameItems.addEventListener('click', () => iso.arrange({ filter: '.game' }));
    console.log(iso);
  }
};

// ***********TODO****************
// In future add restAPI (React or node.js)
