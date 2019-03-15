import variables from './variables.js';
import { toggleMenu } from './navbar.js';
import { fetchData, destroyItem } from './getData.js';
import TypeWriter from './letters.js';

//Button for menu
variables.menuBtn.addEventListener('click', toggleMenu);

//Show projects
window.onload = function() {
  if (document.getElementById('work')) {
    fetchData();

    //Show the diffrent items
    variables.allItems.addEventListener('click', () => {
      destroyItem(), fetchData();
    });
    variables.websiteItems.addEventListener('click', () => {
      destroyItem(), fetchData(true, false);
    });
    variables.gameItems.addEventListener('click', () => {
      destroyItem(), fetchData(false, true);
    });
  }
  //Letters
  if (document.querySelector('.txt-type')) {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
};

// ***********TODO****************
// In future add restAPI (React or node.js)
