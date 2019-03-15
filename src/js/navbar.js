import variables from "./variables.js";

//Set initial State of Menu
let showMenu = false;

function toggleMenu() {
	if (!showMenu) {
		variables.menuBtn.classList.add('close');
		variables.menu.classList.add('show');
		variables.menuNav.classList.add('show');
		variables.menuBranding.classList.add('show');
		variables.navItems.forEach(item => item.classList.add('show'));

		//Set menu state
		showMenu = true;
	} else {
		variables.menuBtn.classList.remove('close');
		variables.menu.classList.remove('show');
		variables.menuNav.classList.remove('show');
		variables.menuBranding.classList.remove('show');
		variables.navItems.forEach(item => item.classList.remove('show'));

		//Set menu state
		showMenu = false;
	}
}

export { toggleMenu };