import {
  menuBtn,
  websiteItems,
  gameItems,
  allItems,
  projects
} from "../constants/variables";
import { toggleMenu } from "../utils/navbar.js";
import { getData } from "../services/getData.js";
import TypeWriter from "../utils/letters.js";
import { createItem } from "../utils/work.js";
import { createPreload } from "../utils/preload";

//Button for menu
menuBtn.addEventListener("click", toggleMenu);
const data = getData();
const arrData = [];

//Show projects
window.onload = () => {
  //Letters
  if (document.querySelector(".txt-type")) {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
  // Projects API
  if (document.getElementById("work")) {
    projects.appendChild(createPreload());
    const preload = document.querySelector(".preload");
    preload.classList.add("show-preloader");
    // data.then(res => {
    //   res.websites.forEach(elem => {
    //     createItem(elem, arrData);
    //   }),
    //     res.games.forEach(elem => {
    //       createItem(elem, arrData);
    //     });
    //   arrData.forEach(elem => projects.appendChild(elem));
    // });
    // console.log(arrData);
    // fetchData();

    //Show the diffrent items
    allItems.addEventListener("click", () => {});
    websiteItems.addEventListener("click", () => {
      console.log("websites");
    });
    gameItems.addEventListener("click", () => {
      console.log("game");
    });
  }
};

// ***********TODO****************
// In future add restAPI (React or node.js)
