import {
  menuBtn,
  menu,
  menuNav,
  menuBranding,
  navItems
} from '../constants/variables';

//Set initial State of Menu
let showMenu = false;

export function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    //Set menu state
    showMenu = false;
  }
}
