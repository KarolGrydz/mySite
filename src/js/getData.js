import { createItem } from "./work.js";
import variables from "./variables.js";
//Get data
function fetchData(w = true, g = true) {
	let arr = variables.arrWork;
	fetch('projects.json')
	.then((res) => res.json())
	.then((data) => {

		w ? data.websites.forEach( (websites) => { createItem(websites, arr) }) : null;
		g ? data.games.forEach( (games) => { createItem(games, arr) }) : null;

		arr.forEach( elem => variables.projects.appendChild(elem) );
	})
	.catch(err => console.log(err));

	arr = [];
}

function destroyItem () {
	let item = document.querySelectorAll('.item');
	item.forEach( (e) => e.remove() );
}

export { fetchData, destroyItem };